function updateClock(){
    const hourElement = document.getElementById('hour')
    const minElement = document.getElementById('min')
    const secElement = document.getElementById('sec')

    const now = new Date();

    const hour = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')

    hourElement.textContent = `${hour}`
    minElement.textContent = `${minutes}`
    secElement.textContent = `${seconds}`
}

setInterval(updateClock, 1000);

window.onload = updateClock;

