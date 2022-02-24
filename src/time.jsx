function updateTime() {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());


  
}

const display1 = document.getElementById('hour');
const display2 = document.getElementById('minutes');
const display3 = document.getElementById('seconds');