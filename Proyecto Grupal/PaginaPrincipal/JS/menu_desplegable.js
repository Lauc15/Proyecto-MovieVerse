let box_category = document.querySelector(".box-category");
let category_comedy = document.querySelector(".category-comedy");
let category_ciencia_ficcion = document.querySelector(".category-ciencia_ficcion");
let category_terror = document.querySelector(".category-terror");
let box_classification = document.querySelector(".box-classification")
let box_style = document.querySelector(".box-style");
let ordContainer = document.querySelector(".ordContainer");
let movies = document.querySelector(".movies");
let fragment = document.createDocumentFragment();

let clearChildren = (element)=>{while (element.hasChildNodes()) element.removeChild(element.firstChild);}

document.querySelector(".category").addEventListener("click", ()=>{
    if(box_category.hidden) box_category.hidden=false;
    else box_category.hidden=true;
});

category_terror.addEventListener("click", ()=>{    
    if(category_terror.checked){
        for(movie of movies.children){
            if(movie.classList.contains("category-terror")) fragment.appendChild(movie.cloneNode(true))
        }
        ordContainer.appendChild(fragment)
    } 
    else clearChildren(ordContainer)
});

category_ciencia_ficcion.addEventListener("click", ()=>{    
    if(category_ciencia_ficcion.checked){
        for(movie of movies.children){
            if(movie.classList.contains("category-ciencia_ficcion")) fragment.appendChild(movie.cloneNode(true))
        }
        ordContainer.appendChild(fragment)
    } 
    else clearChildren(ordContainer)
});

category_comedy.addEventListener("click", ()=>{    
    if(category_comedy.checked){
        for(movie of movies.children){
            if(movie.classList.contains("category-comedy")) fragment.appendChild(movie.cloneNode(true))
        }
        ordContainer.appendChild(fragment)
    } 
    else clearChildren(ordContainer)
});

document.querySelector(".classification").addEventListener("click", ()=>{
    if(box_classification.hidden) box_classification.hidden=false;
    else box_classification.hidden=true;
});

document.querySelector(".style").addEventListener("click", ()=>{
    if(box_style.hidden) box_style.hidden=false;
    else box_style.hidden=true;
});