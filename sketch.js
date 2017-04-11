function setup() {
	createCanvas( 600, 400 );
	
	background( 40,180,260);
	
}

function draw() {
	if ( mouseIsPressed ) {
		paint( mouseX, mouseY);
	  ellipse(50, 50, 80, 80);
	}
	
	
function paint(x,y){
    fill( 41);
    noStroke(200);
    ellipse(x,y, 80, 80);
}
    
}
	

		
