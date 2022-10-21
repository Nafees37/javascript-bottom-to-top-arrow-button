let arrow_Div = document.getElementById("arrowMain");

window.onscroll = function () {
    let scrollOption = scrollY;

    if (scrollOption > 1000) {
        arrow_Div.classList.add("active");
    } else {
        arrow_Div.classList.remove("active");
    }
};
