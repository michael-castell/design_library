import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mbc-button-toggle',
  standalone: true,
  imports: [],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss'
})
export class ButtonToggleComponent implements OnInit {
  @Input() color: "primary" | "secondary" = "primary";
  @Input() disabled: boolean = false;
  @Input() defaultSelected: number = -1;
  @Input() requireSelection: boolean = false;
  @Input() buttonTextList: string[] = [];
  @Output() selected: number = -1;
  @Output() selectedEmitter = new EventEmitter<string>();

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    if( this.defaultSelected >= this.buttonTextList.length || this.defaultSelected < -1 ) {
      this.defaultSelected = 0;
    }
    this.defaultSelection();
    this.selectRequired();
  }

  public onClickButton($event: any) {
    this.selected = $event.target.offsetParent.id;
    const length = this.buttonTextList.length;
    if (this.color === "primary") {
      for (let i = 0; i < length; i++) {
        document.getElementById("p" + String(i))?.classList.remove("primary-active");
        document.getElementById("p" + String(i))?.classList.add("primary");
      }
      document.getElementById(String(this.selected))?.classList.remove("primary");
      document.getElementById(String(this.selected))?.classList.add("primary-active");
    }
    if (this.color === "secondary") {
      for (let i = 0; i < length; i++) {
        document.getElementById("s" + String(i))?.classList.remove("secondary-active");
        document.getElementById("s" + String(i))?.classList.add("secondary");
      }
      document.getElementById(String(this.selected))?.classList.remove("secondary");
      document.getElementById(String(this.selected))?.classList.add("secondary-active");
    }
    this.selectedEmitter.emit(String(this.selected));
  }

  private defaultSelection() {
    this.selected = this.defaultSelected;
    if (this.color === "primary") {
      document.getElementById("p" + String(this.selected))?.classList.remove("primary");
      document.getElementById("p" + String(this.selected))?.classList.add("primary-active");
    }
    if (this.color === "secondary") {
      document.getElementById("s" + String(this.selected))?.classList.remove("secondary");
      document.getElementById("s" + String(this.selected))?.classList.add("secondary-active");
    }
  }

  private selectRequired() {
    if (this.requireSelection) {
      this.defaultSelected = this.defaultSelected === -1 ? 0 : this.defaultSelected;
      this.defaultSelection();
    }
  }
}
