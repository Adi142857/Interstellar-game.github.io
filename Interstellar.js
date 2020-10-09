"use strict";
var fuel_1,fuel_2, width, height,system_1,system_2,system_3, rocket ,listElt;
//To detect mobile device is simple in javascript instead of using jquery.
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
var a = /MobI/.test(navigator.userAgent);
}
alert("Game controls-no-1 : Swip to the leff/right on the screen to save the rocket from being hit by asteroids.\n"+"\nNo 2 : Or touch on the spot where you want to move..since game controls are a bit laggy...\n"+"\nFor best results play it on pc-use mouse as controls..arrow controls are disabled.\n"+"\nI have automated boost setup..to make realistic effect...so it may not work some times.")
alert("Please have some patience 😣")

var start = function () {
   fuel_1 = document.getElementById("game");
   fuel_2 = fuel_1.getContext("2d");
    setSize(fuel_1, innerWidth, innerHeight);
   fuel_2.fillStyle = "#333333";
    fuel_2.fillRect(0, 0, width, height);
    
    var opt = document.getElementsByClassName("0");
    for(var c in opt) {
        images[0][opt[c].id] = opt[c];
    }
    rocket= new Rocket();
    
    window.addEventListener("resize", function () {
        setSize(fuel_1, innerWidth, innerHeight);
       fuel_2.fillStyle = "#000";
       fuel_2.fillRect(0, 0, width, height);
    });
    
      fuel_1.addEventListener("touchstart", right);
      //Controls in mobile devices
      
    if(!a) fuel_1.addEventListener("mousedown",left)
    window.addEventListener("touchmove", up);
    //Controls in pc--If you want to play this pn pc 
   if(!a) window.addEventListener("mousemove", mouseMove);
   /*
    window.addEventListener("touchend", touchEnd);
    */
     //Controls in pc--If you want to play this in pc remove the commented lines.
     
    requestAnimationFrame(loop);
}
document.addEventListener("DOMContentLoaded", start);
var Interest = 0, frameCount = 0, scroll = 0, l3 = 2.5, l1 = 0, l2 = 0,time = 0, warning = -Infinity,skin = 0,types = [["#999", "#82ccdd"],[ "orange"]];

