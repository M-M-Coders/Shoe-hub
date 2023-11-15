import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import '../styles/Home.css';

function Home() {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/shoes')
            .then(response => response.json())
            .then(data => setShoes(data));
    }, []);

    const handleAddToCart = (shoe) => {
        // Perform any logic related to adding to the cart here
        // For now, let's just show an alert message
        alert(`Added ${shoe.category} to the cart!`);
    };

    return (
        <div className="home-container">
            <img className="sneaker-image" src="data:image/webp;base64,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" alt="" />
            <h1 className="title">The sneaker culture is here</h1>
            <p className="description">Walk The Talk</p>
            <div className="shoes-container">
                {shoes.map(shoe => (
                    <div className="shoe-card" key={shoe.id}>
                        <img className="shoe-image" src={shoe.image} alt="" />
                        <h3 className="shoe-category">{shoe.category}</h3>
                        <p className="shoe-price">Price:${shoe.price}</p>
                        <button className="shoe-button" onClick={() => handleAddToCart(shoe)}>
                            Add to Cart <ShoppingCart size={17} />
                        </button>
                        <div>
                            <Star size={18} /> <Star size={18} /> <Star size={18} /> <Star size={18} /> <Star size={18} />
                        </div>
                    </div>
                ))}
            </div>
            <h1 className='down'>What's New</h1>
            <button className='btn'>See all Products</button>
        </div>
    );
}

export default Home;
