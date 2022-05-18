function newItem(){
/*vanilla  JS
//1. Adding a new item to the list of items:
   let li = document.createElement("li");
   let inputValue = document.getElementById("input").value;
   let text = document.createTextNode(inputValue);
   li.appendChild(text);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     let list = document.querySelector('#list');
     list.appendChild(li);
     document.getElementById('input').value = '';
   }


//2. Crossing out an item from the list of items:
   function crossOut() {
    li.classList.toggle("strike");
  }
  li.addEventListener("dblclick",crossOut);

//3(i). Adding the delete button "X":
  let crossOutButton = document.createElement("crossOutButton");
  crossOutButton.appendChild(document.createTextNode("X"));
  li.appendChild(crossOutButton);

  crossOutButton.addEventListener("click", deleteListItem);
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
    li.classList.add("delete");
    document.getElementById('input').value = '';
  }

 // 4. Reordering the items: 
   $('#list').sortable();
*/


//JQuery 
// Adding a new item to the list of items:
  let li=$('<li id="list"></li>');
  li.text($('input').val());

  if($('input').val()===''){
    alert('You must write something')
  }else{
    $('#list').append(li);
    $('input').val('');
        }
    
// Crossing out an item from the list of items:
   function crossOut2(){
    li.toggleClass("strike");
   };

   li.dblclick(crossOut2);

// Adding the delete button "X":
   let crossOutButton2=$('<crossOutButton></crossOutButton>').text('X');
   li.append(crossOutButton2);
   crossOutButton2.click(()=>li.addClass('delete'));

//reordering the items
   $('#list').sortable();
    
}





