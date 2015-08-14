var obtn = document.getElementById("btn");
    omain = document.getElementById("main");
    otop = getStyle(omain,"top"),
    oul = document.getElementById("ul"),
    op = document.getElementById("p"),
    oli = oul.getElementsByTagName("li"),
    oimg = document.createElement("img"),
    index = 0;
// function start(){
//         if(getStyle(omain,"opacity")==0){
//             omain.style.display="block";
//             animation.move(omain,{"top":"0","opacity":"1"},1000);

//         }else{
//             animation.move(omain,{"top":"-8.42rem","opacity":"0"},1000);
//             omain.style.display="none";
//         }
// }
// obtn.addEventListener("touchstart",function(){
//     alert(1)
// },false);
obtn.addEventListener("touchend",function (){
        var num = parseInt(otop);
        if(getStyle(omain,"opacity")==0){
            omain.style.display="block";
            animation.move(omain,{"top":"0","opacity":"1"},1000);

        }else{
            animation.move(omain,{"top":num,"opacity":"0"},1000,function(){
                omain.style.display="none";
            });
            
        }
},false);
op.addEventListener("touchend",function(){
    if(getStyle(oul,"display")== "none"){
        oul.style.display = "block";
        op.parentElement.children[1].children[0].src = "img/btn1.png";

    }else{
        oul.style.display = "none";
        op.parentElement.children[1].children[0].src = "img/btn2.png"
    }
},false)
function choose(){
    var remove = function (x){
        oli[x].children[1].removeChild(oli[x].children[1].children[0])
    }

    var add = function (x){
        oli[x].children[1].appendChild(oimg);
        oli[x].children[1].children[0].src="img/choose.png";
    }
    for(var i = 0;i<oli.length;i++){       
        (function (){
            var num = i;
            oli[i].addEventListener("touchend",function(){
                remove(index);
                add(num);
                index = num;
            },false) 
        })()
    }
}
choose();
