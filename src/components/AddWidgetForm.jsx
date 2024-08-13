import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddWidgetForm = ({ categoryId }) => {
  const dispatch = useDispatch();
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const addWidget = () => {
    if (widgetName && widgetText) {
      dispatch({
        type: 'ADD_WIDGET',
        payload: { categoryId, name: widgetName, text: widgetText },
      });
      setWidgetName('');
      setWidgetText('');
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-200 to-green-400 p-6 rounded-lg shadow flex flex-col">
      <h3 className="text-lg font-bold text-white mb-2">Add Widget</h3>
      <input 
        type="text" 
        placeholder="Widget Name" 
        className="border border-green-400 rounded-lg p-2 mb-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
        value={widgetName}
        onChange={e => setWidgetName(e.target.value)}
      />
      <textarea 
        placeholder="Widget Text" 
        className="border border-green-400 rounded-lg p-2 mb-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
        value={widgetText}
        onChange={e => setWidgetText(e.target.value)}
      />
      <button 
        className="bg-green-600 text-white rounded-lg p-3 mt-3 hover:bg-green-700 transition-colors duration-300"
        onClick={addWidget}
      >
        Add Widget
      </button>
    </div>
  );
};

export default AddWidgetForm;
