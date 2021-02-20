var prevRotationY = 0;
var prevRotationX = 0;
var prevRotationZ = 0;
var newRotationY = 0;
var newRotationX = 0;
var newRotationZ = 0;
var deltaRotationY = 0;
var deltaRotationX = 0;
var deltaRotationZ = 0;

var camInitPos = new BABYLON.Vector3(8, 8.5, 8);
var camInitRot = new BABYLON.Vector3(-0.65, 0.7854, 0);

var sunLight = new SoftEngine.Light("Sun Light", directional, sunny, 0.8);
sunLight.Direction = new BABYLON.Vector3(0.75, -2, 0.75);
//lights.push(sunLight);

var lightbulb = new SoftEngine.Light("Lightbulb", point, white, 6);
lightbulb.Position = new BABYLON.Vector3(0, 5, 0);
//lights.push(lightbulb);

var blueLight = new SoftEngine.Light("blueLight", point, blue, 3);
blueLight.Position = new BABYLON.Vector3(-10, 3, 0);
lights.push(blueLight);

var redLight = new SoftEngine.Light("redLight", point, red, 3);
redLight.Position = new BABYLON.Vector3(10, 3, 10);
lights.push(redLight);

var greenLight = new SoftEngine.Light("greenLight", point, green, 3);
greenLight.Position = new BABYLON.Vector3(10, 3, -10);
lights.push(greenLight);


function setup() {

	setupCamera(cam, camInitPos, camInitRot);
    /*cam.Position = camInitPos;
    cam.Rotation = new BABYLON.Vector3(0, 0, 0);
    cam.Target = new BABYLON.Vector3(camInitPos.x, camInitPos.y, camInitPos.z - 1);

    deltaRotationY = camInitRot.y;
    deltaRotationX = camInitRot.x;
    cam.Rotation.y += camInitRot.y;
    cam.Rotation.x += camInitRot.x;
    rotateCamera(cam);*/

	// MESH DECLARATIONS

    //var smoothTerrain = newTerrainGridSmooth("Smooth Terrain", 30, 30, 60, 60, 0.07, 2, grassGreen, green, 0);

    //var randTerrain = newTerrainGridRand("Random Terrain", 30, 30, 60, 60, 0.1, white, green, 0);

    //var sinWave = newTerrainGridSin("testTerrain", 30, 30, 90, 90, -0.4, 4, cosOffset, white) // To get cosine wave, use cosOffset variable
    //sinWave.Position = new BABYLON.Vector3(0, 0, 0);

    //var groundPlane = newPlane("Ground Plane", 10, 10, 10, 10, white);

    //var gameCube = newCube("gameCube", 3, indigo, green, 0);
    //gameCube.Position = new BABYLON.Vector3(8, 1.5, 0);


    //var cubeTop = newCube("cubeTop", 1, magenta, green, 0);
    //cubeTop.Position = new BABYLON.Vector3(0, 3, 0);


    // Generate a grid of cubes
    for (var gX = -1; gX <= 1; gX++){
        for (var gY = -1; gY <= 1; gY++) {
            for (var gZ = -1; gZ <= 1; gZ++) {
                var currCube = newCube(gX.toString() + gY.toString() + gZ.toString(), 1, white, green, 0);
                currCube.Position = new BABYLON.Vector3(1.5 * gX, 1.5 * gY, 1.5 * gZ);
            }
        }
    }
}

function loop(){
	/*if (rDown == true) {
        resetCamera(cam);
    }
	
	//checks key and mouse inputs once per frame
        if (wDown == true) {
            moveCamera(cam, "f", delta);
        }
        if (aDown == true) {
            moveCamera(cam, "l", delta);
        }
        if (sDown == true) {
            moveCamera(cam, "b", delta);
        }
        if (dDown == true) {
            moveCamera(cam, "r", delta);
        }
        if (eDown == true) {
            moveCamera(cam, "up", delta);
        }
        if (qDown == true) {
            moveCamera(cam, "down", delta);
        }

        if (middleMouseDown == true) {
            prevRotationY = cam.Rotation.y;//.y - (camRotSpeed * delta);
            prevRotationX = cam.Rotation.x;
            prevRotationZ = cam.Rotation.z;

            cam.Rotation.y += camRotSpeed* m_deltaX; 
            cam.Rotation.x += camRotSpeed* -m_deltaY;
            if (cam.Rotation.x > 1.57) {
                cam.Rotation.x = 1.57;
            }
            if (cam.Rotation.x < -1.57) {
                cam.Rotation.x = -1.57;
            }

            newRotationY = cam.Rotation.y;
            newRotationX = cam.Rotation.x;
            newRotationZ = cam.Rotation.z;

            deltaRotationY = newRotationY - prevRotationY;
            deltaRotationX = newRotationX - prevRotationX;
            deltaRotationZ = newRotationZ - prevRotationZ;

            rotateCamera(cam);
        }*/


		// DO ALL MOVEMENT THINGS HERE
        //lightbulb.Position = new BABYLON.Vector3(12 * Math.cos(timer * 1.1), 12 * Math.cos(timer * 1.1), 12 * Math.sin(timer * 1.3));
        
        blueLight.Position = new BABYLON.Vector3(6 * Math.cos(timer * 1.1), 6 * Math.sin(timer * 0.6), 6 * Math.sin(timer * 1.3));
	
        redLight.Position = new BABYLON.Vector3(6 * Math.sin(timer * 0.8), 6 * Math.cos(timer * 1.2), 6 * Math.cos(timer));
	
        greenLight.Position = new BABYLON.Vector3(6 * -Math.cos(timer * 0.9), 6 * -Math.cos(timer * 1.4), 6 * Math.sin(timer * 0.4));

        //findMesh("gameCube").Position.z = 12 * Math.sin(timer);
}