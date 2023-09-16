var img;

function preload() {
  img = loadImage("./photoPixels/nerea4cp.png");
}

function setup() {
  const canvas = createCanvas(img.width3/2, img.height/2);
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
