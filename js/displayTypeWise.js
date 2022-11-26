displayType1();
function displayType1() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let outType1 = notesObj.filter(complaint => complaint.type == "type1");
    console.log(outType1);
    let type1Html = '';
    outType1.forEach(function (element, index) {
        type1Html += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
          <div class="card-type">${element.type}</div>
            <div class="card-text">State: ${element.state}<br>Number of Days: ${element.days} <br>${element.complaint}</div>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-sm btn-primary">Delete Complaint</button> 
          </div>
        </div>`;

    })
    let type1 = document.getElementById('type1');
    if (outType1.length != 0) {
        type1.innerHTML = type1Html;
    }
}
displayType2();
function displayType2() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let outType1 = notesObj.filter(complaint => complaint.type == "type2");
    console.log(outType1);
    let type1Html = '';
    outType1.forEach(function (element, index) {
        type1Html += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
          <div class="card-type">${element.type}</div>
            <div class="card-text">State: ${element.state}<br>Number of Days: ${element.days} <br>${element.complaint}</div>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-sm btn-primary">Delete Complaint</button> 
          </div>
        </div>`;

    })
    let type1 = document.getElementById('type2');
    if (outType1.length != 0) {
        type1.innerHTML = type1Html;
    }
}
displayType3();
function displayType3() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let outType1 = notesObj.filter(complaint => complaint.type == "type3");
    console.log(outType1);
    let type1Html = '';
    outType1.forEach(function (element, index) {
        type1Html += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
          <div class="card-type">${element.type}</div>
            <div class="card-text">State: ${element.state}<br>Number of Days: ${element.days} <br>${element.complaint}</div>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-sm btn-primary">Delete Complaint</button> 
          </div>
        </div>`;

    })
    let type1 = document.getElementById('type3');
    if (outType1.length != 0) {
        type1.innerHTML = type1Html;
    }
}
displayType4();
function displayType4() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let outType1 = notesObj.filter(complaint => complaint.type == "type4");
    console.log(outType1);
    let type1Html = '';
    outType1.forEach(function (element, index) {
        type1Html += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
          <div class="card-type">${element.type}</div>
            <div class="card-text">State: ${element.state}<br>Number of Days: ${element.days} <br>${element.complaint}</div>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-sm btn-primary">Delete Complaint</button> 
          </div>
        </div>`;

    })
    let type1 = document.getElementById('type4');
    if (outType1.length != 0) {
        type1.innerHTML = type1Html;
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
    displayType1();
    displayType2();
    displayType3();
    displayType4();
    
}
  