const navigation = document.querySelector(".primary-navigation");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);


function scrollToEndOfDiv() {
    const left_arrow = document.getElementById("quotes-left-arrow");
    const right_arrow = document.getElementById("quotes-right");
    const div = document.getElementById("quotes-left");
    if (div) {
        div.scrollTo({
            left: div.scrollWidth,
            behavior: "smooth"
        });
    }
    left_arrow.style.visibility = "visible";
    right_arrow.style.visibility = "hidden";
}

function scrollToStartOfDiv() {
    const left_arrow = document.getElementById("quotes-left-arrow");
    const right_arrow = document.getElementById("quotes-right");
    const div = document.getElementById("quotes-left");
    if (div) {
        div.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    }
    left_arrow.style.visibility = "hidden";
    right_arrow.style.visibility = "visible";
}
