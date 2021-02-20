
function moveCamera(currCamera, direction, deltaTime) {
    var camPosition = currCamera.Position;
    var camTarget = currCamera.Target;
    var camDirection = camTarget.subtract(camPosition);
    camDirection.normalize();
    var velocity = cameraSpeed * Math.min(0.1, deltaTime);

    var leftVector = new BABYLON.Vector3(-camDirection.z, 0, camDirection.x);
    var rightVector = new BABYLON.Vector3(camDirection.z, 0, -camDirection.x);
    var forwardVector = camDirection;
    var backwardVector = camDirection.negate();

    var currVector;
    switch (direction) {
        case "f":
            currVector = forwardVector.scale(velocity);
            break;
        case "l":
            currVector = leftVector.scale(velocity);
            break;
        case "b":
            currVector = backwardVector.scale(velocity);
            break;
        case "r":
            currVector = rightVector.scale(velocity);
            break;
        case "up":
            currVector = new BABYLON.Vector3(0, 1, 0).scale(velocity);
            break;
        case "down":
            currVector = new BABYLON.Vector3(0, -1, 0).scale(velocity);
            break;
        default:
            currVector = BABYLON.Vector3.Zero;
            break;
    }

    //var deltaX = camDirection.x * velocity + direction.x;
    //var deltaY = camDirection.y * velocity + direction.y;
    //var deltaZ = camDirection.z * velocity + direction.z;

    currCamera.Position = new BABYLON.Vector3(camPosition.x + currVector.x, camPosition.y + currVector.y, camPosition.z + currVector.z);
    currCamera.Target = new BABYLON.Vector3(camTarget.x + currVector.x, camTarget.y + currVector.y, camTarget.z + currVector.z);
}

function rotateCamera(currCamera) {
    var camPosition = currCamera.Position;
    var camRotation = currCamera.Rotation;
    var camTarget = currCamera.Target;
    var camDirection = camTarget.subtract(camPosition);
    //camDirection.normalize();

    var rotationPitchMatrix = BABYLON.Matrix.RotationAxis(new BABYLON.Vector3(-camDirection.z, 0, camDirection.x), deltaRotationX);
    var rotationYawMatrix = BABYLON.Matrix.RotationY(deltaRotationY);
    //var rotationMatrix = BABYLON.Matrix.RotationYawPitchRoll(deltaRotationY, deltaRotationX, deltaRotationZ);
    var camRotVector = BABYLON.Vector3.TransformNormal(camDirection, rotationPitchMatrix.multiply(rotationYawMatrix));

    //document.getElementById("testStat").innerHTML = camRotVector.toString();

    currCamera.Target = camPosition.add(camRotVector);
}

function setupCamera(currCamera, pos, rot){
	currCamera.Position = pos;
    currCamera.Rotation = new BABYLON.Vector3(0, 0, 0);
    currCamera.Target = new BABYLON.Vector3(pos.x, pos.y, pos.z - 1);

    deltaRotationY = rot.y;
    deltaRotationX = rot.x;
    currCamera.Rotation.y += rot.y;
    currCamera.Rotation.x += rot.x;
    rotateCamera(currCamera);
}

function resetCamera(currCamera) {
    currCamera.Position = camInitPos;
    currCamera.Target = new BABYLON.Vector3(camInitPos.x, camInitPos.y, camInitPos.z - 1);
}