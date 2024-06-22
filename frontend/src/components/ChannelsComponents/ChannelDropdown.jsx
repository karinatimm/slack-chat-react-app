import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ChannelDropdown = ({ onDelete, onRename }) => {
  const { t } = useTranslation();

  return (
    <Dropdown.Toggle split variant="secondary" className="flex-grow-0">
      <span className="visually-hidden">{t('homePage.manageChannel')}</span>
      <Dropdown.Menu>
        <Dropdown.Item href="#" onClick={onDelete}>
          {t('homePage.modalWindow.deleteDropMenu')}
        </Dropdown.Item>
        <Dropdown.Item href="#" onClick={onRename}>
          {t('homePage.modalWindow.renameDropMenu')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Toggle>
  );
};

export default ChannelDropdown;
