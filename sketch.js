let plat;
let hero;

function setup(){
	createCanvas(400,400);
	let x_ = 100;
	let y_ = 100;
	let width = 150;
	plat = new Platform(x_, y_, width);
	let x = 10;
	let y = 40;
	let xv = 0;
	let yv = 0;
	hero = new Hero(x, y, xv, yv);
}

function draw(){
	plat.show();
	hero.show();
	hero.move();
}

class Hero{
	constructor(x, y, xv, yv){
		this.x = x;
		this.y = y;
		this.xvelocity = xv;
		this.yvelocity = yv;
		this.height = 35;
		this.width = 20;
	}
	
	show() {
		stroke(255);
		strokeWeight(4);
		fill(0);
		ellipse(this.x, this.y, this.width, this.height);
	}
	
	move(){
		if(keyIsDown(LEFT_ARROW)){
			this.x -= 5;
		}
		if(keyIsDown(RIGHT_ARROW)){
			this.x += 5;
		}
		if(keyIsDown(UP_ARROW)){
			this.y -= 5;
		}
		if(keyIsDown(DOWN_ARROW)){
			this.y += 5;
		}
	}
}

class Platform{
	constructor(x_, y_, width){
		this.x = x_;
		this.y = y_;
		this.width = width;
		this.height = 20;
	}
	
	show() {
		stroke(255);
		strokeWeight(4);
		fill(155);
		rect(this.x, this.y, this.width, this.height);
	}
}
