import { Component, OnInit,  Input, Output } from '@angular/core';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.css']
})
export class BallSelectorComponent implements OnInit {
  slip:any = []
  result:any = []
  see = false
  total = 0
  disabled = [0,0,0,0,0,0,0,0,0,0]
  constructor() { }

  ngOnInit(): void {
  }

  selectedNum(id:any, color:any){

    
    
    
    this.see = false
    if (this.slip.length < 8) {
      this.disabled[id-1]= 1
      this.slip.push({id:id, color:color})
    }
  }

  addItem(data: any) {
    this.disabled = [0,0,0,0,0,0,0,0,0,0]
    this.total = data.total
   this.slip = []
   this.see = true
   this.result = []
    if (data) {
      this.result.push(data)
    }
  }
}
