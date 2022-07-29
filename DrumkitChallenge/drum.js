const boom = document.getElementById('boom');
const clap = document.getElementById('clap');
const hihat = document.getElementById('hihat');
const kick = document.getElementById('kick');
const openhat = document.getElementById('openhat');
const ride = document.getElementById('ride');
const snare = document.getElementById('snare');
const tink = document.getElementById('tink');
const tom = document.getElementById('tom');

let boomSound = new Audio ('./sounds/boom.wav');
let clapSound = new Audio ('./sounds/clap.wav');
let hihatSound = new Audio ('./sounds/hihat.wav');
let kickSound = new Audio ('./sounds/kick.wav');
let openhatSound = new Audio ('./sounds/openhat.wav');
let rideSound = new Audio ('./sounds/ride.wav');
let snareSound = new Audio ('./sounds/snare.wav');
let tinkSound = new Audio ('./sounds/tink.wav');
let tomSound = new Audio ('./sounds/tom.wav');

boom.addEventListener('click', () => {
        boomSound.pause()
        boomSound.currentTime = 0
        boomSound.play();
})

boom2.addEventListener('click', () => {
    boomSound.pause()
    boomSound.currentTime = 0
    boomSound.play();
})

clap.addEventListener('click', () => {
    clapSound.pause()
    clapSound.currentTime = 0
    clapSound.play();
})

clap2.addEventListener('click', () => {
    clapSound.pause()
    clapSound.currentTime = 0
    clapSound.play();
})

hihat.addEventListener('click', () => {
    hihatSound.pause()
    hihatSound.currentTime = 0
    hihatSound.play();
})

hihat2.addEventListener('click', () => {
    hihatSound.pause()
    hihatSound.currentTime = 0
    hihatSound.play();
})

kick.addEventListener('click', () => {
    kickSound.pause()
    kickSound.currentTime = 0
    kickSound.play();
})

kick2.addEventListener('click', () => {
    kickSound.pause()
    kickSound.currentTime = 0
    kickSound.play();
})

openhat.addEventListener('click', () => {
    openhatSound.pause()
    openhatSound.currentTime = 0
    openhatSound.play();
})

openhat2.addEventListener('click', () => {
    openhatSound.pause()
    openhatSound.currentTime = 0
    openhatSound.play();
})

ride.addEventListener('click', () => {
    rideSound.pause()
    rideSound.currentTime = 0
    rideSound.play();
})

ride2.addEventListener('click', () => {
    rideSound.pause()
    rideSound.currentTime = 0
    rideSound.play();
})

snare.addEventListener('click', () => {
    snareSound.pause()
    snareSound.currentTime = 0
    snareSound.play();
})

snare2.addEventListener('click', () => {
    snareSound.pause()
    snareSound.currentTime = 0
    snareSound.play();
})

tink.addEventListener('click', () => {
    tinkSound.pause()
    tinkSound.currentTime = 0
    tinkSound.play();
})

tink2.addEventListener('click', () => {
    tinkSound.pause()
    tinkSound.currentTime = 0
    tinkSound.play();
})

tom.addEventListener('click', () => {
    tomSound.pause()
    tomSound.currentTime = 0
    tomSound.play();
})

tom2.addEventListener('click', () => {
    tomSound.pause()
    tomSound.currentTime = 0
    tomSound.play();
})
