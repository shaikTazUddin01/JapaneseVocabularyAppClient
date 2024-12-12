import { Space, Table, Tooltip } from "antd";
import { useGetUserQuery } from "../../redux/Features/Auth/authApi";
import UpdateUser from "../../components/Admin/user/UpdateUser";

const columns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (src) => (
      <Tooltip title="User Image">
        <img
          src={src}
          alt="User"
          className="w-10 h-10 rounded-md border border-blue-600"
        />
      </Tooltip>
    ),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (name) => (
      <span className="font-semibold text-gray-700">{name}</span>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (email) => (
      <span className="text-sm text-gray-600">{email}</span>
    ),
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (role) => (
      <span
        className={`px-2 py-1 rounded-lg text-sm font-semibold ${
          role === "ADMIN"
            ? "bg-green-100 text-green-700"
            : "bg-blue-100 text-blue-700"
        }`}
      >
        {role}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    width: 120,
    render: (user) => (
      <Space size="middle">
        <UpdateUser userInFo={user} />
      </Space>
    ),
  },
];

const ManageUser = () => {
  // get user data
  const { data: userData, isLoading, isFetching } = useGetUserQuery(undefined);

  const data = userData?.data?.map((user) => ({
    key: user?._id,
    image: user?.image,
    name: user?.name,
    email: user?.email,
    role: user?.role,
  }));

  return (
    <div className="p-2">
      <h1 className="text-3xl text-center mb-4 font-bold text-gray-900">
        User Management
      </h1>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 600 }}
        loading={isLoading || isFetching}
        bordered
        className="bg-white rounded-lg shadow-sm"
      />
    </div>
  );
};

export default ManageUser;
