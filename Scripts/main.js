// shim layer with setTimeout fallback
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var canvas;
var device;
var meshes = [];
var lights = [];

var showWires = false;
var showFaces = true;
var drawNormals = false;
var wireOffset = 0.0000035;

var rotSpeed = 0.1 * Math.PI*2;  // In rotations per second, " * " converts from rad to rot

// r,g,b,a are from 0 to 255
var clear = new BABYLON.Color4(0, 0, 0, 0);
var white = new BABYLON.Color4(255, 255, 255, 255);
var black = new BABYLON.Color4(0, 0, 0, 255);
var red = new BABYLON.Color4(255, 0, 0, 255);
var orange = new BABYLON.Color4(255, 150, 0, 255);
var yellow = new BABYLON.Color4(255, 235, 40, 255);
var green = new BABYLON.Color4(0, 255, 0, 255);
var blue = new BABYLON.Color4(0, 0, 255, 255);
var indigo = new BABYLON.Color4(140, 30, 255, 255);
var synthPink = new BABYLON.Color4(242, 34, 255, 255);
var synthMagenta = new BABYLON.Color4(255, 41, 117, 255);
var sunny = new BABYLON.Color4(255, 252, 211, 255);
var grassGreen = new BABYLON.Color4(67, 155, 29, 255);
var lightGray = new BABYLON.Color4(220, 220, 220, 255);
var topsoilBrown = new BABYLON.Color4(124, 84, 28, 255);

var cam;
var cameraSpeed = 10;
var camRotSpeed = 0.002;
var cameraFOV = 70 * Math.PI / 180;

var ambientLevel = 0.1;
var directional = "directional";
var point = "point";
var spot = "spot";

var delta; // Time, in SECONDS, since last frame.
var lastCalledTime;
var timer = 0;
var fps;
var fpsTimer = 0;

var cycles = 0;
var frameCount = 0;
var smoothFps;
var renderInProgress = false;

document.addEventListener("DOMContentLoaded", init, false);


function init() {
    canvas = document.getElementById("frontBuffer");
    cam = new SoftEngine.Camera();
    device = new SoftEngine.Device(canvas);

    var placeholderScene = new SoftEngine.Mesh("Scene Placeholder", 0, 0, black, null, 0);
    meshes.push(placeholderScene);

    cam.Position = new BABYLON.Vector3(0, 0, 0);
    cam.Rotation = new BABYLON.Vector3(0, 0, 0);
    cam.Target = new BABYLON.Vector3(0, 0, -1);


    setup();
    
    var updateLoop = setInterval(renderLoop, 10);
}

function renderLoop() {

    if (renderInProgress == false) {
        cycles += 1;

        if (!lastCalledTime) {
            lastCalledTime = Date.now();
            fps = 0;
            return;
        }

        delta = (Date.now() - lastCalledTime) / 1000;

        //fps = 1 / delta;
        //document.getElementById("timerStat").innerHTML = "Time: " + timer.toFixed(3);


        // runs the project-specific loop code
        loop();
		
	
        // MAIN DRAWING CALL
        requestAnimationFrame(drawingLoop);


        lastCalledTime = Date.now();
        timer += delta;
        fpsTimer += delta;

        if (fpsTimer >= 1) {
            //document.getElementById("fpsStat").innerHTML = "FPS: " + cycles;
            fpsTimer = 0;
            frameCount = 0;
            cycles = 1;
        }

        //Fill the hierarchy with all objects in the scene
        /*var objectList = "";

        objectList += "Meshes:";
        for (var i = 0; i < meshes.length; i++) {
            objectList += "<li>" + i + ": " + meshes[i].name + "</li>";
        }

        objectList += "<br> Lights:";

        for (var i = 0; i < lights.length; i++) {
            objectList += "<li>" + i + ": " + lights[i].name + "</li>";
        }
        document.getElementById("hierarchy").innerHTML = objectList;*/
    }
}

function drawingLoop() {
    renderInProgress = true;
    device.clear();
    device.render(cam, meshes);
    device.present();
    renderInProgress = false;       
}
