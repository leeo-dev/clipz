import { Component, Input } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(public modal: ModalService) {}

  openModal(): void {
    this.modal.openModal('auth');
  }
}
