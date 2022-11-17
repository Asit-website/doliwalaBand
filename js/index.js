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
  <ul class="fing v-class-resp">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About Us</a></li>
    <li><a href="weddingPlaner.html">Services</a></li>
    <li><a href="services.html">Other Services</a></li>
    <li><a href="Gallary.html">Gallery</a></li>
    <li><a href="contact.html">Contact Us</a></li>
  </ul>
</div>
</nav>
</div>`;

feg.appendChild(template.content);