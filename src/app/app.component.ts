import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
all:Boolean = false;
check1:Boolean = false;
check2:Boolean = false;
check3:boolean = false;


  onChanheAll(){
    if(this.all)
    {
      this.check1=true;
      this.check2=true;
      this.check3 = true;

    }
    else{
      this.check1=false;
      this.check2=false;
      this.check3 = false;
    }

    


  }
  handleCheck(){
    console.log(this.check1)
    console.log(this.check2 )
    console.log(this.check3)
    
      if(this.check1&& this.check2&&this.check3){
        this.all= true;
        
      }
      else{
        this.all=false;
      }
    }
}
