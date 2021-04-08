createBoard();

function createBoard() {
    for (var row = 0; row < 8; row++) {
        for (var column = 0; column < 8; column++) {
            var isLightSquare = (column + row) % 2 != 0;

            //true = white
            //false = black
            var squareColour = (isLightSquare) ? true : false;

            var box = document.createElement("div");
            box.style.width = "100px";
            box.style.height = "100px";
            box.style.float = "left";
            //Add square coordinate and hover color
            box.classList.add(column, row, "box");

            //Add square color
            if (squareColour) {
                box.classList.add("blackBox");
            } else {
                box.classList.add("whitekBox");
            }

            //Add the pieces
            if ((column == 0 && row == 0) || (column == 7 && row == 0)) {
                var piece = document.createTextNode("R");
                box.appendChild(piece);
            } else if ((column == 1 && row == 0) || (column == 6 && row == 0)) {
                var piece = document.createTextNode("Kn");
                box.appendChild(piece);
            } else if ((column == 2 && row == 0) || (column == 5 && row == 0)) {
                var piece = document.createTextNode("B");
                box.appendChild(piece);
            } else if (column == 3 && row == 0) {
                var piece = document.createTextNode("Q");
                box.appendChild(piece);
            } else if (column == 4 && row == 0) {
                var piece = document.createTextNode("K");
                box.appendChild(piece);
            } else if (row == 1) {
                var piece = document.createTextNode("P");
                box.appendChild(piece);
            }

            var element = document.getElementById("chessBoard");
            element.appendChild(box);
        }
    }
}