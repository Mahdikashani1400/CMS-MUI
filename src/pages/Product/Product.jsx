import "./Product.css";
import ThingEdit from "../../components/ThingEdit/ThingEdit";
import { productDataSales } from "../../datas";

export default function Product() {
  return (
    <div className="product">
      <div className="product__title">
        <h3>Product</h3>
      </div>
      <ThingEdit productDataSales={productDataSales} />
    </div>
  );
}
