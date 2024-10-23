import { Injectable, NotFoundException } from '@nestjs/common';
import { ETaskStatus, TaskDto } from './task.dto';
import { v4 } from 'uuid';

@Injectable()
export class TaskService {

    private tasks: TaskDto[] = [];

    create(task: TaskDto) {
        task.id = v4()
        task.status = ETaskStatus.TO_DO;
        this.tasks.push(task);
    }

    getByID(id: string) {
        const foundTask = this.tasks.filter(t => t.id == id);

        if (foundTask.length)
            return foundTask[0];

        return new NotFoundException(`${id} not found`);
    }
}
