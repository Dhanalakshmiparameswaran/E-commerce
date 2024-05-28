import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import CardContainer from './Card';
import SearchBar from './SearchBar';
import { FaShoppingCart, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
//type
interface CardData {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

const App: React.FC = () => {
  const [showCard, setShowCard] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [cartItems, setCartItems] = useState<CardData[]>([]);
  const [showCartPopup, setShowCartPopup] = useState(false); 
  // const navigate=useNavigate();

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };
  const toggleCard = () => {
    setShowCard(prevState => !prevState);
    setHideImages(prevState => !prevState);
  };

  const handleAddCard = (card: CardData) => {
    setCartItems(prevItems => [...prevItems, card]);
    
  };

  const handleRemoveCard = (index: number) => {
    setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  const handleCartButtonClick = () => {
    setShowCartPopup(!showCartPopup)
    
  };

  return (
    <Router>
      <div className='bd'>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <div className='icdiv'>
                <FaShoppingCart className='icon' /><h2 className='Appname'>Shopping</h2>
              </div>
            </li>
            <li className="nav-item">
              <div className="search">
                <SearchBar onSearch={handleSearch} />
              </div>
            </li>
            <li className="nav-item">
              <button className='Card-bn' onClick={handleCartButtonClick}>Your Cart ({cartItems.length})
              </button>
            </li>
          </ul>
        </nav>
        {showCartPopup && (
        <div className="cart-popup">
          <div className="cart-popup-content">
            <button onClick={handleCartButtonClick} className='clbtn'>Close</button>
            <h2 className='ych2'>Your Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="cart-items-container">
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    <img src={item.imageUrl} alt={item.title} className="cart-image" />
                    <div className="cart-details">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <p>${item.price}</p>
                      <button className="remove-btn" onClick={() => handleRemoveCard(index)}>Remove Card</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
        <br />
        <hr className='pad'></hr>
        {/* <button onClick={()=>navigate("/")} >Back</button> */}
        <h1 className='ah1'>Our Products</h1>
        <br />
        {!hideImages && (
          <div className='aimgdiv'>
            <div className='trans'>
              <img src="https://luxurysales.in/cdn/shop/products/9_3_250x.jpg?v=1621937420" alt="watch" className='aimg' />
              <br />
              <a href="#Watch" className='p1'>Watch</a>
            </div>
            <div className='trans'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbnivy_Q3Sh8PPWhvL4-sHI-kRnjUc1oWfJtvyKBzIw&s" alt="laptops" className='aimg2' />
              <br />
              <a href="#Laptop" className='p1'>Laptop</a>
            </div>
            <div className='trans'>
              <img src="https://5.imimg.com/data5/SELLER/Default/2022/1/WM/TS/KI/96531042/man-s-shoes-250x250.jpeg" alt="shoes" className='aimg' />
              <br />
              <a href="#Shoes" className='p1'>Shoes</a>
            </div>
            <div className='trans'>
              <img src="https://miranajewels.com/wp-content/uploads/2021/09/MJNK21N118-2-Two-Layered-Mini-Waterfall-Necklace-Set-Silver-Look-4-250x250.jpg.webp" alt="jewellary" className='aimg' />
              <br />
              <a href="#jewellary" className='p1'>Jewellary</a>
            </div>
          </div>
        )}
        <div>
        {!hideImages &&<button className='cbtn' onClick={toggleCard} ><a className='ep1' href="#product">Explore more</a></button>}
          { showCard && <CardContainer onAddCard={handleAddCard} />}
          {!hideImages &&
          <h2 className='foot'>Show and view more.....!</h2>
          }
        </div>
        
      
        <footer className="footer">
          <div className="footerContainer">
            <div className="footerSection">
              <h4>Customer Service</h4>
              <ul>
                <li><a href="#help">Help & Contact</a></li>
                <li><a href="#returns">Returns & Refunds</a></li>
                <li><a href="#shipping">Shipping Information</a></li>
              </ul>
            </div>
            <div className="footerSection">
              <h4>About Us</h4>
              <ul>
                <li><a href="#story">Our Story</a></li>
                <li><a href="#career">Careers</a></li>
                <li><a href="#sub">Sustainability</a></li>
              </ul>
            </div>
            <div className="footerSection">
              <h4>Follow Us</h4>
              <ul className="socialMedia">
                <li><a href="facebook"><FaFacebook /></a></li>
                <li><a href="twitter"><FaTwitter /></a></li>
                <li><a href="instagram"><FaInstagram /></a></li>
              </ul>
            </div>
            <div className="footerSection">
              <h4>Contact Us</h4>
              <p>123 E-commerce St.</p>
              <p>City, State, 12345</p>
              <p>Email: support@ecommerce.com</p>
              <p>Phone: 963-456-7890</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;


