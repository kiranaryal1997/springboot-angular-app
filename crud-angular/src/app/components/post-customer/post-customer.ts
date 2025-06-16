import { Component } from '@angular/core';
import { Customer } from '../../service/customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-customer',
  standalone: false,
  templateUrl: './post-customer.html',
  styleUrl: './post-customer.css'
})
export class PostCustomer {

  postCustomerForm!: FormGroup;

  constructor(private customerService: Customer,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.postCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    })

  }

  postCustomer() {
    console.log(this.postCustomerForm.value);
    this.customerService.postCustomer(this.postCustomerForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl("");
    })
  }

}
