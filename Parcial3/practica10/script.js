var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Rectángulo del torso
ctx.fillStyle = 'red';
ctx.fillRect(200, 140, 5, 150);  // Ajusta el tamaño si es necesario para mejor proporción

// Círculo para la cabeza
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.arc(200, 100, 40, 0, Math.PI * 2, true);
ctx.fill();

// Brazos
ctx.beginPath();
ctx.moveTo(205, 180); // Centro del torso para brazos
ctx.lineTo(140, 210); // Brazo izquierdo
ctx.moveTo(200, 180);
ctx.lineTo(245, 215); // Brazo derecho
ctx.stroke();

// Piernas - Ajustadas para estar más abajo
ctx.beginPath();
ctx.moveTo(200, 290); // Desde la parte baja del torso, ajustado más abajo
ctx.lineTo(150, 340); // Pierna izquierda
ctx.moveTo(205, 290);
ctx.lineTo(250, 340); // Pierna derecha
ctx.stroke();

// Texto
ctx.font = '30px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Muñeco', 150, 40);
