let timeOut = setTimeout(() => {
    console.log("Affiche après X millisecond")
}, 3000)


document.getElementById("stopTimeOut").addEventListener("click", () => {

    clearTimeout(timeOut)

})



// setInterval(() => {
//     console.log("Affiche toute les X millisecond")
// }, 1000)


let interval

document.getElementById("intervalTest").addEventListener("click", () => {

    clearInterval(interval)

})


document.getElementById("intervalTestStart").addEventListener("click", () => {
    clearInterval(interval)
    interval = setInterval(() => {
        console.log("Une info récup dans une var toute les x milli")
    }, 500)

})

