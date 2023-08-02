class HomeWindow extends Window {
    public scrollSpeed: number;
    private shouldRender: boolean;

    constructor(windowManager: WindowManager) {
        super(windowManager);
        this.scrollSpeed = 100;
        basic.clearScreen();
    }

    onSerial(line: string) {
        this.shouldRender = false;
        basic.showString(line, this.scrollSpeed);
        this.shouldRender = true;
    }

    onButton(button: Button) {
        if (button == Button.AB) {
            this.windowManager.switchWindow(WindowType.TYPING);
        }
    }

    render() {
        if (this.shouldRender) {
            basic.clearScreen();
        }
    }
};
