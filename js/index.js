let feg = document.querySelector("#feg");
let template = document.createElement('template');
template.innerHTML=`<div class="sender">
<header class="head">
<div class="first_head">
  <div class="first_span">
    <span><img src="images/Mask Group 4.png" alt="">Mr. Parvindar(परविन्दर)</span>
  </div>
  <div class="second_span">
    <a style="text-decoration:none;" target="_blank"
      href="https://api.whatsapp.com/send/?phone=+919015608586&amp;text= hi"><span><img
          src="images/Mask Group 5.png" alt="">+91 9015608586, +919818411586</span></a>
    <!-- <a style="text-decoration:none;"  href="tel:"><span>+91 9818411586</span></a> -->
  </div>
</div>
</header>
<nav class="navbar second">
<div class="first_nav">
  <img src="images/Group 428.jpg" alt="nothing">
</div>
<div class="second_nav">
<button style=" padding: 5px 20px; background-color: hotpink; border: none; outline: none; border-radius: 5px; color: #FFFFFF;" class="burger">Menu</button>
  <ul class="fing v-class-resp linkta">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About Us</a></li>
    <li class="fire"><a class="tier"  href="service.html">Services</a>
        <ul class="dropdown">
            <li><a href="bandBaja.html">Band Baaja</a></li>
            <li><a href="ghori.html">Ghori & Baggi</a></li>
            <li><a href="lightings.html">Lightings</a></li>
            <li><a href="punjabi.html">Punjabi Dhol</a></li>
            <li><a href="rusian.html">Russian Dhol</a></li>
            <li><a href="fireworks.html">Wedding Fireworks</a></li>
            <li><a href="sahisahanai.html">Shahi Shehnai vadan</a></li>
            <li><a href="nagada.html">Royal Nagada & Turai</a></li>
            <li><a href="nafriTasha.html">Nafiri tasha Party</a></li>
            <li><a href="brideGroom.html">Bride Groom Entry</a></li>
            <li><a href="jaimala.html">Jaimala theme</a></li>
            <li><a href="weddingPlaner.html">Wedding Planner</a></li>
            <li><a href="Entairtenment.html">Entertainment</a></li>
        </ul></li>
    <li>
        <a href="other.html">Other Services</a>
    </li>
    <li><a href="gallary.html">Gallery</a></li>
    <li><a href="contact.html">Contact Us</a></li>
  </ul>
</div>
</nav>
</div>`;

feg.appendChild(template.content);

let prop = document.querySelector(".dropdown");
let tier = document.querySelector(".tier");
tier.addEventListener("mouseover",()=>{
    prop.classList.add("propdown");
})

tier.addEventListener("mouseout",()=>{
   if(prop.addEventListener("mouseover",()=>{
       prop.classList.add("propdown")
   }));

   else if(prop.addEventListener("mouseout",()=>{
    prop.classList.remove("propdown")
}));
  else{
    prop.classList.remove("propdown");
  }
})

