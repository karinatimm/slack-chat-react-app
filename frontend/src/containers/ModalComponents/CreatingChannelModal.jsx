import React, { useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Modal, Form as BootstrapForm, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import filter from 'leo-profanity';
import { useCreateChannelMutation } from '../../api/channelsApi.js';
import { switchChannel } from '../../store/entities/appSlice.js';
import { useChannelValidationSchema } from '../../utils/validationSchemas.js';

const AddChannelComponent = ({ handleClosingModalWindow }) => {
  const { t } = useTranslation();
  const channelSchema = useChannelValidationSchema();
  const [createChannel] = useCreateChannelMutation();
  const dispatch = useDispatch();
  const modalInputRef = useRef(null);

  useEffect(() => {
    modalInputRef.current.focus();
  }, []);

  const handleCreatingChannel = async (channelName) => {
    const cleanedAddingChannelName = filter.clean(channelName);
    const newChannelData = { name: cleanedAddingChannelName };

    try {
      const response = await createChannel(newChannelData);
      const { name: channelNameResponse, id: channelId } = response.data;

      toast.success(t('homePage.modalWindow.channelCreated'), {
        position: 'top-center',
        autoClose: 2000,
      });

      handleClosingModalWindow();
      dispatch(switchChannel({ name: channelNameResponse, id: channelId }));
    } catch (error) {
      console.error('Error creating channel:', error);
      toast.error(t('homePage.modalWindow.channelCreationError'), {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };

  return (
    <Modal show centered onHide={handleClosingModalWindow}>
      <Modal.Header closeButton>
        <Modal.Title>{t('homePage.modalWindow.addNewChannel')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Formik
          initialValues={{ name: '' }}
          validationSchema={channelSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleCreatingChannel(values.name, { setSubmitting });
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
                      ref={modalInputRef} // Assign modalInputRef here
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </BootstrapForm.Group>

              {errors.general && (
                <div className="text-danger mb-3">{errors.general}</div>
              )}

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

export default AddChannelComponent;
