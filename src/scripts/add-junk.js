
function saveJunk (obj) {
    return fetch("http://localhost:8088/junk",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    .then(response => response.json());
}

document.querySelector("#submitButton").addEventListener("click", function (){
    let junkCategory = parseInt(document.querySelector("#junkCategory").value);
    let junkInput = document.querySelector("#junkInput").value;
    let junkToAdd = {
        name: junkInput,
        categoryId: junkCategory
    }
    saveJunk(junkToAdd);
    console.log("category", junkCategory);
    console.log("input", junkInput);
})