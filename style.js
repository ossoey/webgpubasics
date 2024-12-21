let ui = {};

ui.PADDING_CST = 2.3;
ui.PADDING_CST_SIZE = 6;
 


ui.makePaddingLevel = (size,level, adjustFactor = ui.PADDING_CST) =>{
   return Math.pow(adjustFactor, size-(level-1)) ;
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




 

ui.echeancier = {} ;

  ui.echeancier.frame = {
    properties: {
        tagName: "section", id:"echeancierframeid", textContent:"content", style: { border: "1px solid blue", width: "400px"}
    } 

  }

  ui.echeancier.rubriqueframe = {
     properties: { tagName: "div", id:"rubriqueframeid", style: {border: "1px solid green", display:"flex"}  },
     children : [
         {properties:{ tagName:"label", textContent: "rubrique", style: {border:"1px solid red"}}},
         {properties:{ tagName: "input",   placeholder: "Rubrique", style:{border: "1px solid red" , width: "200px"} }
        } 
     ]
  }

  ui.echeancier.descriptionframe = {
    properties: { tagName: "div", id:"descriptionframeid", style: {border: "1px solid green" , display:"flex"}  },
    children : [
        {properties:{ tagName:"label", textContent: "description", style: {border:"1px solid red"}}},
        {properties:{ tagName: "input",   placeholder: "description", style:{border: "2px solid red"  , width: "200px"} }
       } 
    ]
 }

 ui.echeancier.categoryframe = {
    properties: { tagName: "div", id:"categoryframeid", style: {border: "1px solid green", display:"flex"}  },
    children : [
        {properties:{ tagName:"label", textContent: "category", style: {border:"1px solid red"}}},
        {properties:{ tagName: "input",   placeholder: "category", style:{border: "2px solid red"} }
       } 
    ]
 }


 ui.echeancier.tableframe = {
    properties: { tagName: "div", id:"tableframeid", style: {boder: "1px solid green"},
     
innerHTML:   "<table>  <tr> <th>Company</th> <th>Contact</th>  <th>Country</th></tr>  <tr>  <td>Alfreds Futterkiste</td><td>Maria Anders</td>  <td>Germany</td></tr><tr> <td>Centro comercial Moctezuma</td><td>Francisco Chang</td> <td>Mexico</td>  </tr></table>" 

     },

 }


let depthAdjustment = (params={size:5,level:1, factor:1.5}) =>{
    return Math.pow(params.factor, params.size-(params.level-1)) ;
}


let cloneObjects = (source, target) => {
        Object.entries(source).forEach(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
                target[key] = {};
                cloneObjects(value, target[key]);
            } else {
                target[key] = value;
            }
        });    
}



// Function to set a CSS property for all selected elements
function setSamePropertiesToAllElements(values={ style: {
    margin: "0",
    padding: "0", 
    boxSizing: "border-box"
}}) {   
  const allElements = document.querySelectorAll('*'); 
  allElements.forEach(element => {
     cloneObjects(values, element)
  });
}

let loadColumn = (parentColumn, load) =>{

    let column = {};
    column.children = [];

    let  createAndAppend = (parent, eltproperties, appendFunction ="appendChild") => {

        let element = document.createElement(eltproperties.tagName);
        
        cloneObjects(eltproperties, element);
              
        parent[appendFunction](element);

        return element;
    }

    let  createElement = (container, load_, appendFunction ="appendChild") => {

        return createAndAppend(container, load_.properties, appendFunction);
    }

    let  createChildren = (container, load_, appendFunction ="appendChild") => {
         let children = [];
         load_.children.forEach((child) =>{
            children.push( createElement(container, child, appendFunction));
         });

         return children;
        
    }


    if (load.properties ) {
        column.element = createElement(parentColumn, load);
    } else if (load.children)  {
        column.children = createChildren (parentColumn, load);
    }

    if (load.children ) {
        column.children = createChildren (column.element, load);
    }
    

    return column;
}


ui.container = {
    properties: {tagName:"div" , textContent:"mainContainer", style: {
            border: "1px solid black", 
            justifyContent:"center",
            padding: "10px"
    } }
}

ui.main = {
    properties: {tagName:"main" , textContent:"main", style: {
            border: "1px solid black", 
            justifyContent:"center",
            display: "flex", 
            flexDirection:"column", 
            padding: "8px"
    } }
}

