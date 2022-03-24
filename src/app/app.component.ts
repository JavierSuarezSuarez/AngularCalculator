import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora en Angular - Javier Suárez Suárez';
  op1="0";
  op2="0";
  result="0";

  suma():void{
    this.result=Number(this.op1)+Number(this.op2) + "";
  }

  resta():void{
    this.result=Number(this.op1)-Number(this.op2) + "";
  }

  multiplicacion():void{
    this.result=Number(this.op1)*Number(this.op2) + "";
  }

  division():void{
    this.result=Number(this.op1)/Number(this.op2) + "";
  }

  potencia():void{
    this.result=Number(this.op1)**Number(this.op2) + "";
  }

  porcentaje():void{
    this.result=(100* Number(this.op1))/Number(this.op2) + "%";
  }

  abs():void{
    this.op1 = Math.abs(Number(this.op1)) + "";
    this.op2 = Math.abs(Number(this.op2)) + "";
    this.result = Math.abs(Number(this.result)) + "";
  }

  reset():void{
    this.op1 = "0";
    this.op2 = "0";
    this.result = "0";
  }
}
