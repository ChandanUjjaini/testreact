import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Title from './Title';
import MenuItems from './MenuItems';


const MainContent = (props) => {
  if (props.display == "home") {
    return(
      <div>
        <h1>Home</h1>
        <div>Welcome to the great shopping experience</div>
      </div>
    )
  }

  else if (props.display == "product") {
    return(
      <div>
        <h1>Product</h1>
        <div>Here is a list of products</div>
      </div>
    )
  }
  else if (props.display == "aboutus") {
    return(
      <div>
        <h1>About Us</h1>
        <div>We ar fantastic company with great people and the company was founded in 2010.</div>
      </div>
    )
  }
  
}



function App() {

//menuItems has data for Menu items
  const [menuItems, setMenuItems] = useState({i1:"Home", i2:"Our Services", i3:"our Sotre"});

  const [displayOptions, setDisplayOptions] = useState("home")

  function handleClick(event){
    if (event.target.id == "home"){
      setDisplayOptions("home");
    }
    else if (event.target.id == "product"){
      setDisplayOptions("product");
    }
    else if (event.target.id == "aboutus"){
      setDisplayOptions("aboutus");
    }
  }
 
  return (
    <div className="App">
      <h1>Hello React!!!</h1>       
      <Title />
      <ul>
        <li><a id="home" onClick={handleClick} href="#" >Home</a></li>
        <li><a id="product" onClick={handleClick} href="#" >Product</a></li>
        <li><a id="aboutus" onClick={handleClick} href="#" >About Us</a></li>
        </ul>
        
        <MainContent display={displayOptions} />
      {/* /* <MenuItems 
      item1={menuItems.i1}  
      item2={menuItems.i2} 
      item3={menuItems.i3} 
      /> */}
      {/* <MenuItems
      mi={menuItems}
      />  */}
     
      
    </div>
  );
}

export default App;