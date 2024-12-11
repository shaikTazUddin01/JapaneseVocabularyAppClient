import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const menuItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Dashboard",
      path: "/admin",
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "Manage User",
      path: "/admin/manageUser",
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "Create Lesson",
      path: "/admin/createLesson",
    },
    {
      key: "4",
      icon: <VideoCameraOutlined />,
      label: "Manage Lesson",
      path: "/admin/manageLesson",
    },
    {
      key: "5",
      icon: <UploadOutlined />,
      label: "Create Vocabulary",
      path: "/admin/createVocabulary",
    },
    {
      key: "6",
      icon: <UploadOutlined />,
      label: "Manage Vocabulary",
      path: "/admin/manageVocabulary",
    },
  ];

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="h-screen sticky top-0"
      >
        <div className="demo-logo-vertical" />

        <Menu
          className="pt-10"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={(e) => {
            const selectedItem = menuItems.find((item) => item.key === e.key);
            if (selectedItem) {
              navigate(selectedItem.path);
            }
          }}
          items={menuItems.map(({ key, icon, label }) => ({
            key,
            icon,
            label,
          }))}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} className="sticky top-0 bg-[#001529] z-20">
          <Button
            className="text-white"
            type="text "
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content className="p-5">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
