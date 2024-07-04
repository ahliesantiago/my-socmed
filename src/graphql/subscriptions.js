/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      title
      userPageID
      posterID
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      title
      userPageID
      posterID
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      title
      userPageID
      posterID
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
      post {
        id
        title
        userPageID
        posterID
        createdAt
        updatedAt
        __typename
      }
      content
      replies {
        nextToken
        __typename
      }
      userID
      createdAt
      updatedAt
      postCommentsId
      __typename
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      post {
        id
        title
        userPageID
        posterID
        createdAt
        updatedAt
        __typename
      }
      content
      replies {
        nextToken
        __typename
      }
      userID
      createdAt
      updatedAt
      postCommentsId
      __typename
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      post {
        id
        title
        userPageID
        posterID
        createdAt
        updatedAt
        __typename
      }
      content
      replies {
        nextToken
        __typename
      }
      userID
      createdAt
      updatedAt
      postCommentsId
      __typename
    }
  }
`;
export const onCreateReply = /* GraphQL */ `
  subscription OnCreateReply($filter: ModelSubscriptionReplyFilterInput) {
    onCreateReply(filter: $filter) {
      id
      comment {
        id
        content
        userID
        createdAt
        updatedAt
        postCommentsId
        __typename
      }
      content
      userID
      createdAt
      updatedAt
      commentRepliesId
      __typename
    }
  }
`;
export const onUpdateReply = /* GraphQL */ `
  subscription OnUpdateReply($filter: ModelSubscriptionReplyFilterInput) {
    onUpdateReply(filter: $filter) {
      id
      comment {
        id
        content
        userID
        createdAt
        updatedAt
        postCommentsId
        __typename
      }
      content
      userID
      createdAt
      updatedAt
      commentRepliesId
      __typename
    }
  }
`;
export const onDeleteReply = /* GraphQL */ `
  subscription OnDeleteReply($filter: ModelSubscriptionReplyFilterInput) {
    onDeleteReply(filter: $filter) {
      id
      comment {
        id
        content
        userID
        createdAt
        updatedAt
        postCommentsId
        __typename
      }
      content
      userID
      createdAt
      updatedAt
      commentRepliesId
      __typename
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      content
      senderID
      recipientID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      content
      senderID
      recipientID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      content
      senderID
      recipientID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateFriendship = /* GraphQL */ `
  subscription OnCreateFriendship(
    $filter: ModelSubscriptionFriendshipFilterInput
  ) {
    onCreateFriendship(filter: $filter) {
      id
      user1ID
      user2ID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateFriendship = /* GraphQL */ `
  subscription OnUpdateFriendship(
    $filter: ModelSubscriptionFriendshipFilterInput
  ) {
    onUpdateFriendship(filter: $filter) {
      id
      user1ID
      user2ID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteFriendship = /* GraphQL */ `
  subscription OnDeleteFriendship(
    $filter: ModelSubscriptionFriendshipFilterInput
  ) {
    onDeleteFriendship(filter: $filter) {
      id
      user1ID
      user2ID
      createdAt
      updatedAt
      __typename
    }
  }
`;
