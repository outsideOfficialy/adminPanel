import { Transition } from '@headlessui/react'
import React from 'react'

const Loader = ({open}: {open: boolean}) => (
  <div className="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default Loader
