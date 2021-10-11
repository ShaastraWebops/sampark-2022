import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUserInput = {
  campusAmb?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  college: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  number: Scalars['String'];
  password: Scalars['String'];
  state: Scalars['String'];
  stream: Stream;
  yearOfStudy: YearOfStudy;
};

export type CreateWorkshopInput = {
  contact: Scalars['String'];
  description: Scalars['String'];
  pic: Scalars['String'];
  registrationCloseTime: Scalars['String'];
  title: Scalars['String'];
  workshopDate: Scalars['String'];
};

export type EditProfileInput = {
  campusAmb?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  college?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  stream?: Maybe<Stream>;
  yearOfStudy?: Maybe<YearOfStudy>;
};

export type EditWorkshopInput = {
  contact?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  pic?: Maybe<Scalars['String']>;
  registrationCloseTime?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  workshopDate?: Maybe<Scalars['String']>;
};

export type FaQs = {
  answer?: Maybe<Scalars['String']>;
  createdOn: Scalars['String'];
  id: Scalars['ID'];
  question: Scalars['String'];
  updatedOn: Scalars['String'];
};

export type GetFaQsOutput = {
  count: Scalars['Float'];
  faqs: Array<FaQs>;
};

export type GetUsersFilter = {
  city?: Maybe<Scalars['String']>;
  college?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  school?: Maybe<Scalars['String']>;
  stream?: Maybe<Stream>;
  yearOfStudy?: Maybe<YearOfStudy>;
};

export type GetUsersOutput = {
  count: Scalars['Float'];
  users: Array<User>;
};

export type GetWorkshopsOutput = {
  count: Scalars['Float'];
  workshops: Array<Workshop>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  answerFAQ: Scalars['Boolean'];
  createFAQ: Scalars['Boolean'];
  createUser: Scalars['Boolean'];
  createWorkshop: Workshop;
  deleteFAQs: Scalars['Boolean'];
  deleteWorkshop: Scalars['Boolean'];
  editProfile?: Maybe<Scalars['Boolean']>;
  editWorkshop: Scalars['Boolean'];
  login?: Maybe<User>;
  logoutUser: Scalars['Boolean'];
  register: Scalars['Boolean'];
  reqForgotPassVerification: Scalars['Boolean'];
  resendVerificationMail: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  verifyUser: User;
};


export type MutationAnswerFaqArgs = {
  FAQID: Scalars['String'];
  answer: Scalars['String'];
};


