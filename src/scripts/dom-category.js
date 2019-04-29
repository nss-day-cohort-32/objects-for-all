const categoryDom = (obj) => {
    return `<div>
                ${obj.name}
                ${obj.id}
            </div>`;
};
const categoryDetailDom = (obj) => {
    return `<div>
                ${obj.name}
                ${obj.junk}
            </div>`;
};
const categoryOptionMenuDom = (obj) => {
    return `<option value="${obj.id}">${obj.name}</option>`
};
const buildOptionMenu = (data) => {
    data.forEach(element => {
        optionContainer.innerHTML += categoryOptionMenuDom(element)
    })
};
const categoryScrollDom = (obj) => {
    return `<option>${obj}</option>`;
}
const buildCategoryDom = (data) => {
    mainContainer.innerHTML = "";
    data.forEach(element => {
        mainContainer.innerHTML += categoryDom(element);
    });
};

const buildCategoryDetailDom = (data) => {
    console.log("data", data);
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += `<h2>${data.name}</h2>`;
    data.junk.forEach(element => {
        mainContainer.innerHTML += categoryDetailDom(element);
    });
};

const fillScrollBar = (data) => {
    categoryScrollBar.innerHTML += categoryScrollDom(data);
};