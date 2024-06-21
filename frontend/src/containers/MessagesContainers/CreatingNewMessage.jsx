import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Form as BootstrapForm, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import filter from 'leo-profanity';
import sendMsgBtnImg from '../../assets/imgHomePage/send-button.png';
import { useCreateMessageMutation } from '../../api/messagesApi';
import useToast from '../../hooks/useToast';

const CreatingNewMessage = () => {
  const { currentChannelId } = useSelector((state) => state.appManaging);
  const { username } = useSelector((state) => state.authenticateUser);
  const { t } = useTranslation();
  const inputNewMessageRef = useRef(null);

  useEffect(() => {
    if (inputNewMessageRef.current) {
      inputNewMessageRef.current.focus();
    }
  }, [currentChannelId]);

  const [createMessage] = useCreateMessageMutation();
  const showToastMessage = useToast();

  const handleCreatingNewMessage = async (body, resetForm) => {
    const cleanedTextOfNewMessage = filter.clean(body);

    try {
      await createMessage({
        channelId: currentChannelId,
        username,
        body: cleanedTextOfNewMessage,
      }).unwrap();

      resetForm();
    } catch (error) {
      showToastMessage(t('homePage.toastMessages.errors.sendMessageError'), {
        type: 'error',
      });
    }
  };

  return (
    <Formik
      initialValues={{ body: '' }}
      onSubmit={(values, { resetForm }) => handleCreatingNewMessage(values.body, resetForm)}
    >
      {({ isSubmitting }) => (
        <Form noValidate className="py-1 border rounded-2">
          <BootstrapForm.Group className="input-group has-validation">
            <Field name="body">
              {({ field }) => (
                <BootstrapForm.Control
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  name={field.name}
                  disabled={isSubmitting}
                  aria-label={t('homePage.inputMessage')}
                  type="text"
                  id="body"
                  placeholder={t('homePage.inputMessagePlaceholder')}
                  className="border-0 p-0 ps-2 form-control"
                  ref={inputNewMessageRef}
                />
              )}
            </Field>
            <Button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-group-vertical"
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              <img
                src={sendMsgBtnImg}
                alt={t('homePage.button.sendMessageButton')}
                width="25"
                height="25"
              />
            </Button>
          </BootstrapForm.Group>
        </Form>
      )}
    </Formik>
  );
};

export default CreatingNewMessage;
