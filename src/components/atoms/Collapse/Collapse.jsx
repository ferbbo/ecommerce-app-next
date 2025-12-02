import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import cn from 'classnames';

export const Collapse = ({
  label,
  content,
}) => {

  const [collapse, setCollapse] = useState(false);
  const isCollapsedContainer = collapse && 'h-[52px] mt-0';
  const isCollapsedButton = collapse && 'border-b-4';
  const isCollapsedArrow = collapse && 'rotate-180';
  return (
    <div
      data-testid='collapse'
      className={cn(`text-dark-primary 
                    text-left px-4 
                    border-4 border-y-light-gray border-x-white
                    relative
                    overflow-hidden
                    transition-all duration-500`, isCollapsedContainer )}>
      <button
        className={cn(`flex items-center justify-between 
                      w-full 
                      border-white py-4 
                      bg-transparent 
                      cursor-pointer`, isCollapsedButton)}
        onClick={() => setCollapse(!collapse)}>
        <span className="font-clash text-dark-primary mr-4">{label}</span>
        <FiChevronDown className={cn(`w-[20px] h-[20px] 
                                    text-dark-primary 
                                    cursor-pointer 
                                    transition-transform`, isCollapsedArrow)}/>
      </button>
      <div
        className={cn("p-0 border-white", { "border-2 border-t-light-gray": !collapse })}>
        {content}
      </div>
    </div>
  );
};