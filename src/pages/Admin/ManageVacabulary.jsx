import { Space, Table } from "antd";

import { useGetLessonQuery } from "../../redux/Features/Lesson/lessonApi";

import DeleteVoc from "../../components/Admin/vocabulary/DeleteVoc";
import UpdateVoc from "../../components/Admin/vocabulary/UpdateVoc";

const columns = [
    {
        title: "Word",
        dataIndex: "word",
        key: "word",
        render: (text) => <span>{text}</span>,
      },
      {
        title: "Meaning",
        dataIndex: "meaning",
        key: "meaning",
      },
      {
        title: "Pronunciation",
        dataIndex: "pronunciation",
        key: "pronunciation",
      },
      {
        title: "When to Say",
        dataIndex: "whenToSay",
        key: "whenToSay",
      },
      {
        title: "Lesson No.",
        dataIndex: "lessonNumber",
        key: "lessonNumber",
      },
      {
        title: "Action",
        key: "action",
        render: (item) => (
          <Space size="middle">
            <UpdateVoc item={item} />
            <DeleteVoc item={item} />
          </Space>
        ),
      },
];



const ManageVacabulary = () => {
  // get lesson data
  const {
    data: lessonData,
    isLoading,
    isFetching,
  } = useGetLessonQuery(undefined);


  const data = lessonData?.data?.flatMap((lesson) =>
    lesson.vocabulary.map((vocab,idx) => ({
        key:`${lesson?._id}${idx}`,
        word: vocab.word,
        meaning: vocab.meaning,
        pronunciation: vocab.pronunciation        ,
        whenToSay: vocab.whenToSay,
        lessonNumber: lesson.lessonNumber,
        lessonId: lesson._id,
      vocId: vocab?._id,
    }))
  );


  return (
    <>
      <h1 className="text-2xl text-center mb-2 font-bold">Vocabulary Management</h1>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 400 }}
        loading={isLoading || isFetching}
      />
    </>
  );
};

export default ManageVacabulary;