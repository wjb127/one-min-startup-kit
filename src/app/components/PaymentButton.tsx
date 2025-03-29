'use client';

import { useState } from 'react';

interface PaymentButtonProps {
  price: number;
  productName: string;
}

export default function PaymentButton({ price, productName }: PaymentButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    
    // 가상 결제 처리 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSuccess(true);
    setIsLoading(false);
  };

  return (
    <div className="w-full">
      {isSuccess ? (
        <div className="text-center py-3 px-4 rounded-md bg-green-50 text-green-700">
          결제가 완료되었습니다!
        </div>
      ) : (
        <button
          onClick={handleClick}
          disabled={isLoading}
          className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? '처리중...' : `${price.toLocaleString()}원 결제하기`}
        </button>
      )}
      <p className="mt-2 text-sm text-gray-500 text-center">
        {productName}
      </p>
    </div>
  );
} 