function move_ww1 () {
    if (move == 0) {
        move_X = 1
        move_Y = 0
    }
    if (move == 1) {
        move_X = 0
        move_Y = 1
    }
    if (move == 2) {
        move_X = -1
        move_Y = 0
    }
    if (move == 3) {
        move_X = 0
        move_Y = -1
    }
    start_X += move_X
    start_Y += move_Y
}
input.onButtonPressed(Button.A, function () {
    move += -1
    if (move < 0) {
        move = 3
    }
})
input.onButtonPressed(Button.AB, function () {
    run = 1
    move = 0
    what_time_to_move_one_time = 1000
    move_X = 1
    move_Y = 0
    start_X = 0
    start_Y = 0
    egg_y = 4
    egg_x = 4
    list_X = [start_X]
    list_Y = [start_Y]
    score = 0
})
input.onButtonPressed(Button.B, function () {
    move += 1
    if (move > 3) {
        move = 0
    }
})
let score = 0
let list_Y: number[] = []
let list_X: number[] = []
let egg_x = 0
let egg_y = 0
let what_time_to_move_one_time = 0
let start_Y = 0
let start_X = 0
let move_Y = 0
let move_X = 0
let move = 0
let run = 0
run = 0
basic.forever(function () {
    basic.clearScreen()
    move_ww1()
    if (run == 1) {
        if (start_X < 0 || start_X > 4) {
            run = 0
            basic.showNumber(score)
        } else if (start_Y < 0 || start_Y > 4) {
            run = 0
            basic.showNumber(score)
        }
    }
    if (start_X == egg_x && start_Y == egg_y) {
        list_X[0] = start_X
        list_Y[0] = start_Y
        egg_x = randint(0, 4)
        egg_y = randint(0, 4)
        score += 1
        what_time_to_move_one_time += -70
    } else {
        list_X[0] = start_X
        list_Y[0] = start_Y
        list_X.pop()
        list_Y.pop()
    }
    for (let index = 0; index <= list_X.length - 1; index++) {
        led.plotBrightness(list_X[index], list_Y[index], 255)
    }
    led.plotBrightness(egg_x, egg_y, 47)
    led.plotBrightness(start_X, start_Y, 255)
    basic.pause(what_time_to_move_one_time)
})
