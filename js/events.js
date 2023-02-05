

//events for trash box and tools:

let currentTool = "";


axe.addEventListener("click", function () {
  currentTool = "Axe";
  console.log(currentTool);
});
pickaxe.addEventListener("click", function () {
  currentTool = "Pickaxe";
  console.log(currentTool);
});
shovel.addEventListener("click", function () {
  currentTool = "Shovel";
  console.log(currentTool);
});
dirt.addEventListener("click", function () {
  currentTool = "dirtTrash";
});
grass.addEventListener("click", function () {
  currentTool = "grassTrash";
});
gravel.addEventListener("click", function () {
  currentTool = "gravelTrash";
});
trunk_tree.addEventListener("click", function () {
  currentTool = "trunk_treeTrash";
});
leaves.addEventListener("click", function () {
  currentTool = "leavesTrash";
});



