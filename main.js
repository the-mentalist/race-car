var vy=10;
var py=0;
var width=40;
var height=100;
var gap=20;
(function draw(){
	var w,h;
	var ctx = document.getElementById('stage').getContext('2d');
	w = ctx.canvas.width  = window.innerWidth*0.98;
	h = ctx.canvas.height = window.innerHeight*0.98;
	
	//ctx.fillStyle = '#4f4f4f';
    //ctx.fillRect(w/4, 0, w/2, h);

    var drawRoad = function(y){
    	ctx.fillStyle = 'white';
    	for (var i=0; (i*(gap+height))<h; i++){
    		ctx.fillRect(w/2-width/2, y+i*(gap+height), width, height);
    	}
    	for (i=1; (i*(gap+height))<(h-y); i++){
    		ctx.fillRect(w/2-width/2, y-i*(gap+height), width, height);
    	}
    	//ctx.fillRect(w/2-width/2, py, width, height);
    	//ctx.fillRect(w/2-width/2, py+gap+height, width, height);
    	//ctx.fillRect(w/2-width/2, py+2*(gap+height), width, height);
    }

    var paint = function(){
    	ctx.fillStyle = '#4f4f4f';
    	ctx.fillRect(w/4, 0, w/2, h);
    	py+=vy;
    	drawRoad(py);
    }
    setInterval(paint, 100);
    //paint();
})()