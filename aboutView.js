//view
let info;
let infoClass = 'hidden';
let school;
let work;
let description;
let dots = '•••';

// fikse onclick på "more info" under work ala' Siemens

function aboutView() {
    let html = '';
    
    html += `<div id="infoContainer">`
        html += /*html*/`
                <div id="generalArrow" class="infoContainer" data-value=" > "> 
                    <div id="txt" onclick="getInfo('general')">General:</div> 
                    <div id="array" onclick="getInfo('general')">[${dots}</div>   
                            <div class="dropContent">
                                <div id="generalContainer" class="">
                                    <div class="blue">{ Description:</div>
                                    'My name is Stigh, 34 years old, living in Stavern in Norway. Welcome to my portfolio, personal CV. 
                                    I am working towards getting knowledge and education in coding, to become a full-stack developer. 
                                    Currently practicing HTML, Javascript, CSS and C#.'
                                    <div class="blueWhite" data-value=","> }</div>  
                                </div> 
                                <div id="arrayEnd" data-value=","><br/>]</div> 
                            </div> 
                    
                </div>
                
                <div id="eduArrow" class="infoContainer" data-value=" > "> 
                    <div id="txt" onclick="getInfo('education')">Work & Education:</div> 
                    <div id="array" onclick="getInfo('work')">[${dots}</div>   
                        <div id="eduContainer" class="dropContent hidden"> 
                            <div class="dropContent2">
                                <div class="blue arrow" id="schoolHeader" data-value=" > " onclick="getInfo('school')"> School:</div> <div id="array"> [${dots}</div> 
                                <div id="schoolContainer" class="hidden"> 
                                    <div class="blue">{ Elementary school:</div> <div class="orange white" data-value=",">'Godeset Skole'</div> <div class="blue" data-value=","> Year:</div> <div class="orange white" data-value=",">'94/00'</div><div class="blueWhite" data-value=","> }</div>
                                    <div class="blue">{ Junior high school:</div> <div class="orange white" data-value=",">'Gautesete Skole'</div> <div class="blue" > Year:</div><div class="orange white" data-value=",">'00/03'</div data-value=","><div class="blueWhite"data-value=","> }</div>
                                    <div class="blue">{ High school:</div> <div class="orange white" data-value=",">'Godalen & Randaberg VGS'</div> <div class="blue" data-value=","> Year:</div><div class="orange white" data-value=",">'04/05'</div><div class="blueWhite" data-value=","> }</div>
                                    <div class="blue">{ Coding Course/School:</div> <div class="orange white" data-value=",">'GET Academy'</div> <div class="blue" data-value=","> Year:</div><div class="orange white" data-value=",">'21/22'</div><div class="blueWhite" data-value=","> }</div>
                                </div> 
                                <div id="arrayEnd" data-value=","><br/>]</div> 
                            </div><br/>
                            <div class="dropContent2">
                                <div id="workArrow" class="blue arrow" id="work" data-value=" > " onclick="getInfo('work')"> Work:</div> <div id="array"> [${dots}</div> 
                                <div id="workContainer" class="hidden">
                                    <div class="blue" onclick="getInfo('siemens')">{ Siemens Instalation AS: </div> <div class="orange white" data-value=",">'Apprentice / Service Installer'</div> <div class="blue" data-value=","> Year:</div> <div class="orange white" data-value=",">'05/09'</div>
                                    <div class="blueWhite" data-value="," onclick="getInfo('siemens')">
                                         <u id="siemensArrow" class="blue arrow" data-value=" > ">More info: {</u> <div id="siemens" class="hidden orange white" data-value=","> 'I started as an apprentice in 2005, mostly service assignments.  Then I got my certificate as an electritian in 08 and continued with service assignments and some building installations.'
                                            </div>}
                                    </div><div class="blueWhite" data-value=","> }</div>
                                    
                                    <div class="blue" onclick="getInfo('bravida')">{ Bravida Norway AS:</div> <div class="orange white" data-value=",">'Installer / Project Manager'</div> <div class="blue" data-value=","> Year:</div> <div class="orange white" data-value=",">'09/13'</div>
                                    <div class="blueWhite" data-value="," onclick="getInfo('bravida')">
                                         <u id="bravidaArrow" class="blue arrow" data-value=" > ">More info: {</u> <div id="bravida" class="hidden orange white" data-value=","> 'Siemens Installations was baught by/merged with Bravida Norway and my work continued there.  I got promoted to construction manager for two projects, and then to project manager.'
                                            </div>}
                                    </div><div class="blueWhite"data-value=","> }</div>

                                    <div class="blue" onclick="getInfo('si')">{ Stavanger Instalation AS:</div> <div class="orange white" data-value=",">'Project Manager'</div> <div class="blue" data-value=","> Year:</div> <div class="orange white" data-value=",">'13/17'</div>
                                    <div class="blueWhite" data-value="," onclick="getInfo('si')">
                                        <u id="siArrow" class="blue arrow" data-value=" > "> More info: {</u> <div id="si" class="hidden orange white" data-value=","> 'My work continued in Stavanger Installations as a project manager, and some calculations, engineering and planning of jobs the company wanted.'                                        
                                            </div>}      
                                    </div><div class="blueWhite" data-value=","> }</div>
                                    
                                    
                                    
                                    <div class="blue">{ Skipperstua AS:</div> <div class="orange white" data-value=",">'Bartender / Waiter'</div> <div class="blue" data-value=","> Year:</div><div class="orange white" data-value=",">'17/19'</div><div class="blueWhite" data-value=","> }</div>
                                </div> 
                                <div id="arrayEnd" data-value=","><br/>]</div> 
                            </div>
                            
                        </div> 
                    <div id="arrayEnd" data-value=","><br/>]</div> 
                </div>   
                
                <div id="otherArrow" class="infoContainer" data-value=" > " > 
                <div id="txt" onclick="getInfo('exp')">Other experiences:</div> 
                <div id="array" >[${dots}</div>   
                        <div class="dropContent">
                            <div id="expContainer" class="hidden"> 

                                <div class="blue">{ Name:</div>
                                    <div class="orange white" data-value=",">
                                        'Office Excel'
                                    </div> 
                                <div class="blue arrow" id="excelArrow" data-value=" > " onclick="getInfo('excel')"> Description:</div>
                                    <div id="excelContainer" class="orange white hidden" data-value=",">
                                        'Good knowledge with spreadsheets in excel.
                                        Propulsion plans, buisness/project ecconomy, purchasing plan, timesheets etc. And various spreadsheets for projectplanning and calculations.'
                                    </div> 
                                <div class="blueWhite" data-value=","> }</div>
                                <br/>

                                <div class="blue" >{ Name:</div>
                                    <div  class="orange white" data-value=",">
                                        'Internet of things'    
                                    </div> 
                                <div class="blue arrow" id="iotArrow" data-value=" > " onclick="getInfo('iot')"> Description</div>
                                    <div id="iotContainer" class="orange white hidden" data-value=",">
                                        'Smart buildings, mostly lighting and sensors. Power Over Ethernet with Philips and Cisco system. Some courses and experience with Philips Dynalite.' 
                                    </div>
                                <div class="blueWhite" data-value=","> }</div> 
                                <br/>

                                <div class="blue">{ Name:</div>
                                    <div  class="orange white" data-value=",">
                                        'Smarthome/building'    
                                    </div> 
                                <div class="blue arrow" id="smartArrow" data-value=" > " onclick="getInfo('smart')"> Description</div>
                                    <div id="smartContainer" class="orange white hidden" data-value=",">
                                        'Experience with; KNX, Eaton x-Comfort, Philips Dynalite, Vanpee, Future Home.
                                        Both in houses, small projects and larger buildings.'
                                    </div>
                                <div class="blueWhite" data-value=","> }</div>

                            </div> 
                        </div>
                <div id="arrayEnd" data-value=","><br/>]</div> 
                </div> 



                <div id="hobbyArrow" class="infoContainer" data-value=" > " onclick="getInfo('hobby')"> 
                    <div id="txt">Hobbies:</div> 
                    <div id="array" >[${dots}</div>   
                            <div class="dropContent">
                                <div id="hobbyContainer" class="hidden"> 
                                    <div class="blue">{ General:</div>
                                        'I appreciate my sparetime with friends and gaming. Within gaming I'm mostly enjoing MMO's like World of Warcraft and New World. 
                                        But also occationally FPS games like Counter Strike, Fortnite, Call of duty.
                                        Music is also a hobby of mine, all kind of music (almost). Especially I like listening to vinyls.
                                        Coding has become a hobby.  Make some own projects; small games, web sites and more.'
                                    <div class="blueWhite" data-value=","> }</div> 
                                </div> 
                            </div>
                    <div id="arrayEnd" data-value=","><br/>]</div> 
                </div>  
                `
    html += `</div>` // Closing contentContainer

html += `</div>` // Closing pageContainer

return html;
}


