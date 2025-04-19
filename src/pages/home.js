
import homeGif from '../img/curry.gif';



export default function home_render(){
    console.log("Inside home.js")

    const page = document.querySelector("#page");
    page.classList.remove(...page.classList);
    page.classList.add("body")
    page.innerHTML = `
        
            <div class="box">
            <h1><span class="bodytext">Cafe Snackin’ Ain’t Slacking</span> <br><span class="meaning">Good food, No effort, Just vibes</span></h1>
            <img src="${homeGif}" alt="Pic about " height="300" width="auto">
            </div>
        
    `

}


// svg source https://www.svgrepo.com/svg/45709/rice

//gif source https://www.flaticon.com/free-animated-icons/food