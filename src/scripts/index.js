const apiUrl = "https://desafio-api.bold.workers.dev/"
let nextPageUrl = `${apiUrl}products?page=1`;


const productGrade = document.getElementById('product-grade');
const loadingSpinner = document.getElementById('loadingSpinner');
const loadMoreBtn = document.getElementById('load-more-button');

function createProductCard(product) {
    // Create product card element
    const article = document.createElement('article');
    article.classList.add('product-card');

    // Create img-container element
    const imgContainer = document.createElement('section');
    imgContainer.classList.add('img-container');
    const img = document.createElement('img');
    img.src = product.image.startsWith('//') ? `https:${product.image}` : product.image;
    img.classList.add('product-image');
    imgContainer.appendChild(img);

    // Create text container element
    const textContainer = document.createElement('section');
    textContainer.classList.add('text-container');

    // Create product header element
    const header = document.createElement('header');
    header.classList.add('product-header');
    const h4 = document.createElement('h4');
    h4.classList.add('product-name', 'font-regular-m');
    h4.textContent = product.name;
    header.appendChild(h4);

    // Create product description element
    const descriptionSection = document.createElement('section');
    descriptionSection.classList.add('product-description', 'only-desktop');
    const descriptionP = document.createElement('p');
    descriptionP.textContent = product.description;
    descriptionSection.appendChild(descriptionP);

    // Create product price table element
    const priceTable = document.createElement('section');
    priceTable.classList.add('product-price-table');

    const oldPriceSection = document.createElement('section');
    oldPriceSection.classList.add('old-price', 'font-regular-sm');
    const oldPriceP = document.createElement('p');
    oldPriceP.textContent = `De: R$${product.oldPrice.toFixed(2).replace('.', ',')}`;
    oldPriceSection.appendChild(oldPriceP);

    const newPriceSection = document.createElement('section');
    newPriceSection.classList.add('new-price');
    const newPriceP = document.createElement('p');
    newPriceP.classList.add('font-bold-sm');
    newPriceP.textContent = `Por: R$${product.price.toFixed(2).replace('.', ',')}`;
    newPriceSection.appendChild(newPriceP);
    const installmentsP = document.createElement('p');
    installmentsP.classList.add('font-regular-sm');
    installmentsP.textContent = `ou ${product.installments.count}x de R$${product.installments.value.toFixed(2).replace('.', ',')}`;
    newPriceSection.appendChild(installmentsP);

    priceTable.appendChild(newPriceSection);
    priceTable.appendChild(oldPriceSection);

    // Add text content element footer
    const footer = document.createElement('footer');
    const buyButton = document.createElement('button');
    buyButton.classList.add('font-regular-l');
    buyButton.textContent = 'Comprar';
    footer.appendChild(buyButton);

    // Add text container element children
    textContainer.appendChild(header);
    textContainer.appendChild(descriptionSection);
    textContainer.appendChild(priceTable);
    textContainer.appendChild(footer);

    // Add product card element children
    article.appendChild(imgContainer);
    article.appendChild(textContainer);

    return article;
}

async function fetchProducts(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return null;
    }
}

function addLoadingErrorMessage(errorMessage){
    const errorMessageP = document.createElement('p');
    errorMessageP.classList.add('loading-error-message');
    errorMessageP.textContent = errorMessage;
    productGrade.appendChild(errorMessageP);
}

function removeLoadingErrorMessage(){
    const errorMessageP = document.querySelector(".loading-error-message");

    if(errorMessageP){
        productGrade.removeChild(errorMessageP)
    }
}

async function addProducts(data, loadingFailedMessage) {
    if (data && data.products) {
        removeLoadingErrorMessage();

        data.products.forEach(product => {
            const productCard = createProductCard(product);
            productGrade.appendChild(productCard);
        });

        if (data.nextPage) {
            nextPageUrl = `https://${data.nextPage}`;
            loadMoreBtn.style.display = 'block';
            loadMoreBtn.textContent = 'Ainda mais produtos aqui!';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    } else {
        addLoadingErrorMessage(loadingFailedMessage);
        loadMoreBtn.textContent = 'Ainda mais produtos aqui!';
    }
}

async function loadInitialProducts() {
    const data = await fetchProducts(nextPageUrl);

    loadingSpinner.style.display = 'none';

    addProducts(data, 'Não foi possível os produtos.')
}

async function loadMoreProducts() {
    loadingSpinner.style.display = 'block';
    loadMoreBtn.textContent = 'Carregando mais...';

    const data = await fetchProducts(nextPageUrl);

    loadingSpinner.style.display = 'none';

    addProducts(data, 'Não foi possível carregar mais produtos.')
}

document.addEventListener('DOMContentLoaded', loadInitialProducts);
loadMoreBtn.addEventListener('click', loadMoreProducts);