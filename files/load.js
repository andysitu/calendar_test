function loadIt() {
  cpu.run();
  ui.run();
  tester();
}

window.addEventListener("load", loadIt);
load = null;