import Link from 'next/link';

type HeaderProps = {
  logOut: () => void;
  email: string;
};

const Header = ({ logOut, email }: HeaderProps) => {
  return (
    <div className="navbar fixed z-50 bg-base-100">
      <div className="navbar-start">
        <button
          onClick={() => {
            document.getElementById('side_menu')?.click();
          }}
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
      </div>
      <div className="navbar-center">
        <Link href="/dashboard">
          <a className="btn btn-ghost text-xl normal-case">DASHBOARD</a>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="_x32_"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              fill="currentColor"
              className="h-6 w-6"
            >
              <g>
                <path d="M256,265.308c73.252,0,132.644-59.391,132.644-132.654C388.644,59.412,329.252,0,256,0   c-73.262,0-132.643,59.412-132.643,132.654C123.357,205.917,182.738,265.308,256,265.308z" />
                <path d="M425.874,393.104c-5.922-35.474-36-84.509-57.552-107.465c-5.829-6.212-15.948-3.628-19.504-1.427   c-27.04,16.672-58.782,26.399-92.819,26.399c-34.036,0-65.778-9.727-92.818-26.399c-3.555-2.201-13.675-4.785-19.505,1.427   c-21.55,22.956-51.628,71.991-57.551,107.465C71.573,480.444,164.877,512,256,512C347.123,512,440.427,480.444,425.874,393.104z" />
              </g>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100/95 p-2 shadow"
          >
            <li>
              <a>{email}</a>
            </li>
            <li onClick={logOut}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
