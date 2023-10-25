
interface PageLayoutProps {
  children?: React.ReactNode[] | React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <div className="w-screen min-h-screen bg-black flex justify-end">
    {/* here will be menu button calling */}
    <button className="menu material-symbols-outlined absolute left-[40px] top-[40px]">menu</button>

    {/* this option may change, i will edit method of centering during the adaptation */}
    <div className="w-[calc(100%-250px)] px-[15px] min-w-[360px] mt-[20px]">
      <div className="flex items-center mb-50px">
        <p className="font-delagothic text-[54px] mr-[25px]">OUTSIDE</p>
        <div className="material-symbols-outlined  shield-person">shield_person</div>
      </div>
      <div>
        {children ? children : null}
      </div>
    </div>
  </div>
}

export default PageLayout;