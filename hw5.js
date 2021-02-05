//Homework 5

//Создаем массивы значений
var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
var figuresBlack = ["&#9823;", "&#9820;", "&#9822;", "&#9821;", "&#9818;", "&#9819;", "&#9821;", "&#9822;", "&#9820;"];
var figuresWhite = ["&#9817;", "&#9814;", "&#9816", "&#9815", "	&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;"];

//Создаем медиа
var head = document.querySelector("head");
var style = document.createElement("style");
head.append(style);
style.innerHTML = "@media (min-width: 1024px) {.square {font-size: 550%; padding-top:0%}}\n";
style.innerHTML += "@media (max-width: 1024px) {.square {font-size: 550%; padding-top:0%}}\n";
style.innerHTML += "@media (max-width: 768px) {.square {font-size: 350%; padding-top:1%}}\n";
style.innerHTML += "@media (max-width: 425px) {.square {font-size: 150%;padding-top:3%}} \n";
style.innerHTML += "@media (max-width: 375px) {.square {font-size: 100%; padding-top:4%}}} \n";
//Создаем поле
var body = document.querySelector("body");
var chess = document.createElement("div");
body.insertBefore(chess, body.children[0]);
chess.style.maxWidth = "1000px";
chess.style.margin = "10px auto";
chess.className = "chess";

//Формируем ряды
for (i = 1; i <= 10; i++) {
    var row = document.createElement("div");
    chess.append(row);
    row.className = "row" + i;
    row.style.display = "flex";
    row.style.justifyContent = "center";
    //Формируем ячейки
    for (n = 1; n <= 10; n++) {
        var col = document.createElement("div");
        row.append(col);
        col.style.textAlign = "center";
        col.style.margin = "0";
        //Расставляем цифры
        if (n == 1 && i != 1 && i != 10 || n == 10 && i != 10 && i != 1) {
            col.innerText = (i - 10) * -1;
            col.style.fontWeight = "bold";
            col.style.paddingRight = "15px";
            col.style.margin = "5% auto";
            if (n == 10 && i != 10 && i != 1) {
                col.style.paddingLeft = "15px";
                col.style.transform = "rotate(180deg)"
            }
        }
        //Расставляем буквы
        else if (i == 1 && n != 1 && n != 10 || i == 10 && n != 1 && n != 10) {
            col.innerText = letters[n - 2].toUpperCase();
            col.style.width = "11%";
            col.style.fontWeight = "bold";
            col.style.paddingTop = "15px";

            if (i == 1 && n != 1 && n != 10) {
                col.style.paddingBottom = "15px";
                col.style.transform = "rotate(180deg)"
            }
        }
        else if (n == 1 && i == 1 || n == 10 && i == 10 || n == 1 && i == 10 || i == 1 && n == 10) {
            col.style.backgroundColor = "white";
        }
        //Красим ячейки, расставляем фигуры
        else if (n % 2 == 0 && i % 2 != 0 || i % 2 == 0 && n % 2 != 0) {
            col.className = "square";
            col.style.backgroundColor = "#c9bb1c";
            col.style.width = "11%";
            chessPlase(i);
        }
        else {
            col.className = "square";
            col.style.backgroundColor = "#ffed94";
            col.style.width = "11%";
            chessPlase(i);
        }
    }
}
function chessPlase(i) {
    if (i == 2) {
        col.innerHTML = figuresBlack[n - 1];
    }
    if (i == 3) {
        col.innerHTML = figuresBlack[0];
    }
    if (i == 8) {
        col.innerHTML = figuresWhite[0];
    }
    if (i == 9) {
        col.innerHTML = figuresWhite[n - 1]
    }
}