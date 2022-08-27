
//  const heading=document.getElementsByTagName('h1')[0];

//  heading.addEventListener("click" , function() {
//                 alert("something")
// })

 const todotitle = document.getElementById("title")
 const tododesc = document.getElementById("desc")
const submittodobutton = document.getElementById("submit")
// const mainlist = document.getElementById("main")

//  const newtodo = { title: todotitle.value,desc: tododesc.value}

            // const newtodolistitem = `<li>
                // <h3>`
  function handlecreatnewtodo(e) {
        e.preventDefault();
       //  console.log("submit new todo");
                        
         const newtodo = {
                title: todotitle.value ,
                desc: tododesc.value,

         };
         console.log(newtodo.title);
        console.log(newtodo.desc);
      //   todotitle.innerHTML = newtodo.title;
      //   console.log('todotitle')
      //   console.log(newtodo)
      //   console.log({e})

       //   const listitem = document.createElement("li");
       //   const todolistheading = document.createElement("h3");
       //   todolistheading.innerHTML = newtodo.title
       //   todolistheading.style.background = "tomato"
       //  const tododescpara = document.createElement("p");
       //  tododesc.innerHTML = newtodo.desc


       //   console.log(listitem , todolistheading , tododesc);

       //   listitem.appendChild(todolistheading);
       //   listitem.appendChild(tododesc);
       //  console.log(listitem);

       //   mainlist.appendChild(listitem);
       //    console.log(mainlist);

       const h3 = document.createElement('h3');
       h3.innerHTML = newtodo.title;
       h3.style.backgroundColor = "tomato"

       const p = document.createElement('p');
       p.innerHTML = newtodo.desc;


         const li = document.createElement('li');

       
         li.appendChild(h3);
         li.appendChild(p);

         const main = document.getElementById('main');

         main.appendChild(li);
         
         if (!todotitle.value) return handelalarem('please enter a valid number');

         
  //        const handel = (m) => {
  // // name.preventDefault;
  // // const uppercace = name.toUppercase();
  // // console.log(uppercace); 
  // // const splitted = uppercace.splitt();
  // // console.log(`hi {splitted}`)

  //         // e.preventDefault();
  //         const uppercace = e.toUpperCase();

  //         const spilled = uppercace.split(" ");
  //         const joinbyy = spilled.join("_");
  //         document.body.append((document.createElement("h2").innerHTML = joinbyy));


  //         console.log(spilled);
  //         console.log(`hi {joinbyy}`);



  //  }

    // handel("kimiya");
// submitt.addEventListener("click" , handel("kimiya"))




        }



        
        // const handel = (m) => {
        //   // name.preventDefault;
        //   // const uppercace = name.toUppercase();
        //   // console.log(uppercace); 
        //   // const splitted = uppercace.splitt();
        //   // console.log(`hi {splitted}`)
        
        //           // e.preventDefault();
        //           const uppercace = e.toUpperCase();
        
        //           const spilled = uppercace.split(" ");
        //           const joinbyy = spilled.join("_");
        //           document.body.append((document.createElement("h2").innerHTML = joinbyy));
        
        
        //           console.log(spilled);
        //           console.log(`hi {joinbyy}`);
        

        // handel("kimiya");


        const handlemove = () => {
              alert('hello')
        }

        // const myform = document.getElementById('myform');

      //   myform.addEventListener('submit' , handlecreatnewtodo);
        submittodobutton.addEventListener("click" , handlecreatnewtodo)


        


const heading = document.getElementsByTagName('h1')[0];

heading.addEventListener("click" , function() {
    alert("sometiing")
})




// const handelcreatnewtodo = (m) => {
//     m.pre
    
// }


// document.querySelectorAll("button").forEach(function(item,index){
//     item.addEventListener("click" , ()=>{
//         console.log("run with inner value" , +item.innerText);
//         console.log("run with index" , index);
//         // document.getElementById('test').value += index +1
        
//         let isseconinputfacused = false;

        
            
//         if (isseconinputfacused)  secondinput.value.innerHTML += index-1; 
//         else  document.getElementById("test").value.innerHTML += index-1;

//         const firstinput = document.getElementById("test");
//         // firstinput.innerHTML= index;
//         const secondinput = document.getElementById("test2");
//         // secondinput.innerHTML = index;
//         const equals = document.querySelector("strong");
//         // let isseconinputfacused = false;

