import { Component, Input } from '@angular/core';

@Component({
  selector: 'mbc-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() color: "primary" | "secondary" = "primary";
  @Input() disabled: boolean = false;
  @Input() buttonText: string = "";
}
