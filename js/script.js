console.log('hello world!');
//Constructor Function
function ghoul(nationality, age, color, height) {
    this.nationality = 'Spanish'
    this.age = 42
    this.color = 'green'
    this.height = '4 foot'
}
function zombie(nationality, age, color) {
    this.nationality = 'Porto Rican'
    this.age = 12
    this.color = 'blue'
    this.height = '6 foot'
}
function ghost(nationality, age, color) {
    this.nationality = Chinese
    this.age = 119
    this.color = Transparent
    this.height = 'N/A'
}
const ghoulElement = document.getElementById('ghoul');
const zombieElement = document.getElementById('zombie')
const ghostElement = document.getElementById('ghost')