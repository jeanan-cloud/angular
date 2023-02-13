import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
  
})
export class LandingComponent implements OnInit {

  public candidates:any = [
    {
      firstName: 'Andrei',
      lastName: 'Ander',
      email: 'jeanan@cloudstaff.com',
      color:'blue',
      addresses:[
        {
          address1: 'Angeles City,Pampanga',
          address2: 'Angeles City,Pampanga',
          city: 'Angeles City',
          province: 'Pampanga',
          country: 'Philippines'
        },
        {
          address1: 'Angeles City,Pampanga',
          address2: 'Angeles City,Pampanga',
          city: 'Angeles City',
          province: 'Pampanga',
          country: 'Philippines'
        }
      ],
      phones:['+6312312312', '+63123121323123']
    },
    {
      firstName: 'Jake1',
      lastName: 'Bauson1',
      email: 'jakeb1@cloudstaff.com',
      color:'green',
      addresses:[
        {
          address1: 'test',
          address2: 'test',
          city: 'capas',
          province: 'tarlac',
          country: 'philippines'
        },
        {
          address1: 'test1',
          address2: 'test1',
          city: 'capas',
          province: 'tarlac',
          country: 'philippines'
        }
      ],
      phones:['+6312312312', '+63123121323123']
    },
    {
      firstName: 'Jake2',
      lastName: 'Bauson2',
      email: 'jakeb2@cloudstaff.com',
      color:'red',
      addresses:[
        {
          address1: 'test',
          address2: 'test',
          city: 'capas',
          province: 'tarlac',
          country: 'philippines'
        },
        {
          address1: 'test1',
          address2: 'test1',
          city: 'capas',
          province: 'tarlac',
          country: 'philippines'
        }
      ],
      phones:['+6312312312', '+63123121323123']
    }
  ]

value: any;
captchaTooltipIcon: any;

public newCandidate: any={};





  constructor() { }


  isVisible = false;
  isOkLoadingForms=false;
  
   
  

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!',this.newCandidate);
    this.resetForm();

    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.resetForm();
    this.isVisible = false;
  }


  

  private resetForm(){
  this.newCandidate={
    firstName:"",
    lastName:"",
    email:"",
    addresses:{
        address1:"",
        address2:"",
        city:"",
        province:"",
        country:""
        }
    }
  }



  ngOnInit(): void 
  {
  this.resetForm();
  }

  
}
