const taglines = [
    "PERFORMANCE ACCELERATED",
    "ACCELERATED DESIGN AND PERFORMANCE",
    "ACCELERATING YOUR PERFORMANCE",
    "PERFORMANCE WITH PRECISION",
    "ACCELERATED ENGINEERING AND PERFORMANCE",
    "DESIGNED TO ACCELERATE YOUR PERFORMANCE",
];

let num = 0;



$(document).ready(function(){
    $('.tagline').on('click', function(){
        if (num > taglines.length){
            num = 0;
        }
        $(this).html(taglines[num])
        num++;
    });
});