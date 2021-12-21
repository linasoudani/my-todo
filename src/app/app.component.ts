import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	/* An empty array that is responsible
	to add a division */
	list:any[]=[];



	public addToList(item:string) {
	  if(item ==''){

    }else{
			this.list.push({id:this.list.length,name:item});

      item ='';
		}
		}
    public deleteTask(id:number) {
      this.list=this.list.filter(item=>item.id!==id);
    }
	}


	

