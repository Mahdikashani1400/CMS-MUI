import { lastestTransActionsData } from "../../datas";
import DataGridCustom from "../DataGridCustom/DataGridCustom";
import "./WidgetLg.css";

export default function WidgetLg() {
  return (
    <div className="widget__lg">
      <h3 className="data__grid-title">Lastest TransActions</h3>
      <DataGridCustom
        rows={lastestTransActionsData.rows}
        columns={lastestTransActionsData.columns}
      />
    </div>
  );
}
