class TypingWindow extends Window {
    public message: string;
    public currentLetter: string;
    private shouldRender: boolean;

    constructor(windowManager: WindowManager) {
        super(windowManager);
        this.message = "";
        this.currentLetter = "a";
        this.shouldRender = true;
    }

    send() {
        serial.writeLine(this.message);
        basic.clearScreen();
        basic.showString("Sent!", 80);
        this.windowManager.switchWindow(WindowType.HOME);
    }

    render() {
        if (this.shouldRender) {
            basic.showString(this.currentLetter, 0);
        }
    }

    onButton(button: Button) {
        if (button == Button.A) {
            let currentChar = this.currentLetter.charCodeAt(0);
            if (currentChar == 97) // "a"
                return;
            
            this.currentLetter = String.fromCharCode(currentChar - 1);
        } else if (button == Button.B) {
            let currentChar = this.currentLetter.charCodeAt(0);
            if (currentChar == 122) // "z"
                return;

            this.currentLetter = String.fromCharCode(currentChar + 1);
        } else if (button == Button.AB) {
            this.message += this.currentLetter;
            this.currentLetter = "a";

            // Flicker the screen to show that it was inputted
            // We do this because if they were to do this with
            // an "a" then it would look like it didn't input
            // their letter.
            this.shouldRender = false;
            basic.clearScreen();
            basic.pause(20);
            this.shouldRender = true;
        }
    }

    onTouch() {
        this.send();
    }
}
