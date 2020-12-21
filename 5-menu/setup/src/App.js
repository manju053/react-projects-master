import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(['All', ...(new Set(menuItems.map(menuItem => menuItem.category)))]);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(items);
    } else {
      const newItems = items.filter(menuItem => category === menuItem.category);
      setMenuItems(newItems);
    }

  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <Categories filterItems={filterItems} categories={categories} />
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  )
}

export default App;
