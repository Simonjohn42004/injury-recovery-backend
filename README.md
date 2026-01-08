# Install dependencies
npm install

# Run Development (with hot reload)
npm run start:dev

# Production build
npm run build
npm run start:prod

# Server runs on: http://localhost:3000

# Request JSON 
{
  "shoulder": 65.2,
  "elbow": 32.1,
  "wrist": 12.4
}


POST /injury-recovery/angles    → HTTP endpoint (receive angles)
Socket.IO                      → Real-time broadcast to clients
'injury-recovery' namespace    → All WebSocket events

# Example POST

curl -X POST http://localhost:3000/injury-recovery/angles \
  -H "Content-Type: application/json" \
  -d '{
    "shoulder": 65.2,
    "elbow": 32.1,
    "wrist": 12.4
  }'

# Dependencies

npm install @nestjs/common @nestjs/core @nestjs/platform-express
npm install @nestjs/websockets @nestjs/platform-socket.io
npm install class-validator class-transformer
npm install socket.io
npm install --save-dev @types/socket.io
