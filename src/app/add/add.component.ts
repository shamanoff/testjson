import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  formInputs = {
    id: -1,
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    ip_address: ''
  };
  constructor(public dialogRef: MatDialogRef<AddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

/*  submit(formData) {
    console.log(formData.value);
    this.dialogRef.close(formData);
  }*/

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmAdd() {
    if(this.formInputs.id === -1){
      this.formInputs.id = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    }
    this.dialogRef.close(this.formInputs);
  }

}
