import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {

    private tasks: TaskDto[] = [];

    create(task: TaskDto) {
        this.tasks.push(task);
    }

    getByID(id: string) {
        const foundTask = this.tasks.filter(t => t.id == id);

        if (foundTask.length)
            return foundTask[0];

        return new NotFoundException(`${id} not found`);
    }
}
