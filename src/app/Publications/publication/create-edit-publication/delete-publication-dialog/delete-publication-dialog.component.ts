import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-publication-dialog',
  templateUrl: './delete-publication-dialog.component.html',
  styleUrls: ['./delete-publication-dialog.component.css']
})
export class DeletePublicationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletePublicationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}


