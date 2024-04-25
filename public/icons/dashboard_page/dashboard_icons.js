import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCoins, faUsers, faBook, faHandshake, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'


export const DashboardIcon = () => {
  return (
    <FontAwesomeIcon icon={faHouse} />
  );
};

export const FinancesIcon = () => {
  return (
    <FontAwesomeIcon icon={faCoins} />
  );
};

export const ManagehrIcon = (props) => {
  return (
    <FontAwesomeIcon icon={faUsers} />
  );
};

export const LogoutIcon = () => {
  return (
    <FontAwesomeIcon className='text-xl' icon={faRightFromBracket} />
  );
};

export const InventoryIcon = () => {
  return (
    <FontAwesomeIcon icon={faBook} />
  );
};

export const TPIPIcon = () => {
  return (
    <FontAwesomeIcon icon={faHandshake} />
  );
};