export type MutationCreateFaqArgs = {
  question: Scalars['String'];
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationCreateWorkshopArgs = {
  data: CreateWorkshopInput;
};


export type MutationDeleteFaQsArgs = {
  FAQID: Scalars['String'];
};


export type MutationDeleteWorkshopArgs = {
  WorkshopID: Scalars['String'];
};


export type MutationEditProfileArgs = {
  data: EditProfileInput;
};


export type MutationEditWorkshopArgs = {
  WorkshopID: Scalars['String'];
  data: EditWorkshopInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  WorkshopID: Scalars['String'];
};


export type MutationReqForgotPassVerificationArgs = {
  data: RequestForgotPassInput;
};


export type MutationResendVerificationMailArgs = {
  data: RequestForgotPassInput;
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationVerifyUserArgs = {
  data: VerifyUserInput;
};

export type Query = {
  exportCSV: Scalars['String'];
  getFAQ: FaQs;
  getFAQs: GetFaQsOutput;
  getUser?: Maybe<User>;
  getUsers?: Maybe<GetUsersOutput>;
  getUsersCount: Scalars['Float'];
  getUsersDataCSV: Scalars['String'];
  getWorkshop: Workshop;
  getWorkshops: GetWorkshopsOutput;
  isRegistered: Scalars['Boolean'];
  me?: Maybe<User>;
  searchUser?: Maybe<Array<User>>;
  todaysHighlights?: Maybe<Array<Workshop>>;
};


export type QueryExportCsvArgs = {
  WorkshopID: Scalars['String'];
};


export type QueryGetFaqArgs = {
  FAQID: Scalars['String'];
};


export type QueryGetFaQsArgs = {
  isAnswered?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
};


export type QueryGetUserArgs = {
  userId: Scalars['String'];
};


export type QueryGetUsersArgs = {
  filter?: Maybe<GetUsersFilter>;
  limit?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
};


export type QueryGetWorkshopArgs = {
  WorkshopID: Scalars['String'];
};


export type QueryGetWorkshopsArgs = {
  limit?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
};


export type QueryIsRegisteredArgs = {
  WorkshopID: Scalars['String'];
};


export type QuerySearchUserArgs = {
  search: Scalars['String'];
};

export type RequestForgotPassInput = {
  email: Scalars['String'];
};

export type ResetPasswordInput = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export enum Stream {
  Bse = 'BSE',
  BSc = 'BSc',
  Btech = 'BTECH',
  Msc = 'MSC',
  Mtech = 'MTECH',
  Others = 'OTHERS'
}

export type User = {
  campusAmb?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  college: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  isVerified: Scalars['Boolean'];
  name: Scalars['String'];
  number: Scalars['String'];
  registeredWorkshops: Array<Workshop>;
  role: UserRole;
  spID: Scalars['String'];
  state: Scalars['String'];
  stream: Stream;
  workshops: Array<Workshop>;
  yearOfStudy: YearOfStudy;
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type VerifyUserInput = {
  token: Scalars['String'];
};

export type Workshop = {
  contact: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  pic: Scalars['String'];
  registeredUser: Array<User>;
  registeredUserCount: Scalars['Float'];
  registrationCloseTime: Scalars['String'];
  title: Scalars['String'];
  updatedOn: Scalars['String'];
  user: User;
  workshopDate: Scalars['String'];
};

export enum YearOfStudy {
  First = 'FIRST',
  Fourth = 'FOURTH',
  Others = 'OTHERS',
  Second = 'SECOND',
  Third = 'THIRD'
}

export type LoginMutationVariables = Exact<{
  loginData: LoginInput;
}>;


export type LoginMutation = { login?: { name: string, id: string, spID: string, email: string, role: UserRole } | null | undefined };

export type CreateUserMutationVariables = Exact<{
  createUserData: CreateUserInput;
}>;


export type CreateUserMutation = { createUser: boolean };

export type VerifyUserMutationVariables = Exact<{
  verifyUserData: VerifyUserInput;
}>;


export type VerifyUserMutation = { verifyUser: { name: string, id: string, spID: string, email: string, role: UserRole } };

export type ResendVerificationMailMutationVariables = Exact<{
  resendVerificationMailData: RequestForgotPassInput;
}>;


export type ResendVerificationMailMutation = { resendVerificationMail: boolean };

export type ReqForgotPassVerificationMutationVariables = Exact<{
  reqForgotPassVerificationData: RequestForgotPassInput;
}>;


export type ReqForgotPassVerificationMutation = { reqForgotPassVerification: boolean };

export type ResetPasswordMutationVariables = Exact<{
  resetPasswordData: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { resetPassword: boolean };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logoutUser: boolean };

export type GetUsersCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersCountQuery = { getUsersCount: number };

export type GetUsersDataCsvQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersDataCsvQuery = { getUsersDataCSV: string };

export type GetWorkshopsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorkshopsQuery = { getWorkshops: { count: number, workshops: Array<{ id: string, title: string, pic: string, workshopDate: string, registrationCloseTime: string }> } };

export type GetWorkshopQueryVariables = Exact<{
  workshopId: Scalars['String'];
}>;


export type GetWorkshopQuery = { getWorkshop: { id: string, title: string, description: string, pic: string, workshopDate: string, registrationCloseTime: string, contact: string } };

export type IsRegisteredQueryVariables = Exact<{
  isRegisteredWorkshopId: Scalars['String'];
}>;


export type IsRegisteredQuery = { isRegistered: boolean };

export type RegisterMutationVariables = Exact<{
  registerWorkshopId: Scalars['String'];
}>;


export type RegisterMutation = { register: boolean };

export type CreateWorkshopMutationVariables = Exact<{
  createWorkshopData: CreateWorkshopInput;
}>;


export type CreateWorkshopMutation = { createWorkshop: { id: string } };

export type EditWorkshopMutationVariables = Exact<{
  editWorkshopWorkshopId: Scalars['String'];
  data: EditWorkshopInput;
}>;


export type EditWorkshopMutation = { editWorkshop: boolean };

export type DeleteWorkshopMutationVariables = Exact<{
  deleteWorkshopWorkshopId: Scalars['String'];
}>;


export type DeleteWorkshopMutation = { deleteWorkshop: boolean };

export type ExportCsvQueryVariables = Exact<{
  exportCsvWorkshopId: Scalars['String'];
}>;


export type ExportCsvQuery = { exportCSV: string };


export const LoginDocument = gql`
    mutation Login($loginData: LoginInput!) {
  login(data: $loginData) {
    name
    id
    spID
    email
    role
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginData: // value for 'loginData'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($createUserData: CreateUserInput!) {
  createUser(data: $createUserData)
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUserData: // value for 'createUserData'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const VerifyUserDocument = gql`
    mutation VerifyUser($verifyUserData: VerifyUserInput!) {
  verifyUser(data: $verifyUserData) {
    name
    id
    spID
    email
    role
  }
}
    `;
export type VerifyUserMutationFn = ApolloReactCommon.MutationFunction<VerifyUserMutation, VerifyUserMutationVariables>;

/**
 * __useVerifyUserMutation__
 *
 * To run a mutation, you first call `useVerifyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUserMutation, { data, loading, error }] = useVerifyUserMutation({
 *   variables: {
 *      verifyUserData: // value for 'verifyUserData'
 *   },
 * });
 */
export function useVerifyUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VerifyUserMutation, VerifyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<VerifyUserMutation, VerifyUserMutationVariables>(VerifyUserDocument, options);
      }
export type VerifyUserMutationHookResult = ReturnType<typeof useVerifyUserMutation>;
export type VerifyUserMutationResult = ApolloReactCommon.MutationResult<VerifyUserMutation>;
export type VerifyUserMutationOptions = ApolloReactCommon.BaseMutationOptions<VerifyUserMutation, VerifyUserMutationVariables>;
export const ResendVerificationMailDocument = gql`
    mutation ResendVerificationMail($resendVerificationMailData: RequestForgotPassInput!) {
  resendVerificationMail(data: $resendVerificationMailData)
}
    `;
export type ResendVerificationMailMutationFn = ApolloReactCommon.MutationFunction<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>;

/**
 * __useResendVerificationMailMutation__
 *
 * To run a mutation, you first call `useResendVerificationMailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendVerificationMailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendVerificationMailMutation, { data, loading, error }] = useResendVerificationMailMutation({
 *   variables: {
 *      resendVerificationMailData: // value for 'resendVerificationMailData'
 *   },
 * });
 */
export function useResendVerificationMailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>(ResendVerificationMailDocument, options);
      }
