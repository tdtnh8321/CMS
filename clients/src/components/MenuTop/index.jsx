import DropdownUser from "./DropdownUser";
import { Dropdown, Space } from "antd";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

function MenuTop(prop) {
  const authSlice = useSelector((state) => state.auth);

  const items = [
    {
      label: "Clicking me will not close the menu.",
      key: "1",
      onClick: {},
    },
  ];
  const menuProps = {
    items,
  };

  return (
    <div className="Menu-top flex justify-between items-center m-2">
      <DropdownUser />
      <div className="Menu-right my-2">
        <Dropdown menu={menuProps}>
          <a className="flex items-center">
            <Space className="mx-1">{authSlice.user.name}</Space>

            <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </div>
  );
}

export default MenuTop;
