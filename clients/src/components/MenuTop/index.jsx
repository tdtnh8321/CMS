import DropdownUser from "./DropdownUser";
import { Dropdown, Space, Modal } from "antd";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../features/Auth/authSlice";
function MenuTop(prop) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authSlice = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  console.log(authSlice);

  const handleOk = () => {
    let removeUser = { user: authSlice.user };
    removeUser.user = {};
    dispatch(logout(removeUser));
    setIsModalOpen(!isModalOpen);
    navigate("/");
  };
  const handleCancel = () => {
    setIsModalOpen(!isModalOpen);
  };
  console.log();
  const navigate = useNavigate();
  const items = [
    {
      label: "User Info",
      key: "1",
      onClick: () => {
        navigate("/home/UserInfo");
      },
    },
    {
      label: "Logout",
      key: "2",
      onClick: () => {
        showModal();
      },
    },
  ];
  const menuProps = {
    items,
  };
  return (
    <div className="Menu-top w-full   flex justify-between items-center m-2">
      <DropdownUser />
      <div className="Menu-right my-2">
        <Dropdown menu={menuProps} className="mr-9">
          <Link href="/" className="flex items-center">
            <Space className="mx-1">
              {JSON.parse(localStorage.getItem("Login"))}
            </Space>
            <DownOutlined />
          </Link>
        </Dropdown>
        <Modal
          title="Announce"
          open={isModalOpen}
          okType="default"
          onOk={handleOk}
          onCancel={handleCancel}
        >
          Are you sure want to Logout the account
        </Modal>
      </div>
    </div>
  );
}

export default MenuTop;
