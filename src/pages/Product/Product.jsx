import "./Product.css";
import ThingEdit from "../../components/ThingEdit/ThingEdit";
import { productDataSales, productsData } from "../../datas";
import { useParams } from "react-router-dom";

export default function Product() {
  const productId = useParams().productId;
  const productTarget = productsData.rows.find(
    (product) => product.id == productId
  );
  return (
    <div className="product">
      <div className="product__title">
        <h3>Product</h3>
      </div>
      <ThingEdit
        productDataSales={productDataSales}
        productTarget={productTarget}
      />
    </div>
  );
}
