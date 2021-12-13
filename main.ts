radio.onReceivedNumber(function (receivedNumber) {
    cuteBot.stopcar()
})
radio.onReceivedValue(function (name, value) {
    if (name == "double") {
        cuteBot.motors(value, value)
    } else if (name == "right") {
        cuteBot.motors(0, value)
    } else if (name == "left") {
        cuteBot.motors(value, 0)
    } else {
    	
    }
})
cuteBot.stopcar()
basic.forever(function () {
    radio.setGroup(7)
})
