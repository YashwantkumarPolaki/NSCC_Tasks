document.addEventListener("DOMContentLoaded", function() {
    
    displayUsers();

    
    const signupForm = document.getElementById("signupForm");
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();

        
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        
        if (validateInputs(username, email, password)) {
            
            const hashedPassword = btoa(password);

            
            const user = { username, email, password: hashedPassword };
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

           
            signupForm.reset();

            
            displayUsers();
        }
    });

    
    function validateInputs(username, email, password) {
        if (username.trim() === "") {
            alert("Username cannot be empty");
            return false;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return false;
        }

        return true;
    }

   
    function displayUsers() {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const tableBody = document.getElementById("userTable").getElementsByTagName("tbody")[0];
        
        
        tableBody.innerHTML = "";

        users.forEach((user, index) => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = user.username;
            row.insertCell(1).textContent = user.email;
            row.insertCell(2).textContent = user.password;

           
            const deleteCell = row.insertCell(3);
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.addEventListener("click", () => deleteUser(index));
            deleteCell.appendChild(deleteBtn);
        });
    }

    
    function deleteUser(index) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.splice(index, 1);  
        localStorage.setItem("users", JSON.stringify(users));
        displayUsers();  
    }
});
