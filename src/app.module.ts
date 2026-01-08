import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InjuryRecoveryModule } from './injury-recovery.module';

@Module({
  imports: [InjuryRecoveryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
