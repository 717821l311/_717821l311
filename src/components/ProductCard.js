import React from 'react';
    function ProductCard({ product }) {
      return (
        <div className="product-card">
          <img src="https://m.media-amazon.com/images/I/81FeGlImflL.jpg" width={200} height={200} alt="oppo" />
          <h4>OPPO F12</h4>
          <p>20000</p>
          <center><button>Add to cart</button></center>

          <img src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-a356ezkjins/gallery/in-galaxy-a35-5g-sm-a356-sm-a356ezkjins-540296514?$650_519_PNG$" width={200} height={200} alt="oppo" />
          <h4>Samsung a35</h4>
          <p>32000</p>
          <center><button>Add to cart</button></center>

          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709898550/Croma%20Assets/Communication/Mobiles/Images/305312_0_ki3quy.png?tr=w-600" width={200} height={200} alt="oppo" />
          <h4>Vivo V30</h4>
          <p>22000</p>
          <button>Add to cart</button>

        </div>

        
      );
    }
    
    export default ProductCard;