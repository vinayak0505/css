
var skills = document.getElementById("skills");
var set = document.querySelectorAll("#skills>div>div>div");
var show = new Array(set.length).fill(false);

window.addEventListener("scroll", function () {
    for (let index = 0; index < set.length; index++) {
        const div = set[index];
        if (div.getBoundingClientRect().top <= this.window.innerHeight) {
            if (show[index] == false) {
                show[index] = true;
                let width = div.offsetWidth;
                div.style.width = 0;
                let interval = setInterval(function () {
                    if (width <= div.offsetWidth) {
                        clearInterval(interval);
                        return;
                    }
                    div.style.width = (div.offsetWidth + 1) + "px";
                }, 30);
            }
        } else show[index] = false;
    }
})