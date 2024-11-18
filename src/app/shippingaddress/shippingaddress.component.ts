import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shippingaddress',
  templateUrl: './shippingaddress.component.html',
  styleUrl: './shippingaddress.component.css'
})
export class ShippingaddressComponent {

  constructor(private router:Router){}

  paymenttocheck(){
    this.router.navigate(['/paymentmethod']);
  }
}
