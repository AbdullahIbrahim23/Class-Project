let plat;
let hero;
let score = 30;

function setup(){
	bg = loadImage("http://differenttruths.com/wp-content/uploads/2017/04/xElephant-4214115-720x400.jpg.pagespeed.ic.dn3ZO0Snp0.jpg");
	createCanvas(720,400);
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
	background(bg);
	text("Score: "+score, 0, 10)
	plat.show();
	hero.show();
	hero.move();
	hero.bottom();
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
		if(plat.contains(this.x, this.y) == false){
			this.y++;
		}
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
	
	bottom(){
		if(this.y > height){
			this.y = 0;
			score--;
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
	
	contains(givenX, givenY){ 
		if(givenX > this.x && givenX < this.x+this.width && givenY > this.y && givenY < this.y+this.height){
			return true;
		}
		return false;
	}
}
