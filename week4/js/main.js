
const t = document.querySelector('.task2__time')
function getDay(date){
    let days = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()]
}
let day = new Date();
t.innerHTML+=`today is ${getDay(day)}<br>`;

function getTime(){
let getT = new Date();
if(getT.getHours()>12){
    t.innerHTML +=`${getT.getHours()-12 } P.M : ${getT.getMinutes()}M : ${getT.getSeconds()}s `;
    // console.log(getT.getHours()-12 + " P.M :"+ getT.getMinutes()+"M" + ": "+getT.getSeconds()+"s")
}else {
    t.innerHTML+=`<br> ${getT.getHours()}A.M : ${getT.getMinutes()}M : ${getT.getSeconds()}s ` 
    // console.log(getT.getHours() + " A.m")
}
}
getTime()
//taks2
$('.btn').click(function(){
    let inp =document.querySelector('.inp');
    console.log("click")
    if(!inp.value) return value = 0;
    let num = inp.value;
    let list =document.querySelector('.number-list')
    list.innerHTML =`<li>${Number(num.toString().split('').reverse().join(''))}</li>`
})

//factorials
$('.btn-f').click(function(){
let inp=document.querySelector('.inp-f');
let list = document.querySelector('.factorial-list')
if(!inp.value) return value = 0;
let n = inp.value
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  list.innerHTML =`<li>${factorial(n)}</li>`

})



//Compare two integer
$('.btn-c').click(function(){
    let inp1=document.querySelector('.inp-1');
    let inp2=document.querySelector('.inp-2');
    let list = document.querySelector('.c-list')
    // if(!inp1.value) return value = 0;
    // if(!inp2.value) return value = 0;
    if(inp1.value<inp2.value) {
        list.innerHTML =`<li>${inp2.value}</li>`
    }else if(inp1.value>inp2.value){
        list.innerHTML =`<li>${inp1.value}</li>`
    }else{
        list.innerHTML =`<li>Two integers equal</li>`
    }

})


//colors array
myColor = ["Red", "Green", "White", "Black"];
let colorList =document.querySelector('.color')
colorList.innerHTML+=`${myColor.join(',')}`
colorList.innerHTML+=`<br>${myColor.join('+')}`

//month
let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
$('.btn-m').click(function(month){
let inp = document.querySelector('.inp-m')
if(!inp.value) return value = '';
let list = document.querySelector('.p-m')
list.innerHTML=`${months[new Date(inp.value).getMonth()]}`
})

//Uppercase or not
$('.btn-u').click(function(){
    let list = document.querySelector('.list-u')
    let inp = document.querySelector('.inp-u')
    if(!inp.value) return value = 0;
    if(inp.value.charAt(0) == inp.value.charAt(0).toUpperCase()){
        list.innerHTML=`UPPERCASE`
    }else{
        list.innerHTML=`LOWERCASE`
    }
})

//Smile
var canvas = document.getElementById("myDrawing");

drawHappyFace(canvas, {
    fill: '#00FF00',
    lineColor: '#6F0047'
}, true);

drawHappyFace(canvas, {
    fill: '#FFFF00',
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius : 178
});

// =========================================================
// Functons
// =========================================================
function drawFace(canvas, opts) {
    var ctx = canvas.getContext("2d");
    ctx.save();
    ctx.lineWidth = opts.radius * 0.075;
    ctx.strokeStyle = opts.lineColor;
    ctx.beginPath();
    ctx.arc(opts.x, opts.y, opts.radius, opts.startAngle, opts.endAngle);
    ctx.stroke();
    ctx.fillStyle = opts.fill;
    ctx.fill();
    ctx.restore();
}

