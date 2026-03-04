export function Footer(links = []) {
  return `
        <footer>
                <!-- CONTATO -->
                <div id="contato" class="contact-info-box">
                    <div class="contact-info">
                        <p class="section-titulo">ENTRE EM CONTATO</p>
                        <p class="contato">contact@armyhelptheplanet.com</p>

                        <!-- REDES SOCIAIS -->
                        <div class="social-medias">
                            <a href="https://twitter.com/ARMY_HTP" target="_blank" rel="noopener noreferrer" class="link">
                                <img src="/assets/sm/twitter.png" alt="" class="sm-img">
                            </a>
                            <a href="https://www.instagram.com/army_htp/" target="_blank" rel="noopener noreferrer"
                                class="link">
                                <img src="/assets/sm/insta.png" alt="" class="sm-img">
                            </a>
                            <a href="https://www.facebook.com/armyhelptheplanet" target="_blank" rel="noopener noreferrer"
                                class="link">
                                <img src="/assets/sm/facebook.png" alt="" class="sm-img">
                            </a>
                            <a href="https://www.youtube.com/@ArmyHelpThePlanetOficial" target="_blank"
                                rel="noopener noreferrer" class="link">
                                <img src="/assets/sm/yt.png" alt="" class="sm-img">
                            </a>
                            <a href="https://www.tiktok.com/@army_htp" target="_blank" rel="noopener noreferrer" class="link">
                                <img src="/assets/sm/tiktok.png" alt="" class="sm-img">
                            </a>
                            <a href="https://www.linkedin.com/company/armyhelptheplanet/" target="_blank"
                                rel="noopener noreferrer" class="link">
                                <img src="/assets/sm/linkedin.png" alt="" class="sm-img">
                            </a>
                        </div>
                    </div>
                    <div class="contato-icon">
                        <img src="/assets/icon/dark-icon.png" alt="" class="img-contato">
                    </div>
                </div>
            </footer>
  `;
}