const SideMenu = () => {
  return (
    <div className="w-full flex flex-col space-y-4 text-white bg-gray-600 rounded p-4">
      <p className="cursor-pointer">Dashboard</p>
      <p className="cursor-pointer">News</p>
      <p className="cursor-pointer">Blog</p>
    </div>
  );
};

export default SideMenu;
