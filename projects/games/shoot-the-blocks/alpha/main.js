function startGame() {
    //Hàm startGame() gọi đến method start() của đối tượng myGameArea
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        // xác định độ rộng của vùng game
        this.canvas.width = 480;

        // xác định độ cao của vùng game
        this.canvas.height = 270;

        // nội dung bên trong của vùng không gian này là các thứ được vẽ từ đối tượng getContext("2d")
        this.context = this.canvas.getContext("2d");

        //Method start() tạo ra 1 <canvas> và chèn nó như childnode đầu tiên của <body>
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

// khai báo biến cho component
var myGamePiece;

function startGame() {

    //Hàm startGame() gọi đến method start() của đối tượng myGameArea
    myGameArea.start();

    // khởi tạo component và set giá trị cho (độ rộng, chiều cao, màu, hoành độ x (khoảng cách của component tới biên trái của vùng game), tung độ y (khoảng cách của component tới biên phía trên của vùng game))

    // gọi tới hàm component bên dưới và gán giá trị cho các thuộc tính bằng các đối số truyền vào
    myGamePiece = new component(30, 30, "red", 10, 120);
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
