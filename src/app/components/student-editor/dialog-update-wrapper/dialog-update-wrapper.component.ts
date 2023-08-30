import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-dialog-update-wrapper',
  templateUrl: './dialog-update-wrapper.component.html',
  styleUrls: ['./dialog-update-wrapper.component.css']
})
export class DialogUpdateWrapperComponent implements OnInit {
  editingStudent: Student;
  originalStudent: Student;
  constructor(public dialogRef: MatDialogRef<DialogUpdateWrapperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student) {
      //this.editingStudent=data
      this.editingStudent ={...data};
      this.originalStudent = data;
     }

  ngOnInit(): void {
  }
  onNoClick(): void{
    this.editingStudent= {...this.originalStudent};
    this.dialogRef.close();

  }
}
