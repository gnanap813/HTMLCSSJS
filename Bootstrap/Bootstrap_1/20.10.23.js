const idleTimeInSeconds = 15
let completedTimeInSeconds = 0

const intervalFunc = setInterval(timer, 1000)

function timer() {

    const timeLeftInSeconds = (idleTimeInSeconds - completedTimeInSeconds) % 60

    const timeLeftInMins = parseInt((idleTimeInSeconds - completedTimeInSeconds) / 60)

    const timeStr = appendZero(timeLeftInMins) + ':' + appendZero(timeLeftInSeconds)

    // console.log(timeStr)
    // document.getElementById('timeleft').innerHTML = timeStr
    // self.postMessage(timeStr)
    // completedTimeInSeconds++

    if (idleTimeInSeconds < completedTimeInSeconds) {
        clearInterval(intervalFunc)
        postMessage('Your session has been completed')
    } else {
        postMessage(timeStr)
        completedTimeInSeconds++

    }

}
function appendZero(value) {
    return value.toString().length === 1 ? '0' + value : value
}
