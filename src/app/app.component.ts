import { Component, VERSION } from '@angular/core';
import { Birds } from './birds.model';
import {MyFilterPipe} from './my-filter.pipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  filteredString:string = '';

  birds: Birds[] = [  
    {name: 'Crow'},  
    {name: 'Peacock'},
    {name: 'Woodpecker'}] 
    

  onAddBird()
  {
     this.birds.push({
       name: 'sparrow'
     })
  }
}