ui.header = {
    properties: {tagName:"header" , textContent:"main", style: {
            border: "1px solid blue", 
            justifyContent:"center",
            display: "flex", 
            flexDirection:"column", 
            padding: "8px"
    } }
}


ui.footer = {
    properties: {tagName:"header" , textContent:"main", style: {
            border: "1px solid blue", 
            justifyContent:"center",
            display: "flex", 
            flexDirection:"column", 
            padding: "8px"
    } }
}





let buildFrameContainer = (params = {}, frames) =>{

    let container = {
        properties: {tagName:"div" , textContent:"mainContainer", style: {
                border: "1px solid black", 
                justifyContent:"right",
                
                padding: `${depthAdjustment(params.padding)}${params.padding.unit}`,
                fontSize: `${depthAdjustment(params.font)}${params.font.unit}`
        } }
    }

    frames.container = loadColumn(document.querySelector("body"), container);
}

let buildFrameMain = (params = {}, frames) =>{

    let container = {
        properties: {tagName:"main" , textContent:"", style: {
                border: "1px solid black", 
                justifyContent:"center",
                alignItems: "center",
 
                width: "40vw",
                padding: `${depthAdjustment(params.padding)}${params.padding.unit}`,
                margin: "0 40vw",
                fontSize: `${depthAdjustment(params.font)}${params.font.unit}`
        } }
    }

    frames.main = loadColumn(frames.container.element, container);
}

let buildFrameHeader = (params = {}, frames) =>{

    let container = {
        properties: {tagName:"header" ,textContent:" ", style: {
                border: "1px solid blue", 
                justifyContent:"center",
                padding: `${depthAdjustment(params.padding)}${params.padding.unit}`,
                fontSize: `${depthAdjustment(params.font)}${params.font.unit}`, 
                display: "flex",
                flexDirection: "row", 
                justifyContent: "space-between"
        } },

    }

    frames.header = loadColumn(frames.main.element, container);
}


let buildFrameTitle = (params = {}, frames) =>{

    let container = {
        properties: {tagName:"div", textContent: "ÉCHÉANCIERS", style: {
                //border: "1px solid blue", 
                padding: `${depthAdjustment(params.padding)}${params.padding.unit}`,
                fontSize: `${depthAdjustment(params.font)}${params.font.unit}`, 
        } } 
    }

    frames.title = loadColumn(frames.header.element, container);
}

let buildFrameNav = (params = {}, frames) =>{

    let container = {
        properties: {tagName:"nav", textContent: "", style: {
                //border: "1px solid blue", 
                padding: `${depthAdjustment(params.padding)}${params.padding.unit}`,
                fontSize: `${depthAdjustment(params.font)}${params.font.unit}`, 
        } } 
    }

    frames.nav = loadColumn(frames.header.element, container);
}


let buildFrameNavUlist = (params = {}, frames) =>{

    let container = {
        properties: {tagName:"ul", textContent: "", style: {
                border: "1px solid blue", 
                listStyleType:"none",
                padding: `${depthAdjustment(params.padding)}${params.padding.unit}`,
                fontSize: `${depthAdjustment(params.font)}${params.font.unit}`,
                display: "flex"
        
        } },
        children : [
               {properties: {tagName: "li", textContent:"Rubrique", style: {borderRight: "1px solid", padding:"2px"} }}, 
               {properties: {tagName: "li", textContent:"Écheance", style: {borderRight: "1px solid", padding:"2px"} }}, 
               {properties: {tagName: "li", textContent:"Écheancier", style: {borderRight: "1px solid", padding:"2px"} }} 

        ] 
    }

    frames.ul = loadColumn(frames.nav.element, container);
}



let buildFrameRubrique = (params = {}, frames) =>{

    let container = {
        properties: {tagName:"section" , textContent:"Rubrique", style: {
                border: "1px solid blue", 
                justifyContent:"center",

                padding: `${depthAdjustment(params.padding)}${params.padding.unit}`,
                fontSize: `${depthAdjustment(params.font)}${params.font.unit}`,
                display: "flex",
                flexDirection: "column", 
        } }
    }

    frames.rubrique = loadColumn(frames.main.element, container);
}

let buildFrameEcheance = (params = {}, frames) =>{

    let container = {
        properties: {tagName:"section" , textContent:"Échéance", style: {
                border: "1px solid blue", 
                justifyContent:"center",
                padding: `${depthAdjustment(params.padding)}${params.padding.unit}`,
                fontSize: `${depthAdjustment(params.font)}${params.font.unit}`,
                display: "flex",
                flexDirection: "column", 
        } }
    }

    frames.echeance = loadColumn(frames.main.element, container);
}


