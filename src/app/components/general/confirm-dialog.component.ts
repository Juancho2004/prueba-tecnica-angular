import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
  <section class="confirm">
    <h1 mat-dialog-title>{{ data }}</h1>
    <div mat-dialog-content>
      <p>¿Estás seguro de borrar este autor?</p>
    </div>
    <div mat-dialog-actions class="confirm_btns">
      <button mat-button (click)="closeDialog(true)">Sí</button>
      <button mat-button (click)="closeDialog(false)">No</button>
    </div>
  </section>
  `,
  styleUrls: ['./confirm-dialog.component.css']

})
export class ConfirmDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string, public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  closeDialog(result: boolean): void {
    this.dialogRef.close(result);
  }
}
