export async function runWithConcurrency<T>(
  tasks: Array<() => Promise<T>>,
  limit: number,
): Promise<void> {
  if (tasks.length === 0) {
    return;
  }

  const worker_count = Math.max(1, Math.min(Math.floor(limit), tasks.length));
  let cursor = 0;

  const workers = Array.from({ length: worker_count }, async () => {
    while (cursor < tasks.length) {
      const task_index = cursor;
      cursor += 1;
      await tasks[task_index]();
    }
  });

  await Promise.all(workers);
}
