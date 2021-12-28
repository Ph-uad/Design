let menuCards = ''

const filteringJsonData = async () => {
    const response = await axios.request('./data.json');
    menuTemplate(response.data);
}

const generateHTML = (item) =>{
  return  `
  <li id=${item.id} class="card">
    <h3 class="subheading card-header"><span class="card-image">${item.image}</span><span>${item.productName}</span></h3>
  </li>
  `
}

const menuTemplate = (a) => {

    a.map(item => {
        menuCards = document.createElement('sub');
        menuCards.innerHTML = generateHTML(item);

       document.querySelector('.breakfast-list').appendChild(menuCards);
    })
    
}

filteringJsonData();