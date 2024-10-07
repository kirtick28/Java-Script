let toDoList = JSON.parse(localStorage.getItem("todo")) || [];
display();
document.querySelector(".addBtn").addEventListener("click",()=>{
    add();
})

function add(){
    const ele = document.querySelector('.inputName');
    const ele2 = document.querySelector('.inputdate');
    const name = ele.value;
    const dueDate = ele2.value;
    if(!name || !dueDate){
        return;
    }
    toDoList.push({name,dueDate});
    ele.value='';
    ele2.value='';
    display();
    store();
}
function display(){
    let todo='';
    for(let i=0;i<toDoList.length;i++){
        const {name, dueDate} = toDoList[i];
        todo+=`
        <div class="name-output">${name}</div>
        <div class="date-output">${dueDate}</div>
        <button onclick="
            toDoList.splice(${i},1);
            store();
            display();
            
        " class="deleteBtn">Delete</button>`;
    }
    document.querySelector('.result').innerHTML = todo;
}
function store(){
    localStorage.setItem("todo",JSON.stringify(toDoList));
}