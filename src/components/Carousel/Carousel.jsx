import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { ProductService } from '../service/ProductService';
import './CarouselDemo.css';

const CarouselDemo = () => {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data.slice(0, 9)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const productTemplate = (param) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="mb-3">
                    <Link to = {`/news/${param._id}`}>
                        <img src={param.img} alt={param.title} />
                        </Link>
                    </div>
                    <div>
                        <h4 className="mb-1">{param.title}</h4>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="carousel-demo">

            <div className="card">
                <Carousel value={products} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={productTemplate} header={<h5>TechNews</h5>} />
            </div>

        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CarouselDemo />, rootElement);