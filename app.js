function scroll_to_left(){
    console.log('numeroSecreto');
}

function scrollToEndOfDiv() {
    const left_arrow = document.getElementById("quotes-left-arrow");
    const div = document.getElementById("quotes-left");
    if (div) {
        div.scrollTo({
            left: div.scrollWidth,
            behavior: "smooth"
        });
    }
    left_arrow.style.visibility = "visible";
}

function scrollToStartOfDiv() {
    const div = document.getElementById("quotes-left");
    if (div) {
        div.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    }
}
