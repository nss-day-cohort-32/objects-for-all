const junkItemInput = document.querySelector("#junk__item");
let selectCategoryInput = document.querySelector("#junk__item__category")
const itemSaveBtn = document.querySelector("#btn-saveitem")

let dropDownOptionsHTML = (obj) => {
    return `<option value="${obj.id}">${obj.name}</option>`
}

API.getCategories()
    .then(result => {
        // console.log(result)
        result.forEach(category => {
           selectCategoryInput.innerHTML += dropDownOptionsHTML(category);
           console.log(category)
        })
    });
    
saveJunkItem = function (obj) {
    return fetch("http://localhost:8088/junk", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    .then(response => response.json())
}


itemSaveBtn.addEventListener("click", event => {
    const newJunkItem = junkItemInput.value;
    const categoryValueId = selectCategoryInput.value;
    const junkObj = {
        name: newJunkItem,
        categoryId: categoryValueId
    }

    saveJunkItem(junkObj)
    .then(parsedResult => {
        console.log("this the new junk", parsedResult)
    })
});


// API.saveJunkItem(junkObj)
// .then(parsedResult => {
//     console.log("this the new junk", parsedResult)
// })
// });


