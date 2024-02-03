import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingItem > -1) {
      const updateIExistingItemQuantity = {
        ...state.items[existingItem],
        quantity: state.items[existingItem].quantity + 1,
      };
      updatedItems[existingItem] = updateIExistingItemQuantity;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingItem = state.items.findIndex((item) => item.id === action.id);

    const existingCartItem = state.items[existingItem];

    const updatedItem = [...state.items];
    if (existingCartItem.quantity === 1) {
      updatedItem.slice(existingItem, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem - 1,
      };
      updatedItem[existingItem] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cartState, dispatchCart] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCart({ type: "ADD_ITEM", item: item });
  }
  function removeItem(id) {
    dispatchCart({ type: "REMOVE_ITEM", id: id });
  }

  const cartContext = {
    items: cartState.items,
    addItem: addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
