displayForHaryana();
function displayForHaryana() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let outType1 = notesObj.filter(complaint => complaint.state == "Haryana");
    let htmlForHaryana = '';
    outType1.forEach(function (element, index) {
        htmlForHaryana += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
          <div class="card-type">${element.type}</div>
            <div class="card-text">State: ${element.state}<br>Number of Days: ${element.days} <br>${element.complaint}</div>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-sm btn-primary">Delete Complaint</button> 
          </div>
        </div>`;

    })
    let haryana = document.getElementById('haryana');
    
    if (outType1.length != 0) {
        haryana.innerHTML = htmlForHaryana;
    }
}
displayForPunjab();
function displayForPunjab() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let outType1 = notesObj.filter(complaint => complaint.state == "Punjab");
    let htmlForPunjab = '';
    outType1.forEach(function (element, index) {
        htmlForPunjab += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
          <div class="card-type">${element.type}</div>
            <div class="card-text">State: ${element.state}<br>Number of Days: ${element.days} <br>${element.complaint}</div>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-sm btn-primary">Delete Complaint</button> 
          </div>
        </div>`;

    })
    let punjab = document.getElementById('punjab');
    
    if (outType1.length != 0) {
        punjab.innerHTML = htmlForPunjab;
    }
}
displayForUP();
function displayForUP() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let outType1 = notesObj.filter(complaint => complaint.state == "Uttar Pradesh");
    let htmlForUttarPradesh = '';
    outType1.forEach(function (element, index) {
        htmlForUttarPradesh += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
          <div class="card-type">${element.type}</div>
            <div class="card-text">State: ${element.state}<br>Number of Days: ${element.days} <br>${element.complaint}</div>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-sm btn-primary">Delete Complaint</button> 
          </div>
        </div>`;

    })
    let uttarPradesh = document.getElementById('uttarPradesh');
    
    if (outType1.length != 0) {
        uttarPradesh.innerHTML = htmlForUttarPradesh;
    }
}
displayForRajasthan();
function displayForRajasthan() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let outType1 = notesObj.filter(complaint => complaint.state == "Rajasthan");
    let htmlForRajasthan = '';
    outType1.forEach(function (element, index) {
        htmlForRajasthan += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
          <div class="card-type">${element.type}</div>
            <div class="card-text">State: ${element.state}<br>Number of Days: ${element.days} <br>${element.complaint}</div>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-sm btn-primary">Delete Complaint</button> 
          </div>
        </div>`;

    })
    let rajasthan = document.getElementById('rajasthan');
    
    if (outType1.length != 0) {
        rajasthan.innerHTML = htmlForRajasthan;
    }
}
displayForMP();
function displayForMP() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let outType1 = notesObj.filter(complaint => complaint.state == "Madhya Pradesh");
    let htmlForMadhyaPradesh = '';
    outType1.forEach(function (element, index) {
        htmlForMadhyaPradesh += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
          <div class="card-type">${element.type}</div>
            <div class="card-text">State: ${element.state}<br>Number of Days: ${element.days} <br>${element.complaint}</div>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-sm btn-primary">Delete Complaint</button> 
          </div>
        </div>`;

    })
    let madhyaPradesh = document.getElementById('madhyaPradesh');
    
    if (outType1.length != 0) {
        madhyaPradesh.innerHTML = htmlForMadhyaPradesh;
    }
}
//function to delete note
function deleteNote(index) {
    // console.log(`I am deleting ${index}`);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    displayForHaryana();
    displayForPunjab();
    displayForUP();
    displayForRajasthan();
    displayForMP();
    
}
