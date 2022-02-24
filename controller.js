// Controller
// let html = show();
let appDiv = document.getElementById('app');
viewSelector()
function viewSelector(value) {
    let html = '';
 
    if (value != undefined) {
    model.app.currentPage = value;
    if (model.app.currentPage === 'Github') window.location.href = 'https://github.com/Stigh87/';
    if (model.app.currentPage === 'Contact') window.location.href = 'stigh87@hotmail.com';
    if (model.app.currentPage === 'About') {html = show(); html += aboutView();};
    if (model.app.currentPage === 'Home') {model.app.subHeader = 'HTML JAVASCRIPT CSS AND MORE TO COME'; html = show(); html += homeView(); };
    } else {
        html = show();
        html += homeView(); 
    }
appDiv.innerHTML = html;
}


function runApp(index) {
    window.location.href = model.projects[index].app;
 }
