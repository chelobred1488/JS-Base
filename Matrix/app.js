// let a11 = prompt('a11=')
// let a12 = prompt('a12=')
// let a13 = prompt('a13=')
// let a21 = prompt('a21=')
// let a22 = prompt('a22=')
// let a23 = prompt('a23=')
// let a31 = prompt('a31=')
// let a32 = prompt('a32=')
// let a33 = prompt('a33=')

// const matrix = [a11, a12, a13, a21, a22, a23, a31, a32, a33]
// const det = (a11*a22*a33 + a12*a23*a31 + a21*a32*a13) - (a13*a22*a31 + a12*a21*a33 + a23*a32*a11)
// console.log(det)

// const det = (a11, a12, a13, a21, a22, a23, a31, a32, a33) => {
//     return (a11*a22*a33 + a12*a23*a31 + a21*a32*a13) - (a13*a22*a31 + a12*a21*a33 + a23*a32*a11)
// } 

// console.log(det(2, 4, 6, 7, 9, 5, 1, 0, 3))

const a11 = document.getElementById('a11')
const a12 = document.getElementById('a12')
const a13 = document.getElementById('a13')
const a21 = document.getElementById('a21')
const a22 = document.getElementById('a22')
const a23 = document.getElementById('a23')
const a31 = document.getElementById('a31')
const a32 = document.getElementById('a32')
const a33 = document.getElementById('a33')
const result = document.getElementById('result')
const resultMinor = document.getElementById('resultofMinor')

const b11 = document.getElementById('b11')
const b12 = document.getElementById('b12')
const b21 = document.getElementById('b21')
const b22 = document.getElementById('b22')
const secondResult = document.getElementById('secondResult')
const secondResultMinor = document.getElementById('secondMinorResult')

// const matrix = [a11.value, a12.value, a13.value, a21.value, a22.value, a23.value, a31.value, a32.value, a33.value]

// console.log(det)

function showElement() {
    let det = (a11.value*a22.value*a33.value + a12.value*a23.value*a31.value + a21.value*a32.value*a13.value) - (a13.value*a22.value*a31.value + a12.value*a21.value*a33.value + a23.value*a32.value*a11.value)
    console.log(det)
    result.innerText = det
}

function showSecondElement() {
    let detB = b11.value*b22.value - b12.value*b21.value
    console.log(detB)
    secondResult.innerText = detB
}

function findMinor() {
    const minor = prompt('Which minor of matrix do you want to solve?')
    
    switch(minor) {
        case 'm11':
            console.log(a22.value*a33.value - a23.value*a32.value)
            resultMinor.innerHTML = `M₁₁ = ${a22.value*a33.value - a23.value*a32.value}`
            break;
        case 'm12':
            console.log(a21.value*a33.value - a23.value*a31.value)
            resultMinor.innerHTML = `M₁₂ = ${a21.value*a33.value - a23.value*a31.value}`
            break;
        case 'm13':
            console.log(a21.value*a32.value - a22.value*a31.value)
            resultMinor.innerHTML = `M₁₃ = ${a21.value*a32.value - a22.value*a31.value}`
            break;
        case 'm21':
            console.log(a12.value*a33.value - a13.value*a32.value)
            resultMinor.innerHTML = `M₂₁ = ${a12.value*a33.value - a13.value*a32.value}`
            break;
        case 'm22':
            console.log(a11.value*a33.value - a13.value*a31.value)
            resultMinor.innerHTML = `M₂₂ = ${a11.value*a33.value - a13.value*a31.value}`
            break;
        case 'm23':
            console.log(a11.value*a32.value - a12.value*a31.value)
            resultMinor.innerHTML = `M₂₃ = ${a11.value*a32.value - a12.value*a31.value}`
            break;
        case 'm31':
            console.log(a12.value*a23.value - a13.value*a22.value)
            resultMinor.innerHTML = `M₃₁ = ${a12.value*a23.value - a13.value*a22.value}`
            break;
        case 'm32':
            console.log(a11.value*a23.value - a13.value*a21.value)
            resultMinor.innerHTML = `M₃₂ = ${a11.value*a23.value - a13.value*a21.value}`
            break;
        case 'm33':
            console.log(a11.value*a22.value - a12.value*a21.value)
            resultMinor.innerHTML = `M₃₃ = ${a11.value*a22.value - a12.value*a21.value}`
            break;
        default: alert('OOps! Something went wrong. Please, write a correct form of minors like this: " m11 " ')
        findMinor()
    }
}

function findSecondMinor() {
    const secondMinor = prompt('Which minor of matrix do you want to solve?')


    switch(secondMinor) {
        case 'm11':
            secondResultMinor.innerText = `M₁₁ = ${b22.value}`
            break;
        case 'm12':
            secondResultMinor.innerText = `M₁₂ = ${b21.value}`
            break;
        case 'm21':
            secondResultMinor.innerText = `M₂₁ = ${b12.value}`
            break;
        case 'm22':
            secondResultMinor.innerText = `M₂₂ = ${b11.value}`
            break;
        default: alert('OOps! Something went wrong. Please, write a correct form of minors like this: " m11 " ')
        findSecondMinor()
    }
}