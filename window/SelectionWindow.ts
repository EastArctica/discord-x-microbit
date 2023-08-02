class SelectionWindow extends Window {
    public selection: WindowType;

    constructor(windowManager: WindowManager) {
        super(windowManager);
        this.selection = WindowType.SELECTION;
    }
};
