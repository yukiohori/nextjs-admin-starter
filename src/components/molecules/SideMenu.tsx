import Link from 'next/link';

const SideMenu = () => {
  return (
    <div className="drawer fixed z-40">
      <input id="side_menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="side_menu" className="drawer-overlay"></label>
        <ul className="menu w-80 overflow-y-auto bg-base-100 p-4 pt-24 text-base-content">
          <li>
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
