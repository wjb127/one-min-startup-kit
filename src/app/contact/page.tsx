export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            연락처
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            문의사항이 있으시다면 언제든 연락해주세요.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">이메일</h3>
                <p className="mt-2 text-gray-500">
                  <a href="mailto:wjb127@naver.com" className="text-blue-600 hover:text-blue-500">
                    wjb127@naver.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">전화번호</h3>
                <p className="mt-2 text-gray-500">
                  <a href="tel:010-5056-8463" className="text-blue-600 hover:text-blue-500">
                    010-5056-8463
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">영업시간</h3>
                <p className="mt-2 text-gray-500">
                  평일 9:00 - 18:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 