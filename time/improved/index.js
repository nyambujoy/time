function updateClock() {
    const hourElement = document.getElementById("hour")
    const minuteElement = document.getElementById("minute")
    const secondsElement = document.getElementById("seconds")
    const ampmElement = document.getElementById("ampm")

    h = new Date().getHours()


    m = new Date().getMinutes()


    s = new Date().getSeconds()
    let ampm = "Am"




    if (h > 12) {
        h = h - 12
        ampm = "Pm"
    }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s


    hourElement.innerText = h
    minuteElement.innerText = m
    secondsElement.innerText = s
    ampmElement.innerText = ampm

    setTimeout(() => {
        updateClock()
    }, 1000);

}

updateClock()