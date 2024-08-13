import React from 'react';
import { useDispatch } from 'react-redux';

const Category = ({ category }) => {
  const dispatch = useDispatch();

  const removeWidget = (categoryId, widgetId) => {
    dispatch({
      type: 'REMOVE_WIDGET',
      payload: { categoryId, widgetId },
    });
  };

  return (
    <div className="category mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.widgets.map(widget => (
          <div key={widget.id} className="bg-gradient-to-r from-blue-200 to-blue-400 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 relative">
            <button 
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-1 hover:bg-red-700 transition-colors duration-300"
              onClick={() => removeWidget(category.id, widget.id)}
            >
              ✖
            </button>
            <h3 className="text-xl font-semibold text-white">{widget.name}</h3>
            <p className="text-white mt-4 whitespace-pre-line">{widget.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
