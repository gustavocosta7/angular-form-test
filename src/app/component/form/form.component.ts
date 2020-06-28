import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  profileForm = new FormGroup({
    nameProfile: new FormControl('Teste')
  });

  constructor() {

   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    console.log('submit');
    
  }

}
