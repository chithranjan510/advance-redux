import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { uiActions } from '../reduxStore/uiSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const quantity = useSelector(state => state.cart.totalQuantity);
  
  const showCartHandler = () => {
    dispatch(uiActions.showCart());
  }

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
