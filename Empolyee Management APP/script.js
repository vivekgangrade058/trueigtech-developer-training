let employees = JSON.parse(localStorage.getItem("employees")) || [
    {
        id: 1,
        name: "Rahul",
        email: "rahul@gmail.com",
        department: "Development"
    },
    {
        id: 2,
        name: "Priya",
        email: "priya@gmail.com",
        department: "HR"
    }
];

const employeeForm = document.getElementById("employeeForm");
const employeeList = document.getElementById("employeeList");

function displayEmployees() {
    employeeList.innerHTML = "";

    employees.forEach(function(employee) {
        const employeeDiv = document.createElement("div");

        employeeDiv.className = "employee";

        employeeDiv.innerHTML = `
            <div>
                <strong>${employee.name}</strong>
                <p>ID: ${employee.id}</p>
                <p>Email: ${employee.email}</p>
                <p>Department: ${employee.department}</p>
            </div>

            <button class="delete-btn" onclick="deleteEmployee(${employee.id})">
                Delete
            </button>
        `;

        employeeList.appendChild(employeeDiv);
    });
}

employeeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;

    if (name === "" || email === "" || department === "") {
        alert("Please fill all fields");
        return;
    }

    const newEmployee = {
        id: Date.now(),
        name: name,
        email: email,
        department: department
    };

    employees.push(newEmployee);

    localStorage.setItem("employees", JSON.stringify(employees));

    displayEmployees();

    employeeForm.reset();
});

function deleteEmployee(id) {
    employees = employees.filter(function(employee) {
        return employee.id !== id;
    });

    localStorage.setItem("employees", JSON.stringify(employees));

    displayEmployees();
}

displayEmployees();