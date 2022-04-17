const categoriesTitle = document.querySelectorAll('.item');
console.log('Number of categories:' ,categoriesTitle.length);

const categoriesInfoDistribution = [...categoriesTitle].map(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
})
