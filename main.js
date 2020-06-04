document.getElementById("theatrical").addEventListener("click", theatrical);
document.getElementById("professional").addEventListener("click", professional);
document.getElementById("stained_glass").addEventListener("click", stained_glass);

child=document.getElementById('banner_hover');
node=document.getElementById('banner');

let img=new Image();
img.src='images/BeFunky-collage.jpg';


function theatrical() {
    let hasChild = node.querySelector("#banner_hover");
    if (hasChild === null) {
        node.appendChild(child);
    }
    let list_element = document.getElementById('theatrical');
    list_element.className="current_page_item";
    document.getElementById('professional').className='';
    document.getElementById('stained_glass').className='';
    document.getElementById('banner_img').src="images/theaterresume.jpg";
    child.href="files/theaterresume.pdf";
    document.getElementById('social_links').style.display = "none";
    document.getElementById('glass_links').style.display = "none";

}

function professional() {

    let hasChild = node.querySelector("#banner_hover");
    if (hasChild === null) {
        node.appendChild(child);
    }
    let list_element = document.getElementById('professional');
    list_element.className="current_page_item";
    document.getElementById('theatrical').className='';
    document.getElementById('stained_glass').className='';
    document.getElementById('banner_img').src="images/AlexanaResume.jpg";
    child.href="files/AlexanaResumeBCA.pdf";
    document.getElementById('glass_links').style.display = "none";
    document.getElementById('social_links').style.display = "block";
}

function stained_glass() {
    banner=document.getElementById("banner_img");
    let list_element = document.getElementById('stained_glass');
    list_element.className="current_page_item";
    document.getElementById('professional').className='';
    document.getElementById('theatrical').className='';
    document.getElementById('glass_links').style.display = "block";
    document.getElementById('social_links').style.display = "none";
    banner.src="images/BeFunky-collage.jpg";
    node.removeChild(child);
    var a=document.createElement('a');
    a.href='/glass/index.html';
    b= a.appendChild(banner);
document.getElementById('banner').appendChild(a);
}

