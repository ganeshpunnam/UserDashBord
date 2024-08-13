import { createStore } from 'redux';

const initialState = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Cloud Accounts", text: "Connected (2)\nNot Connected (2)" },
        { id: 2, name: "Cloud Account Risk Assessment", text: "Failed (3689)\nWarning (861)\nNot Available (84)\nPassed (7251)" },
      ]
    },
    {
      id: 2,
      name: "CWPP Dashboard",
      widgets: [
        { id: 3, name: "Top 5 Namespace Specific Alerts", text: "No Graph data available!" },
        { id: 4, name: "Workload Alerts", text: "No Graph data available!" },
      ]
    },
    {
      id: 3,
      name: "Registry Scan",
      widgets: [
        { id: 5, name: "Image Risk Assessment", text: "1470 Total Vulnerabilities\nCritical (0)\nHigh (950)" },
        { id: 6, name: "Image Security Issues", text: "2 Total Images\nCritical (2)\nHigh (2)" },
      ]
    }
  ],
  widgetIdCounter: 7,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category => 
          category.id === action.payload.categoryId ? {
            ...category,
            widgets: [...category.widgets, { 
              id: state.widgetIdCounter, 
              name: action.payload.name, 
              text: action.payload.text 
            }]
          } : category
        ),
        widgetIdCounter: state.widgetIdCounter + 1
      };
    case 'REMOVE_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category => 
          category.id === action.payload.categoryId ? {
            ...category,
            widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId)
          } : category
        )
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);
export default store;
