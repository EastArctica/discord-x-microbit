let windowManager = new WindowManager();

// Setup serial
serial.setWriteLinePadding(0);
serial.writeLine("[MicroBit] Init");
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    windowManager.currentWindow.onSerial(serial.readLine());
});

// Setup buttons
function handleButton(event: ButtonEvent) {
    return () => windowManager.currentWindow.onButtonEvent(event);
}

input.onButtonPressed(Button.A, handleButton(ButtonEvent.APressed));
input.onButtonPressed(Button.B, handleButton(ButtonEvent.BPressed));
input.onButtonPressed(Button.AB, handleButton(ButtonEvent.ABPressed));

// Logo touches
input.onLogoEvent(TouchButtonEvent.Touched, handleButton(ButtonEvent.TouchDown));
input.onLogoEvent(TouchButtonEvent.Released, handleButton(ButtonEvent.TouchUp));
input.onLogoEvent(TouchButtonEvent.Pressed, handleButton(ButtonEvent.TouchPressed));
input.onLogoEvent(TouchButtonEvent.LongPressed, handleButton(ButtonEvent.TouchLongPressed));

// Main loop, 60 fps (maybe, there's no deltaTime...)
loops.everyInterval(1000 / 60, () => {
    windowManager.currentWindow.render();
});

// We need to handle A, B, and AB button up and touched and released events ourselves
let wasADown = input.buttonIsPressed(Button.A);
let wasBDown = input.buttonIsPressed(Button.B);
forever(() => {
    let isADown = input.buttonIsPressed(Button.A);
    if (wasADown && !isADown) {
        // A has been released
        handleButton(ButtonEvent.AUp);
    } else if (!wasADown && isADown) {
        // A has been pressed
        handleButton(ButtonEvent.ADown);
    }

    let isBDown = input.buttonIsPressed(Button.B);
    if (wasBDown && !isBDown) {
        // B has been released
        handleButton(ButtonEvent.BUp);
    } else if (!wasBDown && isBDown) {
        // B has been pressed
        handleButton(ButtonEvent.BDown);
    }
});
