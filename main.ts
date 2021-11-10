let LED_X = 2
let y = 2
led.plot(LED_X, y)
let ZufallY = randint(0, 4)
let Zufallx = randint(0, 4)
led.plot(Zufallx, ZufallY)
let Punkte = 0
basic.forever(function () {
    if (Zufallx == LED_X && y == ZufallY) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(2000)
        basic.clearScreen()
        Punkte += 1
        basic.showNumber(Punkte)
        basic.pause(1000)
        basic.clearScreen()
        LED_X = 2
        y = 2
        led.plot(LED_X, y)
        ZufallY = randint(0, 4)
        Zufallx = randint(0, 4)
        led.plot(Zufallx, ZufallY)
    }
    if (input.buttonIsPressed(Button.AB)) {
        led.unplot(LED_X, y)
        LED_X = 2
        y = 2
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.Y) < -200) {
        basic.pause(200)
        led.unplot(LED_X, y)
        y += -1
    } else if (input.acceleration(Dimension.Y) > 200) {
        basic.pause(200)
        led.unplot(LED_X, y)
        y += 1
    }
    if (y > 4) {
        y = 4
    }
    if (y < 0) {
        y = 0
    }
    led.plot(LED_X, y)
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -200) {
        basic.pause(200)
        led.unplot(LED_X, y)
        LED_X += -1
    } else if (input.acceleration(Dimension.X) > 200) {
        basic.pause(200)
        led.unplot(LED_X, y)
        LED_X += 1
    }
    if (LED_X > 4) {
        LED_X = 4
    }
    if (LED_X < 0) {
        LED_X = 0
    }
    led.plot(LED_X, y)
})
