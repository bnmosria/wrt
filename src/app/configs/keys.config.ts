import { CodeEnum } from '../enums/code.enum';
import { KeyConfig } from '../interfaces/key-config';

export const KeysConfig: { [key in keyof typeof CodeEnum]: KeyConfig } = {
    [CodeEnum.Unidentified]: {
        key: '',
        keyCode: 0,
        code: 'Unidentified'
    },
    [CodeEnum.IntlBackslash]: {
        key: '<',
        keyCode: 188,
        code: 'IntlBackslash'
    },
    [CodeEnum.Backquote]: {
        key: '^',
        keyCode: 192,
        code: 'Backquote'
    },
    [CodeEnum.Backspace]: {
        key: '&#9003;',
        keyCode: 8,
        code: 'Backspace'
    },
    [CodeEnum.Tab]: {
        key: '&#8633;',
        keyCode: 9,
        code: 'Tab'
    },
    [CodeEnum.Enter]: {
        key: '&larrhk;',
        keyCode: 13,
        code: 'Enter'
    },
    [CodeEnum.ShiftLeft]: {
        key: '&#8679;',
        keyCode: 16,
        code: 'ShiftLeft'
    },
    [CodeEnum.ShiftRight]: {
        key: '&#8679;',
        keyCode: 16,
        code: 'ShiftRight'
    },
    [CodeEnum.ControlLeft]: {
        key: 'Ctrl',
        keyCode: 17,
        code: 'ControlLeft'
    },
    [CodeEnum.ControlRight]: {
        key: 'ctrl',
        keyCode: 17,
        code: 'ControlRight'
    },
    [CodeEnum.CapsLock]: {
        key: '&#8682;',
        keyCode: 20,
        code: 'CapsLock'
    },
    [CodeEnum.Escape]: {
        key: 'esc',
        keyCode: 27,
        code: 'Escape'
    },
    [CodeEnum.Space]: {
        key: '',
        keyCode: 32,
        code: 'Space'
    },
    [CodeEnum.ArrowLeft]: {
        key: 'ArrowLeft',
        keyCode: 37,
        code: 'ArrowLeft'
    },
    [CodeEnum.ArrowUp]: {
        key: 'ArrowUp',
        keyCode: 38,
        code: 'ArrowUp'
    },
    [CodeEnum.ArrowRight]: {
        key: 'ArrowRight',
        keyCode: 39,
        code: 'ArrowRight'
    },
    [CodeEnum.ArrowDown]: {
        key: 'ArrowDown',
        keyCode: 40,
        code: 'ArrowDown'
    },
    [CodeEnum.Digit0]: {
        key: '0',
        keyCode: 48,
        code: 'Digit0'
    },
    [CodeEnum.Digit1]: {
        key: '1',
        keyCode: 49,
        code: 'Digit1'
    },
    [CodeEnum.Digit2]: {
        key: '2',
        keyCode: 50,
        code: 'Digit2'
    },
    [CodeEnum.Digit3]: {
        key: '3',
        keyCode: 51,
        code: 'Digit3'
    },
    [CodeEnum.Digit4]: {
        key: '4',
        keyCode: 52,
        code: 'Digit4'
    },
    [CodeEnum.Digit5]: {
        key: '5',
        keyCode: 53,
        code: 'Digit5'
    },
    [CodeEnum.Digit6]: {
        key: '6',
        keyCode: 54,
        code: 'Digit6'
    },
    [CodeEnum.Digit7]: {
        key: '7',
        keyCode: 55,
        code: 'Digit7'
    },
    [CodeEnum.Digit8]: {
        key: '8',
        keyCode: 56,
        code: 'Digit8'
    },
    [CodeEnum.Digit9]: {
        key: '9',
        keyCode: 57,
        code: 'Digit9'
    },
    [CodeEnum.AltLeft]: {
        key: 'Alt',
        keyCode: 18,
        code: 'AltLeft'
    },
    [CodeEnum.AltRight]: {
        key: 'Alt Gr',
        keyCode: 18,
        code: 'AltRight'
    },
    [CodeEnum.F1]: {
        key: 'F1',
        keyCode: 112,
        code: 'F1'
    },
    [CodeEnum.F2]: {
        key: 'F2',
        keyCode: 113,
        code: 'F2'
    },
    [CodeEnum.F3]: {
        key: 'F3',
        keyCode: 114,
        code: 'F3'
    },
    [CodeEnum.F4]: {
        key: 'F4',
        keyCode: 115,
        code: 'F4'
    },
    [CodeEnum.F5]: {
        key: 'F5',
        keyCode: 116,
        code: 'F5'
    },
    [CodeEnum.F6]: {
        key: 'F6',
        keyCode: 117,
        code: 'F6'
    },
    [CodeEnum.F7]: {
        key: 'F7',
        keyCode: 118,
        code: 'F7'
    },
    [CodeEnum.F8]: {
        key: 'F8',
        keyCode: 119,
        code: 'F8'
    },
    [CodeEnum.F9]: {
        key: 'F9',
        keyCode: 120,
        code: 'F9'
    },
    [CodeEnum.F10]: {
        key: 'F10',
        keyCode: 121,
        code: 'F10'
    },
    [CodeEnum.F11]: {
        key: 'F11',
        keyCode: 122,
        code: 'F11'
    },
    [CodeEnum.F12]: {
        key: 'F12',
        keyCode: 123,
        code: 'F12'
    },
    [CodeEnum.KeyA]: {
        key: 'a',
        keyCode: 65,
        code: 'KeyA'
    },
    [CodeEnum.KeyB]: {
        key: 'b',
        keyCode: 66,
        code: 'KeyB'
    },
    [CodeEnum.KeyC]: {
        key: 'c',
        keyCode: 67,
        code: 'KeyC'
    },
    [CodeEnum.KeyD]: {
        key: 'd',
        keyCode: 68,
        code: 'KeyD'
    },
    [CodeEnum.KeyE]: {
        key: 'e',
        keyCode: 69,
        code: 'KeyE'
    },
    [CodeEnum.KeyF]: {
        key: 'f',
        keyCode: 70,
        code: 'KeyF'
    },
    [CodeEnum.KeyG]: {
        key: 'g',
        keyCode: 71,
        code: 'KeyG'
    },
    [CodeEnum.KeyH]: {
        key: 'h',
        keyCode: 72,
        code: 'KeyH'
    },
    [CodeEnum.KeyI]: {
        key: 'i',
        keyCode: 73,
        code: 'KeyI'
    },
    [CodeEnum.KeyJ]: {
        key: 'j',
        keyCode: 74,
        code: 'KeyJ'
    },
    [CodeEnum.KeyK]: {
        key: 'k',
        keyCode: 75,
        code: 'KeyK'
    },
    [CodeEnum.KeyL]: {
        key: 'l',
        keyCode: 76,
        code: 'KeyL'
    },
    [CodeEnum.KeyM]: {
        key: 'm',
        keyCode: 77,
        code: 'KeyM'
    },
    [CodeEnum.KeyN]: {
        key: 'n',
        keyCode: 78,
        code: 'KeyN'
    },
    [CodeEnum.KeyO]: {
        key: 'o',
        keyCode: 79,
        code: 'KeyO'
    },
    [CodeEnum.KeyP]: {
        key: 'p',
        keyCode: 80,
        code: 'KeyP'
    },
    [CodeEnum.KeyQ]: {
        key: 'q',
        keyCode: 81,
        code: 'KeyQ'
    },
    [CodeEnum.KeyR]: {
        key: 'r',
        keyCode: 82,
        code: 'KeyR'
    },
    [CodeEnum.KeyS]: {
        key: 's',
        keyCode: 83,
        code: 'KeyS'
    },
    [CodeEnum.KeyT]: {
        key: 't',
        keyCode: 84,
        code: 'KeyT'
    },
    [CodeEnum.KeyU]: {
        key: 'u',
        keyCode: 85,
        code: 'KeyU'
    },
    [CodeEnum.KeyV]: {
        key: 'v',
        keyCode: 86,
        code: CodeEnum.KeyV
    },
    [CodeEnum.KeyW]: {
        key: 'w',
        keyCode: 87,
        code: 'KeyW'
    },
    [CodeEnum.KeyX]: {
        key: 'x',
        keyCode: 88,
        code: 'KeyX'
    },
    [CodeEnum.KeyY]: {
        key: 'y',
        keyCode: 89,
        code: 'KeyY'
    },
    [CodeEnum.KeyZ]: {
        key: 'z',
        keyCode: 90,
        code: 'KeyZ'
    }
};