export type ResendVerificationMailMutationHookResult = ReturnType<typeof useResendVerificationMailMutation>;
export type ResendVerificationMailMutationResult = ApolloReactCommon.MutationResult<ResendVerificationMailMutation>;
export type ResendVerificationMailMutationOptions = ApolloReactCommon.BaseMutationOptions<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>;
export const ReqForgotPassVerificationDocument = gql`
    mutation ReqForgotPassVerification($reqForgotPassVerificationData: RequestForgotPassInput!) {
  reqForgotPassVerification(data: $reqForgotPassVerificationData)
}
    `;
export type ReqForgotPassVerificationMutationFn = ApolloReactCommon.MutationFunction<ReqForgotPassVerificationMutation, ReqForgotPassVerificationMutationVariables>;

/**
 * __useReqForgotPassVerificationMutation__
 *
 * To run a mutation, you first call `useReqForgotPassVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReqForgotPassVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reqForgotPassVerificationMutation, { data, loading, error }] = useReqForgotPassVerificationMutation({
 *   variables: {
 *      reqForgotPassVerificationData: // value for 'reqForgotPassVerificationData'
 *   },
 * });
 */
export function useReqForgotPassVerificationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReqForgotPassVerificationMutation, ReqForgotPassVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ReqForgotPassVerificationMutation, ReqForgotPassVerificationMutationVariables>(ReqForgotPassVerificationDocument, options);
      }
