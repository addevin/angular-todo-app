import { Component,Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter()
  text:string | undefined;
  day:string | undefined;
  reminder:boolean = false
  error:string = '';
  subscription :Subscription | undefined;
  showAddTask:boolean =false;

  constructor(private uiService:UiService){
    this.subscription = uiService.onToggle().subscribe(val=>this.showAddTask = val)
  }

  onSubmit(){
    setTimeout(()=>{
      this.error = ''
    },1500)

    if(!this.text){
      this.error = "Please add a task"
      return
    }
    if(!this.day){
      this.error = "Please set date and time"
      return;
    }
    const newTask = {
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    this.onAddTask.emit(newTask)

    this.text= '';
    this.day='';
    this.reminder = false
  }
}
