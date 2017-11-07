import Axios from 'axios';

const listOfItems = '/api/items';

export const LOAD_ITEMS = 'LOAD_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const EDITING ='EDITING';
export const ERROR = 'ERROR';

//GET all items
export const loadItems = () => {
  return (dispatch) => {
    return Axios.get(listOfItems)
    .then(items => {
      dispatch({
        type: LOAD_ITEMS,
        items: items.data
      });
    })
    .catch(err => {
      type: ERROR,
      error: err
    });
  }
}

//CREATE(POST) new item
export const addItem = (newItem) => {
  return (dispatch) => {
    return Axios.post(listOfItems, newItem)
    .then(newItemDetails => {
      dispatch({
        type: ADD_ITEM,
        item: newItemDetails.data
      });
    })
    .catch(err => {
      type: ERROR,
      error: err
    });
  }
}

//Switches flag to inform front end of change/edit
export const makeItemEditable = (cardID) => {
  return (dispatch) => {
    return dispatch({
      type: EDITING,
      cardID: cardID
    });
  }
}

//UPDATE(PUT) item
export const editItem = (updatedItem) => {
  return (dispatch) => {
    return Axios.put(`${listOfItems/updatedItem.id}`)
    .then(updatedItemDetails => {
      dispatch({
        type: EDIT_ITEM,
        item: updatedItemDetails.data
      });
    })
    .catch(err => {
      type: ERROR,
      error: err
    });
  }
}