var dis:HTMLInputElement = document.querySelector('#screen');
var btn:any=document.querySelectorAll('.btn');
var scndOpr=true;
var degree=true;
 var index=0;
var memoryStore:any=[];


function deg(){
    if(degree){
        document.getElementById('deg').innerHTML='RAD';
        degree=!degree;
    }
    else{
        document.getElementById('deg').innerHTML='DEG';
        degree=!degree;       
    }
}

function fe(){
    dis.value=Number(dis.value).toExponential();
}


function memoryFunctions(input : any){

    function memDis(){
        document.getElementById('mc').style.pointerEvents='none';
        document.getElementById('mc').style.color='gray';
        document.getElementById('mr').style.pointerEvents='none';
        document.getElementById('mr').style.color='gray';
    }

    function memEn(){
        document.getElementById('mc').style.pointerEvents='auto';
        document.getElementById('mc').style.color='black';
        document.getElementById('mr').style.pointerEvents='auto';
        document.getElementById('mr').style.color='black';
    }

    if (input=='MC'){
        memoryStore=[];
    memDis();
    index=0;
    }
    else if(input=='MR'){
        index=0;
    let res=0;
    memoryStore.forEach(memCal);
    function memCal(value:any, idex:any, array:any){
        res+=value;
    }
    dis.value=String(res);
    }
    else if(input=='M+'){
        if(dis.value !==''){
            memoryStore.push(Number(eval(dis.value)));
        }
        dis.value='';
        if(memoryStore.length === 1){
            memEn();
        }
        index=0;
    }
    else if(input=='M-'){
        if(dis.value !==''){
            memoryStore.push(-1*Number(eval(dis.value)));
        }
        dis.value='';
        if(memoryStore.length === 1){
            memEn();
        }
        index=0;
    }
    else if(input=='MS'){
        if(memoryStore.length==0){
            alert('Memory is empty');
        }
        else{
            dis.value=memoryStore[index];
            if(index<memoryStore.length-1){
                index++;
            }
            else{
                index=0;
            }
        }
    }
}

function trigoFunctions(input:any){
    if(degree){
        dis.value=String(Number(dis.value)*(Math.PI/180));
    }
    if(input=='Sin'){
        dis.value=String(Math.sin(Number(dis.value)));
    }
    else if(input=='Cos'){
        dis.value=String(Math.cos(Number(dis.value)));
    }
    else if(input=='Tan'){
        dis.value=String(Math.tan(Number(dis.value)));
    }
    else if(input=='Sin-1'){
        dis.value=String(Math.asin(Number(dis.value)));
    }
    else if(input=='Cos-1'){
        dis.value=String(Math.acos(Number(dis.value)));
    }
    else if(input=='Tan-1'){
        dis.value=String(Math.atan(Number(dis.value)));
    }
}

function functions(input : any){
    if(input=='round'){
        dis.value=String(Math.round(Number(dis.value)));
    }
    else if(input=='ceil'){
        dis.value=String(Math.ceil(Number(dis.value)));
    }
    else if(input=='floor'){
        dis.value=String(Math.floor(Number(dis.value)));
    }
    else if(input=='trunc'){
        dis.value=String(parseInt(dis.value));
    }
}

function scndBtn(){
    if(scndOpr){
        document.getElementById('scndOp').style.boxShadow= ('inset 5px 5px 8px #00000020, inset -5px -5px 5px #ffffff');
        document.getElementById('xPow').innerHTML='x<sup>3</sup>';
        document.getElementById('root').innerHTML='<sup>3</sup>&radic;x';
        document.getElementById('powX').innerHTML='2<sup>x</sup>';
        document.getElementById('log').innerHTML='log<sub>2</sub>';
        document.getElementById('ln').innerHTML='ln<sub>2</sub>';
        document.getElementById('sin').innerHTML='Sin<sup>-1</sup>';
        document.getElementById('cos').innerHTML='Cos<sup>-1</sup>';
        document.getElementById('tan').innerHTML='Tan<sup>-1</sup>';
        scndOpr=!scndOpr;
    }
    else{
        document.getElementById('scndOp').style.boxShadow='none';
        document.getElementById('xPow').innerHTML='x<sup>2</sup>';
        document.getElementById('root').innerHTML='<sup>2</sup>&radic;x';
        document.getElementById('powX').innerHTML='10<sup>x</sup>';
        document.getElementById('log').innerHTML='log';
        document.getElementById('ln').innerHTML='ln';
        document.getElementById('sin').innerHTML='Sin';
        document.getElementById('cos').innerHTML='Cos';
        document.getElementById('tan').innerHTML='Tan';
        scndOpr=!scndOpr;      
    }
}

function pi(){
    if(dis.value == '0')
    {
        dis.value=String(Math.PI);
    }
    else{
       dis.value=String(Number(dis.value)*Math.PI);
    }
}
function e(){
    if(dis.value == '0')
    {
        dis.value=String(Math.E);
    }
    else{
    dis.value=String(Number(dis.value)*Math.E);
    }
}

function backspc(){
    dis.value=dis.value.substr(0,dis.value.length-1);
}

function pow(x:any,y:any){
    dis.value=String(Math.pow(x,y));
}

