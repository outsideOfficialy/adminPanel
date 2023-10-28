import React from "react";

interface MenuProps {
  list: string[];
}

const Menu: React.FC<MenuProps> = ({ list }) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={handleMenuOpen}
        className="absolute top-0 left-0 menu material-symbols-outlined"
      >
        menu
      </button>
      <div
        className={`transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-[150%]"
        } absolute top-0 left-0 transition-transform duration-300 ease-in-out bg-black border border-primary-color px-[61px] py-[65px] z-[10]`}
      >
        <div className="flex items-start gap-[20px]">
          <ul className="text-[20px] font-medium flex flex-col gap-[40px] w-[140px]">
            {list.map((item, index) => (
              <li
                className="white transition duration-300 ease-in-out hover:text-main-primary-color"
                key={item + index}
              >
                <button className="text-left" onClick={handleMenuOpen}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleMenuOpen}
            className="close transition duration-300 ease-in-out hover:text-main-primary-color material-symbols-outlined"
          >
            close
          </button>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[7]`}
        onClick={handleMenuOpen}
      ></div>
    </div>
  );
};

export default Menu;
