interface FormLayoutProps {
  children?: React.ReactNode[] | React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return <form className="flex flex-col gap-[45px] max-w-[550px]">
    <div>
      {children ? children : null}
    </div>
    <div className="flex w-max gap-[30px]">
      <button type="submit">Send</button>
      <button>Send later</button>
    </div>
  </form>
}

export default FormLayout;