/*

12: {
  key: "Clear",
    keyCode: 12,
    which: 12,
    code: "NumLock",
    location: 0,
    description: "clear",
    unicode: "\u2327"
},

19: {
  key: "Pause",
    keyCode: 19,
    which: 19,
    code: "Pause",
    location: 0,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "pause/break"
},
33: {
  key: "PageUp",
    keyCode: 33,
    which: 33,
    code: "Numpad9",
    location: 3,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "page up",
    unicode: "\u21de"
},
34: {
  key: "PageDown",
    keyCode: 34,
    which: 34,
    code: "Numpad3",
    location: 3,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "page down",
    unicode: "\u21df"
},
35: {
  key: "End",
    keyCode: 35,
    which: 35,
    code: "Numpad1",
    location: 3,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "end"
},
36: {
  key: "Home",
    keyCode: 36,
    which: 36,
    code: "Numpad7",
    location: 3,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "home",
    unicode: "\u2302"
},
41: {
  description: "select",
    keyCode: "41",
    which: "41"
},
42: {
  description: "print",
    keyCode: "42",
    which: "42"
},
43: {
  description: "execute",
    keyCode: "43",
    which: "43"
},
44: {
  key: "F13",
    keyCode: 44,
    which: 44,
    code: "F13",
    location: 0,
    description: "Print Screen / F13 (firefox)",
    unicode: "\u2399"
},
45: {
  key: "Insert",
    keyCode: 45,
    which: 45,
    code: "Numpad0",
    location: 3,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "insert",
    unicode: "x"
},
46: {
  key: "Delete",
    keyCode: 46,
    which: 46,
    code: "NumpadDecimal",
    location: 3,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "delete",
    unicode: "\u2326"
},
47: {
  description: "help",
    keyCode: "47",
    which: "47",
    unicode: "\u2370"
},

58: {
  key: ":",
    keyCode: 58,
    which: 58,
    code: "Period",
    location: 0,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: ":"
},
59: {
  key: ";",
    keyCode: 59,
    which: 59,
    code: "Semicolon",
    location: 0,
    description: "semicolon (firefox), equals"
},
60: {
  key: "<",
    keyCode: 60,
    which: 60,
    code: "Backquote",
    location: 0,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "<"
},
61: {
  key: "=",
    keyCode: 61,
    which: 61,
    code: "Equal",
    location: 0,
    description: "equals (firefox)"
},
63: {
  key: "\xdf",
    keyCode: 63,
    which: 63,
    code: "Minus",
    location: 0,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "\xdf"
},
MetaLeft: {
  key: "Meta",
    keyCode: 91,
    code: "MetaLeft",
},
MetaRight: {
  key: "Meta",
    keyCode: 92,
    code: "MetaRight",
},
ContextMenu: {
  key: "ContextMenu",
    keyCode: 93,
    code: "ContextMenu",
},

Numpad0: {
  key: "0",
    keyCode: 96,
    which: 96,
    code: "Numpad0",
    location: 3,
    description: "Number Pad 0",
    unicode: "\u24ea"
},
Numpad1: {
  key: "1",
    keyCode: 97,
    which: 97,
    code: "Numpad1",
    location: 3,
    description: "Number Pad 1",
    unicode: "\u2460"
},
Numpad2: {
  key: "2",
    keyCode: 98,
    which: 98,
    code: "Numpad2",
    location: 3,
    description: "Number Pad 2",
    unicode: "\u2461"
},
Numpad3: {
  key: "3",
    keyCode: 99,
    which: 99,
    code: "Numpad3",
    location: 3,
    description: "Number Pad 3",
    unicode: "\u2462"
},
Numpad4: {
  key: "4",
    keyCode: 100,
    which: 100,
    code: "Numpad4",
    location: 3,
    description: "Number Pad 4",
    unicode: "\u2463"
},
Numpad5: {
  key: "5",
    keyCode: 101,
    which: 101,
    code: "Numpad5",
    location: 3,
    description: "Number Pad 5",
    unicode: "\u2464"
},
Numpad6: {
  key: "6",
    keyCode: 102,
    which: 102,
    code: "Numpad6",
    location: 3,
    description: "Number Pad 6",
    unicode: "\u2465"
},
Numpad7: {
  key: "7",
    keyCode: 103,
    which: 103,
    code: "Numpad7",
    location: 3,
    description: "Number Pad 7",
    unicode: "\u2466"
},
Numpad8: {
  key: "8",
    keyCode: 104,
    which: 104,
    code: "Numpad8",
    location: 3,
    description: "Number Pad 8",
    unicode: "\u2467"
},
Numpad9: {
  key: "9",
    keyCode: 105,
    which: 105,
    code: "Numpad9",
    location: 3,
    description: "Number Pad 9",
    unicode: "\u2468"
},
NumpadMultiply: {
  key: "*",
    keyCode: 106,
    which: 106,
    code: "NumpadMultiply",
    location: 3,
    description: "multiply",
    unicode: "\xd7"
},
NumpadAdd: {
  key: "+",
    keyCode: 107,
    which: 107,
    code: "NumpadAdd",
    location: 3,
    description: "add"
},
NumpadDecimal: {
  key: ",",
    keyCode: 108,
    which: 108,
    code: "NumpadDecimal",
    location: 3,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "numpad period (firefox)"
},
NumpadSubtract: {
  key: "-",
    keyCode: 109,
    which: 109,
    code: "NumpadSubtract",
    location: 3,
    description: "subtract"
},
NumpadDecimal: {
  key: ".",
    keyCode: 110,
    which: 110,
    code: "NumpadDecimal",
    location: 3,
    description: "decimal point"
},
NumpadDivide: {
  key: "/",
    keyCode: 111,
    which: 111,
    code: "NumpadDivide",
    location: 3,
    description: "divide",
    unicode: "\xf7"
},

124: {
  key: "F13",
    keyCode: 124,
    which: 124,
    code: "F13",
    location: 0,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "f13"
},
125: {
  key: "F14",
    keyCode: 125,
    which: 125,
    code: "F14",
    location: 0,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !0,
    description: "f14"
},
126: {
  key: "F15",
    keyCode: 126,
    which: 126,
    code: "F15",
    location: 0,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !0,
    description: "f15"
},
127: {
  key: "F16",
    keyCode: 127,
    which: 127,
    code: "F16",
    location: 0,
    description: "f16"
},
128: {
  key: "F17",
    keyCode: 128,
    which: 128,
    code: "F17",
    location: 0,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "f17"
},
129: {
  key: "F18",
    keyCode: 129,
    which: 129,
    code: "F18",
    location: 0,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "f18"
},
130: {
  key: "F19",
    keyCode: 130,
    which: 130,
    code: "F19",
    location: 0,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "f19"
},
131: {
  key: "F20",
    code: "F20",
    description: "F20",
    keyCode: "131",
    which: "131"
},
132: {
  key: "F21",
    code: "F21",
    description: "F21",
    keyCode: "132",
    which: "132"
},
133: {
  key: "F22",
    code: "F22",
    description: "F22",
    keyCode: "133",
    which: "133"
},
134: {
  key: "F23",
    code: "F23",
    description: "F23",
    keyCode: "134",
    which: "134"
},
135: {
  key: "F24",
    code: "F24",
    description: "F24",
    keyCode: "135",
    which: "135"
},
136: {
  key: "F25",
    code: "F25",
    description: "F25",
    keyCode: "136",
    which: "136"
},
137: {
  key: "F26",
    code: "F26",
    description: "F26",
    keyCode: "137",
    which: "137"
},
138: {
  key: "F27",
    code: "F27",
    description: "F27",
    keyCode: "138",
    which: "138"
},
139: {
  key: "F28",
    code: "F28",
    description: "F28",
    keyCode: "139",
    which: "139"
},
140: {
  key: "F29",
    code: "F29",
    description: "F29",
    keyCode: "140",
    which: "140"
},
141: {
  key: "F30",
    code: "F30",
    description: "F30",
    keyCode: "141",
    which: "141"
},
142: {
  key: "F31",
    code: "F31",
    description: "F31",
    keyCode: "142",
    which: "142"
},
143: {
  key: "F32",
    code: "F32",
    description: "F32",
    keyCode: "143",
    which: "143"
},
144: {
  key: "NumLock",
    keyCode: 144,
    which: 144,
    code: "NumLock",
    location: 0,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "num lock",
    unicode: "\u21ed"
},
145: {
  key: "ScrollLock",
    keyCode: 145,
    which: 145,
    code: "ScrollLock",
    location: 0,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "scroll lock",
    unicode: "\u2913"
},
160: {
  key: "[",
    keyCode: 160,
    which: 160,
    code: "BracketLeft",
    location: 0,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "^"
},
161: {
  key: "Dead",
    keyCode: 161,
    which: 161,
    code: "BracketRight",
    location: 0,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "!"
},
162: {
  description: "\u061b (arabic semicolon)",
    keyCode: "162",
    which: "162"
},
163: {
  key: "\\",
    keyCode: 163,
    which: 163,
    code: "Backquote",
    location: 0,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    shiftKey: !1,
    description: "#"
},
164: {
  key: "$",
    keyCode: 164,
    code: "Backslash",
},
165: {
  key: "^\xf9",
    keyCode: 165,
    code: "Quote",
},

173: {
  key: "-",
    keyCode: 173,
    code: "Minus",
},
186: {
  key: ";",
    keyCode: 186,
    code: "Semicolon",
},
187: {
  key: "+",
    keyCode: 187,
    code: "Equal",
},
188: {
  key: ",",
    keyCode: 188,
    code: "Comma",
},
189: {
  key: "-",
    keyCode: 189,
    code: "Minus",
},
190: {
  key: ".",
    keyCode: 190,
    code: "Period",
},
191: {
  key: "/",
    keyCode: 191,
    code: "Slash",
},
192: {
  key: "`",
    keyCode: 192,
    code: "Backquote",
},
193: {
  key: "/",
    keyCode: 193,
    code: "IntlRo",
},
194: {
  key: ".",
    keyCode: 194,
    code: "NumpadComma",
},
219: {
  key: "[",
    keyCode: 219,
    code: "BracketLeft",
},
220: {
  key: "\\",
    keyCode: 220,
    code: "Backslash",
},
221: {
  key: "]",
    keyCode: 221,
    code: "BracketRight",
},
222: {
  key: "'",
    keyCode: 222,
    code: "Quote",
},
223: {
  key: "`",
    keyCode: 223,
    code: "Backquote",
},

225: {
  key: "AltGraph",
    keyCode: 225,
    code: "AltRight",
},
226: {
  key: "\\",
    keyCode: 226,
    code: "IntlBackslash",
},
229: {
  key: "Dead",
    keyCode: 229,
    code: "Backquote",
},
*/
