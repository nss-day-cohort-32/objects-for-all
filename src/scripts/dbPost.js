
function addJunktoDB() {
    const categoryID = parseInt(document.querySelector("#categories").value);
    const newJunk = document.querySelector("#junk__category").value;
    return {
        name: newJunk,
        categoryId: categoryID
        };
};

function addNewCategory() {
    const newCategory = document.querySelector("#addCategory").value;
    return {
        name: newCategory
    };
}