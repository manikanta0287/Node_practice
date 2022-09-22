const number = '120'
console.log(number);

/* for(i=1;i<=10;i++){
    console.log("5 multiple is ",i*5)
}


for(let i=1;i<=10;i++){
    console.log("6 multiple is ",i*6)
}

let array = [1,2,3,4,5,"mani", 'kanta'];

console.log(array);

var j =0
console.log(j) */

// for (k=1;k<=13;k++){
//     if(k)
// }


let a = 12;
console.log(a);

var b = 12;
console.log(b);



function combine(){
    var kk = 'naresh';

    if (kk == 'naresh'){
        let mm = 'manikanta';
        console.log(kk+ ' '+ mm);
    }
    // console.log(kk+ ' '+ mm); //error
}

combine()


function letter(){
    var a = "mkmkm";
    console.log(a);
}

letter();


//-----------------------------------------------------arrays---------------------------------------
let city = ['kolkata', 'chennai', 'Mumbai'];

let len = city.length;

console.log("length of the array :",len);

//Using Array length in for loop

var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

for (i = 0; i < languages.length; i++){
    console.log(languages[i]);
}