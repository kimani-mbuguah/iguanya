import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

// export default createStore(reducers, applyMiddleware(thunk) )

const initState = {
  products: [
    {
      id: 1,
      title: "Novel Bunch",
      price: 455.5,
      image: "/images/shop/item1.jpg",
      imageHover: "/images/shop/item1-hover.jpg",
    },
    {
      id: 2,
      title: "Book Chicks",
      price: 541.5,
      image: "/images/shop/item2.jpg",
      imageHover: "/images/shop/item2-hover.jpg",
    },
    {
      id: 3,
      title: "Book Divas",
      price: 140.5,
      image: "/images/shop/item3.jpg",
      imageHover: "/images/shop/item3-hover.jpg",
    },
    {
      id: 4,
      title: "Book Smart",
      price: 600.0,
      image: "/images/shop/item4.jpg",
      imageHover: "/images/shop/item4-hover.jpg",
    },
    {
      id: 5,
      title: "Book Broads",
      price: 655.5,
      image: "/images/shop/item5.jpg",
      imageHover: "/images/shop/item5-hover.jpg",
    },
    {
      id: 6,
      title: "Page Turners",
      price: 415.0,
      image: "/images/shop/item6.jpg",
      imageHover: "/images/shop/item6-hover.jpg",
    },
  ],
  addedItems: [],
  total: 0,
  shipping: 0,
};

export const initStore = (initialState = initState) => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
};
