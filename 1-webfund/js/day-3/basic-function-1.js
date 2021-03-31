// Predict the output of the following code snippets.
// NOTE: run each code snippet on it's own

// Correct predictions 15/15; these were mostly trick questions

function a(){
    return 35;
}
console.log(a())

// Pretty obvious, you get 35

function a(){
    return 4;
}
console.log(a()+a());

// 4+4 = 8

function a(b){
    return b;
}
console.log(a(2)+a(4));

// 2+4 = 6

function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

// 3
// 9

function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));

// 40; console.log below return invalid

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

// 4; console.log below return invalid

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

// 10 3; a was never called
// 30

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

// 3
// 4; a was never called

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

// 2
// 5
// 8
// 11 

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

// prints 0-9 (not typing it all out)
// 0-9
// 0

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

// never called, so nothing is run/shown

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

// never called, so nothing is run/shown

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

// 10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

// 15
// 10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

// 15
// 15