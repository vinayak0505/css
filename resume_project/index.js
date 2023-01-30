
var skills = document.getElementById("skills");
var set = document.querySelectorAll("#skills>div>div>div");
var show = false;
window.addEventListener("scroll", function () {
    if (abs(skills.getBoundingClientRect().top - 200) <= 200) {
        if (show == false) {
            show = true;
            set.forEach(div => {
                let width = div.offsetWidth;
                div.style.width = 0;
                let interval = setInterval(function () {
                    if (width <= div.offsetWidth) {
                        clearInterval(interval);
                        return;
                    }
                    div.style.width = (div.offsetWidth + 1) + "px";
                }, 30);
            })
        }
    } else show = false;
})

function abs(value) {
    if (value < 0) return -value;
    return value;
}