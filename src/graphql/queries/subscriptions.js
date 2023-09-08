/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAnalytics = /* GraphQL */ `
  subscription OnCreateAnalytics(
    $filter: ModelSubscriptionAnalyticsFilterInput
  ) {
    onCreateAnalytics(filter: $filter) {
      id
      city
      country
      ip
      long_url
      short_url
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAnalytics = /* GraphQL */ `
  subscription OnUpdateAnalytics(
    $filter: ModelSubscriptionAnalyticsFilterInput
  ) {
    onUpdateAnalytics(filter: $filter) {
      id
      city
      country
      ip
      long_url
      short_url
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAnalytics = /* GraphQL */ `
  subscription OnDeleteAnalytics(
    $filter: ModelSubscriptionAnalyticsFilterInput
  ) {
    onDeleteAnalytics(filter: $filter) {
      id
      city
      country
      ip
      long_url
      short_url
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
