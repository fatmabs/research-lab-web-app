import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-delete-member-dialog',
  templateUrl: './delete-member-dialog.component.html',
  styleUrls: ['./delete-member-dialog.component.css']
})
export class DeleteMemberDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
