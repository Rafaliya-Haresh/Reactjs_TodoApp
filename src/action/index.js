export const addItem = (content) => {
    return { 
      type: 'ADD_ITEM', 
      payload: content 
    };
};

export const deleteItem = (item) => {
  return { 
    type: 'DELETE_ITEM', 
    payload: item
  };
};


export const homeItem = (value)  => {
  return {
    type: 'INSTALLATION',
    installationDetails: {
      installationData: value
    }
  }
}