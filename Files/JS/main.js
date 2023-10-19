console.log("Connected...")
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
    var id = null;
    let circle = document.getElementById("circle");
    let item1 = document.getElementById("item1")
    let item2 = document.getElementById("item2")
    var pos = 600;
    clearInterval(id);
    circle.style.visibility = "visible";
    id = setInterval(frame, 10);
    function frame() 
    {
        // first list item: 650
        // second list item: 725
        if (pos == 800) 
        {
            clearInterval(id);
            circle.style.visibility = 'hidden';
        } 
        else 
        {
            if (pos == 650)
            {
                if (item1.style.visibility == 'hidden') 
                {
                    item1.style.visibility = 'visible';
                }
                else 
                {
                    item1.style.visibility = 'hidden';
                }
            }
            else if (pos == 725)
            {
                if (item2.style.visibility == 'hidden') 
                {
                    item2.style.visibility = 'visible';
                }
                else 
                {
                    item2.style.visibility = 'hidden';
                }
            }
            pos += 2.5;
            circle.style.right = pos + 'px'; 
        }
    }
}