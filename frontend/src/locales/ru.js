export default {
  translation: {
    logInPage: {
      img: {
        loginAlt: 'Изображение при входе',
      },
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
      img: {
        signUpAlt: 'Изображение при регистрации',
      },
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
      img: {
        notFoundAlt: 'Изображение при ошибке',
      },
    },
    homePage: {
      channels: 'Каналы',
      createNewChannel: 'Создать новый канал',
      manageChannel: 'Управление каналом',
      inputMessagePlaceholder: 'Введите сообщение...',
      inputMessage: 'Новое сообщение',
      countMessages: {
        messages_null: '{{count}} сообщений',
        messages_one: '{{count}} сообщение',
        messages_few: '{{count}} сообщения',
        messages_many: '{{count}} сообщений',
      },
      button: {
        logOutButton: 'Выйти',
        sendMessageButton: 'Отправить сообщение',
      },

      messagesForUser: {
        connected: 'Связь с сервером установлена',
        disconnected: 'Связь с сервером потеряна',
        messageNotSend: 'Сообщение не отправлено!',
      },

      modalWindow: {
        addNewChannel: 'Добавить канал',
        addedChannelName: 'Имя канала',
        channelCreated: 'Канал создан',
        channelRenamed: 'Канал переименован',
        channelRemoved: 'Канал удалён',
        channelCreationError: 'Канал не создан',
        channelRemoveError: 'Канал не удалён',
        channelRenameError: 'Канал не переименован',

        renameChannel: 'Переименовать канал',
        deleteChannel: 'Удалить канал',
        confirmationOfChannelDeletion: 'Уверены?',

        deleteButton: 'Удалить',
        renameDropMenu: 'Переименовать',
        deleteDropMenu: 'Удалить',
        errors: {
          uniqueName: 'Должно быть уникальным',
          minLengthRequired: 'От 3 до 20 символов',
          maxLengthRequired: 'От 3 до 20 символов',
          requiredField: 'Обязательное поле',
        },
        button: {
          resetButton: 'Отменить',
          sendButton: 'Отправить',
        },
      },
      toastMessages: {
        errors: {
          sendMessageError: 'Сообщение не отправлено',
        },
      },
    },
  },
};
