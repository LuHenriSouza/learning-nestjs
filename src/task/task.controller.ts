import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Post()
    create(@Body() task: TaskDto) {
        this.taskService.create(task);
    }

    @Get('/:id')
    getById(@Param('id') id: string) {

    }
}