function drawSmile(canvas, opts, flipSmile) {
    var ctx = canvas.getContext("2d");
    var radius = 40 * opts.radius * 0.0125;
    var x = opts.x;
    var y, startAngle, endAngle;
        
    if (flipSmile) {
        y = opts.y + opts.radius * 0.7;
        startAngle = -Math.PI * 0.85; //Math.PI * 0.1;
        endAngle = -0.5; //-Math.PI * 1.1;
    } else {
        y = opts.y + opts.radius * 0.1;
        startAngle = Math.PI * 0.1;
        endAngle = -Math.PI * 1.1;
    }

    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.lineWidth = opts.radius * 0.1;

    ctx.strokeStyle = opts.lineColor;
    ctx.stroke();
    ctx.restore();
}

function drawEyes(canvas, opts) {
    var xOffset = opts.radius * 0.5;
    var radius = opts.radius * 0.15;

    drawEye(canvas, opts, xOffset, 0, radius); // Left
    drawEye(canvas, opts, -xOffset, 0, radius); // Right
}

function drawEye(canvas, opts, centerX, centerY, radius) {
    var ctx = canvas.getContext("2d");

    // Save state
    ctx.save();

    // Translate context so height is 1/3'rd from top of enclosing circle
    ctx.translate(opts.x, opts.y - (opts.radius / 3));

    // Scale context horizontally by 50%
    ctx.scale(0.5, 1);

    // Draw circle which will be stretched into an oval
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

    // Apply styling
    ctx.fillStyle = opts.lineColor;
    ctx.fill();
    ctx.lineWidth = radius * 0.75;
    ctx.strokeStyle = opts.lineColor;
    ctx.stroke();
    
    // Restore to original state
    ctx.restore();
}

function drawHappyFace(canvas, opts, flipSmile) {
    opts = opts || {};
    
    var defaultRadius = 48;
    var options = {
        x: opts.x || (defaultRadius / 0.9),
        y: opts.y || (defaultRadius / 0.9),
        radius: opts.radius || defaultRadius,
        startAngle: 0,
        endAngle: 2 * Math.PI,
        fill: opts.fill || 'yellow',
        lineColor: opts.lineColor || 'black'
    };
    
    drawFace(canvas, options);
    drawEyes(canvas, options);
    drawSmile(canvas, options, flipSmile);
}



///task4
let s1 = document.querySelector('#string-1');

let s2=document.querySelector('#string-2')

let s3=document.querySelector('#string-3')

let s4=document.querySelector('#string-4')

let s5=document.querySelector('#string-5')

let s6=document.querySelector('#string-6')


// console.log(s3.innerHTML+'\n'+s1.innerHTML+'\n'+s5.innerHTML+'\n'+s2.innerHTML+'\n'+s6.innerHTML+'\n'+s4.innerHTML+'\n'+s3.innerHTML);
// task4__2
let elem =$('.task4__2').children();
let red1 = elem[1];
let red2 = elem[2];
let red3 = elem[3];
let green1 = elem[4];
let green2 = elem[5];
let green3 = elem[6];
green3.style.color='green';
green1.style.color='green';
green2.style.color='green';
red3.style.color='red';
red1.style.color='red';
red2.style.color='red';




///task4__3

let todo=document.querySelector('#todo-list');
var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
for (let i = 0; i <= tasks.length; i++) { 
    let li = document.createElement('li');
    li.className='tasks';
        todo.append(li);
        li.append(tasks[i])
  }


//task4__4
let p = document.querySelectorAll('p').forEach(function(hr){
    hr.insertAdjacentHTML('afterend', '<hr/>')
});


//task4__5
let items=document.querySelector('#cart-items')
let rem=items.children[1].remove(items);
let r2 = document.createElement('div');
r2.textContent='Canned Fish';
r2.className= 'item';
let span = document.createElement('span');
span.className= 'qty';
span.textContent = '4';
let end=r2.append(span);
// console.log(r2)
let r =  items.replaceChild(r2,items.children[3])

//task4__6
let ul=document.createElement('ul');
document.body.append(ul);
let li;
let inp;
function toDo(){
    do{
    inp = prompt('INT STH');
     li=document.createElement('li');
    li.textContent=inp;
    ul.append(li);
        }while(inp !== null  && inp !== ''){
         li.textContent='EMPTY'
        }
}
toDo();
