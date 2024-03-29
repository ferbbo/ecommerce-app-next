import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import cn from 'classnames';

export const Collapse = ({
  label,
  content,
}) => {

  const [collapse, setCollapse] = useState(false);

  return (
    <div
      data-testid='collapse'
      className={cn("px-4 text-left text-dark-primary border-2 border-x-white border-y-light-gray relative overflow-hidden transition-all duration-[500ms] ease-in-out", [collapse ? 'h-[52px] mt-0': 'h-fit'])}>
      <button
        className={cn("flex items-center justify-between w-full py-3 border-white bg-transparent cr-pointer", [collapse ? 'border-b-2' : 'border-b-0'])}
        onClick={() => setCollapse(!collapse)}>
        <span className="font-clash text-dark-primary mr-3">{label}</span>
        <FiChevronDown className={cn("w-[20px] h-[20px] text-dark-primary cr-pointer transition transform ease duration-500", {'rotate-180': collapse})}/>
      </button>
      <div
        className={cn("p-0 border-white", { "border-2 border-t-light-gray": !collapse })}>
        {content}
      </div>
    </div>
  );
};