import React, { FC, ReactNode, ChangeEvent } from 'react';

interface MyInputProps {
  type: string;
  name: string;
  label?: string;
  value?: string;
  before?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: FC<MyInputProps> = ({ type, name, label, value, before, onChange }) => {

  return (
    <div className="relative flex flex-wrap w-full">
      {label && (
        <label
          htmlFor={name}
          className="p-2 text-gray-600 transition-colors duration-300 bg-transparent peer-focus:font-semibold peer-focus:text-red-400"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={'Все фильмы в одной строке'}
        aria-label={label}
        className={`w-full shadow-xl p-2 rounded-full border-2 border-sky-400 focus:border-red-400 text-gray-600 bg-white focus:outline-none focus:ring-0 appearance-none transition-colors duration-300 pl-10`}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {before && before}
      </div>
    </div>
  );
};

export default MyInput;
