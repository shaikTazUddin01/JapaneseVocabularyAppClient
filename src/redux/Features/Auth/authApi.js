import { baseApi } from "../../Api/baseApi";


export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signupApi: builder.mutation({
      query: (data) => ({
        url: "/auth/createUser",
        method: "POST",
        body: data,
      }),
    }),
    loginApi: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/auth/getUser",
        method: "GET",
       
      }),
    }),
    
  }),
});

export const { useSignupApiMutation ,useLoginApiMutation ,useGetUserQuery} = authApi;