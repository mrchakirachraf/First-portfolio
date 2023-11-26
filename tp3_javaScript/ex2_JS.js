var myWindow;
var op = 0;
var h = 400;
var w = 600;
function openWindow(){
    let elem = document.getElementById('adr')
    if(op == 0)
    {
        myWindow = window.open(elem.value,"name : small window","width=600,height=400");
        op = 1;
    }else{
        console.log('stop clicking');
    }
}

function closeWindow(){
    click_Ok = confirm('fermeture de la page !!');
    if(click_Ok == true)
    {
        myWindow.close();
        op = 0;
        console.log('window is be closed');
    }
}

function addHeight(){
    h = h + 50;
    myWindow.resizeTo(w,h); 
}

function addWidth(){
    w = w +50;
    myWindow.resizeTo(w,h);
}
