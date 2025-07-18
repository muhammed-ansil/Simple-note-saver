let notes = [];

function showMenu() {
  let choice = prompt(
    "Simple Note Saver\n\n1. View Notes\n2. Add Notes\n3. Delete Notes\n4. Exit\n\nEnter your choice (1-4):"
  );

  switch (choice) {
    case "1":
      viewTask();
      break;
    case "2":
      addTask();
      break;
    case "3":
      deleteTask();
      break;
    case "4":
      alert("Are you sure");
      return;
    default:
      alert("Invalid choice! Try again.");
  }

  showMenu(); // Show menu again after action
}

function viewTask() {
  if (notes.length === 0) {
    alert("No notes added yet.");
  } else {
    alert("Your Notes:\n" + notes.map((notes, i) => `${i + 1}. ${notes}`).join("\n"));
  }
}

function addTask() {
  let notes = prompt("Enter a new Notes:");
  if (notes) {
    notes.push(notes);
    alert("Notes added!");
  }
}

function deleteTask() {
  let index = prompt("Enter the notes number to delete:");
  index = parseInt(index) - 1;

  if (index >= 0 && index < notes.length) {
    notes.splice(index, 1);
    alert("Notes deleted.");
  } else {
    alert("Invalid notes number.");
  }
}

showMenu();
