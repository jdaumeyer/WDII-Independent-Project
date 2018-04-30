function Wall (x, y) {

				this.type = "wall";

				this.x = x;
				this.y = y;
				this.width  = 60;
				this.height = 60;

				this.draw = function() {
					ctx.beginPath();
					ctx.rect(this.x, this.y, this.width, this.height);
					ctx.fillStyle = "#CCCCCC";
					ctx.fill();
					ctx.closePath();	
				};

}
