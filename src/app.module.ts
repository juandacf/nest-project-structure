import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EjemploModule } from './ejemplo/ejemplo.module';
import { EjemploModule } from './ejemplo/ejemplo.module';

@Module({
  imports: [EjemploModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
