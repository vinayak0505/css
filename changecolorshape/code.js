var shape = document.getElementById("shape");
var circle = document.getElementById("circle");

var shapes = [
    "fa-solid fa-circle",
    "fa-solid fa-square",
    "fa-solid fa-play"
];

var colors = [
    'red',
    'green',
    'black',
    'yellow',
    'blue'
]

var shape_selected = 0;
var color_selected = 0;

document.getElementById("change-shape").addEventListener('click',function(){
    shape_selected++;
    shape_selected %= 3;
    shape.className = shapes[shape_selected];
})


document.getElementById("change-color").addEventListener('click',function(){
    color_selected++;
    color_selected %= 5;
    circle.style.backgroundColor = colors[color_selected];
})