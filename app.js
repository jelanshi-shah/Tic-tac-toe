let music = new Audio("music.mp3");
let audiotune = new Audio("ting.mp3");
let gameOverAudio = new Audio("gameover.mp3");
let turn = "X";
let inform = document.querySelector(".info");
let isGameover = false;

let changeTurn = (() => {
    return turn === "X" ? "0" : "X"
});

const checkWin = (() => {

    let boxtext = document.querySelectorAll(".boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach((e) => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            inform.innerText = boxtext[e[0]].innerText + " " + "Won";
            isGameover = true;
            let img = document.getElementsByTagName("img")[0].style.width = "30vh";
            let imgwidth = document.getElementsByTagName("img")[0].style.height = "30vh";
            gameOverAudio.play()


        }


    })
})

// let playmusic = music.play();

let box = Array.from(document.querySelectorAll(".box"));
box.forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        console.log(element.addEventListener);
        if (boxtext.innerText === '') {
            if (!isGameover) {
                boxtext.innerText = turn;
                turn = changeTurn();
                audiotune.play();
                checkWin();


                document.getElementsByClassName("info")[0].innerText = "Turn For" + turn;
            }
        }
    });
})





let reset = document.querySelector("#reset");
reset.addEventListener('click', () => {

    let boxtexts = document.querySelectorAll(".boxtext")
    Array.from(boxtexts).forEach((element) => {
        element.innerText = ""
        turn = "X";
        document.getElementsByClassName("info")[0].innerText = "Turn For" + turn;

        let img = document.getElementsByTagName("img")[0].style.width = "0vh";
        let imgwidth = document.getElementsByTagName("img")[0].style.height = "0vh";

    });

})

