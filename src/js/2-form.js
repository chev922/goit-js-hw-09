const STORAGE_KEY = "feedback-form-state"
const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input");
const messageTextarea = document.querySelector("textarea");
const email = emailInput.value.trim();
const text = messageTextarea.value.trim();
const data = JSON.stringify({ email, text });
let formData = {};
updateForm();

function onInputForm(evt) {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('input', onInputForm);

function formSubmitHandler(event) {
    event.preventDefault();
    if (emailInput.value.trim() === "" || messageTextarea.value.trim() === "") {
        return alert(`All form fields must be filled in`);
    } else {
        localStorage.removeItem(STORAGE_KEY);
        console.log(formData);
        formData = {};
        event.currentTarget.reset();
    }
}

form.addEventListener('submit', formSubmitHandler);

function updateForm() {
    let savedFormData = localStorage.getItem(STORAGE_KEY);
    if (savedFormData) {
        formData = JSON.parse(savedFormData) || {};
        emailInput.value = formData.email || '';
        messageTextarea.value = formData.message || '';
    }
}