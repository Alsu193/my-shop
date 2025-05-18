// function Aside() {
//     return(
//       <aside>
//         <div className='aside'>
//             <p>Боковое меню</p>
//         </div>
//       </aside>
//     );
// }

// export default Aside;


import '../Aside.css';

function Aside() {
    return (
      <aside className="aside">
        <h3>Категории</h3>
        <ul>
          <li>Акустические гитары</li>
          <li>Электрогитары</li>
          <li>Цифровые пианино</li>
          <li>Укулеле</li>
          <li>Синтезаторы</li>
          <li>Барабаны</li>
          <li>Струнные</li>
          <li>Духовые</li>
          <li>Аксессуары</li>
        </ul>
      </aside>
    );
}

export default Aside;
