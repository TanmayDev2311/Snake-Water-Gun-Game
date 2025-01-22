let snake = document.getElementById("snake")
let water = document.getElementById("water")
let gun = document.getElementById("gun")
let replay = document.getElementById("play")


//mapping replay button to reload/refresh the page
replay.addEventListener("click", () => {
    location.reload()
}
)

replay.style.display = "none"

let options = {
    0: "snake",
    1: "water",
    2: "gun"
}

//function for computer to chose one of the elements randomly
function chooser(obj) {
    let rand = Math.floor(Math.random() * Object.keys(obj).length)
    let count = 0;

    for (const key in obj) {
        if (count == rand) {
            let selected = obj[key]
            return selected
        }
        count++;
    }
}



//computer choice announcement function which takes any of three the elements as arguments
async function announce(element) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cpu = document.createElement("span")
            cpu.innerHTML = `Computer Choosed : ${element} `
            document.querySelector(".ai-choice").append(cpu);

        }, 1000);
        resolve()
    }
    )
}


//function to make the repaly button reappear
async function appear() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            replay.style.display = "block"
        }, 1800);
        resolve()
    })
}




//result announcement function which takes win,lose or tie as an argument
async function result(victory) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let alert = document.createElement("div")
            alert.className = "result"

            if (victory == "win") {
                alert.innerHTML = "YOU WIN !!!"
            }
            else if (victory == "lost") {
                alert.innerHTML = "YOU LOSE !"
            }
            else if (victory == "tied") {
                alert.innerHTML = "IT'S A TIE !!"
            }
            document.querySelector(".announcement").append(alert);

        }, 1500);
        resolve();
    }
    )


}

//if user choses snake
snake.addEventListener("click", () => {

    snake.style.boxShadow = "0px 8px 12px 7px rgb(50, 49, 58)" //effect to visulalize click

    //announcing cpu's choice
    let final = chooser(options)

    //if computer choses snake
    if (final == "snake") {
        (async function tie() {
            await announce("🐍")
            await result("tied")
        })()
    }
    //if computer choses water
    else if (final == "water") {
        (async function win() {
            await announce("🌊")
            await result("win")
        })()
    }
    //if computer choses gun
    else if (final == "gun") {
        (async function lost() {
            await announce("🔫")
            await result("lost")
        })()
    }

    (async function appearance() {
        await appear()
    })();

    
})


//if user choses water
water.addEventListener("click", () => {

    water.style.boxShadow = "0px 8px 12px 7px rgb(50, 49, 58)" //effect to visualise click

    //announcing cpu's choice
    let final = chooser(options)

    //if computer choses snake
    if (final == "snake") {
        (async function lost() {
            await announce("🐍")
            await result("lost")
        })()
    }
    //if computer choses water
    else if (final == "water") {
        (async function tied() {
            await announce("🌊")
            await result("tied")
        })()
    }
    //if computer choses gun
    else if (final == "gun") {
        (async function win() {
            await announce("🔫")
            await result("win")
        })()
    }

    (async function appearance() {
        await appear()
    })()

})
//if user choses gun
gun.addEventListener("click", () => {

    gun.style.boxShadow = "0px 8px 12px 7px rgb(50, 49, 58)" //effect to visualize click

    //announcing cpu's choice
    let final = chooser(options)

    //if computer choses snake
    if (final == "snake") {
        (async function win() {
            await announce("🐍")
            await result("win")
        })()
    }
    //if computer choses water
    else if (final == "water") {
        (async function lost() {
            await announce("🌊")
            await result("lost")
        })()
    }
    //if computer choses gun
    else if (final == "gun") {
        (async function tied() {
            await announce("🔫")
            await result("tied")
        })()
    }

    (async function appearance() {
        await appear()
    })()

})