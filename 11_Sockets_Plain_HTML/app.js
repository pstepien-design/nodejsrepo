import express from 'express';
const app = express();

app.use(express.static('public'));

import http from 'http';
const server = http.createServer(app);

import { Server } from 'socket.io';
const io = new Server(server);

import path from 'path';

server.listen(3000);

io.on('connection', (socket) => {
  console.log('client connected', socket.id);
  socket.on('a client changed the color', ({data}) => {



    io.emit("please change the color", {data})
  });
  socket.on("disconnect", () => console.log("bye", socket.id))
});

app.get('/colors', (req, res) => {
  res.sendFile(path.resolve('./public/colors.html'));
});
