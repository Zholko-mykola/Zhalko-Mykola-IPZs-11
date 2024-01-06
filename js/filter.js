const filterBox = document.querySelectorAll(".commission");

document.querySelector('[nav]').addEventListener('click', event => {
    console.log("Clicked element tag name:", event.target.tagName);

    let filterClass = event.target.dataset.f;

    filterBox.forEach(elem=>{
        elem.classList.remove('hide')
        if(!elem.classList.contains(filterClass) && filterClass !== 'all'){
            elem.classList.add('hide')   
        }
        
    });
});