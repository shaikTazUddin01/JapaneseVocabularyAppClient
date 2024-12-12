import { Space, Table, Select } from "antd";
import { useState } from "react";
import { useGetLessonQuery } from "../../redux/Features/Lesson/lessonApi";
import DeleteVoc from "../../components/Admin/vocabulary/DeleteVoc";
import UpdateVoc from "../../components/Admin/vocabulary/UpdateVoc";

const columns = [
  {
    title: "Lesson No.",
    dataIndex: "lessonNumber",
    key: "lessonNumber",
    width: "10%",
  },
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
    width: "25%",
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

const ManageVocabulary = () => {
  // Get lesson data
  const {
    data: lessonData,
    isLoading,
    isFetching,
  } = useGetLessonQuery(undefined);

  const [filteredLesson, setFilteredLesson] = useState(null); 

  const data = lessonData?.data?.flatMap((lesson) =>
    lesson.vocabulary.map((vocab, idx) => ({
      key: `${lesson?._id}${idx}`,
      word: vocab.word,
      meaning: vocab.meaning,
      pronunciation: vocab.pronunciation,
      whenToSay: vocab.whenToSay,
      lessonNumber: lesson.lessonNumber,
      lessonId: lesson._id,
      vocId: vocab?._id,
    }))
  );

  
  const filteredData = filteredLesson
    ? data?.filter((item) => item.lessonNumber === filteredLesson)
    : data;

  return (
    <>
      <div className="px-2">
        <h1 className="text-3xl text-center mb-4 font-bold">
          Vocabulary Management
        </h1>

        
        <div className="flex justify-end mb-4">
          <Select
            placeholder="Filter by Lesson"
           className="w-full md:w-[200px]"
            allowClear
            onChange={(value) => setFilteredLesson(value)}
            options={lessonData?.data?.map((lesson) => ({
              value: lesson.lessonNumber,
              label: `Lesson ${lesson.lessonNumber}`,
            }))}
          />
        </div>

        {/* Table */}
        <Table
          columns={columns}
          dataSource={filteredData}
          scroll={{ x: 400 }}
          loading={isLoading || isFetching}
          className="bg-white rounded-lg"
        />
      </div>
    </>
  );
};

export default ManageVocabulary;
