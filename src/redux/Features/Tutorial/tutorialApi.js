import { baseApi } from "../../Api/baseApi";


export const tutorialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTutorial: builder.mutation({
      query: (data) => ({
        url: "/tutorial",
        method: "POST",
        body: data,
      }),
      invalidatesTags:['tutorial']
    }),
   
  }),
});

export const {useCreateTutorialMutation} = tutorialApi;