function Piece(color, type, x, y, captured, hasMoved) {
    "use strict";
    this.color = color;
    this.type = type;
    this.x = x;
    this.y = y;
    this.captured = captured;
    this.hasMoved = hasMoved;
}
Piece.prototype.movePiece = function movePiece(x, y) {
    "use strict";
    /*global alert */
    alert("you moved me to " + x + ", " + y + "!");
};
var whitePawn1  =  new Piece("white", "pawn", 0, 1, false, false);
var blackBishop1  =  new Piece("black", "bishop", 8, 3, false, false);
