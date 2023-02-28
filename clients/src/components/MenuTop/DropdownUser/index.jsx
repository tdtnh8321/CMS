import { Menu } from "antd";

const items = [
  {
    label: "Phong Vu",
    key: "mail",
  },
  {
    label: "Shopee",
    key: "homepage",
  },
  {
    label: "Submenu",
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
