import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AnglesDto } from './dto/angles.dto';

@WebSocketGateway({ cors: { origin: '*' } })
export class InjuryRecoveryGateway {
  @WebSocketServer()
  server: Server;

  // Optional: Auto-join all clients to a room for broadcast
  afterInit() {
    console.log('Socket.IO server initialized');
  }

  handleConnection(client: any) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: any) {
    console.log('Client disconnected:', client.id);
  }
}
