import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddWidgetForm from './AddWidgetForm';
import Category from './Category'; // Ensure this import is used

const Dashboard = () => {
  const categories = useSelector(state => state.categories);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget => 
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">User Dashboard</h1>
        <input 
          type="text" 
          placeholder="Search widgets..." 
          className="border border-gray-400 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredCategories.map(category => (
        <div key={category.id} className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.widgets.map(widget => (
              <div key={widget.id} className="bg-gradient-to-r from-blue-200 to-blue-400 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 relative">
                <h3 className="text-xl font-semibold text-white">{widget.name}</h3>
                <p className="text-white mt-4 whitespace-pre-line">{widget.text}</p>
              </div>
            ))}
            <AddWidgetForm categoryId={category.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
