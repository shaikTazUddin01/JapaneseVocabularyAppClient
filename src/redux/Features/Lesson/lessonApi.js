import { baseApi } from "../../Api/baseApi";


export const lessonApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createLesson: builder.mutation({
      query: (data) => ({
        url: "/lesson/createLesson",
        method: "POST",
        body: data,
      }),
    }),
  
    // getUser: builder.query({
    //   query: () => ({
    //     url: "/auth/getUser",
    //     method: "GET",
    //   }),
    //   providesTags:["user"]
    // }),
    // updateUser: builder.mutation({
    //   query: (data) => ({
    //     url: "/auth/updateUser",
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags:["user"]
    // }),
  }),
});

export const {useCreateLessonMutation} = lessonApi;