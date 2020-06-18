import { Component ,Input} from '@angular/core';
import { IEmployee } from './details';
import example from '../assets/data/example.json';
import example2 from '../assets/data/example2.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  buttonClicked = false;

  clicked(){
    this.buttonClicked = !this.buttonClicked;
  }


  buttononClicked = false;

  clickedd(){
    this.buttononClicked = !this.buttononClicked;
  }

  @Input() detail: IEmployee;
  DetailList: IEmployee[]=example.datas ;
  OtherList:IEmployee[]=example2.datum;
  
}
