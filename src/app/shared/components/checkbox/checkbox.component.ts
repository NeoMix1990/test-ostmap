import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}
@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() task!: Task;
  @Output() taskChange = new EventEmitter<Task>();

  isPartiallyComplete(): boolean {
    const { subtasks } = this.task;
    return subtasks
      ? subtasks.some(t => t.completed) && !subtasks.every(t => t.completed)
      : false;
  }

  onTaskChange(completed: boolean): void {
    this.task.completed = completed;
    if (this.task.subtasks) {
      this.task.subtasks.forEach(subtask => (subtask.completed = completed));
    }
    this.taskChange.emit(this.task);
  }

  onSubtaskChange(completed: boolean, index: number): void {
    this.task.subtasks![index].completed = completed;
    this.task.completed = this.task.subtasks!.every(t => t.completed);
    this.taskChange.emit(this.task);
  }
}
