const clockEl = document.querySelector('.clock');

setInterval(() => {
    const date = new Date();
    const time = date.toLocaleTimeString(); // auto handles formatting
    clockEl.textContent = time;
}, 1000);
