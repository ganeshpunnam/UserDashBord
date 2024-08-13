import React from 'react';
import { useDispatch } from 'react-redux';

const Widget = ({ categoryId, widget }) => {
  const dispatch = useDispatch();

  const handleRemoveWidget = () => {
    dispatch({
      type: 'REMOVE_WIDGET',
      payload: {
        categoryId,
        widgetId: widget.id
      }
    });
  };

  return (
    <div className="widget">
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
      <button onClick={handleRemoveWidget}>Remove</button>
    </div>
  );
};

export default Widget;
