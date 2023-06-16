import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCoins, faUsers, faBook, faHandshake } from '@fortawesome/free-solid-svg-icons'


export const DashboardIcon = () => {
  // const size = props;
  return (
    <FontAwesomeIcon icon={faHouse} />
  );
};

export const LogoutIcon = (props) => {
  const size = props;
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 45 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 28.125C21.7312 28.125 21.0938 27.615 21.0938 27V22.5C21.0938 21.885 21.7312 21.375 22.5 21.375C23.2687 21.375 23.9062 21.885 23.9062 22.5V27C23.9062 27.615 23.2687 28.125 22.5 28.125Z"
        fill="black"
      />
      <path
        d="M33 33.84H12C8.5875 33.84 5.475 31.74 4.9125 29.055L2.41875 17.1C2.00625 15.24 3.15 12.855 5.00625 11.67L18 3.34498C20.5125 1.72498 24.4688 1.73998 27 3.35998L39.9938 11.67C41.8312 12.855 42.9562 15.24 42.5812 17.1L40.0875 29.04C39.525 31.695 36.3375 33.84 33 33.84ZM22.4813 4.39498C21.4875 4.39498 20.4938 4.63498 19.7625 5.09998L6.76875 13.44C5.71875 14.115 4.96875 15.675 5.19375 16.74L7.6875 28.68C8.025 30.255 9.99375 31.59 12 31.59H33C35.0063 31.59 36.975 30.255 37.3125 28.665L39.8063 16.725C40.0125 15.675 39.2625 14.085 38.2313 13.425L25.2375 5.11498C24.4875 4.63498 23.475 4.39498 22.4813 4.39498Z"
        fill="black"
      />
    </svg>
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

export const BackIcon = (props) => {
  const size = props;
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 56 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.7273 0L0 23.1372L40.7273 46.2744L56 37.598L30.5455 23.1372L56 8.67645L40.7273 0Z"
        fill="grey"
      />
    </svg>
  );
};

export const ProfileIcon = (props) => {
  const size = props;
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 96 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.618 63.6427C43.308 61.8093 52.734 61.967 66.442 63.7068C67.4347 63.8387 68.3419 64.2955 68.9958 64.9927C69.6498 65.6899 70.0065 66.5805 70 67.5C70 68.38 69.67 69.2343 69.074 69.9017C68.0352 71.0652 66.971 72.2094 65.882 73.3337H71.164C71.496 72.9707 71.83 72.6003 72.168 72.2245C73.3543 70.8909 74.0015 69.2226 74 67.5018C74 63.7893 71.044 60.5902 66.99 60.0768C52.958 58.2967 43.15 58.1262 29.04 60.0163C24.944 60.5645 22 63.8132 22 67.5513C22 69.2105 22.59 70.8513 23.708 72.1805C24.038 72.5728 24.364 72.9578 24.688 73.3355H29.842C28.8288 72.2236 27.8406 71.0928 26.878 69.9438C26.3059 69.256 25.9973 68.4144 26 67.5495C26 65.575 27.548 63.9195 29.618 63.6427ZM48 45.8337C49.5759 45.8337 51.1363 45.5491 52.5922 44.9963C54.0481 44.4435 55.371 43.6333 56.4853 42.6118C57.5996 41.5904 58.4835 40.3778 59.0866 39.0432C59.6896 37.7086 60 36.2782 60 34.8337C60 33.3891 59.6896 31.9587 59.0866 30.6241C58.4835 29.2896 57.5996 28.0769 56.4853 27.0555C55.371 26.034 54.0481 25.2238 52.5922 24.671C51.1363 24.1182 49.5759 23.8337 48 23.8337C44.8174 23.8337 41.7652 24.9926 39.5147 27.0555C37.2643 29.1184 36 31.9163 36 34.8337C36 37.751 37.2643 40.5489 39.5147 42.6118C41.7652 44.6747 44.8174 45.8337 48 45.8337ZM48 49.5003C52.2435 49.5003 56.3131 47.9551 59.3137 45.2046C62.3143 42.454 64 38.7235 64 34.8337C64 30.9438 62.3143 27.2133 59.3137 24.4628C56.3131 21.7122 52.2435 20.167 48 20.167C43.7565 20.167 39.6869 21.7122 36.6863 24.4628C33.6857 27.2133 32 30.9438 32 34.8337C32 38.7235 33.6857 42.454 36.6863 45.2046C39.6869 47.9551 43.7565 49.5003 48 49.5003Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 77.0002C67.882 77.0002 84 62.2253 84 44.0002C84 25.775 67.882 11.0002 48 11.0002C28.118 11.0002 12 25.775 12 44.0002C12 62.2253 28.118 77.0002 48 77.0002ZM48 80.6668C70.092 80.6668 88 64.2512 88 44.0002C88 23.7492 70.092 7.3335 48 7.3335C25.908 7.3335 8 23.7492 8 44.0002C8 64.2512 25.908 80.6668 48 80.6668Z"
        fill="black"
      />
    </svg>
  );
};

export const SearchIcon = (props) => {
  const size = props;
  return (
    <svg
      width="29"
      height="27"
      viewBox="0 0 29 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7381 17.3571C15.5515 17.3571 18.6429 14.479 18.6429 10.9286C18.6429 7.37817 15.5515 4.5 11.7381 4.5C7.92474 4.5 4.83337 7.37817 4.83337 10.9286C4.83337 14.479 7.92474 17.3571 11.7381 17.3571Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.2647 22.4999L16.5714 15.4285"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};


export const BarChartIcon = (props) => {
  const size = props;

  return (
    <svg
      width="38"
      height="37"
      viewBox="0 0 38 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.854187"
        y="0.359421"
        width="36.4375"
        height="36.5391"
        rx="10"
        fill="#F4F7FE"
      />
      <g clipPath="url(#clip0_0_237)">
        <path
          d="M12.0989 13.6404H12.2989C13.0689 13.6404 13.6989 14.2704 13.6989 15.0404V22.0404C13.6989 22.8104 13.0689 23.4404 12.2989 23.4404H12.0989C11.3289 23.4404 10.6989 22.8104 10.6989 22.0404V15.0404C10.6989 14.2704 11.3289 13.6404 12.0989 13.6404ZM17.6989 9.44035C18.4689 9.44035 19.0989 10.0704 19.0989 10.8404V22.0404C19.0989 22.8104 18.4689 23.4404 17.6989 23.4404C16.9289 23.4404 16.2989 22.8104 16.2989 22.0404V10.8404C16.2989 10.0704 16.9289 9.44035 17.6989 9.44035ZM23.2989 17.4404C24.0689 17.4404 24.6989 18.0704 24.6989 18.8404V22.0404C24.6989 22.8104 24.0689 23.4404 23.2989 23.4404C22.5289 23.4404 21.8989 22.8104 21.8989 22.0404V18.8404C21.8989 18.0704 22.5289 17.4404 23.2989 17.4404Z"
          fill="#18FF59"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_237">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(5.69891 4.44035)"
          />
        </clipPath>
      </defs>
    </svg>

  );
};