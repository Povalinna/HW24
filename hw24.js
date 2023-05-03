let btnGetLink = document.getElementById("btn1");
let btnGoTolLink = document.getElementById("btn2");
let linkA = prompt("Введіть посилання");

btnGetLink.addEventListener('click', function () {
 
  let link = linkA;
    if (link.startsWith(`https:`) === true) {
        alert(`протокол посилання https`);
        console.log(`1`);
    }
    else 
    if (link.startsWith(`http:/`) === true)
    {
        alert(`протокол посилання http`);
        console.log(`2`);
    }
    else {
        link = `https://`+ link;
        alert(`посилання без протоколу ,додаемо протокол https://`);
        console.log(`3`);
    }
    
})


btnGoTolLink.addEventListener("click", function (event) {
    let link=linkA;
    if(link.indexOf(`https`) === -1)
  { event.preventDefault();
    alert(`дія призупинена`);
   }
   else {
    location.href = link;
   }
})