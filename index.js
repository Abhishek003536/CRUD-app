// ADDING
function AddItems(e){
       
    let CurrentInput=document.getElementById('Currentinput').value;
    if(document.getElementById('li').textContent == "No Item"){

        document.getElementById('li').innerHTML=`<h4 class="flex-grow-1">${CurrentInput}</h4>
        <button class="btn btn-warning mx-1" onclick="edit(this)">Edit</button>
        <button class="btn btn-danger mx-1" onclick="remove(this)">Remove</button>`
   
    }
    else{
        
        let newli=document.createElement('li');
        newli.classList.add('list-group-item');
        newli.classList.add('d-flex');

        newli.innerHTML=`<h4 class="flex-grow-1">${CurrentInput}</h4>
        <button class="btn btn-warning mx-1" onclick="edit(this)">Edit</button>
        <button class="btn btn-danger mx-1" onclick="remove(this)">Remove</button>`
        let list= document.getElementById('list');
        list.appendChild(newli);
         
    }
}

// REMOVEING
function remove(currentElement){
    currentElement.parentElement.remove();
    let list= document.getElementById('list');

    if(list.children.length<=0){
        list.innerHTML=` <li id="li" class="list-group-item d-flex">No Item</li>
        `
    }
}

// EDITING
function edit(currentElement){
    if(currentElement.textContent=="Done"){
        currentElement.textContent="Edit";
        let currentItem=currentElement.previousElementSibling.value;
        let heading=document.createElement('h3');
        heading.className="flex-grow-1";
        heading.textContent=currentItem;
        currentElement.parentElement.replaceChild(heading,currentElement.previousElementSibling);


    }

    else{

        currentElement.textContent="Done";
        let currentItem=currentElement.previousElementSibling.textContent;
        let Inputtag=document.createElement('input');
        Inputtag.type='text';
        Inputtag.className="form-control";
        Inputtag.value=currentItem;
        currentElement.parentElement.replaceChild(Inputtag,currentElement.previousElementSibling);
    
    }
}




// *******************************************************************************************************************
let A= document.getElementById('add_btn');
A.addEventListener('click',AddItems);