export function startKeepAlive(port: number | string = 3001): void {
  const url = `http://localhost:${port}/`;
  setInterval(async () => {
    try {
      await fetch(url);
    } catch (_) {}
  }, 5 * 60 * 1000);
}
