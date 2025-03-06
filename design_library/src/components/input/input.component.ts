import { Component, Input } from '@angular/core';

@Component({
  selector: 'mbc-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() color: "primary" | "secondary" = "primary";
  @Input() disabled: boolean = false;
  @Input() type: "text" | "password" = "text";
}
