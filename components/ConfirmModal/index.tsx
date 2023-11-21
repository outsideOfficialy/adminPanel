import React from 'react'
import ButtonTemplate from '../ButtonTemplate'
import Image from 'next/image'
import itunes from '../../src/icons/itunes.svg'
import spotify from '../../src/icons/spotify.svg'
import soundcloud from '../../src/icons/soundcloud.svg'
import youtubeMusic from '../../src/icons/youtubeMusic.svg'
import { Transition } from '@headlessui/react'
import Loader from '../Loader'

interface ConfirmModalProps {
  isOpened: boolean
  onSetModal: (value: boolean) => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpened, onSetModal }) => {
  const [isSending, setIsSending] = React.useState(false)

  return (
      <Transition
        show={isOpened}
        enter="transition-transform duration-300 ease-in-out"
        enterFrom="-translate-y-[300%]"
        enterTo="translate-y-0"
        leave="transition-transform duration-300 ease-in-out"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-[300%]"
      >
      <div className="relative z-[10]">
        {<div className={'w-[360px] md:w-[690px] flex flex-col justify-center items-center gap-[30px] md:gap-[50px] p-[15px] md:px-[65px] md:pt-[80px] md:pb-[50px] bg-black border border-primary-color'}>
          <div className='w-full flex justify-center'>
            <button
              type='button'
              onClick={() => onSetModal(false)}
              className="close absolute top-[20px] right-[20px] w-[24px] h-[24px] hover:text-main-primary-color material-symbols-outlined"
            >
              close
            </button>
            <h3 className='max-w-[215px] md:max-w-none text-[26px] md:text-[36px] text-center font-semibold'>Confirmation of sending data</h3>
          </div>
          <div className='w-full max-h-[576px] overflow-auto flex flex-col gap-[45px] pr-[15px]'>
            <h4 className='text-[20px] md:text-[24px] font-normal md:font-medium'>Signle</h4>
            <div className='flex flex-col gap-[10px]'>
              <h4 className='text-[20px] md:text-[24px] font-normal md:font-medium'>Release name:</h4>
              <div className='pl-[10px]'>Release №1</div>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <h4 className='text-[20px] md:text-[24px] font-normal md:font-medium'>Release link's:</h4>
              <div className='pl-[10px] flex gap-[15px]'>
                <span><Image className='platform-img' src={spotify} alt="spotify" /></span>
                <span><Image className='platform-img' src={soundcloud} alt="soundcloud" /></span>
                <span><Image className='platform-img' src={itunes} alt="itunes" /></span>
                <span><Image className='platform-img' src={youtubeMusic} alt="youtubeMusic" /></span>
              </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <h4 className='text-[20px] md:text-[24px] font-normal md:font-medium'>Release songs:</h4>
              <div className='pl-[10px]'>
                <div className='flex flex-col gap-[10px]'>
                  <span>Song name №1</span>
                  <span>Song name №2</span>
                  <span>Song name №3</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <h4 className='text-[20px] md:text-[24px] font-normal md:font-medium'>Single preview:</h4>
              <div className='self-center flex justify-center items-center w-full md:w-[450px] h-[200px] md:h-[300px] border border-primary-color'>
                <div className='text-[32px] font-semibold md:font-bold'>IMG</div>
              </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <h4 className='text-[20px] md:text-[24px] font-normal md:font-medium'>Dispatch time:</h4>
              <div>at 21:30; 18.10.2023</div>
            </div>
          </div>
          <div className='w-full text-center flex justify-center items-center gap-[25px]'>
            <ButtonTemplate primary onClick={() => setIsSending(!isSending)} type="button" className="bg-main-primary-color">
              Send
            </ButtonTemplate>
            <Transition
              show={isSending}
              enter="transition-all duration-700 ease-in-out"
              enterFrom="translate-x-[300%] opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="transition-all duration-700 ease-in-out"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="translate-x-[300%] opacity-0"
            >
              <Loader open={isSending}/>
            </Transition>
          </div>
        </div>}
      </div>
    </Transition>
  )
}

export default ConfirmModal