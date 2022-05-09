import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Consolas/Consolas.scss";

  const Consolas = () => {
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
    <div className="card-consolas-container">
            {getProducts.map(product => {
                if (product.tipo === "Consola"){
                    return(
                      
                            <div key={product._id}>
                            <div className="card-consolas">
                                    <p>{product.marca}</p>
                                    <Link to = {`/consolas/${product._id}`}>
                                    <img className="consolas-img" src={product.img} alt={product.tipo}/>
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

export default Consolas;