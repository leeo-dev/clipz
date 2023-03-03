import { ValidatorFn, Validators } from '@angular/forms';

class ValidatorHelper {
  static minMax(min: number = 3, max: number = 25): ValidatorFn[] {
    return [Validators.minLength(min), Validators.maxLength(max)];
  }
}
