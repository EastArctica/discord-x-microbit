class WindowManager {
    public currentWindowType: WindowType;
    public currentWindow: Window;

    constructor() {
        this.currentWindow = new HomeWindow(this);
        this.currentWindowType = WindowType.HOME;
    }

    switchWindow(window: WindowType) {
        switch (window) {
            case WindowType.HOME:
                serial.writeLine("[MicroBit] Switching to Home");
                this.currentWindow = new HomeWindow(this);
                this.currentWindowType = WindowType.HOME;
                break;
            case WindowType.SELECTION:
                serial.writeLine("[MicroBit] Switching to Selection");
                this.currentWindow = new SelectionWindow(this);
                this.currentWindowType = WindowType.SELECTION;
                break;
            case WindowType.TYPING:
                serial.writeLine("[MicroBit] Switching to Typing");
                this.currentWindow = new TypingWindow(this);
                this.currentWindowType = WindowType.TYPING;
                break;
            default:
                throw 100;
                break;
        }
        basic.clearScreen();
    }
}
