import {Server} from "socket.io"

export const connectTOServer = (server)=>{
  const io = new Server(server)
  return io;
}