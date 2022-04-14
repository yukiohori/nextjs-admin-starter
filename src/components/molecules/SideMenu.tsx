const SideMenu = () => {
  return (
    <div className="flex w-full flex-col space-y-4 rounded bg-gray-600 p-4 text-white">
      <p className="cursor-pointer">Dashboard</p>
      <p className="cursor-pointer">News</p>
      <p className="cursor-pointer">Blog</p>
    </div>
  );
};

export default SideMenu;
