import { ValidatorFn, Validators } from '@angular/forms';

export class ValidatorHelper {
  static minMaxLength(min: number = 3, max: number = 25): ValidatorFn[] {
    return [Validators.minLength(min), Validators.maxLength(max)];
  }

  static minMax(min: number = 3, max: number = 25): ValidatorFn[] {
    return [Validators.min(min), Validators.max(max)];
  }
}
