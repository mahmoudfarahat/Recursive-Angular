import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputNumber: number = 0;
  result: number | null = null;

  calculateFactorial() {
    this.result = this.factorial(this.inputNumber);
  }

  factorial(n: number): number {
    if (n === 0) {
      return 1; // Base case: Factorial of 0 is 1
    } else {
      console.log(n)
      return n * this.factorial(n - 1); // Recursive case: n! = n * (n-1)!
    }
  }
}
