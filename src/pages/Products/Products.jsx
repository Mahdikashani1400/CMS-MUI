import DataGridCustom from "../../components/DataGridCustom/DataGridCustom";
import { productsData } from "../../datas";
import "./Products.css";

export default function Products() {
  return (
    <div className="products">
      <h3 className="data__grid-title">Products</h3>
      <DataGridCustom rows={productsData.rows} columns={productsData.columns} />
    </div>
  );
}
