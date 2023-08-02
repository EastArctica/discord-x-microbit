const enum WindowType {
    NONE = 0,   // Unused
    HOME,       // Incoming message view
    TYPING,     // Send message view (left + right for current letter)
    SELECTION,  // Selection view, choose what view to enter
};

const enum WindowState {
    NONE,
    TYPING_MESSAGE,
    ASK_SEND_MESSAGE,
};