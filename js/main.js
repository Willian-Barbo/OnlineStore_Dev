// Script para lidar com a visibilidade do conteúdo principal
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.classList.add('visible');
    }, 500);
});

// Alternar respostas de perguntas frequentes FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'none' || answer.style.display === '' ? 'block' : 'none';
    });
});

// Funcionalidade Adicionar ao carrinho
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartItems = document.querySelector('.cart-items');
let totalPrice = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.closest('.product');
        const productName = product.querySelector('h3').innerText;
        const productPrice = parseFloat(product.querySelector('p').innerText.replace('Preço: R$ ', '').replace(',', '.'));

        // Adicionar item ao carrinho
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `<h3>${productName}</h3><p>Preço: R$ ${productPrice.toFixed(2)}</p><button class="remove-btn">Remover</button>`;
        cartItems.appendChild(cartItem);

        // Atualizar preço total
        totalPrice += productPrice;
        document.getElementById('cart-total').innerText = totalPrice.toFixed(2);

        // Remove item from cart
        const removeButton = cartItem.querySelector('.remove-btn');
        removeButton.addEventListener('click', () => {
            cartItems.removeChild(cartItem);
            totalPrice -= productPrice;
            document.getElementById('cart-total').innerText = totalPrice.toFixed(2);
        });
    });
});

// Checkout function
function checkout() {
    if (totalPrice > 0) {
        alert(`Compra finalizada! Total: R$ ${totalPrice.toFixed(2)}`);
        // Clear cart
        cartItems.innerHTML = '';
        totalPrice = 0;
        document.getElementById('cart-total').innerText = '0,00';
    } else {
        alert('Seu carrinho está vazio!');
    }
}
