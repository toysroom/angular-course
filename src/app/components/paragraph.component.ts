import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-paragraph',
    templateUrl: './paragraph.component.html',
    styles: `h1 { color: red;}`
})
export class ParagraphComponent {
    @Input() text: string = 'testo default';
}