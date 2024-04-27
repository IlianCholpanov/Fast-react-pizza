/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  // eslint-disable-next-line react/prop-types
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza; //id temp remove

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
