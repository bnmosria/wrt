import {Component, HostBinding, HostListener} from '@angular/core';
import {KeyConfig} from './interfaces/key-config';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {KeyProperty} from './interfaces/key-property';

@Component({template: ''})
export abstract class AbstractKeyComponent {
  abstract get keyConfig(): KeyConfig;

  @HostListener('click', ['$event'])
  bindKey(): void {
    console.log(new KeyboardEvent('keydown', {
        keyCode: this.keyConfig.keyCode,
        key: this.keyConfig.key,
        code: this.keyConfig.code
      })
    );
  }

  @HostListener('document:keydown', ['$event'])
  onKeyupHandler(event: KeyboardEvent): void {
    if (event.code === this.keyConfig.code) {
      console.log(event);
    }
  }

  @HostBinding('attr.style')
  public get style(): SafeStyle {
    return undefined;
  }
}
