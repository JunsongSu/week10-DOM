let id = 0; // The id varible is for counting the travel plans they put in table
// When user click on the create button, the travel start date, end date and destination name will go to the table below

document.getElementById('add').addEventListener('click',()=>{
    // The createdDate varible to get the current date
    let createdDate = new Date();
    // Get the table in html file
    let table = document.getElementById('list');
    // Insert row in to table and set it to row varible
    let row = table.insertRow();

    // Give the row an attribute of id, so we can use for deleting this item
    row.setAttribute('id',`item-${id}`);
    // Insert a cell at index of 0 in the row for destination name
    row.insertCell(0).innerHTML = document.getElementById('new-destination').value;
    //Insert a cell at index of 1 for the created date
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    // Insert a cell at index of 2 for the travel start date
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    // Insert a cell at index of 3 for the travel ending date
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;

    // Insert cell at index of 4 for a delete button
    let actions = row.insertCell(4);
    // Add the delete button function to this cell
    actions.appendChild(createDeleteButton(id++));
    // Set back the text form to empty 
    document.getElementById('new-destination').value='';

    // Create the delete button and add function to it
    function createDeleteButton(id){
        let btn = document.createElement('button');
        btn.className = 'btn btn-primary';
        btn.id = id;
        btn.innerHTML = 'Delete';
        btn.onclick=()=>{
            console.log(`Deleting row with id: item-${id}`);
            // Find the element to be delete
            let elementToDelete = document.getElementById(`item-${id}`);
            //Delete the whole row at this id
            elementToDelete.parentNode.removeChild(elementToDelete);
        };
       
    }
})

