
showNotes();

//If user adds a note, add it to the localStorage
console.log("Project 1");
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let typeOfComplaint = document.getElementById("typeOfComplaint");
  let addBrief = document.getElementById("addBrief");
  let howManyDays = document.getElementById("howManyDays");
  let state = document.getElementById("state");
  let addTxt = {
    type: typeOfComplaint.value,
    days: howManyDays.value,
    state: state.value,
    complaint: addBrief.value,
  };
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  addBrief.value = "";
  howManyDays.value = "";

  showNotes();
});
//function to show elemtents from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
          <div class="card-type">${element.type}</div>
            <div class="card-text">State: ${element.state}<br>Number of Days: ${element.days} <br>${element.complaint}</div>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-sm btn-primary">Delete Complaint</button> 
          </div>
        </div>`;

  });
  
  
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Complaint Page" section above to add Complaint.`;
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
  showNotes();
}
