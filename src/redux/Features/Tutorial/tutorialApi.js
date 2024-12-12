import { baseApi } from "../../Api/baseApi";


export const tutorialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTutorial: builder.mutation({
      query: (data) => ({
        url: "/tutorial/",
        method: "POST",
        body: data,
      }),
      invalidatesTags:['tutorial']
    }),
    getTutorial: builder.query({
      query: (data) => ({
        url: "/tutorial/",
        method: "GET",
        body: data,
      }),
      providesTags:['tutorial']
    }),
    deleteTutorial: builder.mutation({
      query: (id) => ({
        url: `/tutorial/delete/${id}`,
        method: "DELETE",
        
      }),
      invalidatesTags:['tutorial']
    }),
    updateTutorial: builder.mutation({
      query: ({id,data}) => ({
        url: `/tutorial/update/${id}`,
        method: "PATCH",
        body:data
        
      }),
      invalidatesTags:['tutorial']
    }),
   
  }),
});

export const {useCreateTutorialMutation,useGetTutorialQuery,useDeleteTutorialMutation,useUpdateTutorialMutation} = tutorialApi;