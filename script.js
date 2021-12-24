let menuCards = ''

const filteringJsonData = async () => {
    const response = await axios.request('./data.json');
    menuTemplate(response.data);
}

const menuTemplate = (a) => {

    a.map(item => {
        menuCards = document.createElement('sub');
        menuCards.innerHTML = `
      <li id=${item.id} class="card">
        <h3 class="subheading card-header"><span class="card-image">${item.image}</span><span>${item.productName}</span></h3>
        <button class="order-button">$${item.price}</button>
      </li>
      `;

       document.querySelector('.rows').appendChild(menuCards);
    })
    
}

filteringJsonData();