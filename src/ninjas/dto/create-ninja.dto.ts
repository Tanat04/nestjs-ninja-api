import { MinLength, IsEnum } from "class-validator";

export class CreateNinjaDto {

    @MinLength(3)
    name: string;
    
    @IsEnum(['stars', 'sword'], { message: 'weapon must be either stars or sword' })
    weapon: 'stars' | 'sword';
}
