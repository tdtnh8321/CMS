import { Menu } from "antd";

const items = [
  {
    label: "HomePage",
    key: "mail",
  },
  {
    label: "Navigate 2",
    key: "homepage",
  },
  {
    label: "Submen",
    key: "submenu",
    children: [
      {
        label: "Menuitem1",
        key: "setting1",
      },
      {
        label: "Menuitem2",
        key: "setting2",
      },
    ],
  },
  
];

function DropdownUser() {
  return (
    <div className="Menu-left">
      <Menu mode="horizontal" items={items} />
    </div>
  );
}

export default DropdownUser;
