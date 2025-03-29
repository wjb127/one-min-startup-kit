import PaymentButton from '../components/PaymentButton';

export default function TestPayment() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-8">가상 결제 테스트</h1>
          
          <div className="space-y-6">
            <PaymentButton price={49000} productName="스탠다드 플랜 (월)" />
            <PaymentButton price={99000} productName="프리미엄 플랜 (월)" />
            <PaymentButton price={490000} productName="스탠다드 플랜 (연간)" />
            <PaymentButton price={990000} productName="프리미엄 플랜 (연간)" />
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>이 페이지는 가상 결제 테스트를 위한 것입니다.</p>
            <p>실제 결제가 이루어지지 않습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 