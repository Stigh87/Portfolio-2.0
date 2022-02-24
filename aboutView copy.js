// //view
// let info;
// let infoClass = 'hidden';
// let school;
// let work;
// let description;

// function aboutView() {
//     let html = '';
    
//     html += `<div id="infoContainer">`
//         html += `
//                 <div class="infoContainer" data-value=" > "> 
//                     <div id="txt" onclick="getInfo('general')">General:</div> 
//                     <div id="array" onclick="getInfo('general')">[...</div>   
//                             <div class="dropContent ${infoClass === 'general' ? 'space' : 'hidden'}""> ${info != undefined ? info : ''} </div> 
//                     <div id="arrayEnd" data-value=",">]</div> 
//                 </div>

//                 <div class="infoContainer" data-value=" > "> 
//                     <div id="txt" onclick="getInfo('work')">Work & Education:</div> 
//                     <div id="array" onclick="getInfo('work')">[...</div>   
//                             <div class="dropContent ${infoClass === 'work' ? 'space' : 'hidden'}""> ${info != undefined ? info : ''} </div> 
//                     <div id="arrayEnd" data-value=",">]</div> 
//                 </div>   
                
//                 <div class="infoContainer" data-value=" > " onclick="getInfo('hobby')"> 
//                     <div id="txt">Hobbies:</div> 
//                     <div id="array" >[...</div>   
//                             <div class="dropContent ${infoClass === 'hobby' ? 'space' : 'hidden'}""> ${info != undefined ? info : ''} </div> 
//                     <div id="arrayEnd" data-value=",">]</div> 
//                 </div>  
//                 `
//                 html += `${description != '' ? description : ''}`
//     html += `</div>` // Closing contentContainer

// html += `</div>` // Closing pageContainer

// return html;
// }


// function getInfo(value) { 
   
//         if (value === "general") {
//             infoClass = value;
//             info = "General informasjon lorem osv lorem osvlorem osvlorem osv osv lorem osvlorem osvlorem osv osv lorem osvlorem osvlorem osv osv lorem osvlorem osvlorem osv osv lorem osvlorem osvlorem osv osv lorem osvlorem osvlorem osv"
//         } 
//         if (value === "work") {
//             infoClass = value;
//             info = `
//             <div class="dropContent2">
//                 <div class="blue" id="school" onclick="getSchool()">School 1994 - 2007:</div> <div id="array"> [...</div> 
//                 <div class="">${school != undefined ? school : ''} </div> <div id="arrayEnd" data-value=",">]</div> 
//             </div>
//             <div class="dropContent2">
//                 <div class="blue" id="work" onclick="getWork()">Work:</div> <div id="array"> [...</div> 
//                 <div class="">${work != undefined ? work : ''} </div> <div id="arrayEnd" data-value=",">]</div> 
//             </div>`
//         } 
//         if (value === "hobby") {
//             infoClass = value;
//             info = "General HOBBY informasjon lorem osv lorem osvlorem osvlorem osv osv lorem osvlorem osvlorem osv osv lorem osvlorem osvlorem osv osv lorem osvlorem osvlorem osv osv lorem osvlorem osvlorem osv osv lorem osvlorem osvlorem osv"
//         } 
            
    
//     // else {
//     //     infoClass = '';
//     //     info = '';
//     // }
// viewSelector('About')

// }

// function getSchool() {
    
//         school = `
//             <div class="blue">{ Elementary school:</div> <div class="orange white" data-value=",">'Godeset Skole'</div> <div class="blue" data-value=","> Year:</div> <div class="orange white" data-value=",">'94/00'</div><div class="blueWhite" data-value=","> }</div>
//             <div class="blue">{ Junior high school:</div> <div class="orange white" data-value=",">'Gautesete Skole'</div> <div class="blue" > Year:</div><div class="orange white" data-value=",">'00/03'</div data-value=","><div class="blueWhite"data-value=","> }</div>
//             <div class="blue">{ High school:</div> <div class="orange white" data-value=",">'Godalen & Randaberg VGS'</div> <div class="blue" data-value=","> Year:</div><div class="orange white" data-value=",">'04/05'</div><div class="blueWhite" data-value=","> }</div>
//             <div class="blue">{ Coding Course/School:</div> <div class="orange white" data-value=",">'GET Academy'</div> <div class="blue" data-value=","> Year:</div><div class="orange white" data-value=",">'21/22'</div><div class="blueWhite" data-value=","> }</div>
//         `
//         infoClass = 'work'
    
// getInfo(infoClass)
// viewSelector('About') 
// }  
// function getWork() {
        
//         work = `
//             <div class="blue" onclick="getDescription('siemens')">{ Siemens Instalation AS:</div> <div class="orange white" data-value=",">'Apprentice / Service Installer'</div> <div class="blue" data-value=","> Year:</div> <div class="orange white" data-value=",">'05/09'</div><div class="blueWhite" data-value=","> }</div>
//             <div class="blue" onclick="getDescription('bravida')">{ Bravida Norway AS:</div> <div class="orange white" data-value=",">'Installer / Project Manager'</div> <div class="blue" > Year:</div><div class="orange white" data-value=",">'09/13'</div data-value=","><div class="blueWhite"data-value=","> }</div>
//             <div class="blue" onclick="getDescription('si')">{ Stavanger Instalation AS:</div> <div class="orange white" data-value=",">'Project Manager'</div> <div class="blue" data-value=","> Year:</div><div class="orange white" data-value=",">'13/17'</div><div class="blueWhite" data-value=","> }</div>
//             <div class="blue">{ Skipperstua AS:</div> <div class="orange white" data-value=",">'Bartender / Waiter'</div> <div class="blue" data-value=","> Year:</div><div class="orange white" data-value=",">'17/19'</div><div class="blueWhite" data-value=","> }</div>
//         `
//     infoClass = 'work'

// getInfo(infoClass)   
// viewSelector('About')  
// }  

// function getDescription(value) {
//     if (value === 'siemens') {
//     //Siemens
//     model.app.subHeader = `
//     <div class="desc">I started as an apprentice in 2005, mostly service assignments. Then I got my certificate as an electritian and continued with service assignments and some building installations.
//     </div>`
    
//     }
//     if (value === 'bravida') {    
//     //Bravida
//     model.app.subHeader = `
//     <div class="desc">Siemens Installations was baught/merged by Bravida Norway and my work continued here. 
//         I got promoted to construction manager for two projects, and then to project manager.
//     </div>`
//     }
//     if (value === 'si') {    
//     //StavangerInst.
//     model.app.subHeader = `
//     <div class="desc">
//         My work continued in Stavanger Installations as a project manager, and some calculations of prices on jobs the company wanted.
//     </div>`
//     }                       

// viewSelector('About'); 
// }   