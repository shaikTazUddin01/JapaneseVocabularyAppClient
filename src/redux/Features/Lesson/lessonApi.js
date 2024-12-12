import { baseApi } from "../../Api/baseApi";

export const lessonApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createLesson: builder.mutation({
      query: (data) => ({
        url: "/lesson/createLesson",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["lesson"],
    }),

    getLesson: builder.query({
      query: () => ({
        url: "/lesson/",
        method: "GET",
      }),
      providesTags: ["lesson"],
    }),
    getSpecificLesson: builder.query({
      query: (id) => ({
        url: `/lesson/${id}`,
        method: "GET",
      }),
      providesTags: ["lesson"],
    }),
    DeleteLesson: builder.mutation({
      query: (id) => ({
        url: `/lesson/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["lesson"],
    }),
    updateLesson: builder.mutation({
      query: (data) => {
        // console.log("-->>",data);
        return {
          url: `/lesson/updatelesson/${data?.id}`,
          method: "PATCH",
          body: data?.data,
        };
      },
      invalidatesTags: ["lesson"],
    }),
    addVoc: builder.mutation({
      query: (data) => {
        // console.log("-->>",data);
        return {
          url: `/lesson/addeeVoca`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["lesson"],
    }),
    // delete vocabulary
    deleteVoc: builder.mutation({
      query: (data) => {
        // console.log("-->>",data);
        return {
          url: `/lesson/deleteVoca`,
          method: "DELETE",
          body: data,
        };
      },
      invalidatesTags: ["lesson"],
    }),
    // update vocabulary
    updateVoc: builder.mutation({
      query: (data) => {
        // console.log("-->>",data);
        return {
          url: `/lesson/updateVoca`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["lesson"],
    }),
  }),
});

export const {
  useCreateLessonMutation,
  useGetLessonQuery,
  useDeleteLessonMutation,
  useUpdateLessonMutation,
  useAddVocMutation,
  useDeleteVocMutation,
  useUpdateVocMutation,
  useGetSpecificLessonQuery
} = lessonApi;
