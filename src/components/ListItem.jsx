import React from 'react';
import './ListItem.css';

function ListItem({ item, style,onSelect,isSelected }) {
  return (
    <div className="list-item" >
      <input
      type="checkbox"
      checked={isSelected}
      onChange={()=> onSelect(item.id)}
      style={{marginRight:'10px'}}/>
      <div className="avatar">{item.title.charAt(0)}</div>
      <div className="details">
        <h3 className='title'>{item.title}</h3>
        <p className="subtitle">{item.subtitle}</p>
        <p className="description">{item.description}</p>
        <p className="date">{new Date(item.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default ListItem;