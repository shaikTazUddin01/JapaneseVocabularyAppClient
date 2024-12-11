import { Button, Space, Table } from "antd";
import { useGetUserQuery } from "../../redux/Features/Auth/authApi";
import UpdateUser from "../../components/Admin/user/UpdateUser";

const columns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (item) => {
      return <img src={item} className="size-10 rounded-md border border-blue-600" />;
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    key: "role",
    dataIndex: "role",
  },
  {
    title: "Action",
    key: "action",
    width:100,
    render: (item) => {
      return (
        <Space size="middle">
         <UpdateUser userInFo={item}/>
          <Button type="">Delete</Button>
        </Space>
      );
    },
  },
];

const ManageUser = () => {
  // get user data
  const { data: userData, isLoading, isFetching } = useGetUserQuery(undefined);

  console.log(userData?.data);

  const data = userData?.data?.map((user) => {
    return {
      key: user?._id,
      image: user?.image,
      name: user?.name,
      email: user?.email,
      role: user?.role,
    };
  });

  return (
    <>
      <h1 className="text-2xl text-center mb-2 font-bold">User Management</h1>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 400 }}
        loading={isLoading || isFetching}
      />
    </>
  );
};

export default ManageUser;
