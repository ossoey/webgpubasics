let ui = {};

ui.PADDING_CST = 2.3;
ui.PADDING_CST_SIZE = 6; 

ui.makePaddingLevel = (size,level) =>{
   return Math.pow(ui.PADDING_CST, size-(level-1)) ;
}

ui.createBody = () =>{
    ui.body = document.querySelector("body");
    ui.body.style.display ="flex";
    ui.body.style.justifyContent ="center";
    ui.body.style.alignItems ="center";
    ui.body.style.padding = `${ui.makePaddingLevel(ui.PADDING_CST_SIZE,1)}px`;
}

ui.createContainer = () =>{
    ui.container = document.createElement("div");
    ui.container.classList.add("container");
    ui.container.style.border = "1px solid black";
    ui.container.style.width = "400px"
    ui.container.style.padding = `${ui.makePaddingLevel(ui.PADDING_CST_SIZE,2)}px`;

    ui.body.appendChild(ui.container);
}

ui.createHeader = () =>{
    ui.header = document.createElement("header");
    ui.header.textContent = `Header`
    ui.header.style.border = "1px solid black";
    ui.header.style.padding = `${ui.makePaddingLevel(ui.PADDING_CST_SIZE,3)}px`;
    ui.header.style.fontSize= `${(1.5*ui.PADDING_CST)}rem`
    ui.container.appendChild(ui.header);
}

ui.createMain = () =>{
    ui.main = document.createElement("main");
    ui.main.style.border = "1px solid black"; 
    ui.main.style.padding = `${ui.makePaddingLevel(ui.PADDING_CST_SIZE,3)}px`;
    ui.main.style.fontSize=`${(0.6*ui.PADDING_CST)}rem`
    ui.container.appendChild(ui.main);
}

    ui.createNav = () =>{
        ui.nav = document.createElement("nav");
        ui.nav.textContent ="Navigation"
        ui.nav.style.border = "1px solid black"; 
        ui.nav.style.padding = `${ui.makePaddingLevel(ui.PADDING_CST_SIZE,5)}px`;
        ui.main.appendChild(ui.nav);
    }

    ui.createSectionRubrique = () =>{
        ui.sectionrubrique = document.createElement("section");
        ui.sectionrubrique.textContent ="Rubriques";
        ui.sectionrubrique.style.border = "1px solid black"; 
        ui.sectionrubrique.style.padding = `${ui.makePaddingLevel(ui.PADDING_CST_SIZE,5)}px`;
        ui.main.appendChild(ui.sectionrubrique);
    }

    ui.createSectionEcheance = () =>{
        ui.sectionecheance = document.createElement("section");
        ui.sectionecheance.textContent ="Échéances"; 
        ui.sectionecheance.style.border = "1px solid black"; 
        ui.sectionecheance.style.padding = `${ui.makePaddingLevel(ui.PADDING_CST_SIZE,5)}px`;
        ui.main.appendChild(ui.sectionecheance);
    }

    ui.createSectionEcheancier = () =>{
        ui.sectionecheanciers = document.createElement("section");
        ui.sectionecheanciers.textContent ="Échéanciers";
        ui.sectionecheanciers.style.border = "1px solid black"; 
        ui.sectionecheanciers.style.padding = `${ui.makePaddingLevel(ui.PADDING_CST_SIZE,5)}px`;
        ui.main.appendChild(ui.sectionecheanciers);
    }


ui.createFooter = () =>{
    ui.footer = document.createElement("footer");
    ui.footer.textContent = `Footer`
    ui.footer.innerHtml=`&copy;`;
    ui.footer.style.border = "1px solid black";
    ui.footer.style.padding = `${ui.makePaddingLevel(ui.PADDING_CST_SIZE,3)}px`;
    ui.container.appendChild(ui.footer);
}




ui.column = {

    
    properties:{id : "mycolumn", tagName:"div", style: {border:"2px solid blue", margin:"10px"}},  
  
    elements: [
               
        {  properties:{id: "coco", tagName:"input", type: "color" ,  style:{border:"2px solid red"},
           onclick:(e) =>{console.log( ui.column.elements[0].properties.id)} }  
        },

        {  properties:{id: "coco1", tagName:"input", type: "date" ,  style:{border:"2px solid red"},
          onclick:(e) =>{console.log( ui.column.elements[0].properties.id)} }  
        }
                         
    ]
}


ui.rubriquePan = {};

ui.rubriquePan.element = {

    
    properties:{id : "rubriquepan", tagName:"section", textContent: "rubriquePan", style: {border:"2px solid blue", margin:"10px"}},  

    elements: [
               
        {  properties:{id: "coco", tagName:"input", type: "color" ,  style:{border:"2px solid red"},
           onclick:(e) =>{console.log( ui.column.elements[0].properties.id)} }  
        },

        {  properties:{id: "coco1", tagName:"input", type: "date" ,  style:{border:"2px solid red"},
          onclick:(e) =>{console.log( ui.column.elements[0].properties.id)} }  
        }
                         
    ]

  
}


ui.rubriquePan.chidren = {

    properties:{id : "mycolumn", tagName:"div", style: {border:"2px solid blue", margin:"10px", padding: "3px"}},  
  
    elements: [
               
        {  properties:{id: "coco", tagName:"input", type: "color" ,  style:{border:"2px solid red"},
           onclick:(e) =>{console.log( ui.column.elements[0].properties.id)} }  
        },

        {  properties:{id: "coco1", tagName:"input", type: "date" ,  style:{border:"2px solid red"},
          onclick:(e) =>{console.log( ui.column.elements[0].properties.id)} }  
        }
                         
    ]


}




ui.columnLoader = (columnParent, load) =>{
    
    let column = {};
    column.elements = [];

    function mapObjectToElement(elt, obj) {
        for (const [key, value] of Object.entries(obj)) {
              
            if (typeof value === 'object') {
                // Recursively handle nested objects
                mapObjectToElement( elt[key], value);
            } else {
                // Set the property directly on the element or its style
                elt[key] = value;
            }
        }
    }

    function createAndAppend (parent, eltproperties, appendFunction ="appendChild") {

        let element = document.createElement(eltproperties.tagName);
        mapObjectToElement(element, eltproperties);
        parent[appendFunction](element);
        return element;
    }

    
    function createColumn() {

        if (column.element) {
            column.element = createAndAppend (columnParent, load.properties,"appendChild");
        }

        

    }

    function createElement(container, elt) {

        let element =  createAndAppend (container, elt.properties,"appendChild");
        column.elements.push(element); 
    }

    function createElements() {

        if (load.elements) {
            load.elements.forEach((elt) => {

                if (column.element) {
                    createElement(column.element, elt)
                } else if (!column.element) {
                    createElement(columnParent, elt)
                }
                
                 
            });
    
        }
 
    }

    
    createColumn();
    createElements();

    return column;
}





ui.load = () => {
    // ui.createBody();
    // ui.createContainer();
    // ui.createHeader();
    // ui.createMain();
    //     ui.createNav();
    //     ui.createSectionRubrique();
    //     ui.createSectionEcheance();
    //     ui.createSectionEcheancier();
    // ui.createFooter();


    //ui.columnLoader(document.querySelector("body"), ui.column);
    //let test =  ui.columnLoader(document.querySelector("body"), ui.column);

    let rubriquePan =   ui.columnLoader(document.querySelector("body"), ui.rubriquePan.element);
 
}


