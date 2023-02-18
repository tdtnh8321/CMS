
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

import logo from "../../assets/images/08_Supreme.jpg";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
function Header(props) {
  const items = [
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem("Option 1", "1"),
      getItem("Option 2", "2"),
      getItem("Option 3", "3"),
      getItem("Option 4", "4"),
    ]),
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
    ]),
    getItem("Navigation Three", "sub4", <SettingOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
    
  ];
  // const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  return (
    <div className="m-5 header-left">
      <div className="LOGO my-3 flex items-center">
        <img
          src={logo}
          alt="logo"
          className="rounded-full object-cover	mx-4 w-20 h-20"
        />
        <p className="text-white text-2xl font-mono">CMSCompamy</p>
      </div>
      <div className="Menu-container">
        <Menu
          mode="inline"
          style={{
            width: 256,
            background: "none",
            color: "white",
          }}
          items={items}
        />
      </div>
    </div>
  );
}

export default Header;
