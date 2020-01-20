Date()
"Tue Jan 21 2020 00:36:13 GMT+0530 (India Standard Time)"
var a= new Date().getday()
TypeError: (new Date(...)).getday is not a function
debugger eval code:1:19
var a= new Date().getDay()

a
2
var a= new Date().getDate()

a
21
var a= new Date().getMonth()

a
0

switch(new Date().getDay()){
    case 0: 
    console.log('Today is sunday');
    break;

    case 1:
        console.log('Today is monday');
        break;

    case 2:
        console.log('Today is Tuesdays');
        break;

    default:
        console.log('I dont know');
        break;
}

-> Today is Tuesdays

switch(a%2==0){
    case true:
        console.log('Even')
        break;

    case false:
        console.log('odd')
        break;

    default:
        console.log('not defined')
}

if(a%2==0 || a%3==0)
{
    console.log('yes possible')
}
else{
    console.log('not possible')
}


/*temporary storage*/
localStorage.setItem('Admin','Saurabh')
undefined
localStorage.getItem('Admin')
"Saurabh"
localStorage.removeItem('Admin')
undefined
localStorage.getItem('Admin')
null