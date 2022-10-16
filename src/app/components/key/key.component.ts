import {
    Component,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { KeyConfig } from '../../interfaces/key-config';
import { KeysConfig } from '../../configs/keys.config';

@Component({
    selector: 'app-key',
    templateUrl: './key.component.html',
    styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {
    @Input()
    public key = '';

    @Input()
    public wide = 4;

    @Output()
    public keyEvent: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();
    public keyConfig!: KeyConfig;

    @HostBinding('class.key-down')
    public isKeyDown = 0;

    public ngOnInit(): void {
        this.retrieveKeyConfig();
    }

    @HostListener('mousedown')
    public mouseDown(): void {
        this.isKeyDown = 1;
    }

    @HostListener('mouseup')
    public mouseUp(): void {
        this.isKeyDown = 0;
    }

    @HostListener('click', ['$event'])
    public emitKeyEvent(): void {
        this.keyEvent.emit(
            new KeyboardEvent('keydown', {
                keyCode: this.keyConfig.keyCode,
                key: this.keyConfig.key,
                code: this.keyConfig.code
            })
        );
    }

    @HostListener('document:keydown', ['$event'])
    public onKeydownHandler(event: KeyboardEvent): void {
        event.preventDefault();

        if (event.code === this.keyConfig.code) {
            this.isKeyDown = 1;
        }
    }

    @HostListener('document:keyup', ['$event'])
    public onKeyupHandler(event: KeyboardEvent): void {
        if (event.code === this.keyConfig.code) {
            console.log(event);
            this.isKeyDown = 0;
        }
    }

    private retrieveKeyConfig(): void {
        if (undefined === this.key) {
            throw new Error('Can not create keyboard key without key input');
        }

        const keyConfig: KeyConfig = KeysConfig[this.key];

        if (undefined === keyConfig) {
            throw new Error(
                `A key config with the index ${this.key} does not exists`
            );
        }

        this.keyConfig = keyConfig;
    }
}
