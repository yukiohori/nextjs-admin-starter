import Link from 'next/link';

const SideMenu = () => {
  return (
    <div className="drawer pointer-events-none fixed z-40">
      <input id="side_menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="side_menu"
          className="drawer-overlay pointer-events-auto"
        ></label>
        <ul className="menu pointer-events-auto w-80 overflow-y-auto bg-base-100/95 p-4 pt-24 text-base-content">
          <li
            onClick={() => {
              document.getElementById('side_menu')?.click();
            }}
          >
            <Link href="/dashboard/">
              <a>Home</a>
            </Link>
          </li>
          <li
            onClick={() => {
              document.getElementById('side_menu')?.click();
            }}
          >
            <Link href="/dashboard/notification">
              <a>Notification</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
