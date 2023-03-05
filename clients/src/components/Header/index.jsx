import { Menu } from "antd";
import "./style.css";
import logo from "../../assets/images/08_Supreme.jpg";
import { useNavigate } from "react-router-dom";
function Header() {
  const naviagte = useNavigate()
  return (
    <div className="m-5 header-left">
      <div className="LOGO my-3 flex items-center justify-between">
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
        theme="dark"
        >
        <Menu.SubMenu title={"Navigation 1"}>
          <Menu.Item onClick={()=>naviagte("/home/MenuLabel")}>
            <span> OPTION 1</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 1</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 1</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 1</span>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title={"Navigation 2"}>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title={"Navigation 2"}>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title={"Navigation 2"}>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title={"Navigation 2"}>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title={"Navigation 2"}>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
          <Menu.Item>
            <span> OPTION 2</span>
          </Menu.Item>
        </Menu.SubMenu>
        </Menu>     
      </div>
    </div>
  );
}

export default Header;
