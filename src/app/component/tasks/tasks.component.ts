import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})



export class TasksComponent implements OnInit{

  constructor(private TaskService:TaskService){}

  tasks:Task[] = [];
  ngOnInit():void{
     this.TaskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks
    })
  } 
  deleteTask(task:Task){
    this.TaskService.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter((t)=>task.id!==t.id) 
    })
  }
  toggleReminder(task:Task){
    task.reminder = !task.reminder
    this.TaskService.updateTaskReminder(task).subscribe()
  }
  addTask(task:Task){
    this.TaskService.addTask(task).subscribe((task)=>{
      this.tasks.push(task)
    })
  }
}