function divx(){
    dis.value=eval(String(1/Number(dis.value)));
}

function abs(){
    dis.value=String(Math.abs(Number(dis.value)));
}
function exp(){
    dis.value=String(Math.exp(Number(dis.value)));
}

function root(){ 
        dis.value=String(Math.sqrt(Number(dis.value)));
    }

function cube() : any{ 
    dis.value=String(Math.round(Math.pow(Number(dis.value),(1/3))));
    }


function fact(): void{
    var i, num : any, f;
    f=1;
    num=dis.value;
    for(i=1;i<=num;i++)
    {
        f=f*i;
    }
    i=i-1;
    dis.value=String(f);
}

function log(input : any){
    if(input=='log'){
    dis.value=String(Math.log(Number(dis.value)));
    }
    else if(input=='log2'){
        dis.value=String(Math.log(Number(dis.value)/Math.log(2)));
    }
    else if(input=='ln'){
        dis.value+='('+Math.LN10+')';
    }
    else if(input=='ln2'){
        dis.value+='('+Math.LN2+')';
    }
}

function pN(){
    dis.value = String(Number(dis.value)*-1);
}


function chkOpr(){
    if(dis.value.charAt(dis.value.length-1) == '+' ||
       dis.value.charAt(dis.value.length-1) == '-' ||
       dis.value.charAt(dis.value.length-1) == '*' ||
       dis.value.charAt(dis.value.length-1) == '/' ||
       dis.value.charAt(dis.value.length-1) == '%' ||
       dis.value.charAt(dis.value.length-1) == '.'){
        backspc();
        chkOpr();
    }
}


function ans(){
    if(dis.value=='+' ||
       dis.value=='-' ||
       dis.value=='*' ||
       dis.value=='/' ||
       dis.value=='%' ||
       dis.value=='.'){
        dis.value='';
    }
    if(dis.value!==''){
        var res= dis.value.split('-(').join('-').split(')-').join('-')
                             .split('+(').join('+').split(')+').join('+')
                             .split('/(').join('/').split(')/').join('/')
                             .split('*(').join('*').split(')*').join('*')
                             .split('(').join('*').split(')').join('*');

        if(res.charAt(res.length-1)=='*' ||
           res.charAt(res.length-1)=='/' ||
           res.charAt(res.length-1)=='+' ||
           res.charAt(res.length-1)=='-' ||
           res.charAt(res.length-1)=='%' ||
           res.charAt(res.length-1)=='.'){
                res= res.substr(0,res.length-1);
        }
    dis.value=eval(res);
    }
}



for(var item of btn)
{
    item.addEventListener('click',(e:Event)=>{
       let btntxt=e.target as HTMLElement;
       var btntext = btntxt.innerText;
        if(btntext == 'DEG' ||
           btntext == 'RAD')
        {
            deg();
            btntext='';
        }
        else if(btntext == 'F-E')
        {
            fe();
            btntext='';
        }

        else if(btntext == 'MC' ||
                btntext == 'MR' ||
                btntext == 'M+' ||
                btntext == 'M-' ||
                btntext == 'MS')
        {
            memoryFunctions(btntext);
            btntext='';
        }

        else if(btntext == 'Sin'  ||
                btntext == 'Cos'  ||
                btntext == 'Tan'  ||
                btntext == 'Sin-1'||
                btntext == 'Cos-1'||
                btntext == 'Tan-1')
        {
            trigoFunctions(btntext);
            btntext='';
        }
        else if(btntext == 'ceil'  ||
                btntext == 'round' ||
                btntext == 'floor' ||
                btntext == 'trunc')
        {
            functions(btntext);
            btntext='';
        }
        
        else if(btntext == '2nd')
        {
            scndBtn();
            btntext='';
        }

        else if(btntext =='x2')
        {
            pow(dis.value,2);
            btntext='';
        }
        else if(btntext =='x3')
        {
            pow(dis.value,3);
            btntext='';
        }
      else if(btntext =='2√x')
        {
            root();
            btntext='';
        }
       else if(btntext =='3√x')
        {
            cube();
            btntext='';
        }

        else if(btntext =='xy')
        {
            btntext='**';
        }

        else if(btntext =='10x')
        {
            pow(10,dis.value);
            btntext='';
        }
        else if(btntext =='2x')
        {
            pow(2,dis.value);
            btntext='';
        }

        else if(btntext =='log' ||
                btntext =='log2'||
                btntext =='ln'  ||
                btntext =='ln2')
        {
            log(btntext);
            btntext='';
        }
        
        else if(btntext =='+/-')
        {
            pN();
            btntext='';
        }

        else if(btntext == 'mod')
        {
            chkOpr();
            btntext='%';
        }
        else if(btntext == '×')
        {
            chkOpr();
            btntext='*';
        }
        else if(btntext == '+' || btntext == '-')
        {
            chkOpr();
        }
        else if(btntext == '÷')
        {
            chkOpr();
            btntext='/';
        }
        else if(btntext == '.')
        {
            if(dis.value.charAt(dis.value.length-1)=='.'){
                btntext='';
            }
        }
        
        dis.value+=btntext;
    });
}