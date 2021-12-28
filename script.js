let array = [];
const breakfast =  document.querySelector('.breakfast-list');
const lunch =  document.querySelector('.lunch-list');
const dinner =  document.querySelector('.dinner-list');

const filteringJsonData = async () => {
  const response = await axios.request('./data.json');
  menuTemplate(response.data);
}

const generateHTML = (item) => {
  return `
  <li id=${item.id} class="card">
    <h3 class="subheading card-header"><span class="card-image">${item.image}</span><span>${item.productName}</span></h3>
  </li>
  `
}

const menuTemplate = (a) => {
  let  menuCards = ' '

   a.map(item => {
    menuCards= document.createElement('sub');
    menuCards.innerHTML = generateHTML(item);

    array.push(menuCards)
  })
  joker(breakfast);
  joker(lunch);
  joker(dinner);
}

const joker = (who) =>{
  for (let i of array){
   who.appendChild(i.cloneNode(1));
  }
}

filteringJsonData();
