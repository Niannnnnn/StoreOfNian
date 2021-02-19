radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.StickFigure)
    } else if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
radio.setGroup(1)
basic.forever(function () {
    if (input.lightLevel() > 0 && input.lightLevel() <= 10) {
        // 发送数字1的时候 说明此时光线过暗
        radio.sendNumber(1)
    }
    if (input.lightLevel() > 10 && input.lightLevel() < 255) {
        // 发送数字0的时候 说明此时光线正常
        radio.sendNumber(0)
    }
})
