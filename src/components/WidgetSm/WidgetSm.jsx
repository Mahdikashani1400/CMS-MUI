import "./WidgetSm.css";
import DataGridCustom from "../DataGridCustom/DataGridCustom";
import { newMembersData } from "../../datas";

export default function WidgetSm() {
  return (
    <div className="widget__sm">
      <h3>Joined New Members</h3>
      <DataGridCustom
        rows={newMembersData.rows}
        columns={newMembersData.columns}
      />
    </div>
  );
}
