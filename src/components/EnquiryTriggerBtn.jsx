"use client";

import { useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import EnquiryModal from './EnquiryModal';
import AnimatedButton from './AnimatedButton';

export default function EnquiryTriggerBtn({ itemName, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <AnimatedButton 
        onClick={handleOpen} 
        className={className}
      >
        <FiMessageSquare style={{ marginRight: '6px', fontSize: '16px' }} />
        Enquiry Now
      </AnimatedButton>

      {isOpen && (
        <EnquiryModal 
          show={isOpen} 
          handleClose={handleClose} 
          itemName={itemName} 
          itemType="package" 
        />
      )}
    </>
  );
}
