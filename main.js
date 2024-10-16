
function show() {
    const slidebar = document.querySelector(".slidebar");
    const bars = document.getElementById("bars");
    const cross = document.getElementById("cross");

    slidebar.style.display = "flex";
    bars.style.display = "none";
    cross.style.display = "block";
}

function hideslider() {
    console.log("Hide function triggered");
    const slidebar = document.querySelector(".slidebar");
    const bars = document.getElementById("bars");
    const cross = document.getElementById("cross");

    slidebar.style.display = "none";
    bars.style.display = "block";
    cross.style.display = "none";
}
