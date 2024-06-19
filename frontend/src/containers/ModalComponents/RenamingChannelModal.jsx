import React, { useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Modal, Form as BootstrapForm, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import filter from 'leo-profanity';
import { useUpdateChannelMutation } from '../../api/channelsApi.js';
import { useChannelValidationSchema } from '../../utils/validationSchemas.js';

const RenameChannelComponent = ({ handleClosingModalWindow }) => {
  const { currentlyBeingEditedChannelId, currentlyBeingEditedChannel } =
    useSelector((state) => state.appManaging);
  const { t } = useTranslation();
  const channelSchema = useChannelValidationSchema();
  const [updateChannel] = useUpdateChannelMutation();
  const modalInputRef = useRef();

  useEffect(() => {
    modalInputRef.current.focus();
    modalInputRef.current.select();
  }, []);

  const handleRenamingChannel = async (channelName) => {
    const filteredChannelName = filter.clean(channelName);
    const newChannel = {
      id: currentlyBeingEditedChannelId,
      name: filteredChannelName,
    };

    try {
      await updateChannel(newChannel);
      toast.success(t('homePage.modalWindow.channelRenamed'), {
        position: 'top-right',
        autoClose: 2000,
      });
      handleClosingModalWindow();
    } catch (error) {
      console.error('Error renaming channel:', error);
      toast.error(t('homePage.modalWindow.channelRenameError'), {
        position: 'top-center',
        autoClose: 2000,
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
          initialValues={{ name: currentlyBeingEditedChannel }}
          validationSchema={channelSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleRenamingChannel(values.name);
            setSubmitting(false);
          }}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              <BootstrapForm.Group>
                <BootstrapForm.Label htmlFor="name">
                  {t('homePage.modalWindow.addedChannelName')}
                </BootstrapForm.Label>
                <Field name="name">
                  {({ field }) => (
                    <BootstrapForm.Control
                      {...field}
                      type="text"
                      id="name"
                      placeholder={t('homePage.modalWindow.addedChannelName')}
                      ref={modalInputRef}
                      isInvalid={!!errors.name}
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

export default RenameChannelComponent;
