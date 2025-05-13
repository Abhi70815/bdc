// Retrieve the admission queries from localStorage
const admissionQueries = localStorage.getItem('admissionQueries');
query()

// Check if data exists
function query(){
    if (admissionQueries) {
    // Parse the JSON string back to an array
    const queriesData = JSON.parse(admissionQueries);

    // Prepare output HTML
    const outputHTML = queriesData.map((query, index) => `
        <div class="query-item">
            <button class="delete-btn" onclick="deleteQuery('${query._id}')">Delete</button>
            <strong>Name:</strong> ${query.name} <br>
            <strong>Email:</strong> ${query.email} <br>
            <strong>Message:</strong> ${query.message}
        </div>
    `).join('');

    document.getElementById('output').innerHTML = outputHTML;
} else {
    document.getElementById('output').innerText = 'No admission queries found in local storage.';
}
}

async function deleteQuery(id){
    try {
        const response = await fetch(`http://localhost:4000/query/${id}`, { method: "DELETE" });
        if (response.ok) {
            console.log("Query deleted successfully");
            fetchQuery();
            query()
            alert("query deleted successful")
            window.location.reload()
        } else {
            console.error("Failed to delete query");
        }
    } catch (error) {
        console.error(error.message);
    }
}
// Function to display payment records
function displayPaymentRecords() {
    const paymentRecords = JSON.parse(localStorage.getItem('Payments'));
    const paymentList = document.getElementById('payment-list');

    paymentList.innerHTML = ''; // Clear the table body

    if (paymentRecords) {
        paymentRecords.forEach((payment, index) => {
            const tableRow = document.createElement('tr');
            tableRow.innerHTML = `
                <td>${payment.name}</td>
                <td>${payment.rollno}</td>
                <td>${payment.branch}</td>
                <td>${payment.phone}</td>
                <td>${payment.amount}</td>
                <td><button class="delete-btn" onclick="deletePayment('${payment._id}')">Delete</button></td>
            `;
            paymentList.appendChild(tableRow);
        });
    }
}

// Call the function to display payment records
displayPaymentRecords();

// // Function to delete a query


// Function to handle form submission
function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        fetch('http://localhost:4000/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

        fetchQuery();
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
        alert("Message sent successful..");
    } catch (error) {
        console.log(error.message);
    }
}

// Function to fetch queries
async function fetchQuery() {
    try {
        const response = await fetch("http://localhost:4000/query");
        const data = await response.json();
        console.log(data.data);
        localStorage.setItem('admissionQueries', JSON.stringify(data.data));
    } catch (error) {
        console.error(error.message);
    }
}

// Call the function to fetch queries
fetchQuery();

// Function to fetch payments
async function fetchPayment() {
    try {
        const res = await fetch("http://localhost:4000/payment");
        const data = await res.json();
        console.log(data);
        localStorage.setItem('Payments', JSON.stringify(data.data));
    } catch (error) {
        console.error(error.message);
    }
}

// Call the function to fetch payments
fetchPayment();

// Function to handle new payment
async function newPayment(e) {
    e.preventDefault();
    try {
        localStorage.setItem('Payments', JSON.stringify(data.data));
    } catch (error) {
        console.error(error.message);
    }
}

// Call the function to fetch payments
fetchPayment();

// Function to handle new payment
async function newPayment(e) {
    e.preventDefault();
    try {
        // Add new payment logic here
    } catch (error) {
        console.error(error.message);
    }
}

// Function to delete a payment
async function deletePayment(id) {
    try {
        const res = await fetch(`http://localhost:4000/payment/${id}`, { method: "DELETE" });
        const data = await res.json();
        console.log(data);
        alert("payment record deleted successful.")
        fetchPayment();
        window.location.reload();
    } catch (error) {
        console.error(error.message);
    }
}