export type ReqForgotPassVerificationMutationHookResult = ReturnType<typeof useReqForgotPassVerificationMutation>;
export type ReqForgotPassVerificationMutationResult = ApolloReactCommon.MutationResult<ReqForgotPassVerificationMutation>;
export type ReqForgotPassVerificationMutationOptions = ApolloReactCommon.BaseMutationOptions<ReqForgotPassVerificationMutation, ReqForgotPassVerificationMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($resetPasswordData: ResetPasswordInput!) {
  resetPassword(data: $resetPasswordData)
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      resetPasswordData: // value for 'resetPasswordData'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logoutUser
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const GetUsersCountDocument = gql`
    query GetUsersCount {
  getUsersCount
}
    `;

/**
 * __useGetUsersCountQuery__
 *
 * To run a query within a React component, call `useGetUsersCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersCountQuery, GetUsersCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUsersCountQuery, GetUsersCountQueryVariables>(GetUsersCountDocument, options);
      }
export function useGetUsersCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersCountQuery, GetUsersCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUsersCountQuery, GetUsersCountQueryVariables>(GetUsersCountDocument, options);
        }
export type GetUsersCountQueryHookResult = ReturnType<typeof useGetUsersCountQuery>;
export type GetUsersCountLazyQueryHookResult = ReturnType<typeof useGetUsersCountLazyQuery>;
export type GetUsersCountQueryResult = ApolloReactCommon.QueryResult<GetUsersCountQuery, GetUsersCountQueryVariables>;
export function refetchGetUsersCountQuery(variables?: GetUsersCountQueryVariables) {
      return { query: GetUsersCountDocument, variables: variables }
    }
export const GetUsersDataCsvDocument = gql`
    query GetUsersDataCSV {
  getUsersDataCSV
}
    `;

/**
 * __useGetUsersDataCsvQuery__
 *
 * To run a query within a React component, call `useGetUsersDataCsvQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersDataCsvQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersDataCsvQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersDataCsvQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersDataCsvQuery, GetUsersDataCsvQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUsersDataCsvQuery, GetUsersDataCsvQueryVariables>(GetUsersDataCsvDocument, options);
      }
export function useGetUsersDataCsvLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersDataCsvQuery, GetUsersDataCsvQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUsersDataCsvQuery, GetUsersDataCsvQueryVariables>(GetUsersDataCsvDocument, options);
        }
export type GetUsersDataCsvQueryHookResult = ReturnType<typeof useGetUsersDataCsvQuery>;
export type GetUsersDataCsvLazyQueryHookResult = ReturnType<typeof useGetUsersDataCsvLazyQuery>;
export type GetUsersDataCsvQueryResult = ApolloReactCommon.QueryResult<GetUsersDataCsvQuery, GetUsersDataCsvQueryVariables>;
export function refetchGetUsersDataCsvQuery(variables?: GetUsersDataCsvQueryVariables) {
      return { query: GetUsersDataCsvDocument, variables: variables }
    }
export const GetWorkshopsDocument = gql`
    query getWorkshops {
  getWorkshops {
    workshops {
      id
      title
      pic
      workshopDate
      registrationCloseTime
    }
    count
  }
}
    `;

/**
 * __useGetWorkshopsQuery__
 *
 * To run a query within a React component, call `useGetWorkshopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkshopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkshopsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWorkshopsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetWorkshopsQuery, GetWorkshopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetWorkshopsQuery, GetWorkshopsQueryVariables>(GetWorkshopsDocument, options);
      }
export function useGetWorkshopsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetWorkshopsQuery, GetWorkshopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetWorkshopsQuery, GetWorkshopsQueryVariables>(GetWorkshopsDocument, options);
        }
export type GetWorkshopsQueryHookResult = ReturnType<typeof useGetWorkshopsQuery>;
export type GetWorkshopsLazyQueryHookResult = ReturnType<typeof useGetWorkshopsLazyQuery>;
export type GetWorkshopsQueryResult = ApolloReactCommon.QueryResult<GetWorkshopsQuery, GetWorkshopsQueryVariables>;
export function refetchGetWorkshopsQuery(variables?: GetWorkshopsQueryVariables) {
      return { query: GetWorkshopsDocument, variables: variables }
    }
export const GetWorkshopDocument = gql`
    query GetWorkshop($workshopId: String!) {
  getWorkshop(WorkshopID: $workshopId) {
    id
    title
    description
    pic
    workshopDate
    registrationCloseTime
    contact
  }
}
    `;

/**
 * __useGetWorkshopQuery__
 *
 * To run a query within a React component, call `useGetWorkshopQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkshopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkshopQuery({
 *   variables: {
 *      workshopId: // value for 'workshopId'
 *   },
 * });
 */
export function useGetWorkshopQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetWorkshopQuery, GetWorkshopQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetWorkshopQuery, GetWorkshopQueryVariables>(GetWorkshopDocument, options);
      }
