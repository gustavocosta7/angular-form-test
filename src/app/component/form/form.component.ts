import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  items;
  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    })
   }

  ngOnInit(): void {
    this.items = ''
  }

  onSubmit() {
    console.warn('submit datas');
    
  }

}
