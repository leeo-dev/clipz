import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AuthModalComponent, RegisterComponent],
  imports: [CommonModule, SharedModule],
  exports: [AuthModalComponent],
})
export class UserModule {}
