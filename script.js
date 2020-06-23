const lightBoxContainer = document.querySelector(".lightbox"),
      lightboxImage = document.querySelector(".lightbox-img"),
      counter = document.querySelector(".counter"),
      imgCaption = document.querySelector(".img-title"),
      prevButton = document.querySelector(".prev");
      nextButton = document.querySelector(".next");
      galleryItems = document.querySelector(".gallery-items").children;

let index,
    imgSrc;

    /*Open lightbox and Change contents*/
    
for(let i=0;i<galleryItems.length;i++){
    galleryItems[i].addEventListener("click",function(){
        index=i;
        changeImage();
        lightBox();
    })
}  

/*Previous and next Button*/

function next(){
    if(index == galleryItems.length-1){
        index = 0;
    }
    else{
        index++;
    }
    changeImage();
}

function prev(){
    if(index == 0){
        index = galleryItems.length-1;
    }
    else{
        index--;
    }
    changeImage();
}

/*open Lightbox*/

function lightBox(){
    lightBoxContainer.classList.toggle("open");
}
/*Close Light BOX*/

lightBoxContainer.addEventListener("click",function(e){
    if(e.target !== lightboxImage && e.target !== prevButton && e.target !== nextButton ){
        lightBox();
    }
})

/*Content For Lightbox */
function changeImage(){
    imgSrc = galleryItems[index].querySelector("img").getAttribute("src");
    lightboxImage.src = imgSrc;
    counter.innerHTML = index+1 + " of " + galleryItems.length;
    imgCaption.innerHTML = galleryItems[index].querySelector("h2").innerHTML;
}