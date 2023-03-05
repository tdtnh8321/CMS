import { Menu } from "antd";
import { useEffect, useState } from "react";
import { Get } from "../../../api/ApiMethod";
function DropdownUser() {
  const [items, setAllitems] = useState([]);
  useEffect(() => {
    Get("menu")
      .then((data) => setAllitems(data))
      .catch((err) => console.log(err));
  }, []);
  let parent = items.filter((x) => x.ParentId === null && x.IsDeleted === 0);
  parent.forEach((element) => {
    let Temp = items.filter((x) => x.ParentId === element.MenuId);
    element.children = Temp;
  });
  // console.log("2", parent);
  return (
    <div className="Menu-left">
      <Menu
        mode="horizontal"
        triggerSubMenuAction="click"
        style={{ width: "1000px" }}
      >
        {parent.map((item, index) => (
          <Menu.SubMenu title={item.Title} key={item.Id}>
            {item.children.map((item2, index2) => (
              <Menu.Item key={index2}>{item2.Name}</Menu.Item>
            ))}
          </Menu.SubMenu>
        ))}
      </Menu>
    </div>
  );
}

export default DropdownUser;
