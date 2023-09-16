var img;

function preload() {
  img = loadImage("nerea4cp.png");
}

function setup() {
  createCanvas(img.width, img.height);
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