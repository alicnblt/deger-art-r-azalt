// localStorage ile eklediğimiz counter bilgisini yani son olarak elde ettiğimiz bilgi gelir
// counter ın içerisinde bilgi var mı? varsa number a çevir yoksa 0 a eşitle dedik
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0  // Değerimizi number olarak almamız gerektiğini belirttik

let counterDOM = document.querySelector('#counter')

let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter //tanımladığımız counter daki bilgiyi gösterdik

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)


function clickEvent(){
    console.log(this.id)
    this.id == "increase" ? counter += 1 : counter -= 1   // Bir artır bir azalt işlemini yaptık
    localStorage.setItem('counter', counter)               // localStorage ekleme yapmak
    counterDOM.innerHTML = counter                         // counter değerini eşitledik uzun tanımlamadan kurtardık
}
