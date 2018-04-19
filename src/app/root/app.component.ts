import {Component, ElementRef} from '@angular/core';
import 'brace';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'app component!';

    editor: AceAjax.Editor;

    constructor(private elementRef: ElementRef) {
        let el = elementRef.nativeElement;
        this.editor = ace['edit'](el);
    }
}
