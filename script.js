document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;

    const foodChoices = [];
    if (document.getElementById('food1').checked) foodChoices.push(document.getElementById('food1').value);
    if (document.getElementById('food2').checked) foodChoices.push(document.getElementById('food2').value);
    if (document.getElementById('food3').checked) foodChoices.push(document.getElementById('food3').value);
    if (document.getElementById('food4').checked) foodChoices.push(document.getElementById('food4').value);
    if (document.getElementById('food5').checked) foodChoices.push(document.getElementById('food5').value);

    if (foodChoices.length < 2) {
        alert("Please select at least two food choices.");
        return;
    }

    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    const table = document.getElementById('dataTable');
    const newRow = table.insertRow();
    
    newRow.insertCell(0).innerText = firstName;
    newRow.insertCell(1).innerText = lastName;
    newRow.insertCell(2).innerText = email;
    newRow.insertCell(3).innerText = address;
    newRow.insertCell(4).innerText = pincode;
    newRow.insertCell(5).innerText = gender;
    newRow.insertCell(6).innerText = foodChoices.join(', ');
    newRow.insertCell(7).innerText = state;
    newRow.insertCell(8).innerText = country;

    document.getElementById('dataForm').reset();
});
