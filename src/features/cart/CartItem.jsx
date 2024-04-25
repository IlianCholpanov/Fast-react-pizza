import fomratCurrency from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{fomratCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
