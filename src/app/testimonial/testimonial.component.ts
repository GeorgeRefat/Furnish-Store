import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {
  constructor( private router : Router ) {}

  contactbtn(){
  this.router.navigate(['/contact']);
  }
}
