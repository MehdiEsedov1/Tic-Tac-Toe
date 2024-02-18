const boxes = document.querySelectorAll(".box");
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");
const box5 = document.querySelector("#box5");
const box6 = document.querySelector("#box6");
const box7 = document.querySelector("#box7");
const box8 = document.querySelector("#box8");
const box9 = document.querySelector("#box9");

let i = 0;
let yp = 0;
let xp = 0;
let point_selector;

function boxClickHandler(e) {
    const box = e.target;
    const x = document.createElement("div");
    x.setAttribute("class", "x");
    const y = document.createElement("div");
    y.setAttribute("class", "y");

    if (i === 0 || i === 2 || i === 4 || i === 6 || i === 8) {
        i++;
        box.appendChild(x);
        box.setAttribute("data-value", "1");
    } else {
        i++;
        box.appendChild(y);
        box.setAttribute("data-value", "2");
    }
    box.removeEventListener("click", boxClickHandler);
    e.preventDefault();
    winWarning();
}


boxes.forEach(box => {
    box.addEventListener("click", boxClickHandler);
});


function winWarning() {
    if (box1.dataset.value == "1" && box2.dataset.value == "1" && box3.dataset.value == "1" && box1.dataset.value !== undefined && box2.dataset.value !== undefined && box3.dataset.value !== undefined ||
        box4.dataset.value == "1" && box5.dataset.value == "1" && box6.dataset.value == "1" && box4.dataset.value !== undefined && box5.dataset.value !== undefined && box6.dataset.value !== undefined ||
        box7.dataset.value == "1" && box8.dataset.value == "1" && box9.dataset.value == "1" && box7.dataset.value !== undefined && box8.dataset.value !== undefined && box9.dataset.value !== undefined ||
        box1.dataset.value == "1" && box4.dataset.value == "1" && box7.dataset.value == "1" && box1.dataset.value !== undefined && box4.dataset.value !== undefined && box7.dataset.value !== undefined ||
        box2.dataset.value == "1" && box5.dataset.value == "1" && box8.dataset.value == "1" && box2.dataset.value !== undefined && box5.dataset.value !== undefined && box8.dataset.value !== undefined ||
        box3.dataset.value == "1" && box6.dataset.value == "1" && box9.dataset.value == "1" && box3.dataset.value !== undefined && box6.dataset.value !== undefined && box9.dataset.value !== undefined ||
        box1.dataset.value == "1" && box5.dataset.value == "1" && box9.dataset.value == "1" && box1.dataset.value !== undefined && box5.dataset.value !== undefined && box9.dataset.value !== undefined ||
        box3.dataset.value == "1" && box5.dataset.value == "1" && box7.dataset.value == "1" && box3.dataset.value !== undefined && box5.dataset.value !== undefined && box7.dataset.value !== undefined
    ) {
        result_x();
    }

    else if (
        box1.dataset.value == "2" && box2.dataset.value == "2" && box3.dataset.value == "2" && box1.dataset.value !== undefined && box2.dataset.value !== undefined && box3.dataset.value !== undefined ||
        box4.dataset.value == "2" && box5.dataset.value == "2" && box6.dataset.value == "2" && box4.dataset.value !== undefined && box5.dataset.value !== undefined && box6.dataset.value !== undefined ||
        box7.dataset.value == "2" && box8.dataset.value == "2" && box9.dataset.value == "2" && box7.dataset.value !== undefined && box8.dataset.value !== undefined && box9.dataset.value !== undefined ||
        box1.dataset.value == "2" && box4.dataset.value == "2" && box7.dataset.value == "2" && box1.dataset.value !== undefined && box4.dataset.value !== undefined && box7.dataset.value !== undefined ||
        box2.dataset.value == "2" && box5.dataset.value == "2" && box8.dataset.value == "2" && box2.dataset.value !== undefined && box5.dataset.value !== undefined && box8.dataset.value !== undefined ||
        box3.dataset.value == "2" && box6.dataset.value == "2" && box9.dataset.value == "2" && box3.dataset.value !== undefined && box6.dataset.value !== undefined && box9.dataset.value !== undefined ||
        box1.dataset.value == "2" && box5.dataset.value == "2" && box9.dataset.value == "2" && box1.dataset.value !== undefined && box5.dataset.value !== undefined && box9.dataset.value !== undefined ||
        box3.dataset.value == "2" && box5.dataset.value == "2" && box7.dataset.value == "2" && box3.dataset.value !== undefined && box5.dataset.value !== undefined && box7.dataset.value !== undefined
    ) {
        result_y();
    }

    else if (
        box1.dataset.value !== undefined && box2.dataset.value !== undefined && box3.dataset.value !== undefined &&
        box4.dataset.value !== undefined && box5.dataset.value !== undefined && box6.dataset.value !== undefined &&
        box7.dataset.value !== undefined && box8.dataset.value !== undefined && box9.dataset.value !== undefined &&
        box1.dataset.value !== undefined && box4.dataset.value !== undefined && box7.dataset.value !== undefined &&
        box2.dataset.value !== undefined && box5.dataset.value !== undefined && box8.dataset.value !== undefined &&
        box3.dataset.value !== undefined && box6.dataset.value !== undefined && box9.dataset.value !== undefined &&
        box1.dataset.value !== undefined && box5.dataset.value !== undefined && box9.dataset.value !== undefined &&
        box3.dataset.value !== undefined && box5.dataset.value !== undefined && box7.dataset.value !== undefined
    ) {
        result_draw();
    }
}


