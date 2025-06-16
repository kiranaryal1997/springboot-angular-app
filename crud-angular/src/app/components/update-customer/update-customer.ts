import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../service/customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  standalone: false,
  templateUrl: './update-customer.html',
  styleUrl: './update-customer.css'
})
export class UpdateCustomer {
  updateCustomerForm!: FormGroup;


  id!: number;

  constructor(private activatedRoute: ActivatedRoute,
    private service: Customer,
    private fb: FormBuilder,
  private router:Router) { }

  ngOnInit() {
    this.updateCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    })
    this.id = +this.activatedRoute.snapshot.params["id"];
    this.getCustomerById();
  }

  getCustomerById() {
    this.service.getCustomerById(this.id).subscribe((res) => {
      console.log(res);
      this.updateCustomerForm.patchValue(res);
    })
  }

  updateCustomer() {
    this.service.updateCustomer(this.id, this.updateCustomerForm.value).subscribe((res) => {
      console.log(res);
      if(res.id!=null){
        this.router.navigateByUrl("");
      }
    })
  }




}
