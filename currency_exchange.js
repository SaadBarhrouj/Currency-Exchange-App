let dirham =document.getElementById("dirham");
let euro =document.getElementById("euro");
let dollar =document.getElementById("dollar");

dirham.onkeyup=function(){
    dollar.value=dirham.value*0.100401606;
   euro.value=dirham.value*0.092;

}

euro.onkeyup=function(){
    dollar.value=euro.value*1.09;
   dirham.value=euro.value/0.092;

}

dollar.onkeyup=function(){
    euro.value=dollar.value/1.09;
   dirham.value=dollar.value/0.100401606;

}