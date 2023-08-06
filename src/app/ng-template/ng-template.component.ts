import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent implements OnInit {


  @ViewChild('defaultTabButtons' )
  private defaultTabButtonsTpl!: TemplateRef<any>;


  ngAfterViewInit(): void {
    console.log(this.defaultTabButtonsTpl);

  }


  totalEstimate = 10;
  ctx = {estimate: this.totalEstimate};



  constructor() { }
  ngOnInit(): void {
   }



  loginText = 'Login';
    signUpText = 'Sign Up';
    lessons = [ ];

    login() {
        console.log('Login');
    }

    signUp() {
        console.log('Sign Up');
    }
}
