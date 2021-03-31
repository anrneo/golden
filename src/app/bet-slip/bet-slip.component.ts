import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

declare var M:any

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})
export class BetSlipComponent implements OnInit {
  @Input() slip:any;
  @Output() newItemEvent = new EventEmitter<any>();
  model = {total : 0}
  constructor() { }

  ngOnInit(): void {
    this.materialize()
    
  }

  calTotal(){
    if (!this.slip.length) {
      M.toast({html: 'Select at least one number!', classes: 'rounded'});
      return
    }
    if (this.model.total<5) {
      M.toast({html: 'Minimum bet is 5 €!', classes: 'rounded'});
      return
    }
      let random = Math.floor(Math.random() * (1 - 11) + 11)
      let data = this.slip.filter( (x:any) =>x.id==random)
      if (data.length) {
        data[0].total = this.model.total * this.slip.length * 1.5
        this.newItemEvent.emit(data[0]);
      }else{
        this.newItemEvent.emit(false);
      }
      this.model.total = 0

    
  } 

  materialize(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.materialboxed');
      var instances = M.Materialbox.init(elems, Option);
    });
  }

}
