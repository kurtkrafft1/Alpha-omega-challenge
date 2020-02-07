let IDCounter = 1;
const getUserInput = () => {
    const textarea = document.getElementById('textarea')
    const newObj={
        string:textarea.value,
        id: IDCounter
    } 
    IDCounter++
    return newObj;
  }

  const generateHTML = (obj) => {
      return `
     
      <section  class = 'card' id="card-${obj.id}">
        <div class="background">
        <p>Background Color:</p>
        <input type="color" value="#EA9010" id="color-${obj.id}">
        <input type="color" value="#947EB0" id="color-${obj.id}">
        <input type="color" value="#7FBEAB" id="color-${obj.id}">
        <input type="color" value="#E6C79C" id="color-${obj.id}">
        <input type="color" value="#191970" id="color-${obj.id}">
        </div>
        <div class="font-color">
        <p>Font Color:</p>
        <input type="color" value="#5AD2F4" id="font-${obj.id}">
        <input type="color" value="#ffffff" id="font-${obj.id}">
        <input type="color" value="#404E4D" id="font-${obj.id}">
        <input type="color" value="#C1B8C8" id="font-${obj.id}">
        <input type="color" value="#88D498" id="font-${obj.id}">
        </div>
        <div class="text">
        <h4>Card entry ${obj.id}</h4>
        <h6>${obj.string}</h6>
        </div>
        <button type='button' id="delete-${obj.id}">delete</button>
      </section>


      
      `
    
  }

  const render2Dom = (html) => {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML+= html;
  }
const addCreateEventListener = () => {
  const createButton = document.getElementById('create-btn');
  createButton.addEventListener('click', () => {
    const newObj = getUserInput()
    const html = generateHTML(newObj);
    render2Dom(html);
    
  })
}

const changeBackgroundColor = (color, id) => {

  const divEl = document.getElementById(`card-${id}`)
  divEl.style.backgroundColor= `${color}`;
  // divEl.classList.toggle('dark-mode')
}
const changeFontColor = (color, id) => {

  const divEl = document.getElementById(`card-${id}`)
  divEl.style.color= `${color}`;
  // divEl.classList.toggle('dark-mode')
}
const deleteCard = (id) => {
  const divEl = document.getElementById(`card-${id}`)
  divEl. parentNode. removeChild(divEl);
}
const addcardEventListener = () => {
  const cardContainer = document.querySelector('.card-container')
  cardContainer.addEventListener('click', () => {
    const id = event.target.id.split('-')
    // console.log(id);
    if(event.target.id.startsWith('color-')){
       changeBackgroundColor(event.target.value, id[1]);
    }else if (event.target.id.startsWith('font-')){
    changeFontColor(event.target.value, id[1]);
  } else if (event.target.id.startsWith('delete-')){
    deleteCard(id[1]);
  }
  })
}

addCreateEventListener();
addcardEventListener();