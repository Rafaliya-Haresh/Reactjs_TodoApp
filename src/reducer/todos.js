export const initialState = {
  items: []
};
export default function (state = initialState, action) {
  
  switch (action.type) {
      case 'ADD_ITEM':
        const nextId = state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
        const newItem = {
          id: nextId,
          content: action.payload
        };
        return Object.assign({}, state, { items: state.items.concat(newItem)});

      case 'DELETE_ITEM':
        const removedProduct = state.items.filter(product => product.id !== action.payload );
        return Object.assign({}, state, { items: removedProduct });
        
      default:
        return state;
  }
};
