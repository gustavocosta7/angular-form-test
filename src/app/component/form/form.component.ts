import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  profileForm = this.fb.group({
    nameProfile: ['Nome de perfil', Validators.required]
  })

  // profileForm = new FormGroup({
  //   nameProfile: new FormControl('Teste')
  // });

  constructor(private fb: FormBuilder) {
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
