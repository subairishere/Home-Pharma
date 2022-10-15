import delIcon from "../../../../assets/icons/delete.png";
import styles from "./index.module.css";

const Item = (props) => {
  const price = props.price - (props.price * props.discount) / 100;
  return (
    <div className={styles.item}>
      <div className={styles.imgCon}>
        <img src={`http://localhost:5000/media/${props.image}`} />
      </div>
      <div>
        <h3>
          {props.name} {props.size}
        </h3>
        <span>Pack Size: {props.packSize}'s</span>
        <div className={styles.quantity}>
          <button
            onClick={() => props.decreaseItem(props.name)}
            disabled={props.admin}
          >
            -
          </button>
          <input
            onChange={(e) => console.log(e.target.value)}
            type="number"
            value={props.quantity}
            disabled={props.admin}
            min={1}
          />
          <button
            onClick={() => props.increaseItem(props.name)}
            disabled={props.admin}
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.itemPrice}>
        <div>
          <span>Rs. {parseInt(price * props.quantity)}</span>
          <br />
          <span className="original">
            Rs. {parseInt(props.price * props.quantity)}
          </span>
          <br />
          <span>{props.discount}% off</span>
        </div>
        <span>
          {!props.admin && (
            <img
              src={delIcon}
              alt="Delete"
              onClick={() => props.removeItem(props.name)}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default Item;
