
handleGetJunkClick = () => {
    API.getJunk()
    .then(result => {
        console.log("junk", result);
        buildJunkDom(result);
    });
};

handleGetCategoryClick = () => {
    API.getCategories()
        .then(result => {
            console.log("category", result);
            buildCategoryDom(result);
        });
};

handleGetCategoryDetailClick = () => {
    API.getCategoryWithJunk()
        .then(result => {
            console.log("category list", result);
            buildCategoryDetailDom(result);
        });
};

document.querySelector("#btn-saveCategory").addEventListener("click", () => {
    let categoryObj = addJunktoDB()
    API.saveNewJunk(categoryObj)
    .then(parsedResult => {
        console.log("what is the result", parsedResult);
    });

});

document.querySelector("#btn-saveNewCategory").addEventListener("click", () => {
    let newCategory = addNewCategory()
    API.saveCategory(newCategory)
    .then(parsedResults => {
        document.querySelector("#categories").innerHTML = ""
        loadOptions()
    })
})

function loadOptions() {
    API.getCategories()
    .then(parsedResult => {
        buildOptionMenu(parsedResult)
    })
}

loadOptions();


document.querySelector("#btn-getJunk").addEventListener("click", handleGetJunkClick);
document.querySelector("#btn-getCategories").addEventListener("click", handleGetCategoryClick);
document.querySelector("#btn-getCategoryDetails").addEventListener("click", handleGetCategoryDetailClick);

const mainContainer = document.querySelector("#container");
const optionContainer = document.querySelector("#categories");






