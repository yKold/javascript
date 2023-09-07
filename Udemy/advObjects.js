class player{
    constructor(name, type) {
        console.log('player', this)
        this.name = name
        this.type = type
    }
    introduce() {
        console.log(`Hi I'm ${this.name}`)
    }
}
class wizard extends player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this)
    }
    play() {
        console.log('Weeee' + this.type)
    }
}
const wizard1 = new wizard('shelly', 'healer')