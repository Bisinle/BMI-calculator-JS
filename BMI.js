const BmiDIV = document.createElement('div')
BmiDIV.classList.add('container')
document.body.appendChild(BmiDIV)

const header =  document.createElement('h1')
header.innerText = 'BMI CALCULATOR'
BmiDIV.append(header)
header.classList.add('h1')

const heightInput = document.createElement('input')
const weightInput = document.createElement('input')
heightInput.setAttribute('type', 'text')
weightInput.setAttribute('type', 'text')
heightInput.min =0
weightInput.min =0
heightInput.setAttribute('placeholder', 'Enter  Height in meters')
weightInput.setAttribute('placeholder', 'Enter  Weights in kgs')
heightInput.classList.add('input')
weightInput.classList.add('input')
BmiDIV.append(heightInput)
BmiDIV.append(weightInput)


const btn = document.createElement ('button')
btn.innerText = 'Calculate'
btn.classList.add('btn')
BmiDIV.append(btn)

btn.addEventListener('click', function (){
  let EnteredHeight = heightInput.value
  let EnteredWeight = weightInput.value

 let BMI = Math.floor((EnteredWeight)/(Math.pow(EnteredHeight,2)))

 let comment = document.createElement('p')
 comment.textContent =`Your BMI is${BMI} `
BmiDIV.append(comment)


})
