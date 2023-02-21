import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private ShowAddTask:boolean = false;
  private subject = new Subject<any>()

  constructor() { }

  toggleAddTask():void{
    this.ShowAddTask = !this.ShowAddTask;
    this.subject.next(this.ShowAddTask)
  }
  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
