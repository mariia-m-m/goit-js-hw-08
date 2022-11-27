import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input:document.querySelector('input')
}

const STORAGE_KEY = 'feedback-form-state';
const formData = {};


refs.form.addEventListener('submit', onFormSubmit)
refs.form.addEventListener('input', throttle(e =>{
    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
},500)
)


function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
}

function populateForm() {
        const stringData = localStorage.getItem(STORAGE_KEY);
        const parsedData = JSON.parse(stringData);
        if (stringData) {
            refs.textarea.value = parsedData.message;
            refs.input.value = parsedData.email;
            console.log(parsedData)
        } 
    }
populateForm();



// function populateMessage(){
//     const savedMessage = localStorage.getItem(STORAGE_KEY);
//     if (savedMessage) {
//         refs.textarea.value = savedMessage;
//     }
// }



