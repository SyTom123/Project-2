var list__header = document.querySelectorAll(".header .header-menu a");
function deleteColor(){
    list__header.forEach(item=>{
       item.classList.remove('active');
    })
}
list__header.forEach(item=>{
    item.addEventListener('click',function(){
        deleteColor();
        item.classList.add("active");
    })
})
