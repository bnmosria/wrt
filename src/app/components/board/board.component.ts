import { Component } from '@angular/core';

import { CodeEnum } from '../../enums/code.enum';
import { keyboardLayoutConfig } from '../../configs/keyboard-layout.config';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent {
    public code: typeof CodeEnum = CodeEnum;
    public layoutConfig: { key: CodeEnum, classType?: string }[] = keyboardLayoutConfig;
}
