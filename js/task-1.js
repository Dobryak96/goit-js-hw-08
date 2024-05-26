const itemElem = document.querySelectorAll('.item');
console.log('Number of categories:', itemElem.length);

itemElem.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('li').length;
    console.log('Category:', title);
    console.log('Elements:', elementsCount);
});
