import { ProductsAction, ProductsState } from './types';

export const productReducer = (
  state: ProductsState,
  action: ProductsAction,
) => {
  switch (action.type) {
    case 'selected':
      return {
        products: state.products.map((item) =>
          item.id === action.payload
            ? { ...item, selected: !item.selected }
            : item,
        ),
      };

    default:
      return state;
  }
};
