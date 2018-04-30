function Player (x, y, speed, color) {
	
	this.type = "player";
	this.name = firstNames[Math.floor(Math.random() * firstNames.length)] + " " +
							lastNames[Math.floor(Math.random() * lastNames.length)];
	this.x = x;
	this.y = y;
	this.radius = 30;
	this.speed = speed;
	this.color = color;

	this.moveTo = function(x, y) {
		this.x = x;
		this.y = y;
	};

	/**
	 *	Where dir is a degree to move the player towards
	 *	when dir = 0, the player moves to the right and when dir = 180,
	 *	the player moves to the left. just like a unit circle!
	 */
	this.moveDir = function(dir) {
		var angle = degToRad(dir);
		var newX = this.x + Math.cos(angle) * this.speed;
		var newY = this.y + Math.sin(angle) * this.speed;
		
		for (var i = 0; i < ENTITIES.length; i++) {
			var o = ENTITIES[i];
			if (o.type == "wall") {
				if (newX < o.x + o.width + this.radius &&
				    newX > o.x - this.radius &&
 					  newY < o.y + o.height + this.radius &&
					  newY > o.y - this.radius) {
							 console.log("COLLISION");
   						 newX = this.x;
							 newY = this.y;
						}
			}
		}

		this.x = newX;
		this.y = newY;

	};

	this.draw = function() {
		ctx.beginPath();
		ctx.ellipse(this.x, this.y, this.radius, this.radius, 0, 0, 2 * Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	};
}
