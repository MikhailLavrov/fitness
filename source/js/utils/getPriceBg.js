const getPriceBg = () => {
  let subscriptionCardNodes = document.querySelectorAll('.subscription-card__price');

  subscriptionCardNodes.forEach((card) => {
    let price = card.querySelector('p');
    let priceBg = card.querySelector('small');
    priceBg.textContent = price.textContent;
  });
};

export {getPriceBg};
