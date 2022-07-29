//activity 1

const submitVal = document.getElementById ('submit')
const image = document.getElementById ('Image1')

submitVal.addEventListener ('click', () => {
    if (image.style.visibility == 'visible')
    {
        image.style.visibility = 'hidden'
    }
    else image.style.visibility = 'visible'
})

//activity 2
const newImage = document.getElementById('myImage')
const enter = document.getElementById('enter')

enter.addEventListener ('click', () => {
    newImage.src = 'https://th.bing.com/th/id/OIP.GrXV5MvN6SJIr6Y_YztsvwHaE7?pid=ImgDet&rs=1' 
})

//activity 3
const heading = document.getElementById('heading')
const input = document.getElementById('inputBox')
const go = document.getElementById('change')

go.addEventListener('click', () => {
    heading.style.color = input.value;
})

//activity 4