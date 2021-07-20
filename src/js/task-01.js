const categoriesRef = document.querySelector('#categories');
// console.log(categories.children);
const catArr = [...categoriesRef.children];
console.log(`У списку ${catArr.length} категорії.`);

console.log(catArr);

const titleFinder = catArr.forEach(title => {
    console.log(title.children);
});
