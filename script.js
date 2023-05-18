const correctNumber=Math.ceil(Math.random()*100);
let guessNumber=document.querySelector("#number");
const formInput=document.querySelector(".inputNum");
const guessButton=document.querySelector("#button");
const bodyText=document.querySelector(".bodyText");
const guessText=document.querySelector(".guess");
const heart=document.querySelector(".heart");
const again=document.querySelector(".again");
const updown=document.querySelector(".upDown");
let live=5;

guessButton.addEventListener("click",(e)=>{
    e.preventDefault();
    if(guessNumber.value>0 && guessNumber.value<101){
        if(guessNumber.value==correctNumber){
            bodyText.innerHTML=`<h1 class="text-center">You win!</h1>
                                <h1 class="text-center">${guessNumber.value}</h1>`;
            again.classList.remove("hide");
            guessText.removeChild(guessText.firstElementChild);
            guessText.appendChild(again);
            document.getElementById("number").disabled = true;
        }else if(guessNumber.value>correctNumber){
            removeHeart();
            if(live>0){
                bodyText.innerHTML=`<h1 class="text-center">${guessNumber.value}</h1>`;
                guessText.innerHTML=`<b class="lower">GUESS LOWER</b>`;
                Array.from(updown.children).forEach(f=>{
                    upDownColor(f,"down");                    
                });
            }
        }else {
            removeHeart();
            if(live>0){
                bodyText.innerHTML=`<h1 class="text-center">${guessNumber.value}</h1>`;
                guessText.innerHTML=`<b class="lower">GUESS HIGHER</b>`;
                Array.from(updown.children).forEach(f=>{
                    upDownColor(f,"up");
                });
            }
        }
    }else {
        alert("Girmeniz gereken sayı 1 ile 100 arasında olmalıdır!");
    }
    formInput.reset();
});


const removeHeart=()=>{
    if(live>1){
        heart.firstChild.nextElementSibling.remove();
    }else{
        heart.firstChild.nextElementSibling.remove();
        bodyText.innerHTML=`<h1 class="text-center">You lose! The number was ${correctNumber}</h1>
                            <h1 class="text-center">${guessNumber.value}</h1>
                            `;
        
        again.classList.remove("hide");
        guessText.removeChild(guessText.firstElementChild);
        guessText.appendChild(again);
        document.getElementById("number").disabled = true;                    
    }
    live--;
}


if(again!=null){
    again.addEventListener("click",(e)=>{
        location.reload();
    });
}

const upDownColor=(func,str)=>{
    if(func.classList.contains(str)){
        func.style.color="black";
    }else{
        func.style.color="white";
    }
};