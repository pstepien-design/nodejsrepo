<script>
  import io from 'socket.io-client';
  const socket = io();
  let lastPersonToChangeAColor;

  socket.on('changeTheColor', ({ data, username }) => {
    document.body.style.backgroundColor = data;
    lastPersonToChangeAColor = username;
  });

  function changeColor(event) {
    socket.emit('colorChanged', { data: event.target.value });
  }
</script>

<h2>Last person to change the color: {lastPersonToChangeAColor || 'noone'}"</h2>
<input type="color" on:change={changeColor} />
