const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

function saveFormDataToLocalStorage() {
    const formData = {
        email: emailInput.value.trim(),
        message: messageTextarea.value.trim(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillFormFieldsFromLocalStorage() {
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    if (savedFormData) {
        const formData = JSON.parse(savedFormData);
        emailInput.value = formData.email || '';
        messageTextarea.value = formData.message || '';
    }
}

fillFormFieldsFromLocalStorage();

form.addEventListener('input', () => {
    saveFormDataToLocalStorage();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (emailInput.value.trim() === '' || messageTextarea.value.trim() === '') {
        alert('All form fields must be filled in');
        return;
    }

    const savedFormData = localStorage.getItem(STORAGE_KEY);

    console.log(JSON.parse(savedFormData));

    localStorage.removeItem(STORAGE_KEY);

    emailInput.value = '';
    messageTextarea.value = '';
});
