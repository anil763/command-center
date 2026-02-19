import chokidar from 'chokidar';
import { BRAIN_DIR } from './documents';

let version = 1;
const listeners = new Set<(v: number) => void>();
let started = false;

function notify() {
  version += 1;
  listeners.forEach((listener) => listener(version));
}

export function getVersion() {
  return version;
}

export function startWatcher() {
  if (started) return;
  started = true;

  const watcher = chokidar.watch(BRAIN_DIR, {
    ignoreInitial: true,
    awaitWriteFinish: { stabilityThreshold: 200, pollInterval: 100 },
  });

  watcher.on('add', notify);
  watcher.on('change', notify);
  watcher.on('unlink', notify);
  watcher.on('addDir', notify);
  watcher.on('unlinkDir', notify);
}

export function subscribe(listener: (v: number) => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
