import { MessageService, ConfirmationService, ConfirmEventType } from 'primeng/api';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) { }

  confirmSave(dialogKey: string): Observable<boolean> {
    const confirmationResult = new Subject<boolean>();
    this.confirmationService.confirm({
      message: 'Do you want to save this ?',
      header: 'Record Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'We continue your transaction !' })
        confirmationResult.next(true);
        confirmationResult.complete();
      },
      reject: (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected !' })
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled !' })
            break;
        }
        confirmationResult.next(false)
        confirmationResult.complete();
      },
      key: dialogKey
    })

    return confirmationResult.asObservable();
  }

  confirmUpdate(dialogKey: string): Observable<boolean> {
    const confirmationResult = new Subject<boolean>();
    this.confirmationService.confirm({
      message: 'Do you want to update this ?',
      header: 'Update Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'We continue your transaction !' })
        confirmationResult.next(true);
        confirmationResult.complete();
      },
      reject: (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected !' })
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled !' })
            break;
        }
        confirmationResult.next(false)
        confirmationResult.complete();
      },
      key: dialogKey
    })

    return confirmationResult.asObservable();
  }

  confirmDelete(dialogKey: string): Observable<boolean> {
    const confirmationResult = new Subject<boolean>();
    this.confirmationService.confirm({
      message: 'Do you want to delete this ?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'We continue your transaction !' })
        confirmationResult.next(true);
        confirmationResult.complete();
      },
      reject: (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected !' })
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled !' })
            break;
        }
        confirmationResult.next(false)
        confirmationResult.complete();
      },
      key: dialogKey
    })

    return confirmationResult.asObservable();
  }
}
