import { Module } from '@nestjs/common';
import { InjuryRecoveryController } from './injury-recovery.controller';
import { InjuryRecoveryGateway } from './injury-recovery.gateway';

@Module({
  controllers: [InjuryRecoveryController],
  providers: [InjuryRecoveryGateway],
})
export class InjuryRecoveryModule {}
