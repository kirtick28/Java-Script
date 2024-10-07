let toDoList = [];
let toDoList2 = [];
let toDoList3 = [];
function add(){
    const ele = document.querySelector('.input');
    if(ele.value!='')
        toDoList.push(ele.value);
    ele.value='';
    console.log(toDoList); 
}
function add2(){
    const ele = document.querySelector('.input2');
    if(ele.value==''){
        return;
    }
    toDoList2.push(ele.value);
    ele.value='';
    f();
}
function f(){
    let todo='';
    for(let i=0;i<toDoList2.length;i++){
        todo+=`
        <p>
            ${toDoList2[i]}
        </p>`;
    }
    document.querySelector('.result2').innerHTML = todo;
}
function add3(){
    const ele = document.querySelector('.input3');
    const ele2 = document.querySelector('.date');
    const name = ele.value;
    const dueDate = ele2.value;
    if(!name || !dueDate){
        return;
    }
    toDoList3.push({name,dueDate});
    ele.value='';
    ele2.value='';
    f2();
}
function f2(){
    let todo='';
    for(let i=0;i<toDoList3.length;i++){
        const {name, dueDate} = toDoList3[i];
        todo+=`
        <div class="name-output">${name}</div>
        <div class="date-output">${dueDate}</div>
        <button onclick="
            toDoList3.splice(${i},1);
            f2();
        " class="deleteBtn">Delete</button>`;
    }
    document.querySelector('.result3').innerHTML = todo;
}