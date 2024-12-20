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

ui.loadColumn = (parentColumn, load) =>{

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
            flexDirection:"row", 
            padding: "8px"
    } },

    children: [
        {properties:{tagName:"input"}},
        {properties:{tagName:"input"}},

    ]
}



ui.load = () => {

    ui.var = {};
    ui.var.container = ui.loadColumn(document.querySelector("body"),   ui.container );

    ui.var.container = ui.loadColumn(ui.var.container.element,   ui.main );

      //  setSamePropertiesToAllElements() 
        //ui.loadColumn(document.querySelector("body"),   ui.echeancier.frame );



   
//    let frameuiob = ui.loadColumn(document.querySelector("body"),   ui.echeancier.frame );

//       ui.loadColumn(frameuiob.element,    ui.echeancier.rubriqueframe );

//       ui.loadColumn(frameuiob.element,    ui.echeancier.descriptionframe );
//       ui.loadColumn(frameuiob.element,    ui.echeancier.categoryframe  ); 
//       ui.loadColumn(frameuiob.element,     ui.echeancier.tableframe ); 

      

 
}


