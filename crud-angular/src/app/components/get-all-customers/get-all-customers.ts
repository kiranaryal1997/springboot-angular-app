import { Component } from '@angular/core';
import { Customer } from '../../service/customer';

@Component({
  selector: 'app-get-all-customers',
  standalone: false,
  templateUrl: './get-all-customers.html',
  styleUrl: './get-all-customers.css'
})
export class GetAllCustomers {

  customers: any = [];

  constructor(private customerService: Customer) { }

  ngOnInit() {
    this.getAllCustomer();

  }

  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe((res) => {
      console.log(res);
      this.customers = res;
    })
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe((res) => {
      console.log(res);
      this.getAllCustomer();
    });
  }

}