function getInfo(value) {
  
    if (value === "general") {
        if(generalContainer.classList.contains('hidden')) {     
            generalContainer.classList.remove('hidden');
            generalArrow.dataset.value = "v";
        } else {
            generalContainer.classList.add('hidden');
            generalArrow.dataset.value = ">";
        }
    }
    if (value === "education") {
        if (eduContainer.classList.contains('hidden')) {     
            eduContainer.classList.remove('hidden');
            eduArrow.dataset.value = "v";
        }else {
            eduContainer.classList.add('hidden');
            eduArrow.dataset.value = ">";
        }
    }
    if (value === "work") {
        if(workContainer.classList.contains('hidden')) {     
            workContainer.classList.remove('hidden');
            workArrow.dataset.value = "v";
        } else {
            workContainer.classList.add('hidden');
            workArrow.dataset.value = ">";
        }
    }
    if (value === "school") {
        if(schoolContainer.classList.contains('hidden')) {     
            schoolContainer.classList.remove('hidden');
            schoolHeader.dataset.value = " v ";
        } else {
            schoolContainer.classList.add('hidden');
            schoolHeader.dataset.value = " > ";
        }
    }
    if (value === "hobby") {
        if(hobbyContainer.classList.contains('hidden')) {     
            hobbyContainer.classList.remove('hidden');
            hobbyArrow.dataset.value = "v";
        } else {
            hobbyContainer.classList.add('hidden');
            hobbyArrow.dataset.value = ">";
        }
    }
    if(value === "exp") {
        console.log("klikk")
        if(expContainer.classList.contains('hidden')) {
            expContainer.classList.remove('hidden');
            otherArrow.dataset.value = "v";
        } else {
            expContainer.classList.add('hidden');
            otherArrow.dataset.value = ">";
        }
    }
    if(value === "excel") {
        if(excelContainer.classList.contains('hidden')) {
        excelContainer.classList.remove('hidden');
        excelArrow.dataset.value = "v";
        } else {
        excelContainer.classList.add('hidden');
        excelArrow.dataset.value = ">";
        }   
    }
    if(value === "iot") {
        if(iotContainer.classList.contains('hidden')) {
        iotContainer.classList.remove('hidden');
        iotArrow.dataset.value = "v";
        }else {
        iotContainer.classList.add('hidden');
        iotArrow.dataset.value = ">";
        }
    }
    if(value === "smart") {
        if(smartContainer.classList.contains('hidden')) {
        smartContainer.classList.remove('hidden');
        smartArrow.dataset.value = "v";
        }else {
        smartContainer.classList.add('hidden');
        smartArrow.dataset.value = ">";
        }
    }
    if(value === "siemens") {
        if(siemens.classList.contains('hidden')) {
            siemens.classList.remove('hidden');
            siemensArrow.dataset.value = "v";
            }else {
                siemens.classList.add('hidden');
            siemensArrow.dataset.value = ">";
            }
    }
    if(value === "bravida") {
        if(bravida.classList.contains('hidden')) {
            bravida.classList.remove('hidden');
            bravidaArrow.dataset.value = "v";
            }else {
                bravida.classList.add('hidden');
            bravidaArrow.dataset.value = ">";
            }
    }
    if(value === "si") {
        if(si.classList.contains('hidden')) {
            si.classList.remove('hidden');
            siArrow.dataset.value = "v";
            }else {
                si.classList.add('hidden');
            siArrow.dataset.value = ">";
            }
    }

}  

function getDescription(value) {
    if (value === 'siemens') {
    //Siemens
    model.app.subHeader = `
    <div id="siemens" class="desc">I started as an apprentice in 2005, mostly service assignments. Then I got my certificate as an electritian in 08 and continued with service assignments and some building installations.
    </div>`
    
    }
    if (value === 'bravida') {    
    //Bravida
    model.app.subHeader = `
    <div class="desc">Siemens Installations was baught/merged by Bravida Norway and my work continued here. 
        I got promoted to construction manager for two projects, and then to project manager.
    </div>`
    }
    if (value === 'si') {    
    //StavangerInst.
    model.app.subHeader = `
    <div class="desc">
        My work continued in Stavanger Installations as a project manager, and some calculations of prices on jobs the company wanted.
    </div>`
    }                       

viewSelector('About'); 
}   