function result_x() {
    const winner_x = document.querySelector(".winner");
    winner_x.setAttribute("style", 'background-image: url("https://res.cloudinary.com/dxiiuhv5z/image/upload/v1708264589/Untitled_design_22_ioitx8.png")');
    open_resultpage();
    point_selector = true;
    getPointToStorage();
}


function result_y() {
    const winner_y = document.querySelector(".winner");
    winner_y.setAttribute("style", 'background-image: url("https://res.cloudinary.com/dxiiuhv5z/image/upload/v1708264589/Untitled_design_23_tnuruc.png")');
    open_resultpage();
    point_selector = false;
    getPointToStorage();
}


function result_draw() {
    const result = document.querySelector(".result").children[1];
    result.textContent = "Draw";

    const winner = document.querySelector(".winner");
    winner.setAttribute("style", "display:none;");
    open_resultpage();
}


function open_resultpage() {
    const result_page = document.querySelector(".result-container");
    result_page.setAttribute("style", "display:flex;");
}


function setPointToStorage(yp, xp) {
    if (point_selector) {
        xp++;
    }
    else {
        yp++;
    }


    setPointToUI(yp, xp);
    localStorage.setItem("yp", yp);
    localStorage.setItem("xp", xp);
}


function getPointToStorage() {
    if (localStorage.getItem("yp") === null && localStorage.getItem("xp") === null) {

        localStorage.setItem("yp", yp);
        localStorage.setItem("xp", xp);

        const ypp = localStorage.getItem("yp");
        const xpp = localStorage.getItem("xp");

        setPointToStorage(ypp, xpp);
    }
    else {
        const yp = localStorage.getItem("yp");
        const xp = localStorage.getItem("xp");
        setPointToStorage(yp, xp);
    }
}


function setPointToUI(pointY, pointX) {
    const yp = document.querySelector(".points #y");
    const xp = document.querySelector(".points #x");

    yp.textContent = `:${pointY}`;
    xp.textContent = `${pointX}:`;

}


const rematch = document.querySelector(".rematch button");
const new_match = document.querySelector(".new-match button");

rematch.addEventListener("click", frematch);
new_match.addEventListener("click", fnew_match);


function frematch() {
    location.reload();
}


function fnew_match() {
    localStorage.removeItem("xp");
    localStorage.removeItem("yp");
    location.reload();
}


document.addEventListener("DOMContentLoaded", function () {
    const xps = localStorage.getItem("xp");
    const yps = localStorage.getItem("yp");

    if (xps === null) {
        yp.textContent = `:0`;
        xp.textContent = `0:`;
    }

    else {
        const yp = document.querySelector(".points #y");
        const xp = document.querySelector(".points #x");

        yp.textContent = `:${yps}`;
        xp.textContent = `${xps}:`;
    }
})