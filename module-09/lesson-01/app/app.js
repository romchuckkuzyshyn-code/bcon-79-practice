//  app store
const store = {
  notes: [
    { id: 1, name: "Mango", body: "Mango is cute" },
    { id: 2, name: "Jack", body: "Jack is cute" },
    { id: 3, name: "Ajax", body: "Ajax is cute" },
  ],
  appTheme: "light",
};

// generate ID instance
const g = new GenerateId();

// elements
const notesList = document.querySelector(".js-notes-list");
const card = document.querySelector(".js-card");
const form = document.querySelector(".js-form");
const btnDelete = document.querySelector(".js-delete-btn");

// listeners
form.addEventListener("submit", onFormSubmit);

renderNotes(store.notes);

// functions
function onFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const notesData = {
    id: g.generate(10),
    ...Object.fromEntries(new FormData(form)),
  };
  //   console.log(notesData);

  // Add new items in store
  store.notes = [...store.notes, notesData];

  notesList.insertAdjacentHTML("beforeend", createNote(notesData));
  form.reset();
}

function renderNotes(notes = []) {
  const markup = notes.map(createNote).join("");
  notesList.innerHTML = markup;
}

function createNote({ id, name, body }) {
  return `<li class="card js-card">
              <h5 class="card-header">${name}</h5>
              <div class="card-body">
                <p class="card-text">
                  ${body}
                </p>
                <button
                  class="btn btn-primary js-delete-btn"
                  type="button"
                  data-noteid="${id}"
                >
                  Delete
                </button>
              </div>
            </li>`;
}
