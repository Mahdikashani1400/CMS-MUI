import DataGridCustom from "../../components/DataGridCustom/DataGridCustom";
import { userListData } from "../../datas";
import "./UserList.css";

export default function UserList() {
  return (
    <div className="user__list">
      <DataGridCustom
        rows={userListData.rows}
        columns={userListData.columns}
        disableSelectionOnClick
      />
    </div>
  );
}
