import React from 'react';
import { FormattedRelative } from 'react-intl';
import { Link } from 'react-router-dom';


const Item = ({ singleItem, singleView }) => {
  let file = singleItem.imageUrl;

  if (singleView) {
    file = '/' + file;
  }


  return (
    <div className="single-item">
      <Link to={`/items/${singleItem.id}`}>
        <div>{ singleItem.name }</div>
      </Link>

      <div><img src={ file } height="250px" width="250px" alt="" /></div>

      <div>Description: { singleItem.description }</div>
      <div>Price: ${ singleItem.price }</div>
      <div>Manufacturer: { singleItem.manufacturer }</div>
      <div>Model: { singleItem.model }</div>
      <div>Condition: { singleItem.Condition.condition }</div>
      <div>Category: { singleItem.Category.category }</div>
      <div>Dimensions: { singleItem.dimensions }</div>
      <div>Notes: { singleItem.notes }</div>
      <div>
        Updated: <FormattedRelative value={ singleItem.updatedAt } />
      </div>
      <div>
        Posted: <FormattedRelative value={ singleItem.createdAt } />
      </div>
    </div>
  );
}

export default Item;