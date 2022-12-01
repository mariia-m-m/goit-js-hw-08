import throttle from 'lodash.throttle';

const refs = {
    textarea: document.querySelector('.feedback-form textarea'),
    input:document.querySelector('input')
}
const form=document.querySelector('.feedback-form')

const STORAGE_KEY = 'feedback-form-state';
const formData = {};


form.addEventListener('submit', onFormSubmit)
form.addEventListener('input', throttle(e =>{
    formData[e.target.name] = e.target.value;
    // console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
},500)
)


function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
}



const setFormDataToForm = form => {
    const stringData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(stringData);
  if (!parsedData) {
    return;
  }
    
  for (const key in parsedData) {
    form.elements[key].value = parsedData[key];
  }
};
    setFormDataToForm(form);

