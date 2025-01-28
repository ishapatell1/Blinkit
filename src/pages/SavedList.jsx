import React from 'react';
import "../css/savedlist.css"; // Linking the CSS file
import { useSaveList } from '../context/WishContext';

export const SavedList = () => {
    const {items,removeFromSaveList} = useSaveList()
  return (
    <div className="saved-list-container">
      <h1 className="saved-list-title">Saved Items</h1>
      {items.length === 0 ? (
        <p>No items in your saved list!</p>
      ) : (
        <div className="saved-list">
          {items.map((item) => (
            <div key={item.id} className="saved-item-card">
              <img
                src={item.image_url}
                alt={item.name}
                className="saved-item-image"
              />
              <div className="saved-item-details">
                <h3 className="saved-item-name">{item.name}</h3>
                <p className="saved-item-price">₹{item.price}</p>
                <button
                  className="remove-button"
                  onClick={() => removeFromSaveList(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};