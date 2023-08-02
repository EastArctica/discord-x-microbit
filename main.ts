let windowManager = new WindowManager();

// Setup serial
serial.setWriteLinePadding(0);
serial.writeLine("[MicroBit] Init");
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    windowManager.currentWindow.onSerial(serial.readLine());
});

// Setup buttons
function handleButton(button: Button) {
    return () => windowManager.currentWindow.onButton(button);
}

input.onButtonPressed(Button.A, handleButton(Button.A));
input.onButtonPressed(Button.B, handleButton(Button.B));
input.onButtonPressed(Button.AB, handleButton(Button.AB));
input.onLogoEvent(TouchButtonEvent.Pressed, () => windowManager.currentWindow.onTouch());

// Main loop, 60 fps (maybe, there's no deltaTime...)
loops.everyInterval(1000 / 60, () => {
    windowManager.currentWindow.render();
});
