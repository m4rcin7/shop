import Section from "@/components/Section.jsx";
import H2 from "@/components/H2.jsx";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Store(
  visibilty,
  products,
  onProductRemove,
  onClose,
  onQuantityChange
) {
  return (
    <Section>
      <H2>Your Cart</H2>
      <div
        style={{
          display: visibilty ? "block" : "none",
        }}
      >
        <div>
          <div>
            <h2>Shopping cart</h2>
            <button onClick={onClose}>
              <AiFillCloseCircle size={30} />
            </button>
          </div>
          <div>
            {products.length === 0 && (
              <span>Your basket is currently empty</span>
            )}
            {products.map((product) => (
              <div key={product.id}>
                <img src={product.image} alt={product.name} />
                <div>
                  <h3>{product.name}</h3>
                  <span>{product.price * product.count}$</span>
                </div>
                <select
                  value={product.count}
                  onChange={(event) => {
                    onQuantityChange(product.id, event.target.value);
                  }}
                >
                  {[...Array(10).keys()].map((number) => {
                    const num = number + 1;
                    return (
                      <option value={num} key={num}>
                        {num}
                      </option>
                    );
                  })}
                </select>
                <button onClick={() => onProductRemove(product)}>
                  <RiDeleteBin6Line size={20} />
                </button>
              </div>
            ))}
            {products.length > 0 && <button>Proceed to checkout</button>}
          </div>
        </div>
      </div>
    </Section>
  );
}
