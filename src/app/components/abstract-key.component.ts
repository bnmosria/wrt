import { Component, HostListener } from '@angular/core';
import { KeyConfig } from '../interfaces/key-config';

@Component({ template: '' })
export abstract class AbstractKeyComponent {
    abstract get keyConfig(): KeyConfig;

    @HostListener('click', ['$event'])
    bindKey(): void {
        console.log(
            new KeyboardEvent('keydown', {
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
}
