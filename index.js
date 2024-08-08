let index=1;
show(index);

function now(n){
    show(index=n);
}

function plusside(m){
    hide(index += m);
}

function box(m){
    hide(index=m);
}
function show(n){
    let i;
    let images=document.getElementsByClassName("image");
    let dots=document.getElementsByClassName("dot");
    let images1=document.getElementsByClassName("image1");
    let dotss1=document.getElementsByClassName("dots1")
    if(n > images.length){
        index=1;
    }
    if(n < 1){
        index= images.length;
    }
    for(i=0 ;i < images.length;i++){
        images[i].style.display="none";
        images1[i].style.display="none";
    }
    for(i=0; i <dots.length ; i++){
        dots[i].className = dots[i].className.replace(" active", "");
        // dotss1[i].className = dotss1[i].className.replace(" active1", "");
    }
    //  for(i=0; i <dotss1.length ; i++){
    //     dotss1[i].className = dotss1[i].className.replace("active1", "");
    //     //dots[i].className = dots[i].className.replace(" active", "");
    // }
    images[index-1].style.display="block";
    images1[index-1].style.display="block";
   // dotss1[index-1].className += " active1";
    dots[index-1].className += " active";
}
let index1=1;
hide(index)

function hide(m){
    let i;
    let images1=document.getElementsByClassName("image1");
    let dotss1=document.getElementsByClassName("dots1");
    let images=document.getElementsByClassName("image");
    let dots=document.getElementsByClassName("dot");
    if(m > images1.length){
        index=1;
    }
    if(m < 1){
        index= images1.length;
    }
    for(i=0 ;i < images1.length;i++){
        images1[i].style.display="none";
        images[i].style.display="none";
    }
    // for(i=0; i <dotss1.length ; i++){
    //     dotss1[i].className = dotss1[i].className.replace("active1", "");
       
    // }
    for(i=0; i <dots.length ; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    
    }
    
    images[index-1].style.display="block";
    images1[index-1].style.display="block";
    dots[index-1].className += " active";
   //dotss1[index-1].className += " active1";
}

function lightbox(){

    let lightboxdisplay=document.getElementsByClassName("container1")
        lightboxdisplay[0].style.display= "flex";       
        document.querySelectorAll('.nav1').forEach(el => {
            el.style.zIndex = "-1";
            el.style.backgroundColor = "transparent";
        });
    }


function closelightbox(){
    document.getElementsByClassName("container1")[0].style.display="none";
}

function cart(){
    if(document.getElementById("detail").style=="display:block"){
        document.getElementById("detail").style="display:none";   
    }
}
function menu(){
    let menus=document.getElementById("bu");
    let show=document.getElementById("ulm");
    let image= menus.src="icon-close.svg";


    if(document.getElementById("ulm").className=="ulm1"){
        document.getElementById("ulm").classList.remove("ulm1");
        document.getElementById("ulm").classList.add("ulm2");     
        menus.src="icon-close.svg";
        document.getElementById("upnext").style="z-index:-1";
    }
    else{
        document.getElementById("ulm").classList.remove("ulm2");
        document.getElementById("ulm").classList.add("ulm1");     
        menus.src="icon-menu.svg";
        document.getElementById("upnext").style="z-index:1";
    }
}

$(document).ready(function(){  
    var count=0;
    $("#min").click(function(){  
        $("#val").text(--count);
        $('#display').text($('#val').html()*125);
      if(count<0){
        $("#val").text(1);
        $('#display').text($('#val').html()*125);
        count=0;
      }
      else if(count==0){
        $('#detail').css("display","none");
      }
    });  
    $("#max").click(function(){  
      $("#val").text(++count);
      $('#display').text($('#val').html()*125);
    });  
    $('#cart').click(function(){
        if(count==0){
            $('#number').text($('#val').html()).css("display","none");
        }
        else{
        $('#number').text($('#val').html()).css({"padding":"0 5px 0 5px",
        "margin-bottom":"10px",
        "margin-right":"10px",
    "background-color": "hsl(26, 100%, 55%)",
    "border-radius": "5px",
    "font-size": "5px",
    "width": "12px",
    "height":"14px",
    "font-size":"5px",
    "display": "block",
    "align-items": "center",
    "color":"white",
    
    });
}
        $('#number1').text($('#val').html());
        $('#total').text($('#val').html()*125);
    });
    $('#display1').click(function(){
        if(count>0){
            $('#detail').css("display","flex");
            $('#upnext').css("z-index","-1");
        }
        else{
        $('#detail').css("display","none");
        }
    });
    
    $('#del').click(function(){
        $('#detail').css("display","none");
        count=1;
        $("#val").text(0);
        $('#number').text(" ").css("display","none");
        $('#upnext').css("z-index","1");
    });
    // $('#burger').click(function(){
    //     $('#bu').src("icon-close.svg")
    // })
});  