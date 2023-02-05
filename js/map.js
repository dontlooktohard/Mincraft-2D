
const mainGame = document.querySelector(".main-game");
function fillEmptyDiv(rowStart, rowEnd, columnStart, columnEnd) {
    let emptyDive;
    for (let row = rowStart; row <= rowEnd; row++) {
      for (let column = columnStart; column <= columnEnd; ++column) {
        const newDiv = document.createElement("div");
        newDiv.style.gridRowStart = row;
        newDiv.style.gridColumnStart = column;
        mainGame.appendChild(newDiv);
        emptyDive = newDiv;
        newDiv.addEventListener("click", function (e) {
          setDiv(e);
          console.log(e.target);
        });
      }
    }
  }
  fillEmptyDiv(1, 22, 1, 22);


function createMap(type, rowStart, rowEnd, columnStart, columnEnd) {
    for (let row = rowStart; row <= rowEnd; row++) {
      for (let column = columnStart; column <= columnEnd; ++column) {
        const materialElement = document.createElement("div");
        materialElement.style.gridRowStart = row;
        materialElement.style.gridColumnStart = column;
        materialElement.classList.add(`${type}`);
        mainGame.appendChild(materialElement);
        materialElement.addEventListener("click", function (e) {
          setDiv(e);
          console.log(e);
        });
      }
    }
  }


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

