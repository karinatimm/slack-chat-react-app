import React, { useEffect, useRef } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { Modal, Form as BootstrapForm, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import filter from 'leo-profanity';
import { useUpdateChannelMutation } from '../../api/channelsApi.js';
import { getChannelValidationSchema } from '../../utils/validationSchemas.js';
import useToast from '../../hooks/useToast';

const RenameChannelModalComponent = ({ handleClosingModalWindow }) => {
  const { currEditedChannelId, currEditedChannel, channels } = useSelector(
    (state) => state.appManaging,
  );
  const { t } = useTranslation();
  const channelSchema = getChannelValidationSchema(t, channels);
  const [updateChannel] = useUpdateChannelMutation();
  const modalInputRef = useRef();
  const showToastMessage = useToast();

  useEffect(() => {
    modalInputRef.current.focus();
    modalInputRef.current.select();
  }, []);

  const handleRenamingChannel = async (channelName) => {
    const cleanedChannelName = filter.clean(channelName);

    const newChannel = {
      id: currEditedChannelId,
      name: cleanedChannelName,
    };

    try {
      await updateChannel(newChannel).unwrap();

      showToastMessage(t('homePage.modalWindow.channelRenamed'), {
        type: 'success',
      });

      handleClosingModalWindow();
    } catch (error) {
      showToastMessage(t('homePage.modalWindow.channelRenameError'), {
        type: 'error',
      });
    }
  };

  return (
    <Modal show centered onHide={handleClosingModalWindow}>
      <Modal.Header closeButton>
        <Modal.Title>{t('homePage.modalWindow.renameChannel')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Formik
          initialValues={{ name: currEditedChannel }}
          validationSchema={channelSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleRenamingChannel(values.name);
            setSubmitting(false);
          }}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({
            isSubmitting, handleChange, handleBlur, values,
          }) => (
            <Form>
              <BootstrapForm.Group>
                <BootstrapForm.Label htmlFor="name">
                  {t('homePage.modalWindow.addedChannelName')}
                </BootstrapForm.Label>
                <Field name="name">
                  {({ field }) => (
                    <BootstrapForm.Control
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      name={field.name}
                      type="text"
                      id="name"
                      placeholder={t('homePage.modalWindow.addedChannelName')}
                      ref={modalInputRef}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </BootstrapForm.Group>

              <BootstrapForm.Group className="d-flex justify-content-end mt-3">
                <Button
                  variant="secondary"
                  type="button"
                  className="me-2"
                  onClick={handleClosingModalWindow}
                >
                  {t('homePage.modalWindow.button.resetButton')}
                </Button>
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  {t('homePage.modalWindow.button.sendButton')}
                </Button>
              </BootstrapForm.Group>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default RenameChannelModalComponent;
