import { Component, ChangeDetectionStrategy } from '@angular/core';
import {CodeEnum} from '../enums/code.enum';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent {
  code: typeof CodeEnum = CodeEnum;
}