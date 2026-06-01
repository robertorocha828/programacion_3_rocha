import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { Cursos } from './cursos.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([
    {}
  ])],
  controllers: [CursosController],
  providers: [CursosService],
})
export class CategoriesModule {}
