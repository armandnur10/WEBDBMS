//identifyer

/**
 * identifier adalah penamaa variable. fungsi ataupun parameter
 * karakter pertamanya hanya bisa hruf a-z, atau A-Z dan simbol underscore atau dollar
 * tidak bisa menggunakan angka di depan
 * tidak boleh menggunakan bahasa yang sudah ada default pada js
 */

//Statement

/**
 * statement = suatu pernyataan js yang paling dasar dan memiliki tugas tertentu.
 */

// let name = "Hello World" //statement dasar/biasa
// console.log(name);

//expression
/**
 * expression merupakan ekspresi js yang berfungsi untuk menghasilkan nilai tertentu
 */

// let first = 1
// let second = 2
// let result = first + second

// if(result > 4){
//     console.log("maka dia akan tampil")
// }else{
//     console.log("hasilnya adalah " + result)
// }

//scope
/**
 * cakupan kode agar bisa mengakses atau membatasi
 */

//global scope
/**
 * global scope merupakan cakupan di seluruh file
 */
// console.log(c)
// var a = "hallo"

// function first (){
//     if(true){
//         var b = 'hello'
//     }
//     console.log(b)
//     console.log(a)
// }

// function second (){
//      a = "bedul"
//      console.log(a)
// }
// first()
// second()

// const a = 'mobil'

// function kendaraan() {
//     console.log(a)
//     // if(true){
//     //     let b = 'motor'
//     //     b = 'sepeda'
//     //     console.log(b)
//     // }
// }
// kendaraan()

var motor = 'ducati'


function kendaraan() {

    const pesawat = 'jet'
    console.log(motor) //saya menggunakan var di taruh di bagian paling luar agar bisa dibaca oleh semua(global scope)
    if (true) {
        let sepeda = 'ontel'
        console.log(sepeda) //saya menggunakan let agar hanya bisa dibaca oleh bagian if saja(block scope)
        console.log(pesawat) //saya menggunakan const dan ditaruh di function kendaraan agar bisa dibaca di function kendaraan saja

    }
}
kendaraan()