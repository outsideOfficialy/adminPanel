import React from 'react'
import { ButtonPrimary } from '../ButtonTemplate'
import Image from 'next/image'
import itunes from '../../src/icons/itunes.svg'
import spotify from '../../src/icons/spotify.svg'
import soundcloud from '../../src/icons/soundcloud.svg'
import youtubeMusic from '../../src/icons/youtubeMusic.svg'

interface ConfirmModalProps {
  isOpened: boolean
  onSetModal: (value: boolean) => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpened, onSetModal }) => {
  return (
    <div className='relative'>
      <div className={`transform ${isOpened ? "translate-y-0" : "-translate-y-[100%]"} transition-transform duration-300 ease-in-out relative z-[10]`}>
        {isOpened && <div className={'w-[690px] flex flex-col justify-center items-center gap-[20px] px-[65px] pt-[80px] pb-[50px] bg-black border border-primary-color'}>
          <div className='w-full'>
              <button
                onClick={() => onSetModal(false)}
                className="close absolute top-[20px] right-[20px] w-[24px] h-[24px] transition duration-300 ease-in-out hover:text-main-primary-color material-symbols-outlined"
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
              <h4 className='text-[24px] font-medium'>Release song:</h4>
              <div className='pl-[10px] flex flex-col gap-[10px]'>
                <div className='flex gap-[30px]'>
                  <div>Song №1:</div>
                  <div className='flex items-center gap-[15px]'>
                    <span><Image src={spotify} alt="spotify"/></span>
                    <span><Image src={soundcloud} alt="soundcloud"/></span>
                    <span><Image src={itunes} alt="itunes"/></span>
                    <span><Image src={youtubeMusic} alt="youtubeMusic"/></span>
                  </div>
                </div>
                <div className='flex gap-[30px]'>
                  <div>Song №2:</div>
                  <div className='flex items-center gap-[15px]'>
                    <span><Image src={spotify} alt="spotify"/></span>
                    <span><Image src={soundcloud} alt="soundcloud"/></span>
                    <span><Image src={itunes} alt="itunes"/></span>
                    <span><Image src={youtubeMusic} alt="youtubeMusic"/></span>
                  </div>
                </div>
                <div className='flex gap-[30px]'>
                  <div>Song №3:</div>
                  <div className='flex items-center gap-[15px]'>
                    <span><Image src={spotify} alt="spotify"/></span>
                    <span><Image src={soundcloud} alt="soundcloud"/></span>
                    <span><Image src={itunes} alt="itunes"/></span>
                    <span><Image src={youtubeMusic} alt="youtubeMusic"/></span>
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
        </div>}
      </div>
    </div>
  )
}

export default ConfirmModal