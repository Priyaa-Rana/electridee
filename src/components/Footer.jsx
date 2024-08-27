import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer id="footer" class="text-center bg-[#121319] py-8 px-8">
      <div class="social-icon flex items-center">
        <a
          href="https://play.google.com/store/games?hl=en_US&amp;gl=US"
          target="_blank"
        >
          <img class="playstore w-40 sm:top-1 md:top-0 sm:pl-0" src="playstore.png" alt="Play Store Icon" />
        </a>
        <img class="footer-logo w-[60%] pl-[30%] md:w-[30%] md:pl-[5%] relative md:right-[30%]" src="footer-logo.png" alt="Footer Logo" />
      </div>

      <div class="wrapper2 flex justify-center space-x-4 mt-6 md:mt-0 icons md:place-content-end pr-[15%] relative md:bottom-40">
        <a href="https://www.facebook.com/profile.php?id=100062863997309" target="_blank">
          <i class="fab fa-facebook-square fa-3x text-[#4867AA] cursor-pointer shadow-lg shadow-[#00000040] transition-all duration-150 ease-in-out"></i>
        </a>
        <a href="https://twitter.com/tweetelectride" target="_blank">
          <i class="fab fa-twitter-square fa-3x text-[#4867AA] cursor-pointer shadow-lg shadow-[#00000040] transition-all duration-150 ease-in-out"></i>
        </a>
        <a href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A80105730&amp;keywords=electride%20mobility&amp;origin=RICH_QUERY_SUGGESTION&amp;position=0&amp;searchId=2b1ccca3-10b0-4734-bfd9-ed7255dc6b8f&amp;sid=!~M" target="_blank">
          <i class="fab fa-linkedin-square fa-3x text-[#4867AA] cursor-pointer shadow-lg shadow-[#00000050] transition-all duration-150 ease-in-out"></i>
        </a>
        <a href="https://www.instagram.com/electride_mobility/" target="_blank">
          <i class="fab fa-instagram-square fa-3x text-[#4867AA] cursor-pointer shadow-lg shadow-[#00000040] transition-all duration-150 ease-in-out"></i>
        </a>
      </div>

      <div class="move-div flex items-center mt-2 relative md:place-content-center">
        <a href="#" class="move flex items-center">
          <i class="penci-faicon fa fa-angle-up move-up text-white pr-32 cursor-pointer relative left-28 md:left-2/4"></i>
          <p class="move-up ml-2 text-white">BACK TO TOP</p>
        </a>
      </div>

      <p class="copyright text-[#8b8b8b] pl-20">© Copyright Electride</p>
      <h3 class="footer-para text-[#74B844] font-mono font-normal text-2xl pl-40">Electride Mobility Services</h3>
    </footer>
  );
}

export default Footer;