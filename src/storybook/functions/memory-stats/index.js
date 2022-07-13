import MemoryStats from "./memory-stats-lib";

let stats = null;

export function startMemoryStats() {
  if (!stats) {
    stats = new MemoryStats();

    stats.domElement.style.position = "fixed";
    stats.domElement.style.right = "0px";
    stats.domElement.style.bottom = "0px";

    document.body.appendChild(stats.domElement);

    requestAnimationFrame(function rAFloop() {
      if (!stats) {
        return;
      }
      stats.update();
      requestAnimationFrame(rAFloop);
    });
  }
}

export function stopMemoryStats() {
  if (stats) {
    stats.domElement.remove();
    stats = null;
  }
}