let buildFrameEcheancier = (params = {}, frames) =>{

    let container = {
        properties: {tagName:"section" , textContent:"Échéancier", style: {
                border: "1px solid blue", 
                justifyContent:"center",
                padding: `${depthAdjustment(params.padding)}${params.padding.unit}`,
                fontSize: `${depthAdjustment(params.font)}${params.font.unit}`,
                display: "flex",
                flexDirection: "column", 
        } }
    }

    frames.echeancier = loadColumn(frames.main.element, container);
}



let buildFrameFooter = (params = {}, frames) =>{

    let container = {
        properties: {tagName:"footer" , textContent:"footer", style: {
                border: "1px solid blue", 
                justifyContent:"center",
                padding: `${depthAdjustment(params.padding)}${params.padding.unit}`,
                fontSize: `${depthAdjustment(params.font)}${params.font.unit}`
        } }
    }

    frames.footer = loadColumn(frames.main.element, container);
}

let buildAllFrames = () =>{

    let frames = {}
    let paddingFactor = 1.3;
    let fontFactor = 2.2;
    let maxDepthLevel = 5;  
    
    buildFrameContainer({padding:{level:7, factor: paddingFactor, size: maxDepthLevel, unit:"px"},
                         font:{level:7, factor: fontFactor, size: maxDepthLevel, unit:"px"}
                                  }, frames);

    buildFrameMain({padding:{level:2, factor: paddingFactor, size: maxDepthLevel, unit:"px"},
                             font:{level:2, factor: fontFactor, size: maxDepthLevel, unit:"px"}
                                     }, frames);

    buildFrameHeader({padding:{level:1, factor: paddingFactor, size: maxDepthLevel, unit:"px"},
                     font:{level:1, factor: fontFactor, size: maxDepthLevel, unit:"px"}
                                }, frames);

                                buildFrameTitle({padding:{level:2, factor: paddingFactor, size: maxDepthLevel, unit:"px"},
                                    font:{level:2, factor: fontFactor, size: maxDepthLevel, unit:"px"}
                                               }, frames);

                                buildFrameNav({padding:{level:3, factor: paddingFactor, size: maxDepthLevel, unit:"px"},
                                                font:{level:3, factor: fontFactor, size: maxDepthLevel, unit:"px"}
                                                           }, frames);
                                buildFrameNavUlist({padding:{level:3, factor: paddingFactor, size: maxDepthLevel, unit:"px"},
                                                            font:{level:2.3, factor: fontFactor, size: maxDepthLevel, unit:"px"}
                                                                       }, frames);


                                                           

    buildFrameRubrique({padding:{level:2, factor: paddingFactor, size: maxDepthLevel, unit:"px"},
                         font:{level:2, factor: fontFactor, size: maxDepthLevel, unit:"px"}
            }, frames);

    buildFrameEcheance({padding:{level:2, factor: paddingFactor, size: maxDepthLevel, unit:"px"},
                          font:{level:2, factor: fontFactor, size: maxDepthLevel, unit:"px"}
        }, frames);

    buildFrameEcheancier({padding:{level:2, factor: paddingFactor, size: maxDepthLevel, unit:"px"},
                             font:{level:2, factor: fontFactor, size: maxDepthLevel, unit:"px"}
    }, frames);

    buildFrameFooter({padding:{level:2, factor: paddingFactor, size: maxDepthLevel, unit:"px"},
                                    font:{level:2, factor: fontFactor, size: maxDepthLevel, unit:"px"}
                             }, frames);                                


}


let load = () => {

    buildAllFrames();


   // ui.var = {};
   // ui.var.container = ui.loadColumn(document.querySelector("body"),   ui.container );

   // ui.var.container = ui.loadColumn(ui.var.container.element,   ui.main );

      //  setSamePropertiesToAllElements() 
        //ui.loadColumn(document.querySelector("body"),   ui.echeancier.frame );



   
//    let frameuiob = ui.loadColumn(document.querySelector("body"),   ui.echeancier.frame );

//       ui.loadColumn(frameuiob.element,    ui.echeancier.rubriqueframe );

//       ui.loadColumn(frameuiob.element,    ui.echeancier.descriptionframe );
//       ui.loadColumn(frameuiob.element,    ui.echeancier.categoryframe  ); 
//       ui.loadColumn(frameuiob.element,     ui.echeancier.tableframe ); 

      

 
}