//         document.querySelector("span").addEventListener("click" , () =>{
//             secondinput.focus();
//             isseconinputfacused =true;

            
        // if (isseconinputfacused)  secondinput.value.innerHTML += index-1; 
        // else  document.getElementById("test").value.innerHTML += index-1;

        // equals.addEventListener("click" , () => {
        //     const result = parseInt(firstinput.value) + parseInt(secondinput.value);
        //     equals.innerHTML = result;
        // })
            // isseconinputfacused
            //  ? (document.getElementById("test2").value += index)
            //  : (document.getElementById("test").value += index)
            
        // })

        // document.querySelector()

        // if (isseconinputfacused) secondinput.value  = index;
        // else document.getElementById("test").value  = index;


        // equals.addEventListener("click" , () => {
        //     const result = parseInt(firstinput.value) + parseInt(secondinput.value);
        //     equals.innerHTML += result;
        // })

        

    // })
// })

// const tostifiyelement = document.getElementById("alert");
// tostifiyelement.style.display = 'none';

// // const tostifiyelement.style.display= "flex";
// console.log("children" , tostifiyelement.children);
// console.log("childNodes" , tostifiyelement.childNodes);
// const tostifiy = (msg) => {
//     tostifiyelement.style.right= "0%"


// tostifiyelement.children[0].innerHTML = msg;
// // tostifiyelement.style.display = "none"
// tostifiyelement.children[1].addEventListener("click" , () => {
//     tostifiyelement.style.right = "10"
// })
// setTimeout(function() {
//     tostifiy.style.right = "-100%"
    
// }, 3000)


// }

let  isfoc = false;

const foralarm = document.getElementById("alert");
foralarm.style.display = "none";

const handelalarem = (msg) => {
  foralarm.style.display ="flex";
  foralarm.children[0].innerHTML = msg;
  foralarm.children[1].addEventListener("click" , () =>{
    foralarm.style.display ="none"
  })

  setTimeout(function () {
    foralarm.style.display = "-100%";
    // foralarm.style.display ="none"

  } , 3000);

  
  // foralarm.children[1].addEventListener("click" , () =>{
  //   foralarm.style.display ="none"
  // })

}

// for button :.
const test2 =document.querySelector('test2')

document.querySelectorAll('button').forEach(function(item,index) {
  item.addEventListener("click" , () => {
    // if(document.getElementById('test2').focus()) 
      // document.getElementById('test2').value += index-1;
    // else document.getElementById('test').value += index -1;

    if(isfoc) document.getElementById('test2').value += index-1
    else document.getElementById('test').value +=index-1

    
    console.log('run with index' , +item.innerText)
    console.log('run with index' , index)
    // document.getElementById('test').value += index-1;
  })

});

document.querySelector('span').addEventListener('click' , () => {
  document.getElementById('test2').focus()
  isfoc = true;
})

  const equal = document.querySelector('strong')

  equal.addEventListener('click' , () => {
    const result = parseInt(document.getElementById('test').value) + parseInt(document.getElementById('test2').value);
    equal.innerHTML = result;

  });

  
  const handel = (m) => {
    // name.preventDefault;
    // const uppercace = name.toUppercase();
    // console.log(uppercace); 
    // const splitted = uppercace.splitt();
    // console.log(`hi {splitted}`)
  
            // e.preventDefault();
            const uppercace = m.toUpperCase();
  
            const spilled = uppercace.split(" ");
            const joinbyy = spilled.join("_");
            document.body.append((document.createElement("h2").innerHTML = joinbyy));
  
  
            console.log(spilled);
            console.log({joinbyy});

  }

  handel("kimiya khorsand");







  

         
const arr = ["abc" , "abc2" , "abc3"];
localStorage.setItem("list" , JSON.stringify(arr));
console.log(arr);
const parsdata = JSON.parse(localStorage.getItem("list"));
console.log(parsdata);



const val1 = document.getElementById('val1');
const val2 = document.getElementById('val2');
const val3 = document.getElementById('val3');

document.getElementById('c').addEventListener("click" , () => {

  

localStorage.setItem("in" , JSON.stringify(val1.value));
console.log(val1.value);

const parsval1 = JSON.parse(localStorage.getItem("in"));
console,console.log(parsval1);

document.getElementById('namelist').innerHTML += parsval1;







localStorage.setItem("in2" , JSON.stringify(val2.value));
console.log(val2.value);

const parsval2 = JSON.parse(localStorage.getItem("in2"));
console,console.log(parsval2);

document.getElementById('namelist1').innerHTML += parsval2;




localStorage.setItem("in3" , JSON.stringify(val3.value));
console.log(val3.value);

const parsval3 = JSON.parse(localStorage.getItem("in3"));
console,console.log(parsval3);

document.getElementById('namelist2').innerHTML += parsval3;
document.getElementById('m').style.display ="flex"
document.getElementById('m').style.color = "red"

document.getElementById('g').style.display ="flex"
document.getElementById('n').style.display ="flex"








})




  


