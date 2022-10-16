import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {AbstractKeyComponent} from '../abstract-key.component';
import {KeyConfig} from '../interfaces/key-config';
import {KeysConfig} from '../configs/keys.config';
import {KeyProperty} from '../interfaces/key-property';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyComponent extends AbstractKeyComponent {
  @Input()
  public key = '';

  @Input()
  public wide = 4;

  get keyConfig(): KeyConfig {
    if (undefined === this.key) {
      throw new Error('Can not create keyboard key without key input');
    }

    const keyConfig: KeyConfig = KeysConfig[this.key];

    if (undefined === keyConfig) {
      throw new Error(`A key config with the index ${this.key} does not exists`);
    }

    return keyConfig;
  }

  get keyProperties(): KeyProperty {
    return undefined;
  }
}
