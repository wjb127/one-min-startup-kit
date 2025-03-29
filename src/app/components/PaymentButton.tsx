'use client';

import { useState } from 'react';
import ComingSoonModal from './ComingSoonModal';

interface PaymentButtonProps {
  price: number;
  productName: string;
}

export default function PaymentButton({ price, productName }: PaymentButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {price.toLocaleString()}원 결제하기
      </button>
      <p className="mt-2 text-sm text-gray-500 text-center">
        {productName}
      </p>

      <ComingSoonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
} 