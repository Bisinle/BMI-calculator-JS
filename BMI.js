const BmiDIV = document.createElement('div')
BmiDIV.classList.add('container')
document.body.appendChild(BmiDIV)

const header =  document.createElement('h1')
header.innerText = 'BMI CALCULATOR'
BmiDIV.append(header)
header.classList.add('h1')

const weightInput = document.createElement('input')
const heightInput = document.createElement('input')
heightInput.setAttribute('type', 'number')
weightInput.setAttribute('type', 'number')
heightInput.min =0
weightInput.min =0
weightInput.setAttribute('placeholder', 'Enter  Weights in kgs')
heightInput.setAttribute('placeholder', 'Enter  Height in meters')
heightInput.classList.add('input')
weightInput.classList.add('input')
BmiDIV.append(heightInput)
BmiDIV.append(weightInput)


const btn = document.createElement ('button')
btn.innerText = 'Calculate'
btn.classList.add('btn')
BmiDIV.append(btn)

let comment = document.createElement('p')
comment.classList.add('p')
BmiDIV.append(comment)


btn.addEventListener('click', function (){
  let EnteredHeight = heightInput.value
  let EnteredWeight = weightInput.value
  let BMI = (EnteredWeight)/(Math.pow(EnteredHeight,2))
  let RoundedBMI = Math.round(BMI) 
  comment.textContent =`Your BMI is ${RoundedBMI}`  
  heightInput.value = '' 
  weightInput.value = ''


})


