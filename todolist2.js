const todoList=[];
function add(){
   const inputElement= document.querySelector('.addinput')
   const name=inputElement.value;
   todoList.push(name);
   inputElement.value='';
}

let todoListHTML = '';
for (let i = 0; i < todoList.length; i++) {
    const todo= todoList[i];
    const html=`<p>${todo}</p>`;
    todoListHTML += html;
    document.querySelector('.addonscreen')
    .innerHTML = todoListHTML;
}



function tick(){
    document.querySelector('.tick').innerHTML=`<s>${name}</s>`
}
      
function delete1(){
    todoList.splice({$i}, 1);
}