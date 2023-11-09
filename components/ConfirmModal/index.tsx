import React from 'react'
import { ButtonPrimary } from '../ButtonTemplate'
import Image from 'next/image'
import itunes from '../../src/icons/itunes.svg'
import spotify from '../../src/icons/spotify.svg'
import soundcloud from '../../src/icons/soundcloud.svg'
import youtubeMusic from '../../src/icons/youtubeMusic.svg'
import { Transition } from '@headlessui/react'

interface ConfirmModalProps {
  isOpened: boolean
  onSetModal: (value: boolean) => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpened, onSetModal }) => {
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
        {<div className={'w-[690px] flex flex-col justify-center items-center gap-[20px] px-[65px] pt-[80px] pb-[50px] bg-black border border-primary-color'}>
          <div className='w-full'>
            <button
              type='button'
              onClick={() => onSetModal(false)}
              className="close absolute top-[20px] right-[20px] w-[24px] h-[24px] hover:text-main-primary-color material-symbols-outlined"
            >
              close
            </button>
            <h3 className='text-[36px] text-center font-semibold'>Confirmation of sending data</h3>
          </div>
          <div className='w-full max-h-[576px] overflow-auto flex flex-col gap-[45px]'>
            <h4 className='text-[24px] font-medium'>Signle</h4>
            <div className='flex flex-col gap-[10px]'>
              <h4 className='text-[24px] font-medium'>Release name:</h4>
              <div className='pl-[10px]'>Release №1</div>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <h4 className='text-[24px] font-medium'>Release link's:</h4>
              <div className='pl-[10px] flex gap-[15px]'>
                <span><Image src={spotify} alt="spotify" /></span>
                <span><Image src={soundcloud} alt="soundcloud" /></span>
                <span><Image src={itunes} alt="itunes" /></span>
                <span><Image src={youtubeMusic} alt="youtubeMusic" /></span>
              </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <h4 className='text-[24px] font-medium'>Release songs:</h4>
              <div className='pl-[10px]'>
                <div className='flex flex-col gap-[10px]'>
                  <span>Song name №1</span>
                  <span>Song name №2</span>
                  <span>Song name №3</span>
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
            <ButtonPrimary onClick={() => console.log('Sending...')} type="submit" className="bg-main-primary-color">
              Send
            </ButtonPrimary>
          </div>
        </div>}
      </div>
    </Transition>
  )
}

export default ConfirmModal