var emp = [];
var form = document.getElementById("empform");
var list = document.getElementById("list");
function showdata(){
    list.innerHTML = "";
    emp.forEach(function(e){
        var div = document.createElement("div");
        div.innerHTML = `
            <p>ID : ${e.id}</p>
            <p>Name : ${e.name}</p>
            <p>Department : ${e.department}</p>
            <button onclick = "deleteEmployee(${e.id})"> DELETE </button>
        `
        list.appendChild(div);
    });
}
form.addEventListener("submit", function(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var department = document.getElementById("department").value;

    let newemp = {
        id: emp.length+1, 
        name: name,
        email: email,
        department: department  
    };
    emp.push(newemp);
    form.reset();
    showdata();
})
function deleteEmployee(id){
    emp = emp.filter(function(e){
        return e.id !== id; 
    })
    showdata();
}
showdata();