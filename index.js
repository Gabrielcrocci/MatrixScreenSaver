const canvas = document.getElemetById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.heigth = window.innerHeigth;

const katana = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑを'
const latin = 'abcdefghijklmnopqrstuv '
const nums = '1234567890';

const alphabet = katana + latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.heigth);

  context.fillStyle = '#0F0';
  context.font = fontSize + 'px monospace';

  for(let i = 0; i < rainDrops.length; i++)
  {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

    if(rainDrops[i]*fontSize > canvas.heigth && Math.random() > 0.975){
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
}

setInterval(draw, 30);
