function back(){
    let str = document.getElementById('display').innerText;
    if(str==0){
        return ;
    }
    str = str.slice(0,-1);
    if(str==''){
        str=0;
    }
    document.getElementById('display').innerText = str;
}
function operation(str){
    let text = document.getElementById('display').innerText;
    if(text==0){
        document.getElementById('display').innerText = str;
        return ;
    }
    else if(text.length>=8){
        document.getElementById('display').innerText = 'Bas kar bhai';
        return ;
    }
    document.getElementById('display').innerText += str;
}
function AC(){
    document.getElementById('display').innerText = 0;
}
function isEqualTo(){
    let text =  document.getElementById('display').innerText;
    text = text.replace('x','*');
    text = text.replace('%','/100');
    document.getElementById('display').innerText = eval(text);
}