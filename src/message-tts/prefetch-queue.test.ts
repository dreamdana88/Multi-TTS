import { describe, expect, it } from 'vitest';
import { runWithConcurrency } from './prefetch-queue';

describe('runWithConcurrency', () => {
  it('runs all tasks and does nothing for an empty list', async () => {
    const seen: number[] = [];
    await runWithConcurrency(
      [0, 1, 2].map((value) => async () => {
        seen.push(value);
      }),
      2,
    );
    expect(seen.sort()).toEqual([0, 1, 2]);
    await expect(runWithConcurrency([], 3)).resolves.toBeUndefined();
  });

  it('does not start more workers than the limit', async () => {
    let running = 0;
    let max_running = 0;
    const tasks = Array.from({ length: 6 }, () => async () => {
      running += 1;
      max_running = Math.max(max_running, running);
      await Promise.resolve();
      running -= 1;
    });

    await runWithConcurrency(tasks, 2);
    expect(max_running).toBeLessThanOrEqual(2);
  });

  it('rejects when a task throws and later tasks of that worker are skipped', async () => {
    const seen: string[] = [];
    await expect(
      runWithConcurrency(
        [
          async () => {
            seen.push('ok');
          },
          async () => {
            throw new Error('prefetch failed');
          },
          async () => {
            seen.push('after-error');
          },
        ],
        1,
      ),
    ).rejects.toThrow('prefetch failed');
    expect(seen).toEqual(['ok']);
  });
});
