//function to collect the items to the correct Amount box and also opstion to put it back in the world
let dirtCollection = 0;
let grassCollection = 0;
let gravelCollection = 0;
let leavesCollection = 0;
let trunkTreeCollection = 0;
let logCollection = 0;





function setDiv(e) {
  let classList = e.target.classList;
  if (classList.contains("leaves") && currentTool === "Axe") {
    classList.remove("leaves");
    leavesCollection++;
    leaves.textContent = leavesCollection;
  }
  if (classList.contains("trunk_tree") && currentTool === "Axe") {
    classList.remove("trunk_tree");
    trunkTreeCollection++;
    trunk_tree.textContent = trunkTreeCollection;
  }
  if (classList.contains("log") && currentTool === "Axe") {
    classList.remove("log");
    logCollection++;
    log.textContent = logCollection;
  }
  if (classList.contains("gravel") && currentTool === "Pickaxe") {
    classList.remove("gravel");
    gravelCollection++;
    gravel.textContent = gravelCollection;
  }
  if (classList.contains("grass") && currentTool === "Shovel") {
    classList.remove("grass");
    grassCollection++;
    grass.textContent = grassCollection;
  }
  if (classList.contains("dirt") && currentTool === "Shovel") {
    classList.remove("dirt");
    dirtCollection++;
    dirt.textContent = dirtCollection;
  }
  if (
    classList.length === 0 &&
    currentTool === "dirtAmount" &&
    dirtCollection > 0
  ) {
    classList.add("dirt");
    dirtCollection--;
    dirt.textContent = dirtCollection;
  }
  if (
    classList.length === 0 &&
    currentTool === "grassAmount" &&
    grassCollection > 0
  ) {
    classList.add("grass");
    grassCollection--;
    grass.textContent = grassCollection;
  }
  if (
    classList.length === 0 &&
    currentTool === "gravelAmount" &&
    gravelCollection > 0
  ) {
    classList.add("gravel");
    gravelCollection--;
    gravel.textContent = gravelCollection;
  }
  if (
    classList.length === 0 &&
    currentTool === "trunk_treeAmount" &&
    trunkTreeCollection > 0
  ) {
    classList.add("trunk_tree");
    trunkTreeCollection--;
    trunk_tree.textContent = trunkTreeCollection;
  }
  if (
    classList.length === 0 &&
    currentTool === "logAmount" &&
    logCollection > 0
  ) {
    classList.add("log");
    logCollection--;
    log.textContent = logCollection;
  }
  if (
    classList.length === 0 &&
    currentTool === "leavesAmount" &&
    leavesCollection > 0
  ) {
    classList.add("leaves");
    leavesCollection--;
    leaves.textContent = leavesCollection;
  }
}