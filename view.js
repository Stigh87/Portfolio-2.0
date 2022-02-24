//view
function show() {
    let html = '';

    html += /*html*/`<div id="pageContainer">`
    html += /*html*/`<div id="headerContainer">`  
        html += /*html*/`<div id="mainHeader">Stigh Gundersen</div>`   
        html += /*html*/`<div id="subHeader">${model.app.subHeader}</div>` 
    html += /*html*/`</div>` // Closing headerContainer
    
    html += /*html*/`<div id="navContainer">`  

        for (let i = 0; i < model.menu.length; i++) {
            let menu = model.menu;
        html += /*html*/ `<div class="menuBtn" onclick="viewSelector('${menu[i].name}')">${menu[i].name}</div>`   
        }
    html += `</div>` // Closing navContainer

return html;
}