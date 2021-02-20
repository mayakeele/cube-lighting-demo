var wDown = false;
var aDown = false;
var sDown = false;
var dDown = false;
var qDown = false;
var eDown = false;
var rDown = false;

var middleMouseDown = false;
var m_deltaX;
var m_deltaY;

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }

    switch (event.key) {
        case "w":
            wDown = true;
            break;
        case "a":
            aDown = true;
            break;
        case "s":
            sDown = true;
            break;
        case "d":
            dDown = true;
            break;
        case "q":
            qDown = true;
            break;
        case "e":
            eDown = true;
            break;
        case "r":
            rDown = true;
            break;

        default:
            return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);

window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }



    switch (event.key) {
        case "w":
            wDown = false;
            break;
        case "a":
            aDown = false;
            break;
        case "s":
            sDown = false;
            break;
        case "d":
            dDown = false;
            break;
        case "q":
            qDown = false;
            break;
        case "e":
            eDown = false;
            break;
        case "r":
            rDown = false;
            break;

        default:
            return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);


window.addEventListener("mousedown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }

    //if middle click
    if (event.button == 1 || event.button == 0) {
        middleMouseDown = true;

        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
    }
}, true);

window.addEventListener("mousemove", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }

    //if (Math.abs(event.movementX) > 1 && Math.abs(event.movementY) > 1) {
    m_deltaX = event.movementX;
    m_deltaY = event.movementY;
    //}
    //else {
    //    m_deltaX = 0;
    //    m_deltaY = 0;
    //}


    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);

window.addEventListener("mouseup", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }

    //if middle click
    if (event.button == 1 || event.button == 0) {
        middleMouseDown = false;
        m_deltaX = 0;
        m_deltaY = 0;

        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
    }
}, true);