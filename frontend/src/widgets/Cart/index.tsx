import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Cart() {
  const products = [
    { id: 1, img: "images/product-2.jpg", title: "Boy’s T-Shirt", price: 50.0 },
    {
      id: 2,
      img: "images/product-3.jpg",
      title: "Boy’s T-Shirt",
      price: 100.0,
    },
  ];
  let amountsDict: Record<number, number> = {};
  let prevSum = 0;
  products.forEach((product) => {
    const storedAmount = sessionStorage.getItem(`amount_${product.id}`);
    amountsDict[product.id] = storedAmount ? Number(storedAmount) : 1;
    prevSum += amountsDict[product.id] * product.price;
  });
  const [amounts, setAmounts] = useState<Record<number, number>>(amountsDict);
  const [sum, setSum] = useState<number>(prevSum);

  const updateAmount = (id: number, newAmount: number, price: number) => {
    sessionStorage.setItem(`amount_${id}`, newAmount.toString());
    if (newAmount >= 1) {
      setSum((prevData) => prevData + (newAmount - amounts[id]) * price);
      setAmounts((prevData) => ({ ...prevData, [id]: newAmount }));
    }
  };

  return (
    <div className="container-2 cart">
      <table>
        <tbody>
          <tr>
            <th>Товар</th>
            <th>Количество</th>
            <th>Сумма</th>
          </tr>
          {products.map((product, idx) => (
            <tr key={idx}>
              <td>
                <div className="cart-info">
                  <img src={product.img} alt="" />
                  <div>
                    <p>{product.title}</p>
                    <span>Цена: ${product.price}</span> <br />
                    {/* <button className="remove-btn">удалить</button> */}
                  </div>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  value={amounts[product.id]}
                  onChange={(e) =>
                    updateAmount(
                      product.id,
                      Number(e.target.value),
                      product.price
                    )
                  }
                />
              </td>
              <td>${amounts[product.id] * product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price">
        <table>
          <tbody>
            {[
              ["Сумма", sum.toString()],
              ["Налоги", (sum * 0.1).toFixed(2)],
              ["Итого", (sum * 1.1).toFixed(2)],
            ].map(([text, amountOfMoney]) => (
              <tr>
                <td>{text}</td>
                <td>${amountOfMoney}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <NavLink to="#" className="checkout">
          Перейти к оформлению заказа
        </NavLink>
      </div>
    </div>
  );
}
