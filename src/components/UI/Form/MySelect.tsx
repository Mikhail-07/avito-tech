import React, { FC, Fragment } from 'react'
import { FaChevronDown, FaCheck } from "react-icons/fa";
import { Listbox, Transition } from "@headlessui/react";
import { INames } from '../../../types/types';

interface MySelectProps {
  id: string;
  top?: string;
  value: string;
  setValue: (value: string) => void;
  options: INames[];
  className?: string;
}

const MySelect: FC<MySelectProps> = ({id, top, value, setValue, options, className = ""}) => {

  return (
    <div className={className}>
      {top ? <label htmlFor={id} className="block pb-1 text-sm font-medium leading-6">{top}</label> : null}
      <Listbox value={value} onChange={(newValue) => setValue(newValue)}>
      <div className={`relative w-full  ${className}`}>
        <Listbox.Button
          className='relative w-full py-1 pl-3 pr-10 text-base text-left border-2 border-white rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 '
          >
          <span className="block min-w-6">{value === '' ? top : value}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <FaChevronDown
              size="0.80rem"
              className="text-white"
              aria-hidden="true"
            />
          </span>
  </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 w-full mt-1 overflow-auto text-base bg-white max-h-60 rounded-xl focus:outline-none">
            {options.map((option) => (
              <Listbox.Option
                key={option.name}
                className={({ active }) =>
                  `relative cursor-default text-black select-none py-2 pl-10 pr-4 ${
                    active ? "bg-slate-200" : ""
                  }`
                }
                value={option.name}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-500">
                        <FaCheck size="0.5rem" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>

    </div>
    
  );
}

export default MySelect