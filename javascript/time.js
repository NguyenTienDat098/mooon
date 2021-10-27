var showTime = function() {
    var time = new Date();
    var hour = time.getHours();
    var second = time.getSeconds();
    var minutes = time.getMinutes();
    document.querySelector(".hour").textContent = hour;
    document.querySelector(".minutes").textContent = minutes;
    document.querySelector(".second").textContent = second;
};
setInterval(showTime, 1000);