var loop = function () {
    if (Interest!=3 && Interest!=4) {
       fuel_2.clearRect(0, 0, width, height);
       fuel_2.fillStyle = "#000";
       fuel_2.fillRect(0, 0, width, height);
    }
    
    if (Interest == 3) {
        fuel_2.globalAlpha = 0.5,fuel_2.fillStyle = "#000",fuel_2.fillRect(0, 0, width, height);
        fuel_2.globalAlpha = 1;
       fuel_2.fillStyle = "#fff",fuel_2.font = "35px Arial",fuel_2.textAlign = "center";
       /*
       fuel_2.fillText("Fingers are left untouched..press the screen to continue", width/2, 50);
       */
        fuel_2.font = "25px Arial";
       fuel_2.fillText("hold down your finger!", width/2, 90);
        Interest++
    }
    else if(Interest==0 || Interest==2) {
        fuel_2.fillStyle = "#ADD8E6",fuel_2.font = "35px cursive";
        fuel_2.textAlign = "center",fuel_2.fillText("Interstellar", width/2,90);
        fuel_2.fillstyle="white",fuel_2.drawImage(images[skin]["rocket"], width/2-100, 130, 200, 200);
        fuel_2.font = "25px Cursive",fuel_2.fillText("Click To Continue...", width/2, 365+(Math.sin(frameCount/15)*7));
        fuel_2.fillStyle = types[skin][2];
        if(Interest==2) {
            fuel_2.textAlign = "start",fuel_2.font = "38px Alegrain";
            fuel_2.fillStyle = "#CD5C5D", fuel_2.textAlign = "center";
           fuel_2.fillText("Your journey in Interstellar space is:" + Math.round(l1) + " light kms", width/2, height-79,365+(Math.sin(frameCount/7)*6));
        }
    } 
    else if(Interest==1) {
    rocket.jump();
    if(frameCount%2==0)  propellar.push()
   fuel_2.lineWidth = 20;
    fuel_2.strokeStyle = types[skin][0];
   fuel_2.beginPath();
    if( propellar.length >0) fuel_2.moveTo( propellar[0].a, height+30);
    for(var p=0; p< propellar.length-1; i++) {
        fuel_2.lineTo( propellar[p+1].a,  propellar[i+1].b+scroll);
        if( propellar[p].b+scroll>height+40) {
         propellar.splice(p, 1);
            p--;
        }
    }
   fuel_2.lineTo(rocket.a, + rocket.b)
  fuel_2.stroke();
    
      if(Math.random()*32000/(frameCount-warning<60*3 ? l3*5: l3)/width<1 && (frameCount-warning>60*3 || frameCount-warning<60*(3-(6/(l3*0.95))))) rolls.push(new Roll(Math.random()*width));
    
    
    for(var i=0; i<rolls.length; i++) {
       rolls[i].draw();
        if(rolls[i].b+scroll>height+30) {
            rolls.splice(i, 1);
            i--;
        }
        else if(dist(rocket.a, rocket.b, rolls[i].a, rolls[i].b+scroll)<60) {
            if(frameCount-warning<60*3);
            else if(time>0) {
                time--;
                rolls.splice(i, 1);
                i--;
            }
            else {
            Interest = 2,l2 = scroll,scroll = 0,l3 = 2.5;
            if(l2 > l1 ) 
            l1  = l2 ;
            rolls = [],propellar = [],stall = [];
            /*
    document.querySelector ("#set").style.visibility = "visible";
      document.querySelector ("#set").style["pointer-events"] = "auto";
      */
            }
        }
    }
    
    if(Math.random()*1200/(1+l3/2)<1)  stall.push (new Jetrays(Math.random()*width, ["Energy", "warning"][Math.floor(Math.random()*1.5)]));
    for(var i=0; i< stall.length; i++) {
        stall [i].draw();
        if(stall [i].b+scroll>height+30) {
            stall.splice(i, 1);
            i--;
        }
        else if(dist(rocket.a, rocket.b, stall[i].a,  stall[i].b+scroll)<60) {
             stall[i].use();
             stall.splice(i, 1);
            i--;
        }
    }
    function loop(){
          alert("Highscore"+l1);
          
    }
    rocket.draw();
    
  fuel_2.textAlign = "center",fuel_2.font = "25px Arial",fuel_2.fillStyle = "blue";
    if(time > 0) {
        if(skin == 0) fuel_2.fillText(time, rocket.a, rocket.b+10);
        else if (skin == 1) fuel_2.fillText(time, rocket.a, rocket.b+10);
    }
   fuel_2.textAlign = "start";
   fuel_2.fillStyle = "#00ff00";
    
    l3 += 0.0015;
    if(frameCount-warning<60*3) scroll += l3*5;
    else scroll += l3;
    }
    if(Interest != 3) frameCount++;
    requestAnimationFrame(loop);
}
var  propellar = [],rolls = [], stall = [],images = [{}, {}];

function right(t) {
    var touches = t.changedTouches;
    
   system_1 = touches[0].clientX;
   system_2 = touches[0].clientY;
    
    if(system_1 > width/2-65 && system_1 < width/2+65 && system_2>38 && system_2<41 && (Interest == 0 || Interest == 2)) {
        skin = (skin+1)%types.length;
    } else if(Interest!=1) {
        Interest=1;
        /*
        document.querySelector ("#button").style.visibility = "hidden";
        
        document.querySelector ("#button").style["pointer-events"] = "none";
        */
    }
}

function left(t) {
    system_1 = t.clientX,system_2 = t.clientY;
    
    if (system_1 > width/2-65 && system_1 < width/2+65 && system_2>380 && system_2<415 && (Interest == 0 || Interest == 2)) {
        skin = (skin+1)%types.length;
    } else if(Interest!=1) {
        Interest=1;
        /*
        document.querySelector ("#set").style.visibility = "hidden";
        document.querySelector ("#set").style["pointer-events"] = "none";
        */
    }
}

function up(t) {
    let touches = t.changedTouches;
    system_1 = touches[0].clientX,system_2 = touches[0].clientY;
}

function mouseMove(t){
   system_1 = t.clientX,system_2 = t.clientY;
}
function touchEnd(t) {
    let touches = t.changedTouches;
    
    system_1 = touches[0].clientX,system_2= touches[0].clientY;
    
    if(Interest == 1) Interest = 3;
}

