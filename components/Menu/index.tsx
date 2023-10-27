import React from 'react'

interface MenuProps {
  list: string[];
}

const Menu: React.FC<MenuProps> = ({list}) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className='relative'>
      <button onClick={handleMenuOpen} className="absolute top-0 left-0 menu material-symbols-outlined">
        menu
      </button>

      {isMenuOpen && <div className='z-10 relative bg-black border border-primary-color px-[61px] py-[65px]'>
      <div className='flex items-start gap-[20px]'>
        <ul className='max-w-[140px] text-[20px] font-medium flex flex-col gap-[40px]'>
          {list.map((item, index) => (
            <li key={item + index}>
              <button className='text-left'>
                {item}
              </button>
            </li>
            ))}
        </ul>
        <button onClick={handleMenuOpen} className="close material-symbols-outlined">
          close
        </button>
      </div>
    </div>}
  </div>
  )
}

export default Menu