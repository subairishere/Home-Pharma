import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import styles from "./index.module.css";
import delIcn from "../../assets/icons/delete.png";

export default function Card(props) {
  const state = useContext(CartContext);

  const discountedPrice = props.price - (props.price * props.discount) / 100;
  const renderDiscount = () => {
    if (props.discount <= 0) return null;
    return (
      <>
        <span className={styles.original}>{props.price} PKR</span>
        <span className={styles.discount}>{props.discount}% discount</span>
      </>
    );
  };

  const medObj = {
    pillId: props.id,
    name: props.title,
    price: props.price,
    discount: props.discount,
    type: props.type,
    size: props.size,
    image: props.imgUrl,
    packSize: props.packSize,
    doctorNote: props.doctorNote,
  };

  const hasBeenAdded = () => {
    for (const item of state.items) {
      if (item.pillId == props.id) {
        console.log(item.pillId, props.id);
        return true;
      }
    }

    return false;
  };

  const itemAdded = hasBeenAdded();

  return (
    <div className={styles.card}>
      {props.admin && (
        <div className={styles.delIcon} onClick={props.onDelete}>
          <img src={delIcn} alt="delete" />
        </div>
      )}
      <Link to={`/medicine/${props.id}`}>
        <div className={styles.imgCon}>
          <img src={`http://localhost:5000/media/${props.imgUrl}`} />
        </div>
      </Link>
      <h3>{props.title}</h3>
      <div className={styles.info}>
        <p>Type: {props.type}</p>
        <p>Size: {props.size}</p>
      </div>
      <p className={styles.price}>
        Rs {parseInt(discountedPrice)}
        {renderDiscount()}
      </p>
      {!props.admin && (
        <button
          disabled={itemAdded && "disabled"}
          onClick={() => state.addItem(medObj)}
        >
          {itemAdded ? "Item Added" : "Add to cart"}
        </button>
      )}
    </div>
  );
}
