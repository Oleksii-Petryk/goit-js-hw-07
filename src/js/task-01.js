const categoriesRef = document.querySelector('#categories');
const categoriesTitlesRef = document.querySelectorAll('#categories h2');
// console.log(categories.children);
// console.log(categoriesTitlesRef);
const categoriesArr = [...categoriesRef.children];
console.log(`В списке ${categoriesArr.length} категории.`);

categoriesTitlesRef.forEach(categoriesTitle =>
    console.log(`Категория: ${categoriesTitle.textContent}
    Количество элементов: ${categoriesTitle.parentNode.querySelectorAll('.item li').length}`));
    






