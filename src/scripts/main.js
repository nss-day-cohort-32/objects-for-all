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
            // console.log("category", result);
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

handleFillScrollBar = () => {
    document.querySelector("#categoryId").innerHTML = "";
    API.getCategories()
        .then(result => {
            console.log("category", result);
            result.forEach(names => {
                fillScrollBar(names.name);
            })
    });
};
handleFillScrollBar();

document.querySelector("#btn-saveCategory").addEventListener("click", event => {
    const category = document.querySelector(".junk__category").value;

        // Once you have collected all the values, build your data structure
        const categoryObj = {
            name: category
        };

    API.saveCategory(categoryObj)
    .then(parsedResult => {
        console.log("what is the result", parsedResult);
        handleFillScrollBar();
    });
    
});

const addJunkButton = document.querySelector("#addJunkButton").addEventListener("click", event => {
    const junk = addJunkBar.value;
    const junkId = categoryScrollBar.value;

        const junkObj = {
            name: junk,
            categoryId: junkId
        }

    API.saveJunk(junkObj)
    .then(parsedJunk => {
        console.log("what is the junk?", parsedJunk);
    })
});

document.querySelector("#btn-getJunk").addEventListener("click", handleGetJunkClick);
document.querySelector("#btn-getCategories").addEventListener("click", handleGetCategoryClick);
document.querySelector("#btn-getCategoryDetails").addEventListener("click", handleGetCategoryDetailClick);
// document.querySelector("#addJunkButton").addEventListener("click", handleFillScrollBar);

const mainContainer = document.querySelector("#container");
const categoryScrollBar = document.querySelector("#categoryId");
const addJunkBar = document.querySelector("#addJunkBar");



