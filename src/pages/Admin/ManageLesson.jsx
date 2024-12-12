import { Space, Table } from "antd";

import { useGetLessonQuery } from "../../redux/Features/Lesson/lessonApi";

import DeleteLesson from "../../components/Admin/lesson/DeleteLesson";
import UpdateLesson from "../../components/Admin/lesson/UpdateLesson";

const columns = [
  {
    title: "Lesson Name",
    dataIndex: "name",
    key: "name",
   
  },

  {
    title: "Lesson Number",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Vocabulary Count",
    key: "vocabularyCount",
    dataIndex: "vocabularyCount",
  },
  {
    title: "Action",
    key: "action",
    width: 100,
    render: (item) => {
      return (
        <Space size="middle">
          {/* <Updatelesson lessonInFo={item}/> */}
          <UpdateLesson item={item}/>
          <DeleteLesson item={item} />
        </Space>
      );
    },
  },
];

const ManageLesson = () => {
  // get lesson data
  const {
    data: lessonData,
    isLoading,
    isFetching,
  } = useGetLessonQuery(undefined);

  // console.log(lessonData?.data);

  const data = lessonData?.data?.map((lesson) => {
    return {
      key: lesson?._id,
      name: lesson?.lessonName,
      number: lesson?.lessonNumber,
      vocabularyCount:
        lesson?.vocabulary?.length > 0 ? lesson?.vocabulary?.length : "0",
    };
  });

  return (
    <>
    <div className="p-2">
      <h1 className="text-3xl text-center mb-4 font-bold text-gray-900">Lesson Management</h1>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 400 }}
        loading={isLoading || isFetching}
        className="bg-white rounded-lg"
        />
        </div>
    </>
  );
};

export default ManageLesson;
