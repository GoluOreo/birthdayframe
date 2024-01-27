function preload() {
}

function setup() {
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.size(320,300);
    video.hide();
}

function draw() {
    background('skyblue')
    image(video,180,120,320,300);

    fill('midnightblue');
    circle(150,100,100);
    circle(520,100,100);
    circle(150,420,100);
    circle(520,420,100);
}

function take_snapshot() {
    save('filter.png');
}