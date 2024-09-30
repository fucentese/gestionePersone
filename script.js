
const personForm = document.getElementById('personForm');
const personTable = document.getElementById('personTable');

document.getElementById('addPerson').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const email = document.getElementById('email').value;
    const dataNascita = document.getElementById('dataNascita').value;
    const telefono = document.getElementById('telefono').value;
    const paese = document.getElementById('paese').value;
    const provincia = document.getElementById('provincia').value;

    if (nome && cognome && email && dataNascita && telefono && paese && provincia) {
        const newRow = personTable.insertRow();

        newRow.insertCell(0).innerText = nome;
        newRow.insertCell(1).innerText = cognome;
        newRow.insertCell(2).innerText = email;
        newRow.insertCell(3).innerText = dataNascita;
        newRow.insertCell(4).innerText = telefono;
        newRow.insertCell(5).innerText = paese;
        newRow.insertCell(6).innerText = provincia;


        const actionsCell = newRow.insertCell(7);
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Rimuovi';
        removeButton.addEventListener('click', function() {
            personTable.deleteRow(-1);
        });
        actionsCell.appendChild(removeButton);
        personForm.reset();
    } else {
        alert('Compila tutti i campi!');
    }
});
