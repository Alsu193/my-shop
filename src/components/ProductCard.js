

// function ProductCard({name, desc, price, img}) {
//     return(
//         <div className="card">
//             <div className="card-img">
//                 <img src={img} alt={name} />
//             </div>
//             <p className="card-name">{name}</p>
//             <p className="card-desc">{desc}</p>
//             <p className="card-price">{price}</p>
//             <button>Добавить</button>
//         </div>
//     );
// }

// export default ProductCard;


// ProductCard.js
import { useContext } from "react";
import { CartContext } from "../CartContext";



function ProductCard({ id, name, desc, price, img }) {
    const { addToCart } = useContext(CartContext);

    const handleAdd = () => {
        const product = { id, name, price, img };
        console.log("Добавляемый товар:", product);
        addToCart(product);
    };

    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt={name} />
            </div>
            <p className="card-name">{name}</p>
            <p className="card-desc">{desc}</p>
            <p className="card-price">{price} ₽</p>
            <button onClick={handleAdd}>Добавить</button>
        </div>
    );
}



export default ProductCard;