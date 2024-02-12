import DataGridCustom from "../../components/DataGridCustom/DataGridCustom";
import { userListData } from "../../datas";
import "./UserList.css";

export default function UserList() {
  return (
    <div className="user__list">
      <h3 className="data__grid-title">User List</h3>

      <DataGridCustom
        rows={userListData.rows}
        columns={userListData.columns}
        disableSelectionOnClick
      />
    </div>
  );
}
