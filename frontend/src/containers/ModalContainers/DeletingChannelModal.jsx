import { Formik, Form } from 'formik';
import { Modal, Button, FormGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { switchChannel } from '../../store/entities/appSlice.js';
import { useDeleteChannelMutation } from '../../api/channelsApi.js';
import useToast from '../../hooks/useToast';

const DeleteChannelModalComponent = ({ handleClosingModalWindow }) => {
  const { currentChannelId, currEditedChannelId } = useSelector(
    (state) => state.appManaging,
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [deleteChannel] = useDeleteChannelMutation();
  const showToastMessage = useToast();

  const handleDeletingChannel = async () => {
    try {
      await deleteChannel({
        id: currEditedChannelId,
      }).unwrap();

      if (currentChannelId === currEditedChannelId) {
        dispatch(switchChannel({ name: 'general', id: '1' }));
      }
      showToastMessage(t('homePage.modalWindow.channelRemoved'), {
        type: 'success',
      });

      handleClosingModalWindow();
    } catch (err) {
      showToastMessage(t('homePage.modalWindow.channelRemoveError'), {
        type: 'error',
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
                <Button variant="danger" type="submit" disabled={isSubmitting}>
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

export default DeleteChannelModalComponent;
