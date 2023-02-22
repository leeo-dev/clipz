import { Injectable } from '@angular/core';
import { IModal } from '../interface/modal.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  register(id: string): void {
    this.modals.push({ id, visible: false });
  }

  unregister(id: string): void {
    this.modals = this.modals.filter((modal) => modal.id !== id);
  }

  isModalOpen(id: string): boolean {
    return !!this.find(id)?.visible;
  }

  closeModal(id: string): void {
    const modal = this.find(id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }

  find(id: string): IModal | undefined {
    return this.modals.find((modal) => modal.id === id);
  }
}
