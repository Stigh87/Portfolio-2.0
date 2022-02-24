//view

function homeView() {

    //div og style til curly brackets linje 12 og 24 ?? onclick/hover til '[' - ']'
let html = '';

    html += `<div id="contentContainer">`
        for(let i = 0; i < model.projects.length; i++) {
            let project = model.projects;
            html += /*html*/`
                <div class="projectContainer">
                <div class="projectHeader" onclick="runApp(${i})"><u>${project[i].name}</u></div> 
                <img class="${model.projects[i].imgSize == 'mobile' ? 'projectImgLarge' : 'projectImg'}" onclick="runApp(${i})" src="${project[i].img}">
                <div class="projectDate"><i>${project[i].date}</i></div>
                <a class="projectLink" href="${project[i].link}"><b>${project[i].link}</b></a> 
                <div class="projectDesc">${project[i].description}</div>
                <div class="projectLanguageContainer">`
                 
                    for (let j = 0; j < model.projects[i].languages.length; j++ ) {
                        let lang = model.projects[i].languages[j];
                        html+= `<div class="projectLanguage"><i>${lang}</i></div>`
                    }
                html += `</div></div>`// Closing languageContainer // Closing contentContainer
        }   
    html += `</div>` // Closing projectContainer

html += `</div>` // Closing pageContainer

return html;
}