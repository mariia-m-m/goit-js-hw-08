import throttle from 'lodash.throttle';

const refs = {
    textarea: document.querySelector('.feedback-form textarea'),
    input:document.querySelector('input')
}
const form=document.querySelector('.feedback-form')

const STORAGE_KEY = 'feedback-form-state';
const formData = {};


form.addEventListener('submit', onFormSubmit)
form.addEventListener('input', throttle(e => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value
  }
    // console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
},500)
)


function onFormSubmit(evt) {
   
  if (refs.textarea.value && refs.input.value) {
      evt.preventDefault();
    evt.currentTarget.reset();
    // localStorage.removeItem(STORAGE_KEY)- щоб очистити форму при сабміті
    const stringData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(stringData);
    console.log(parsedData)
  } else {
    evt.preventDefault();
    alert('друг, заполни плиз все поля');
  }
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

