export default {
  translation: {
    logInPage: {
      img: {
        loginAlt: 'Login image',
      },
      form: {
        formTitle: 'Log in',
        username: 'Your username',
        password: 'Password',
        formFooter: "Don't have an account? ",
        signupLink: 'Sign up',
        placeolderForUserField: 'Enter your username',
        placeolderForPasswordField: 'Enter your password',
        placeolderForConfirmPassword: 'Repeat your password',
      },
      button: {
        logInButton: 'Log in',
      },
      errors: {
        requiredField: 'Required field',
        invalidCredentials: 'Invalid username or password',
        networkError: 'Network error',
        unknownError: 'Unknown error',
      },
    },
    signUpPage: {
      img: {
        signUpAlt: 'Sign-up image',
      },
      form: {
        formTitle: 'Sign up',
        username: 'Username',
        password: 'Password',
        confirmPassword: 'Confirm password',
      },
      button: {
        registrationButton: 'Register',
      },
      errors: {
        minLengthOfUserName: 'Between 3 and 20 characters',
        maxLengthOfUserName: 'Between 3 and 20 characters',
        minLengthOfPassword: 'At least 6 characters',
        matchingPassword: 'Passwords must match',
        requiredField: 'Required field',
        thisUserHasAlreadyExists: 'This user already exists',
        networkError: 'Network error',
        unknownError: 'Unknown error',
      },
    },
    notFoundPage: {
      notFoundPageTitle: 'Page not found',
      notFoundPageText: 'But you can go',
      notFoundPageLink: 'to the home page',
      img: {
        notFoundAlt: 'Error image',
      },
    },
    homePage: {
      channels: 'Channels',
      createNewChannel: 'Create new channel',
      manageChannel: 'Manage channel',
      inputMessagePlaceholder: 'Enter a message...',
      inputMessage: 'New message',
      countMessages: {
        messages_null: '{{count}} messages',
        messages_one: '{{count}} message',
        messages_few: '{{count}} messages',
        messages_many: '{{count}} messages',
      },
      button: {
        logOutButton: 'Log out',
        sendMessageButton: 'Send message',
      },

      messagesForUser: {
        connected: 'Connected to server',
        disconnected: 'Disconnected from server',
        messageNotSend: 'Message not sent!',
      },

      modalWindow: {
        addNewChannel: 'Add channel',
        addedChannelName: 'Channel name',
        channelCreated: 'Channel created',
        channelRenamed: 'Channel renamed',
        channelRemoved: 'Channel removed',
        channelCreationError: 'Channel not created',
        channelRemoveError: 'Channel not removed',
        channelRenameError: 'Channel not renamed',

        renameChannel: 'Rename channel',
        deleteChannel: 'Delete channel',
        confirmationOfChannelDeletion: 'Are you sure?',

        deleteButton: 'Delete',
        renameDropMenu: 'Rename',
        deleteDropMenu: 'Delete',
        errors: {
          uniqueName: 'Must be unique',
          minLengthRequired: 'Between 3 and 20 characters',
          maxLengthRequired: 'Between 3 and 20 characters',
          requiredField: 'Required field',
        },
        button: {
          resetButton: 'Cancel',
          sendButton: 'Submit',
        },
      },
      toastMessages: {
        errors: {
          sendMessageError: 'Message not sent',
        },
      },
    },
  },
};
