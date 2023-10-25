interface FormLayoutProps {
  children?: React.ReactNode[] | React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return <form>
    <div>
      {children ? children : null}
    </div>
    <div className="flex justify-between w-max">
      <button type="submit" className="mr-[30px]">Send</button>
      <button>Send later</button>
    </div>
  </form>
}

export default FormLayout;