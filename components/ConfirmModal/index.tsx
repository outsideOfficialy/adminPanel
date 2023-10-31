import React from 'react'
import { ButtonPrimary } from '../ButtonTemplate'

interface ConfirmModalProps {
  onSetModal: (value: boolean) => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ onSetModal }) => {
  return (
    <div className='max-w-[690px] relative flex flex-col justify-center items-center gap-[20px] bg-black border border-primary-color px-[65px] py-[50px]'>
      <div>
          <button
            onClick={() => onSetModal(false)}
            className="close absolute top-[20px] right-[20px] w-[24px] h-[24px] hover:text-main-primary-color material-symbols-outlined"
          >
            close
          </button>
        <h3 className='text-[36px] font-semibold'>Confirmation of sending data</h3>
      </div>
      <div className='w-full max-h-[576px] overflow-auto flex flex-col gap-[45px]'>
        <h4 className='text-[24px] font-medium'>Signle</h4>
        <div className='flex flex-col gap-[10px]'>
          <h4 className='text-[24px] font-medium'>Release name:</h4>
          <div className='pl-[10px]'>Release №1</div>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <h4 className='text-[24px] font-medium'>Release song:</h4>
          <div className='pl-[10px] flex flex-col gap-[10px]'>
            <div className='flex gap-[30px]'>
              <div>Song №1:</div>
              <div className='flex items-center gap-[15px]'>
                <span>S</span>
                <span>C</span>
                <span>M</span>
                <span>G</span>
              </div>
            </div>
            <div className='flex gap-[30px]'>
              <div>Song №2:</div>
              <div className='flex items-center gap-[15px]'>
                <span>S</span>
                <span>C</span>
                <span>M</span>
                <span>G</span>
              </div>
            </div>
            <div className='flex gap-[30px]'>
              <div>Song №3:</div>
              <div className='flex items-center gap-[15px]'>
                <span>S</span>
                <span>C</span>
                <span>M</span>
                <span>G</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <h4 className='text-[24px] font-medium'>Single preview:</h4>
          <div className='self-center flex justify-center items-center w-[450px] h-[300px] border border-primary-color'>
            <div className='text-[32px] font-bold'>IMG</div>
          </div>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <h4 className='text-[24px] font-medium'>Dispatch time:</h4>
          <div>at 21:30; 18.10.2023</div>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <ButtonPrimary onClick={() => console.log('sending')} type="button" className="bg-main-primary-color">
          Send
        </ButtonPrimary>
      </div>
    </div>
  )
}

export default ConfirmModal