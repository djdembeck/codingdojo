// 1
for(var num = 0; num < 15; num++){
    console.log(num);
}

// 1-14 will be logged

// 2
for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

// checks happen at 1, 3, 5, 7, 9
// 3, 9 logged

// 3
for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

// 1, 2, 4, 5, 6, 8, 9, 10, 11, 12, 14, 15, 16

// 1, 4, 5, 8, 10, 11, 14, 16 logged