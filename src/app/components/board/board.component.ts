import { Component } from '@angular/core';

import { CodeEnum } from '../../enums/code.enum';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent {
    code: typeof CodeEnum = CodeEnum;
}