export function useGetWorkshopLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetWorkshopQuery, GetWorkshopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetWorkshopQuery, GetWorkshopQueryVariables>(GetWorkshopDocument, options);
        }
export type GetWorkshopQueryHookResult = ReturnType<typeof useGetWorkshopQuery>;
export type GetWorkshopLazyQueryHookResult = ReturnType<typeof useGetWorkshopLazyQuery>;
export type GetWorkshopQueryResult = ApolloReactCommon.QueryResult<GetWorkshopQuery, GetWorkshopQueryVariables>;
export function refetchGetWorkshopQuery(variables?: GetWorkshopQueryVariables) {
      return { query: GetWorkshopDocument, variables: variables }
    }
export const IsRegisteredDocument = gql`
    query IsRegistered($isRegisteredWorkshopId: String!) {
  isRegistered(WorkshopID: $isRegisteredWorkshopId)
}
    `;

/**
 * __useIsRegisteredQuery__
 *
 * To run a query within a React component, call `useIsRegisteredQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsRegisteredQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsRegisteredQuery({
 *   variables: {
 *      isRegisteredWorkshopId: // value for 'isRegisteredWorkshopId'
 *   },
 * });
 */
export function useIsRegisteredQuery(baseOptions: ApolloReactHooks.QueryHookOptions<IsRegisteredQuery, IsRegisteredQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<IsRegisteredQuery, IsRegisteredQueryVariables>(IsRegisteredDocument, options);
      }
export function useIsRegisteredLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IsRegisteredQuery, IsRegisteredQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<IsRegisteredQuery, IsRegisteredQueryVariables>(IsRegisteredDocument, options);
        }
export type IsRegisteredQueryHookResult = ReturnType<typeof useIsRegisteredQuery>;
export type IsRegisteredLazyQueryHookResult = ReturnType<typeof useIsRegisteredLazyQuery>;
export type IsRegisteredQueryResult = ApolloReactCommon.QueryResult<IsRegisteredQuery, IsRegisteredQueryVariables>;
export function refetchIsRegisteredQuery(variables?: IsRegisteredQueryVariables) {
      return { query: IsRegisteredDocument, variables: variables }
    }
export const RegisterDocument = gql`
    mutation Register($registerWorkshopId: String!) {
  register(WorkshopID: $registerWorkshopId)
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerWorkshopId: // value for 'registerWorkshopId'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreateWorkshopDocument = gql`
    mutation CreateWorkshop($createWorkshopData: CreateWorkshopInput!) {
  createWorkshop(data: $createWorkshopData) {
    id
  }
}
    `;
export type CreateWorkshopMutationFn = ApolloReactCommon.MutationFunction<CreateWorkshopMutation, CreateWorkshopMutationVariables>;

/**
 * __useCreateWorkshopMutation__
 *
 * To run a mutation, you first call `useCreateWorkshopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkshopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkshopMutation, { data, loading, error }] = useCreateWorkshopMutation({
 *   variables: {
 *      createWorkshopData: // value for 'createWorkshopData'
 *   },
 * });
 */
export function useCreateWorkshopMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateWorkshopMutation, CreateWorkshopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateWorkshopMutation, CreateWorkshopMutationVariables>(CreateWorkshopDocument, options);
      }
