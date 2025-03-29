'use client';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            준비 중입니다
          </h3>
          <p className="text-gray-600 mb-6">
            현재 결제 기능은 개발 중입니다.<br />
            더 나은 서비스로 곧 찾아뵙겠습니다.
          </p>
          <button
            onClick={onClose}
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
} 