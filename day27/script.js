const taskForm = document.querySelector("#task-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#due-date");
const taskContainer = document.querySelector("#task-container");
let tasks=[],count=-1,editIndex=-1;

const displayTasks=()=>{
    taskContainer.innerHTML="";
    for(let i=0;i<=count;i++){
        const div=document.createElement('div');
        div.className="card bg-white p-4 rounded-lg flex justify-between items-center"
        div.innerHTML=`<div>
                    <h3 class="text-xl font-semibold">${tasks[i].title}</h3>
                    <p class="text-gray-600">${tasks[i].description}</p>
                    <p class="text-gray-500 text-sm">Due Date: ${tasks[i].dueDate}</p>
                </div>
                <div>
                    <button onclick="editTask(${i})" class="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2">Edit</button>
                    <button onclick="deleteTask(${i})" class="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
                </div>`
        taskContainer.appendChild(div);
    }
}

const editTask=(index)=>{
    editIndex=index
    title.value=tasks[editIndex].title
    description.value=tasks[editIndex].description
    dueDate.value=tasks[editIndex].dueDate
}

const deleteTask=(index)=>{
    let confirmation=window.confirm("Do you really want to delete the task???");
    if(confirmation){
        tasks.splice(index, 1);
        count--;
        displayTasks();
    }
}


taskForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(editIndex!=-1){
        tasks[editIndex].title=title.value
        tasks[editIndex].description=description.value
        tasks[editIndex].dueDate=dueDate.value
        editIndex=-1;    }
    else{
        count++;
        tasks.push({"title":title.value,"description":description.value,"dueDate":dueDate.value})  
    }
    displayTasks()
    dueDate.value=""
    description.value=""
    title.value=""
})

