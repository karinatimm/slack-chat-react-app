import React from 'react';
import { Formik, Form } from 'formik';
import { Modal, Button, FormGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { switchChannel } from '../../store/entities/appSlice.js';
import {
  useDeleteChannelMutation,
  useFetchChannelsQuery,
} from '../../api/channelsApi.js';

const DeleteChannelComponent = ({ handleClosingModalWindow }) => {
  const { currentChannelId, currentlyBeingEditedChannelId } = useSelector(
    (state) => state.appManaging
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [deleteChannel] = useDeleteChannelMutation();
  const { status } = useFetchChannelsQuery();

  const handleDeletingChannel = async () => {
    try {
      await deleteChannel({ id: currentlyBeingEditedChannelId });

      if (currentChannelId === currentlyBeingEditedChannelId) {
        dispatch(switchChannel({ name: 'general', id: '1' }));
      }

      toast.success(t('homePage.modalWindow.channelRemoved'), {
        position: 'top-center',
        autoClose: 2000,
      });

      handleClosingModalWindow();
    } catch (err) {
      toast.error(t('homePage.modalWindow.channelRemoveError'), {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };

  return (
    <Modal show centered onHide={handleClosingModalWindow}>
      <Modal.Header closeButton>
        <Modal.Title>{t('homePage.modalWindow.deleteChannel')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Formik
          initialValues={{}}
          onSubmit={async () => {
            await handleDeletingChannel();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <p className="lead">
                {t('homePage.modalWindow.confirmationOfChannelDeletion')}
              </p>
              <FormGroup className="d-flex justify-content-end">
                <Button
                  variant="secondary"
                  type="button"
                  className="me-2"
                  onClick={handleClosingModalWindow}
                >
                  {t('homePage.modalWindow.button.resetButton')}
                </Button>
                <Button
                  variant="danger"
                  type="submit"
                  disabled={isSubmitting || status === 'pending'}
                >
                  {t('homePage.modalWindow.button.sendButton')}
                </Button>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteChannelComponent;
