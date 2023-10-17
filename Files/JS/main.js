function Write_time()
{
    const Time = document.querySelector(".Time")
    var time = new Date()
    var min = time.getMinutes()
    var sec = time.getSeconds()
    var hou = time.getHours()
    Time.innerHTML = sec + " : " + min + " : " + hou
}
window.setInterval(Write_time, 1000)