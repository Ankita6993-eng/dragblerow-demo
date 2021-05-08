import { Component,ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray,CdkDragStart} from '@angular/cdk/drag-drop';
import {MatTable} from '@angular/material/table';
import {User} from './user'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'dragblerow-demo';
    users: User[] = [
    {
      first: "Everette",
      last: "Cremin",
      email: "Everette.Cremin@brody.org",
      address: "2830 Adan Courts",    
      order: 1
    },
    {
      first: "Rosie",
      last: "Monahan",
      email: "Rosie.Monahan@van.net",
      address: "01602 Jacobi Manor",    
      order: 2
    },
    {
      first: "Braeden",
      last: "Roob",
      email: "Braeden.Roob@bartholome.info",
      address: "8682 Rosalia Squares",    
      order: 3
    },
    {
      first: "Myron",
      last: "Harvey",
      email: "lavendergiraffe57@gmail.com",
      address: "10939 Williamson Highway",    
      order: 4
    },
    {
      first: "Christ",
      last: "Goodwin",
      email: "Christ.Goodwin@tod.info",
      address: "814 Prohaska Roads",    
      order: 5
    },
    {
      first: "Nash",
      last: "Cormier",
      email: "Nash.Cormier@ryann.name",
      address: "84047 Elbert Rapid",    
      order: 6
    },
    {
      first: "Adrianna",
      last: "Koch",
      email: "tanwolf17@gmail.com",
      address: "1305 Price Crossroad",    
      order: 7
    },
    {
      first: "Adrienne",
      last: "Glover",
      email: "maroonrabbit86@gmail.com",
      address: "5153 Marlene Freeway",    
      order: 8
    },
    {
      first: "Quincy",
      last: "Bernier",
      email: "orchidturtle24@gmail.com",
      address: "2565 Myra Plains",    
      order: 9
    },
    {
      first: "Keith",
      last: "Schultz",
      email: "Keith.Schultz@mabel.info",
      address: "546 Adams Lake",    
      order: 10
    }
]

dropTable(event: CdkDragDrop<User[]>|any){
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
    console.log(`Moving item from ${event.previousIndex} to index ${event.currentIndex}`)
}
}
