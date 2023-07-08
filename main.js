x_nose=0
y_nose=0

function preload(){
nose_img=loadImage("Mustache.png")
}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()

    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    Pose=ml5.poseNet(video,modelWorking)
    Pose.on('pose',identify)
}

function draw(){
    image(video,0,0,300,300)

    //fill("orange")
   //stroke(48,96,144)
    //circle(x_nose,y_nose,30)

    image(nose_img,x_nose-12,y_nose,30,30)
}

function modelWorking(){
    console.log("Model is ready to use. It is nice and beautiful. ")
}

function identify(results){
    if (results.length>0){
        console.log(results)
        x_nose=results[0].pose.nose.x
        y_nose=results[0].pose.nose.y
    }    
   
}

function take_snapshot(){
    save('My_Selfiee.png');
}