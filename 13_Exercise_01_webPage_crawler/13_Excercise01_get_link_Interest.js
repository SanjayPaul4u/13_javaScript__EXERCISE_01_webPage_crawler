console.log("This is excercise 01...");

// let a = document;

// arrayLink = document.links;
// console.log(arrayLink);
//-----------------------------------------======

//For getting all link one by one  and which is a link you are interested in📌📌📌

//geting input from user
const input = prompt("Enter any word for maching with your link, and after that you will be get your link...");

//main code
Array.from(document.links).forEach(function(element, index){
    // let allLink =console.log(element);
    let a = String(element);//<----------convert ot srting
    let check =a.includes(input);//<-----checking we have this word in our link or not.
    // console.log(check);

    if (check === true){
        console.log(element);
    }
      
})


//This code is get from comment
// let a = document.links;
//  for(i=0; i<a.length; i++){
//     let string =a[i].toString() ;     
//     if(string.includes('google')){
//         console.log(a[i]);
//     }
//  }

