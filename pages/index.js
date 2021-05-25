import Head from 'next/head';
import components from '../components';
import React from "react";
const { Menu } = components;
const Home = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head> 
    <Menu />
    <header className="near-black dt vh-100 w-100 mt cover bg-center">
      <div className="dtc pt7 tc w-100">
        <p className="f3 mw8 center tc ph5">Animate a prepararte para tomar coraje y conocer los limites de lo que podes empezar a cambiar del, de los fut, de lo que depara el... dame plata!!</p>
        <a href="#about" className="f3 ph4 mr4 pv3 mb2 dib link no-underline br-pill dim bg-hot-pink ba b--hot-pink near-white page-scroll">Conocer mas</a>
        <a href="#contact" className="f3 ph4 pv3 mb2 dib link no-underline br-pill dim bg-hot-pink ba b--hot-pink near-white page-scroll">Sacar Turno</a>
      </div>
    </header>
    <section id="about" className="vh-75 dt bg-hot-pink near-white w-100">
      <div className="dtc v-mid center measure tc">
        <h2 className="f2 f1-ns">Learn what all the fuzz is about!</h2>
        <hr className="mw4 center bn bg-near-white" style={{height: '5px'}} />
        <p className="f4 mw7 center">Tachyons Templates has everything you need to get started showing off your company. Simply copy this page, update the links and contact information, then start showing off.</p>
        <a href="#services" className="f3 ph4 pv3 mb2 dib link no-underline br-pill dim bg-near-white ba b--near-white hot-pink page-scroll">See Our Services</a>
      </div>
    </section>

    <section id="services" className="mv3 pa0">
      <div className="tc mv4 pa0">
        <h2 className="f3 f1-ns">View our Services</h2>
        <hr className="mw4 center bn bg-hot-pink" style={{height: '5px'}} />

      </div>
      <div className="cf w-100 w-80-ns center">
        <div className="fl w-100 w-25-ns tc mb4">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></rect>
            <line x1="12" y1="18" x2="12" y2="18" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
          </svg>
          <h3 className="f3">Device Mockups</h3>
          <p className="black-50 ph3">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
        </div>
        <div className="fl w-100 w-25-ns tc mb4">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
          <h3 className="f3">Flexible Use</h3>
          <p className="black-50 ph3">Put an image, video, animation, or anything else in the screen!</p>
        </div>
        <div className="fl w-100 w-25-ns tc mb4">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
            <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" fill="none" stroke="#0f0f0f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <polyline points="2.32 6.16 12 11 21.68 6.16" fill="none" stroke="#0f0f0f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline>
            <line x1="12" y1="22.76" x2="12" y2="11" fill="none" stroke="#0f0f0f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
            <line x1="7" y1="3.5" x2="17" y2="8.5" fill="none" stroke="#0f0f0f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
          </svg>
          <h3 className="f3">Free to Use</h3>
          <p className="black-50 ph3">As always, this theme is free to download and use for any purpose!</p>
        </div>
        <div className="fl w-100 w-25-ns tc mb4">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
          </svg>
          <h3 className="f3">Open Source</h3>
          <p className="black-50 ph3">Since this theme is MIT licensed, you can use it commercially!</p>
        </div>
      </div>
    </section>

    <div className="cf">
      
      <div className="fl w-50 w-third-ns shadow-hover hide-child">
        <div className="child cf w-100 h-100 absolute bg-hot-pink tc white f3">
          <div className="dt w-100 h-100">
            <div className="dtc v-mid">
              <h2 className="f4 f2-ns ma0 pa0 fw6 tc near-white">Frank Ocean Blonde Album Cover</h2>
              <h3 className="f5 f3-ns ma0 pa0 white-50">Service</h3>
            </div>
          </div>
        </div>
        <a href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&amp;mt=1&amp;app=music" target="_blank" rel="nofollow noreferrer noopener" className="db link dim tc">
          <img src="http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png" alt="Frank Ocean Blonde Album Cover" className="w-100 db" />
        </a>
      </div>
      
      <div className="fl w-50 w-third-ns shadow-hover hide-child">
        <div className="child cf w-100 h-100 absolute bg-hot-pink tc white f3">
          <div className="dt w-100 h-100">
            <div className="dtc v-mid">
              <h2 className="f4 f2-ns ma0 pa0 fw6 tc near-white">Young Thug - Jeffery Album Cover</h2>
              <h3 className="f5 f3-ns ma0 pa0 white-50">Service</h3>
            </div>
          </div>
        </div>
        <a href="https://geo.itunes.apple.com/us/album/jeffery/id1146718343?at=1l3vqFJ&amp;mt=1&amp;app=music" target="_blank" rel="nofollow noreferrer noopener" className="db link dim tc">
          <img src="http://is1.mzstatic.com/image/thumb/Music71/v4/c8/2d/b1/c82db1cd-9dc5-d7cb-2a34-735cf47bb809/source/400x40000bb.png" alt="Young Thug - Jeffery Album Cover" className="w-100 db" />
        </a>
      </div>
      
      <div className="fl w-50 w-third-ns shadow-hover hide-child">
        <div className="child cf w-100 h-100 absolute bg-hot-pink tc white f3">
          <div className="dt w-100 h-100">
            <div className="dtc v-mid">
              <h2 className="f4 f2-ns ma0 pa0 fw6 tc near-white">Kendrick Lamar untitled unmastered. Album Cover</h2>
              <h3 className="f5 f3-ns ma0 pa0 white-50">Service</h3>
            </div>
          </div>
        </div>
        <a href="https://geo.itunes.apple.com/us/album/untitled-unmastered./id1089846273?at=1l3vqFJ&amp;mt=1&amp;app=music" target="_blank" rel="nofollow noreferrer noopener" className="db link dim tc">
          <img src="http://is5.mzstatic.com/image/thumb/Music49/v4/1b/36/43/1b3643c6-e6a3-41bc-7f6d-7c2b64b5d60b/source/400x40000bb.png" alt="Kendrick Lamar untitled unmastered. Album Cover" className="w-100 db" />
        </a>
      </div>
      
      <div className="fl w-50 w-third-ns shadow-hover hide-child">
        <div className="child cf w-100 h-100 absolute bg-hot-pink tc white f3">
          <div className="dt w-100 h-100">
            <div className="dtc v-mid">
              <h2 className="f4 f2-ns ma0 pa0 fw6 tc near-white">Kaytranada 99%</h2>
              <h3 className="f5 f3-ns ma0 pa0 white-50">Service</h3>
            </div>
          </div>
        </div>
        <a href="https://geo.itunes.apple.com/us/album/99.9/id1092026376?at=1l3vqFJ&amp;mt=1&amp;app=music" target="_blank" rel="nofollow noreferrer noopener" className="db link dim tc">
          <img src="http://is4.mzstatic.com/image/thumb/Music49/v4/e9/4c/2d/e94c2d5f-bdb0-c565-4cc2-f9dfcf7f0b87/source/400x40000bb.png" alt="Kaytranada 99%" className="w-100 db" />
        </a>
      </div>
      
      <div className="fl w-50 w-third-ns shadow-hover hide-child">
        <div className="child cf w-100 h-100 absolute bg-hot-pink tc white f3">
          <div className="dt w-100 h-100">
            <div className="dtc v-mid">
              <h2 className="f4 f2-ns ma0 pa0 fw6 tc near-white">Baauer Aa - Album Cover</h2>
              <h3 className="f5 f3-ns ma0 pa0 white-50">Service</h3>
            </div>
          </div>
        </div>
        <a href="https://geo.itunes.apple.com/us/album/aa/id1067924003?at=1l3vqFJ&amp;mt=1&amp;app=music" target="_blank" rel="nofollow noreferrer noopener" className="db link dim tc">
          <img src="http://is3.mzstatic.com/image/thumb/Music49/v4/b6/b0/a1/b6b0a1dd-998d-9786-ca2f-87470be15250/source/400x40000bb.png" alt="Baauer Aa - Album Cover" className="w-100 db" />
        </a>
      </div>
      
      <div className="fl w-50 w-third-ns shadow-hover hide-child">
        <div className="child cf w-100 h-100 absolute bg-hot-pink tc white f3">
          <div className="dt w-100 h-100">
            <div className="dtc v-mid">
              <h2 className="f4 f2-ns ma0 pa0 fw6 tc near-white">Santigold 99 cents - Album cover</h2>
              <h3 className="f5 f3-ns ma0 pa0 white-50">Service</h3>
            </div>
          </div>
        </div>
        <a href="https://geo.itunes.apple.com/us/album/99-cents/id1054734475?at=1l3vqFJ&amp;mt=1&amp;app=music" target="_blank" rel="nofollow noreferrer noopener" className="db link dim tc">
          <img src="http://is3.mzstatic.com/image/thumb/Music62/v4/fa/ae/a6/faaea65f-0819-bb5d-afaa-4f5e84015204/source/400x40000bb.png" alt="Santigold 99 cents - Album cover" className="w-100 db" />
        </a>
      </div>
      
    </div>

    <div className="bg-near-black near-white pv4 pv5-ns">
      <h1 className="f1 tc pv2 ma0">Free Download!</h1>
      <div className="tc pv2">
        <a href="http://www.tachyonstemplates.com/template-overviews/tachyons-consultant/?from=live-preview" className="f3 ph4 pv3 mb2 dib link no-underline br-pill bg-white ba b--near-white near-black">DOWNLOAD THEME</a>
      </div>
    </div>

    <section id="contact" className="vh-75 w-100 dt contact bg-near-white">
      <div className="dtc v-mid">
        <h2 className="tc near-black f1">Lets get in Touch!</h2>
        <hr className="mw4 center bn bg-hot-pink" style={{height: '5px' }} />

        <p className="mw7 center b near-black lh-copy f5 tc">
          Contact a teammate to boost your sales and fire up your next project.
          Shoot us an email or give us a shout and we'll get back asap!
        </p>
        <div className="pv4 ph3 tc">
          <a className="link hot-pink hover-silver dib mh3 tc" href="mailto:feedback@tachyonstemplates.com?subject=feedback" title="email">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>

            <span className="f5 b db">email us</span>
          </a>
          <a className="link hot-pink hover-silver dib mh3 tc" href="tel:123-456-7899" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>

            <span className="f5 b db ">123-456-7899</span>
          </a>
        </div>
      </div>
    </section>


    <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
      <small className="f6 db tc">© 2017 <b className="ttu">
        <a href="http://www.tachyonstemplates.com/">Tachyons Templates</a>
        </b>., All Rights Reserved
        -
        <a href="http://www.tachyonstemplates.com/template-overviews/tachyons-consultant/?from=live-preview">Download Free Creative Consultant Company Theme</a>
      </small>
      <div className="tc mt3">
        <a href="#" title="Language" className="f6 dib ph2 link mid-gray dim">Language</a>
        <a href="#" title="Terms" className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
        <a href="#" title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</a>
        <a href="http://deathtothestockphoto.com/" title="Header Photo Credit to DeathToStockPhoto" className="f6 dib ph2 link mid-gray dim">Header Photo Credit: <strong>DeathToStockPhoto</strong></a>
      </div>
    </footer>
  </>
);
export default Home;
