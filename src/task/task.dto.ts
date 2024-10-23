import { IsDateString, IsEnum, IsOptional, IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export enum ETaskStatus {
    TO_DO = 'TO_DO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

export class TaskDto {
    @IsUUID()
    @IsOptional()
    id: string;

    @IsString()
    @MinLength(3)
    @MaxLength(256)
    readonly title: string;

    @IsString()
    @MinLength(5)
    @MaxLength(512)
    readonly description: string;

    @IsEnum(ETaskStatus)
    @IsOptional()
    status: string;

    @IsDateString()
    readonly expirationDate: Date;
}
