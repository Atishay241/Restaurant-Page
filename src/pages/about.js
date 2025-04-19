



export default function about_render(){
    console.log("Inside home.js")

    const page = document.querySelector("#page");
    page.classList.remove(...page.classList);
    
    page.innerHTML = `<div class="container">
    <section id="about">
      <h2>About Us</h2>
      <p>Welcome to <strong>Cafe Snackin’ Ain’t Slacking</strong> – your cozy corner in the bustling city of Ankh-Morpork! Nestled just a scone’s throw away from the famous Guards' House, our cafe is a haven for locals, city-watch regulars, and the occasional wizard seeking caffeine over chaos.</p>
      <p>We specialize in handcrafted brews, foods, and stories shared over warm cups. Whether you're here for a quick espresso or to write the next great Discworld novel, there's always a seat and a smile waiting for you at Cafe Snackin’ Ain’t Slacking.</p>
    </section>

    <section id="contact">
      <h2>Contact Us</h2>
      <p><strong>Location:</strong> Near the Guards’ House, Market Ward, Ankh-Morpork</p>
      <p><strong>Email:</strong> hello@cafequill.am</p>
      <p><strong>Phone:</strong> +AM 123-456-789</p>
    </div>
    
    `;

}


// svg source https://www.svgrepo.com/svg/45709/rice

//gif source https://www.flaticon.com/free-animated-icons/food