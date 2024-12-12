import {  Space, Table } from "antd";

import {  useGetTutorialQuery } from "../../redux/Features/Tutorial/tutorialApi";
import DeleteTutorial from "../../components/Admin/tutorial/DeleteTutorial";
import UpdateTutorial from "../../components/Admin/tutorial/UpdateTutorial";

const columns = [


  {
    title: "No.",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "Created By",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "Video Link",
    key: "videoLink",
    dataIndex: "videoLink",
    width:"40%"
  },
  {
    title: "Action",
    key: "action",
    width:100,
    render: (item) => {
      return (
        <Space size="middle">
         <UpdateTutorial item={item}/>
         <DeleteTutorial id={item?.key}/>
        </Space>
      );
    },
  },
];

const ManageTutorial = () => {
  // get tutorial data
  const { data: tutotialData, isLoading, isFetching } = useGetTutorialQuery(undefined);

  console.log(tutotialData?.data);

  const data = tutotialData?.data?.map((tutorial,idx) => {
    return {
      key: tutorial?._id,
      no:idx+1,
      name: tutorial?.authId?.name,
      
      videoLink:tutorial?.videoLink
    };
  });

  return (
    <>
      <h1 className="text-3xl text-center mb-4 font-bold">Tutorial Management</h1>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 400 }}
        loading={isLoading || isFetching}
        className="bg-white rounded-lg"
      />
    </>
  );
};

export default ManageTutorial;
