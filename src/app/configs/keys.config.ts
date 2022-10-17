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
        code: 'KeyZ'
    },
    [CodeEnum.KeyZ]: {
        key: 'z',
        keyCode: 90,
        code: 'KeyY'
    }
};
