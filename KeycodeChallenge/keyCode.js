window.addEventListener('keydown', (e)=>{
    const key = document.querySelector('.key h2');
    const keycodee = document.querySelector('.key-code h2');
    const main = document.querySelector('.keycodeDisplay');
    e.preventDefault();
    key.textContent = e.key;
    keycodee.textContent = e.keyCode;
    main.textContent = e.keyCode;
    console.log(e);
})