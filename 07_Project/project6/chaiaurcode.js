const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++){
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  
  const changeBgColor = function(){
    document.body.style.backgroundColor = randomColor();
  };
  
  const startChangeColor = function(){
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
  };
  
  const stopChangeColor = function(){
    clearInterval(intervalId);
    intervalId = null; // prevent multiple intervals from stacking
  };
  
  document.querySelector("#start").addEventListener('click', startChangeColor);
  document.querySelector("#stop").addEventListener('click', stopChangeColor);
  