class Window {
    type: WindowType;
    state: WindowState;
    windowManager: WindowManager;

    constructor(windowManager: WindowManager) {
        this.windowManager = windowManager;
        this.type = WindowType.NONE
        this.state = WindowState.NONE;
    }

    // These functions should get overridden
    public render() {}
    public onSerial(line: string) {}
    public onButton(button: Button) {}
    public onTouch() {}
}
