import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() control: FormControl = new FormControl();
  @Input() type: string = 'text';
  @Input() placeholder: string = '';

  get requiredError(): boolean {
    return this.control.errors?.['required'];
  }

  get minLengthError(): boolean {
    return this.control.errors?.['minlength'];
  }

  get actualLength(): number {
    return this.control.errors?.['minlength']['actualLength'];
  }
  get emailError(): boolean {
    return this.control.errors?.['email'];
  }

  get minError(): boolean {
    return this.control.errors?.['min'];
  }

  get maxError(): boolean {
    return this.control.errors?.['max'];
  }

  get patternError(): boolean {
    return this.control.errors?.['pattern'];
  }
}
