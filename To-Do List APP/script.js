var tasks = [];

var form = document.getElementById("Form");
var Input = document.getElementById("Input");
var list = document.getElementById("list");

function showtasks(){
    list.innerHTML = "";
    tasks.forEach(function(task){
        var div = document.createElement("div");

        div.className = "task";

        div.innerHTML = `
            <span>${task.text}</span>
            <button class="delete" onclick="deletetask(${task.id})"> Delete </button>
        `;
        list.appendChild(div);
    });
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    var text =  Input.value;
    if(text === ""){
        return;
    }
    var newtask = {
        id: tasks.length + 1,
        text: text 
    }
    tasks.push(newtask);
    form.reset();
    showtasks();
})
function deletetask(id){
    tasks = tasks.filter(function(task){
        return task.id !== id;
    });
    showtasks();
}
showtasks();