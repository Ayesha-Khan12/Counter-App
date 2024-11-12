(function () {
  let counter = 0;
  const decrement = () => {
      counter--;
      updateCounter();
  }
  const increment = () => {
      counter++;
      updateCounter();
  }
  const updateCounter = () => {
      document.getElementById('counter').innerHTML = counter;
  }

  document.getElementById("decrement").addEventListener('click', decrement);
  document.getElementById("increment").addEventListener('click', increment);

  const refresh = () => {
      counter = 0;
      updateCounter();
  }
  document.getElementById('refresh').addEventListener('click', refresh);

})();