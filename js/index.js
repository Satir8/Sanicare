"use strict";

M.AutoInit();

const elem = document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true,
    });
});
