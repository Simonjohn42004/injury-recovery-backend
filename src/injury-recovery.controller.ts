import { Controller, Post, Body, ValidationPipe, Inject } from '@nestjs/common';
import { InjuryRecoveryGateway } from './injury-recovery.gateway';
import { AnglesDto } from './dto/angles.dto';

@Controller('injury-recovery')
export class InjuryRecoveryController {
  constructor(
    @Inject(InjuryRecoveryGateway)
    private readonly gateway: InjuryRecoveryGateway,
  ) {}

  @Post('angles')
  async receiveAngles(
    @Body(ValidationPipe) angles: AnglesDto,
  ) {
    // Broadcast to all connected clients
    this.gateway.server.emit('angles-update', angles);
    return { status: 'received', data: angles };
  }
}
