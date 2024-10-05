let cal=localStorage.getItem('calu') || '';
function f(c){
    if(c==''){
        cal=c;
    }else{
        cal+=c;
    }
    document.querySelector('.Calculated').innerHTML = cal;
}
function calculate(){
    if(cal==''){
        return;
    }
    cal = String(eval(cal));
    document.querySelector('.Calculated').innerHTML = cal;
    localStorage.setItem('calu',cal);
}