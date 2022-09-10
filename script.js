console.log(11);

const ball = document.querySelector('.ball');

const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

setTimeout(() => {
  animate({
    duration: 5000,
    timing(timeFraction) {
      return 1 - Math.sin(Math.acos(timeFraction));
    },
    draw(progress) {
      ball.style.left = progress * 80 + '%';
      ball.style.opacity = progress;
    },
  });
}, 1500);