class Rocket {
    constructor() {
        this.a = width,this.b = height;
        var touching = true;
        while(touching) {
        touching = false;
        for(var i=0; i<rolls.length; i++) {
            if(Math.abs(rolls[i].y-this.y)<120) touching = true;
        }
        }
    }
    
   jump() {
        this.b=height*0.8;
        if(this.a<system_1) this.a += Math.min(Math.sqrt(Math.abs(this.a-system_1)), Math.abs(this.a-system_1));
        if(this.a>system_1) this.a -= Math.min(Math.sqrt(Math.abs(this.a-system_1)), Math.abs(this.a-system_1));
    }
    
    draw () {
        fuel_2.fillStyle = types[skin][0];
        circle(this.a, this.b, 30)
       fuel_2.drawImage(images[skin]["rocket"],  this.a-30, this.b-30, 60, 60);
    }
}
  /*
      var app=firebase.initializeApp({
             api key: "saijcaiushcoiu11e5y54"
             authDomain: "futbol-a86bd.firebaseapp.com",
             database url: "https://futbol-a86bd.firebaseapp.com"
             
         })         app.auth().signInAnonymously().then(function(){
             var rootRef = app.database().ref();
             return rootRef.remove();
         }).then(function(){
             console.log("Highscore");
         })

         { 
         "rules":{
             ".read":false,
             ".write":false
         }}
         {
  "rules": {
    "foo": {
      ".validate": "newData.isString() && newData.val().length < 100"
    }
  }
}
         */
class Roll {
    constructor(a) {
        this.a = a,this.b = -30-scroll;
        var count = width/120;
        while(count>=width/120) {
        count = 0;
        for(var i=0; i<rolls.length; i++) {
            if(Math.abs(rolls[i].b-this.b)<120) count++;
        }
        if(count>=width/120) this.b -= 180;
        }
    }
    
    draw () {
       fuel_2.drawImage(images[skin]["roll"],  this.a-30, this.b-30+scroll, 60, 60);
    }
}

class Jetrays {
    constructor(a, type) {
        this.a = a,this.b = +20-scroll;
        this.type = type;
        var stuck = 1,v = 0;
        while(stuck && v < 100) {
            stuck = 0;
            for(var i=0; i<rolls.length; i++) {
                if(Math.abs(rolls[i].a-this.a)<60)stuck = true;
            }
            if(stuck) this.a = Math.random()*width;
            v++;
        }
    }
    
    draw () {
        if(this.type=="Energy") {
            fuel_2.fillStyle = types[skin][0];
            fuel_2.drawImage(images[skin]["Energy"],  this.a-30, this.b-30+scroll, 60, 60);
        } else if(this.type=="warning") {
           fuel_2.fillStyle = types[skin][1];
            circle(this.a, this.b+scroll, 0);
            fuel_2.beginPath();
            fuel_2.moveTo (this.a, this.b+scroll-25);
            /*
            ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
    ctx.lineTo (this.x+10, this.y+scroll-5);
    document.createElement ("center");
          /*  ctx.lineTo (this.x-20, this.y+scroll-5);
            ctx.lineTo (this.x-10, this.y+scroll-5);
          c.strokeStyle = 'white'
          c.fillStyle = 'blue'
          c.rect(100, 20, 150, 100)
          ctx.lineTo (this.x-10, this.y+scroll+25);
          c.stroke()
          c.fill()
          c.fillStyle = 'red'
          c.fillRect(400, 500, 300, 250)
           ctx.lineTo (this.x+10, this.y+scroll+25);
          // Uncomment to remove the first two blocks
         // c.clearRect(0, 0, canvas.propellar_1, canvas.propellar_2)
         c.fillStyle = 'green'
         c.fillRect(1500, 500, 300, 250);
         ctx.lineTo (this.x+25, this.y+scroll-5);
         Inclusion of button for energy makes it ugly hence automated 
         */

            fuel_2.textAlign = "center";
            fuel_2.fillText("Energy filled..tap for boost", width/2, 365+(Math.sin(frameCount/6)*10));
            fuel_2.closePath();
            fuel_2.fill();
        }
    }
    use () {
        if(this.type=="Energy")
            time++;
        else if(this.type=="warning") 
            if(frameCount-warning<60*3) warning+=60*3
            else warning = frameCount;
    }
}