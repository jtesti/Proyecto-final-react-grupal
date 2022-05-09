import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Mobile/Mobile.scss";


  const Mobile = () => {
  const url = "http://localhost:8080/api/products";

  const [getProducts, setGetProducts] = useState([]);

  
  useEffect(() => {
  
    axios
    .get(url)
    .then((response) => {
        console.log(response.data);
        setGetProducts(response.data);
    })
   
},[])

    
return(    
    <div className="card-mobile-container">
            {getProducts.map(product => {
                if (product.tipo === "Movil"){
                    return(
                      
                            <div key={product._id}>
                            <div className="card-mobile">
                                    <p>{product.marca}</p>
                                    <Link to = {`/mobile/${product._id}`}>
                                    <img className="mobile-img" src={product.img} alt={product.tipo}/>
                                    <p>{product.precio}€</p>
                                    </Link>
                                </div>
                            </div>
                    )
                } 
                return null
            }
            )}
        </div>
)};

export default Mobile;