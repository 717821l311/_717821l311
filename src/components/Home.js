import React from 'react';
import './Home.css';
import ProductCard from './ProductCard';
import { useNavigate } from "react-router-dom";
function Home(){
    return ( 
    <div>
    <div>
               <nav className='Nav'>Home</nav>
               <nav className='Nav'>Shop</nav>
               <nav className='Nav'>Login</nav>
               <div className='image'>
               <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9mkGlHqDz5qfHBOQ56I47lKpbfun_XGGO3Q&usqp=CAU" width={300} height={300}/>
               </div>
               <button variant="btn btn-success" onClick={() => ProductCard.push('/ProductCard')}>Click button to view products</button>
               <br/>
               <h1>Product</h1>
              <ProductCard/>
            </div>
 </div>
 );
}
export default Home;