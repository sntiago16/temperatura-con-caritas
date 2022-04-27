let temp: string;
while (true) {
    temp = "" + input.temperature()
    if (input.temperature() > 30) {
        basic.showIcon(IconNames.Skull)
        basic.showString(temp)
    } else if (input.temperature() >= 20 && input.temperature() <= 30) {
        basic.showIcon(IconNames.Happy)
        basic.showString(temp)
    } else {
        basic.showIcon(IconNames.Ghost)
        basic.showString(temp)
    }
    
}
