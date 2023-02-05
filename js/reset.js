startAgain.addEventListener("click", restart);

function restart() {
  dirtCollection = 0;
  grassCollection = 0;
  gravelCollection = 0;
  leavesCollection = 0;
  trunkTreeCollection = 0;
  logCollection = 0;
  leaves.textContent = leavesCollection;
  trunk_tree.textContent = trunkTreeCollection;
  flowers.textContent = flowersCollection;
  gravel.textContent = gravelCollection;
  grass.textContent = grassCollection;
  dirt.textContent = dirtCollection;
  mainGame.innerHTML = "";
  fillEmptyDiv(1, 22, 1, 22);
  createMap("dirt", 16, 21, 1, 21);
  createMap("grass", 15, 15, 1, 21);
  createMap("gravel", 12, 14, 18, 18);
  createMap("gravel", 13, 14, 3, 3);
  createMap("gravel", 14, 14, 11, 11);
  createMap("trunk_tree", 12, 14, 6, 6);
  createMap("trunk_tree", 12, 14, 15, 15);
  createMap("leaves", 8, 11, 5, 7);
  createMap("leaves", 8, 11, 14, 16);
  createMap("log", 14, 14, 8, 8);
  createMap("log", 14, 14, 16, 16);
  createMap("log", 14, 14, 2, 2);
}