export type CreateWorkshopMutationHookResult = ReturnType<typeof useCreateWorkshopMutation>;
export type CreateWorkshopMutationResult = ApolloReactCommon.MutationResult<CreateWorkshopMutation>;
export type CreateWorkshopMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateWorkshopMutation, CreateWorkshopMutationVariables>;
export const EditWorkshopDocument = gql`
    mutation EditWorkshop($editWorkshopWorkshopId: String!, $data: EditWorkshopInput!) {
  editWorkshop(WorkshopID: $editWorkshopWorkshopId, data: $data)
}
    `;
export type EditWorkshopMutationFn = ApolloReactCommon.MutationFunction<EditWorkshopMutation, EditWorkshopMutationVariables>;

/**
 * __useEditWorkshopMutation__
 *
 * To run a mutation, you first call `useEditWorkshopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditWorkshopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editWorkshopMutation, { data, loading, error }] = useEditWorkshopMutation({
 *   variables: {
 *      editWorkshopWorkshopId: // value for 'editWorkshopWorkshopId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditWorkshopMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditWorkshopMutation, EditWorkshopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<EditWorkshopMutation, EditWorkshopMutationVariables>(EditWorkshopDocument, options);
      }
export type EditWorkshopMutationHookResult = ReturnType<typeof useEditWorkshopMutation>;
export type EditWorkshopMutationResult = ApolloReactCommon.MutationResult<EditWorkshopMutation>;
export type EditWorkshopMutationOptions = ApolloReactCommon.BaseMutationOptions<EditWorkshopMutation, EditWorkshopMutationVariables>;
export const DeleteWorkshopDocument = gql`
    mutation DeleteWorkshop($deleteWorkshopWorkshopId: String!) {
  deleteWorkshop(WorkshopID: $deleteWorkshopWorkshopId)
}
    `;
export type DeleteWorkshopMutationFn = ApolloReactCommon.MutationFunction<DeleteWorkshopMutation, DeleteWorkshopMutationVariables>;

/**
 * __useDeleteWorkshopMutation__
 *
 * To run a mutation, you first call `useDeleteWorkshopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkshopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkshopMutation, { data, loading, error }] = useDeleteWorkshopMutation({
 *   variables: {
 *      deleteWorkshopWorkshopId: // value for 'deleteWorkshopWorkshopId'
 *   },
 * });
 */
export function useDeleteWorkshopMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteWorkshopMutation, DeleteWorkshopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteWorkshopMutation, DeleteWorkshopMutationVariables>(DeleteWorkshopDocument, options);
      }
export type DeleteWorkshopMutationHookResult = ReturnType<typeof useDeleteWorkshopMutation>;
export type DeleteWorkshopMutationResult = ApolloReactCommon.MutationResult<DeleteWorkshopMutation>;
export type DeleteWorkshopMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteWorkshopMutation, DeleteWorkshopMutationVariables>;
export const ExportCsvDocument = gql`
    query ExportCSV($exportCsvWorkshopId: String!) {
  exportCSV(WorkshopID: $exportCsvWorkshopId)
}
    `;

/**
 * __useExportCsvQuery__
 *
 * To run a query within a React component, call `useExportCsvQuery` and pass it any options that fit your needs.
 * When your component renders, `useExportCsvQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExportCsvQuery({
 *   variables: {
 *      exportCsvWorkshopId: // value for 'exportCsvWorkshopId'
 *   },
 * });
 */
export function useExportCsvQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ExportCsvQuery, ExportCsvQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ExportCsvQuery, ExportCsvQueryVariables>(ExportCsvDocument, options);
      }
export function useExportCsvLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ExportCsvQuery, ExportCsvQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ExportCsvQuery, ExportCsvQueryVariables>(ExportCsvDocument, options);
        }
export type ExportCsvQueryHookResult = ReturnType<typeof useExportCsvQuery>;
export type ExportCsvLazyQueryHookResult = ReturnType<typeof useExportCsvLazyQuery>;
export type ExportCsvQueryResult = ApolloReactCommon.QueryResult<ExportCsvQuery, ExportCsvQueryVariables>;
export function refetchExportCsvQuery(variables?: ExportCsvQueryVariables) {
      return { query: ExportCsvDocument, variables: variables }
    }