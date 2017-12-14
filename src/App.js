import React, { Component } from 'react'

import Footer from './components/Footer/Footer';

import poster from './img/poster.jpg';
import logo from './img/sf-logo.png';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
  }
  handleChange(val){
    this.setState({
      search: val
    })
  }
  search(e){
    e.preventDefault();
    window.location.assign(`https://stockfootage.com/?s=israel+${this.state.search}&post_type=product`);
  }
  render() {
    return (
      <div className="App">

        <div className="bg-video-container">
          <video className="bg-video" loop="1" autoPlay="1" playsInline="" muted="1" data-bgvideo="" poster={poster} data-bgvideo-fade-in="500" data-bgvideo-pause-after="120" data-bgvideo-show-pause-play="false" data-bgvideo-pause-play-x-pos="right" data-bgvideo-pause-play-y-pos="top">
            <source src="/assets/bg-video.mp4" type="video/mp4"/>
            <source src="/assets/bg-video.mp4" type="video/webm"/>
            <source src="/assets/bg-video.mp4" type="video/ogg"/>
          </video>
        </div>

        <div id="vidtop-content">
          <header>
            <div></div>
            <a className="nav-link" href="https://stockfootage.com/">HOME</a>
            <a className="nav-link" href="https://stockfootage.com/shop">SHOP</a>
            <a className="nav-link" href="https://stockfootage.com/my-account">LOGIN</a>
          </header>
          <div className="interact-box">
            <img src={logo} alt=""/>
            <h1><span style={{color: 'rgb(188, 52, 38)'}}>Palestine</span>Footage.com</h1>
            <form className="search" onSubmit={e=>this.search(e)}>
              <input placeholder="Search" onChange={e=>this.handleChange(e.target.value)} value={this.state.search} type="text"/>
            </form>
          </div>
          <div></div>
        </div>

        <div className="info-sec">
          <section>
            <h1>Palestine <a className="rf" href="https://en.wikipedia.org/wiki/Royalty-free">Royalty-Free</a> Stock Footage Marketplace (contact us for 4K)</h1>
            <h4 className="sub-banner">PalestineFootage.com is a division of <a style={{textDecoration:'none', color: '#999'}} href="https://stockfootage.com/">StockFootage.com</a></h4>
          </section>
          <div className="hr-red"/>
          <section className="category-sec">
            <h1>Browse by Category</h1>
            <div className="categories">
						<a href="https://stockfootage.com/?s=israel+Jerusalem&post_type=product" className="cat">Jerusalem</a>
						<a href="https://stockfootage.com/?s=israel+Palestine&post_type=product" className="cat">Palestine</a>
						<a href="https://stockfootage.com/?s=israel+Dead+Sea&post_type=product" className="cat">Dead Sea</a>
						<a href="https://stockfootage.com/?s=israel+Sea+of+Galilee&post_type=product" className="cat">Sea of Galilee</a>
						<a href="https://stockfootage.com/?s=israel+Jordan+River&post_type=product" className="cat">Jordan River</a>
						<a href="https://stockfootage.com/?s=israel+Ein+Gedi&post_type=product" className="cat">Ein Gedi</a>
						<a href="https://stockfootage.com/?s=israel+Tel+Aviv&post_type=product" className="cat">Tel Aviv</a>
						<a href="https://stockfootage.com/?s=israel+Caesarea&post_type=product" className="cat">Caesarea</a>
						<a href="https://stockfootage.com/?s=israel+Beit+She'an&post_type=product" className="cat">Beit She'an</a>
						<a href="https://stockfootage.com/?s=israel+Capernaum&post_type=product" className="cat">Capernaum</a>
						<a href="https://stockfootage.com/?s=israel+Western+Wall&post_type=product" className="cat">Western Wall</a>
						<a href="https://stockfootage.com/?s=israel+Dome+of+the+Rock&post_type=product" className="cat">Dome of the Rock</a>
						<a href="https://stockfootage.com/?s=israel+Al-Aqsa+Mosque&post_type=product" className="cat">Al-Aqsa Mosque</a>
            </div>
          </section>
          <br/>
          <div className="hr-red"/>
          <section className="contributors">
            <h1><span className="contrib-show">Contributors Showcase</span> - Inspired to Create</h1>


            <div className="contributor-previews">
              <div className="contributor-preview">
                <iframe title="yt1" width="350" height="195" src="https://www.youtube.com/embed/LER7lcnzoDU" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="yt2" width="350" height="195" src="https://player.vimeo.com/video/61635143" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="yt3" width="350" height="195" src="https://www.youtube.com/embed/cyd3DT9LYAw" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>

            <div className="mobile-contributor-previews">
              <div className="contributor-preview">
                <iframe title="yt4" width="250" height="150" src="https://www.youtube.com/embed/LER7lcnzoDU" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="yt5" width="250" height="150" src="https://player.vimeo.com/video/61635143" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="yt6" width="250" height="150" src="https://www.youtube.com/embed/cyd3DT9LYAw" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>

            <br/>
            <p>Download high quality royalty-free 4K and HD stock video footage clips from the most popular travel locations in Israel including: Palestine, Jerusalem, The Dead Sea, The Sea of Galilee, The Jordan River, Ein Gedi, Tel Aviv, Caesarea, Beit She'an, Capernaum, Western Wall, Dome of the Rock, and Al-Aqsa Mosque. Contact us about selling your own stock footage through our online community.</p>
          </section>
          <br/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
