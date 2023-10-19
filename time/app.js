function setTime() {

    const clock = document.getElementById("time")
    let now = new Date()
    let updateTime = now.toLocaleTimeString()
    clock.textContent = updateTime

}

setInterval(setTime(), 1000)