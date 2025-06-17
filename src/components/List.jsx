import React from 'react';
import { FixedSizeList as VirtualList } from 'react-window';
import ListItem from './ListItem';

function List({ items,selectedIds,onSelect }) {
  const Row = ({ index, style }) => {
    const item=items[index];
    return(
      <div style={style}>
      <ListItem
      key={item.id}
      item={item}
      style={style}
      isSelected={selectedIds.includes(item.id)}
      onSelect={onSelect}/>
      </div>
    );
  };

  return (
    <VirtualList
      height={600}
      itemCount={items.length}
      itemSize={100}
      width={'100%'}
    >
      {Row}
    </VirtualList>
  );
}

export default List;