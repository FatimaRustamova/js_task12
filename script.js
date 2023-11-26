let title = document.querySelector("#title");
let author = document.querySelector("#author");
let color =  document.querySelector("#color");
let btn = document.querySelector("#btn");
let tbody = document.querySelector("#tbody");

let myFunction = ()=>{
    let radio = document.querySelector("input[name='rd']:checked");

    let input1 = title.value.trim();
    let input2 = author.value.trim();
    let input3 = color.value.trim();

    if(input1 == "" || input2 == "" || input3 == "" || !radio){
        alert("Please fill all the boxes!");
        return;
    }

    let tr = document.createElement("tr");
    let td_1 = document.createElement("td");
    let td_2 = document.createElement("td");
    let td_3 = document.createElement("td");
   
    tbody.append(tr);
    tr.append(td_1, td_2, td_3);

    td_1.innerHTML = input1;
    td_2.innerHTML = input2;
    td_3.innerHTML = radio.value;

    tr.style.backgroundColor = color.value;

    title.value = "";
    author.value = "";
    color.value = "";
    radio.checked = false;
}

btn.addEventListener("click", myFunction);