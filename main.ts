radio.onReceivedNumber(function (receivedNumber) {
    time = time + radio.receivedPacket(RadioPacketProperty.Time)
    distance = time * 299792458 / 2
    basic.showNumber(distance)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("starlink")
})
radio.onReceivedString(function (receivedString) {
    time = radio.receivedPacket(RadioPacketProperty.Time)
    radio.sendNumber(time)
})
let distance = 0
let time = 0
radio.setGroup(195)
