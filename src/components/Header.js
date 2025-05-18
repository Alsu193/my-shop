

// import { Link } from "react-router-dom";
// import '../Header.css';

// function Header() {
//   return (
//     <nav>
//       <div className="navbar">
//         <div className="logo">
//           <img src="https://cdn-icons-png.flaticon.com/128/5542/5542477.png" alt="Logo" className="logo-icon" />
//           <span className="logo-text">MusicFlow</span>
//         </div>
//         <div className="nav-links">
//           <Link to="/">Главная</Link>
//           <Link to="/cart">Корзина</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;




import { Link } from "react-router-dom";
import '../Header.css';
import { useContext } from "react";
import { CartContext } from "../CartContext"; // 🔹 импорт контекста

function Header() {
  const { cart } = useContext(CartContext); // 🔹 получаем корзину из контекста
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // 🔹 считаем общее количество

  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src="https://cdn-icons-png.flaticon.com/128/5542/5542477.png" alt="Logo" className="logo-icon" />
          <span className="logo-text">MusicFlow</span>
        </div>
        <div className="nav-links">
          <Link to="/">Главная</Link>
          <Link to="/cart">Корзина ({totalItems})</Link> {/* 🔹 отображаем кол-во */}
        </div>
      </div>
    </nav>
  );
}

export default Header;

