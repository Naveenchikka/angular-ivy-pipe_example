import { Pipe, PipeTransform } from '@angular/core';  
import { Birds } from './birds.model';
 
  
@Pipe({  
    name: 'myfilter',  
    pure: false  
})
export class MyFilterPipe implements PipeTransform {  
    transform(birds: Birds[], filterString: string) {  
        if (birds.length == 0 || filterString === '') {  
            return birds;  
        }

        const users:Birds[] = [];
        for(const user of birds)
        {
          if(users['name'] === filterString)
          {
            users.push(user);
          }
        }
        return users;  
    }  
}  