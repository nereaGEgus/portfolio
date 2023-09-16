var s = function(p){
  // this class describes the properties of a single particle.
  class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
    constructor(){
      this.x = random(0,width);
      this.y = random(0,height);
      this.r = random(1,8);
      this.xSpeed = random(-3,3);
      this.ySpeed = random(-1,1.5);
    }

  // creation of a particle.
    createParticle() {
      noStroke();
      fill('rgba(200,169,169,0.9)');
      circle(this.x,this.y,this.r);
    }

  // setting the particle in motion.
    moveParticle() {
      if(this.x < 0 || this.x > width)
        this.xSpeed*=-1;
      if(this.y < 0 || this.y > height)
        this.ySpeed*=-1;
      this.x+=this.xSpeed;
      this.y+=this.ySpeed;
    }
  //move particle with mouse
    attract(x,y) {
      const dx = x - this.x;
      const dy = y - this.y;
      const distance = Math.sqrt(dx**2 + dy**2);
      this.x += dx / distance;
      this.y += dy / distance;   
    }
    
    
  // this function creates the connections(lines)
  // between particles which are less than a certain distance apart
    joinParticles(particles) {
      particles.forEach(element =>{
        let dis = dist(this.x,this.y,element.x,element.y);
        if(dis<50) {
          stroke('rgba(255,255,255,0.09)');
          line(this.x,this.y,element.x,element.y);
        }
      });
    }
  }

  // an array to add multiple particles
  let prtls = [];

  function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("home-back");
    for(let i = 0;i<width/4;i++){
      prtls.push(new Particle());
    }
  }

  function draw() {
    background('#0f0f0f');
    for(let i = 0;i<prtls.length;i++) {
      prtls[i].createParticle();
      prtls[i].moveParticle();
      prtls[i].attract(mouseX,mouseY);
      prtls[i].joinParticles(prtls.slice(i));
    }
  } 
}

var myp5 = new p5(s, 'constellations');

var t = function(p){
  var img;

  function preload() {
    img = loadImage("./photoPixels/nerea4cp.png");
  }

  function setup() {
    const canvas = createCanvas((1000) , (500));
    canvas.parent("home-about");
    noLoop();
  }

  function draw() {
    //image(img, 0, 0);
    
    img.loadPixels();
    
    for (var y=0; y<img.height; y+=10)
    {
      for (var x=0; x<img.width; x+=10)
      {
        // Simple but slow
        //var pix = img.get(x, y);
        // Fast but complicated
        var pix = img.pixels[(y*img.width+x)*4];
        fill(pix);
        noStroke();
        ellipse(x, y, 6, 6);
      }
    }
  }
}

var myp5 = new p5(t, 'pixels');