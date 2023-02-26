import DropdownUser from "./DropdownUser";
import { Dropdown, Space,Modal } from "antd";
import { useState,useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import {Get} from "../../api/ApiMethod";

function MenuTop(prop) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  const handleOk = () => {
   
    if(authSlice.isLogged)
    {
    setIsModalOpen(!isModalOpen);
     navigate("/")
    }
  };

  const handleCancel = () => {
    setIsModalOpen(!isModalOpen);
  };
  const authSlice = useSelector((state) => state.auth);
  useEffect(()=>{
    Get('posts').then(data =>  console.log(data)).catch(err => { throw err})
  },[])
 
  const navigate = useNavigate();
  const items = [
    {
      label: "User Info",
      key: "1",
      onClick: ()=>{
          navigate("/home/UserInfo")
      },
    },
    {
      label: "Logout",
      key: "2",
      onClick: ()=>{
       showModal()
      },
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
          <Link href="/" className="flex items-center">
            <Space className="mx-1">{authSlice.user.name}</Space>
            <DownOutlined />
          </Link>
        </Dropdown>
        <Modal title="Announce" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          Are you sure want to Logout the account
      </Modal>
      </div>
    </div>
  );
}

export default MenuTop;
