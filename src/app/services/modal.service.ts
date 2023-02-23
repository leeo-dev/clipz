import { Injectable } from '@angular/core';
import { IModal } from '../interface/modal.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: Map<string, IModal> = new Map();
  private registeredIds: Set<string> = new Set();

  register(id: string): void {
    if (!this.registeredIds.has(id)) {
      this.modals.set(id, { id, visible: false });
      this.registeredIds.add(id);
    }
  }

  unregister(id: string): void {
    this.modals.delete(id);
    this.registeredIds.delete(id);
  }

  isModalOpen(id: string): boolean {
    const modal = this.modals.get(id);
    return !!modal && modal.visible;
  }

  closeModal(id: string): void {
    const modal = this.modals.get(id);
    if (modal) {
      modal.visible = false;
    }
  }

  openModal(id: string): void {
    const modal = this.modals.get(id);
    if (modal) {
      modal.visible = true;
    }
  }

  find(id: string): IModal | undefined {
    return this.modals.get(id);
  }
}
