console.log("Connected...")
var open = false;
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
function start_menu()
{
    let menu = document.getElementById("Menu-con")
    let btn = document.getElementById("menu-btn")
    if (open == false)
    {
        menu.style.left = "-80px";
        open = true;
    }
    else if (open == true)
    {
        menu.style.left = "-300px";
        open = false;
    }
}