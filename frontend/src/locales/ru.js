export default {
  translation: {
    logInPage: {
      form: {
        formTitle: 'Войти',
        username: 'Ваш ник',
        password: 'Пароль',
        formFooter: 'Нет аккаунта? ',
        signupLink: 'Регистрация',
        placeolderForUserField: 'Введите имя пользователя',
        placeolderForPasswordField: 'Введите пароль',
        placeolderForConfirmPassword: 'Повторите пароль',
      },
      button: {
        logInButton: 'Войти',
      },
      errors: {
        requiredField: 'Обязательное поле',
        invalidCredentials: 'Неверные имя пользователя или пароль',
        networkError: 'Ошибка сети',
        unknownError: 'Неизвестная ошибка',
      },
    },
    signUpPage: {
      form: {
        formTitle: 'Регистрация',
        username: 'Имя пользователя',
        password: 'Пароль',
        confirmPassword: 'Подтвердите пароль',
      },
      button: {
        registrationButton: 'Зарегистрироваться',
      },
      errors: {
        minLengthOfUserName: 'От 3 до 20 символов',
        maxLengthOfUserName: 'От 3 до 20 символов',
        minLengthOfPassword: 'Не менее 6 символов',
        matchingPassword: 'Пароли должны совпадать',
        requiredField: 'Обязательное поле',
        thisUserHasAlreadyExists: 'Такой пользователь уже существует',
        networkError: 'Ошибка сети',
        unknownError: 'Неизвестная ошибка',
      },
    },
    notFoundPage: {
      notFoundPageTitle: 'Страница не найдена',
      notFoundPageText: 'Но вы можете перейти',
      notFoundPageLink: 'на главную страницу',
    },
    homePage: {
      channels: 'Каналы',
      createNewChannel: 'Создать новый канал',
      manageChannel: 'Управление каналом',
      newMessagePlaceholderr: 'Введите сообщение...',
      sendMessageButton: 'Отправить сообщение',
      newMessageInput: 'Новое сообщение',
      messagesCount: {
        message_zero: '{{count}} сообщений',
        message_one: '{{count}} сообщение',
        message_few: '{{count}} сообщения',
        message_many: '{{count}} сообщений',
      },
      button: {
        logOutButton: 'Выйти',
      },

      messagesForUser: {
        connected: 'Связь с сервером установлена',
        disconnected: 'Связь с сервером потеряна',
        messageNotSend: 'Сообщение не отправлено!',
      },

      modalWindow: {
        resetButton: 'Отменить',
        sendButton: 'Отправить',

        addNewChannelHeader: 'Добавить канал',
        newChannelName: 'Имя канала',
        channelCreated: 'Канал создан',
        channelRenamed: 'Канал переименован',
        channelRemoved: 'Канал удалён',

        renameChannel: 'Переименовать канал',
        deleteChannel: 'Удалить канал',
        confirmationOfChannelDeletion: 'Уверены?',

        deleteButton: 'Удалить',
        renameDropMenu: 'Переименовать',
        errors: {
          uniqueName: 'Должно быть уникальным',
          minLengthRequired: 'От 3 до 20 символов',
          maxLengthRequired: 'От 3 до 20 символов',
          requiredField: 'Обязательное поле',
        },
      },
    },
  },
};
