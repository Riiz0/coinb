import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div className="body-top-section">

      {/* Left Sidebar */}
      <div className="left-sidebar"></div>

      {/* Main Content */}
      <div className="main-content">

        {/* Background Container */}
        <div className="background-container">
          <div className="section-content animate-fade-in">
            <h1 className="section-title animate-slide-up">JOIN THE BUNIME REVOLUTION</h1>
            <p className="section-subtitle animate-slide-up">YOUR ANIME COMMUNITY CRYPTOCURRENCY</p>
            <div className="section-buttons animate-fade-in">
            <Link to="/Buy" className="section-button left-button animate-scale no-underline">
          Buy BUNI
        </Link>
              <button className="section-button right-button animate-scale">Explore</button>
            </div>
          </div>
        </div>

        {/* Sponsor/Link Container */}
        <div className="sponsor-container">
        <div className="sponsor-images">
          <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">
          <img src={require('../assets/coinmarketcap.png')} alt="CoinMarketCap" className="sponsor-image" />
          </a>
          <a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">
          <img src={require('../assets/coingecko.webp')} alt="CoinGecko" className="sponsor-image" />
          </a>
          <a href="https://medium.com/" target="_blank" rel="noopener noreferrer">
            <img src={require('../assets/Medium.png')} alt="Medium" className="sponsor-image" />
          </a>
          </div>
        </div>

        {/* About Container */}
        <div className="about-container">
          <div className="about-content">
          <p className="about-subtitle">ABOUT</p>
          <h1 className="about-title">WHAT IS BUNIME?</h1>
          <p className="about-text">BUNIME is an exciting cryptocurrency meme coin that serves as a vibrant community-driven token designed specifically for anime enthusiasts. It aims to bridge the worlds of anime and cryptocurrency, bringing them together for a shared experience of fun, friendships, and creative exploration.</p>          
          <p className="about-text">As a meme coin, BUNIME embraces the lighthearted and humorous nature of internet culture, allowing anime lovers to engage with their favorite fandoms in a unique way. It provides a platform for the anime community to connect, interact, and support each other through a shared passion for animated shows, characters, and storylines.</p>
          <p className="about-text">BUNIME offers an opportunity to participate in the crypto world with a distinct anime twist. It allows individuals to buy and hold BUNIME tokens, representing their involvement in this thriving community. However, it's important to note that investing in BUNIME should be done at one's own risk, as with any cryptocurrency.</p>
          </div>
        </div>

        {/* About2 Container */}
        <div className="about2-container">
          <div className="about2-content">
            <p className="about2-text">In addition to its role as a community coin, BUNIME has exciting plans to release NFT (Non-Fungible Token) collections based on different anime shows. NFTs are unique digital assets that can represent ownership of various forms of digital content, such as artwork, collectibles, and more. With BUNIME, fans will have the opportunity to acquire and trade exclusive NFTs featuring their favorite anime characters and moments.</p>          
            <p className="about2-text">As a community-driven token, BUNIME places the anime community at its core. It aims to foster a welcoming and inclusive environment where fans can connect, share their enthusiasm, and collaborate on various initiatives. Whether it's discussing the latest anime releases, organizing events, or supporting anime-related projects, BUNIME is committed to nurturing a strong and supportive anime community.</p>
            <p className="about2-text">Join BUNIME today and immerse yourself in the exciting fusion of anime and cryptocurrency. Embrace the spirit of fun, friendship, and creative exploration that BUNIME brings to the world of anime lovers and crypto enthusiasts alike.</p>
          </div>
        </div>

        {/* Ecosystem Container */}
        <div className="ecosystem-container">
          <div className="ecosystem-content">
             <p className="ecosystem-subtitle">ECOSYSTEM</p>
             <h1 className="ecosystem-title">THE BUNIME ECOSYSTEM</h1>             
            </div>
            </div>
            <div className="ecosystem-boxes-container">
              <div className="ecosystem-boxes-row">
                <div className="ecosystem-boxes-box"></div>
                <div className="ecosystem-boxes-box"></div>
              </div>
            <div className="ecosystem-boxes-row">
                <div className="ecosystem-boxes-box"></div>
                <div className="ecosystem-boxes-box"></div>
            </div>               
          </div>
      </div>
      
      {/* Right Sidebar */}
      <div className="right-sidebar"></div>
    </div>
  );
}

export default HomeScreen;