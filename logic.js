var start=0;
let songs = [
    {songName: "Alec Benjamin - Let Me Down Slowly", filePath: "songs/1.mp4", coverPath: ""},
    {songName: "Ellie Goulding - Love Me Like You Do", filePath: "songs/2.mp4", coverPath: ""},
    {songName: "Lauv - I Like Me Better", filePath: "songs/3.mp4", coverPath: ""},
    {songName: "Luis Fonsi - Despacito ft. Daddy Yankee", filePath: "songs/4.mp4", coverPath: ""},
    {songName: "Mark Ronson - Uptown Funk", filePath: "songs/5.mp4", coverPath: ""},
    {songName: "Maroon 5 - Sugar", filePath: "songs/6.mp4", coverPath: ""},
    {songName: "Passenger | Let Her Go", filePath: "songs/7.mp4", coverPath: ""},
    {songName: "Shawn Mendes, Camila Cabello - Señorita", filePath: "songs/8.mp4", coverPath: ""},
    {songName: "PSY - GANGNAM STYLE ", filePath: "songs/9.mp4", coverPath: ""},
    {songName: "Wiz Khalifa - See You Again", filePath: "songs/10.mp4", coverPath: ""},
    {songName: "Alan Walker - Darkside", filePath: "songs/11.mp4", coverPath: ""}];


var totalSong=songs.length;
const v = document.getElementById("video");
const s = document.getElementById("screen");
var count=-1;

const previous=document.querySelector("#changePre");
previous.addEventListener("click",()=>{
    start=1;
    count--;
    if(count<0)
    count=totalSong-1;
    document.querySelector("#screen").setAttribute("src",songs[count].filePath);
    document.querySelector("#title").innerHTML=songs[count].songName;
    on=1;
    img.setAttribute("src","Pause.png");
    document.querySelector("#logo").setAttribute("src","milk-and-mocha-cute.gif");
    v.currentTime=0;
    v.load();
    v.play();
    
    
});
const play=document.querySelector("#play");
var on=1;
play.addEventListener("click",()=>{
   if(start==1)
   {
    if(on==0){
        v.play();
        document.querySelector("#logo").setAttribute("src","milk-and-mocha-cute.gif");
        img.setAttribute("src","Pause.png");
        on=1;
    }
    else{
        v.pause();
        document.querySelector("#logo").setAttribute("src","cute.jpg");
        img.setAttribute("src","play.png");
        on=0;
    }
   }
});
const img=document.querySelector("#img")
const next=document.querySelector("#changeNext");
function nextsong(){
    start=1;
    count++;
    count=count%totalSong;
    document.querySelector("#screen").setAttribute("src",songs[count].filePath);
    document.querySelector("#title").innerHTML=songs[count].songName;
    img.setAttribute("src","Pause.png");
    document.querySelector("#logo").setAttribute("src","milk-and-mocha-cute.gif");

    on=1;
    
    v.currentTime=0;
    v.load();
    v.play();
}

const time=document.querySelector("#time");
function timechange(sec)
{
    hours = parseInt((sec/3600)); 
	
	minutes = parseInt((sec -(3600*hours))/60);
	
	second = parseInt((sec -(3600*hours)-(minutes*60)));
    
    if(hours!=0 && minutes!=0 && second!=0)
    {
        time.innerHTML=hours+":"+minutes+":"+second;
    }
    else if(hours==0 && minutes!=0 && second!=0)
    {
        time.innerHTML=minutes+":"+second;
    }
    else if(hours==0 && minutes==0 && second!=0)
    {
        time.innerHTML="0:"+second;
    }
    else if(hours==0 && minutes!=0 && second==0)
    {
        time.innerHTML=minutes+":"+second;
    }
    else if(hours!=0 && minutes==0 && second==0)
    {
        time.innerHTML=hours+":"+minutes+":"+second;
    }



}

next.addEventListener("click",nextsong);
var myProgressBar=document.querySelector("#myProgressBar");
v.addEventListener('timeupdate',()=>{
    timechange(parseInt(v.currentTime));
    progress = parseInt((v.currentTime/v.duration)* 100); 
    myProgressBar.value = progress;
    if(myProgressBar.value==100)
    nextsong();

});
myProgressBar.addEventListener('change', ()=>{
    v.currentTime = myProgressBar.value * v.duration/100;
    time.innerHTML=v.currentTime;
});


