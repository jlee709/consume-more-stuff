// component-container, a redux style dummy container
import React from 'react';
import Item from'./item.components';

const ItemList = ({ items, categoryId, categoryName }) => {  
  return (
    <div className="item-list" id={categoryName}> {
      items
      .filter(item => {
        return !item.deletedAt;
      })
      .filter(item => {
        return item.is_sold === 1;
      })
      .filter(item => {        
        return item.category_id === categoryId;
      })
      .map((item, idx) => {
        //renders X amount of items
        return (
          <Item
          singleItem={ item }
          key={ idx } />
        );
      })
    }
    </div>
  );
}

export default ItemList;