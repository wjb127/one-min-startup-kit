import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            1분 창업 키트
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI가 만드는 랜딩 페이지로 1분 만에 MVP 테스트 시작하기
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/signup" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              무료로 시작하기
            </Link>
            <Link href="/login" className="bg-white text-blue-600 px-8 py-3 rounded-lg border border-blue-600 hover:bg-blue-50">
              로그인
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">AI 랜딩 페이지 생성</h3>
              <p className="text-gray-600">사업 아이템 키워드만으로 전문적인 랜딩 페이지를 자동 생성합니다.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">MVP 테스트</h3>
              <p className="text-gray-600">가상 결제 버튼과 이메일 수집으로 실제 수요를 검증합니다.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">데이터 분석</h3>
              <p className="text-gray-600">실시간 대시보드로 잠재고객 반응을 모니터링합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free PDF Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">무료 PDF 가이드</h2>
          <p className="text-xl text-gray-600 mb-8">
            1분안에 창업하는 비법 : MVP 테스트를 통해서 사업성을 검증하세요!
          </p>
          <form className="max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="w-full px-4 py-3 rounded-lg mb-4 border"
            />
            <a
              href="/1min-startup-guide.pdf"
              download
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
            >
              무료 PDF 받기
            </a>
          </form>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">합리적인 가격으로 시작하세요</h2>
            <p className="text-xl text-gray-600 mb-8">
              7일 무료 체험으로 서비스를 경험해보세요
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* 무료 플랜 */}
            <div className="bg-white shadow rounded-lg p-8 flex flex-col">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">무료 플랜</h3>
                <p className="mt-4 text-4xl font-bold text-gray-900">
                  ₩0
                  <span className="text-lg text-gray-500">/7일</span>
                </p>
              </div>

              <ul className="mt-8 space-y-4 flex-grow">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  랜딩 페이지 생성 1회
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  기본 분석 대시보드 (7일)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  이메일 수집 100건
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  가상 결제 버튼 기능
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/signup"
                  className="block w-full text-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  7일 무료 체험
                </Link>
              </div>
            </div>

            {/* 스탠다드 플랜 */}
            <div className="bg-white shadow rounded-lg p-8 border-2 border-blue-500 flex flex-col">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">스탠다드</h3>
                <p className="mt-4 text-4xl font-bold text-gray-900">
                  ₩29,000
                  <span className="text-lg text-gray-500">/월</span>
                </p>
              </div>

              <ul className="mt-8 space-y-4 flex-grow">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  랜딩 페이지 생성 10회/월
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  기본 분석 대시보드
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  이메일 수집 1,000건/월
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  가상 결제 버튼 기능
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  이메일 지원
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/signup"
                  className="block w-full text-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  시작하기
                </Link>
              </div>
            </div>

            {/* 프리미엄 플랜 */}
            <div className="bg-white shadow rounded-lg p-8 flex flex-col">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">프리미엄</h3>
                <p className="mt-4 text-4xl font-bold text-gray-900">
                  ₩99,000
                  <span className="text-lg text-gray-500">/월</span>
                </p>
              </div>

              <ul className="mt-8 space-y-4 flex-grow">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  랜딩 페이지 생성 50회/월
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  고급 분석 대시보드
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  이메일 수집 5,000건/월
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  AI 마케팅 문구 생성
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  구글 애즈 연동 가이드
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  우선 지원
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  API 액세스
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/signup"
                  className="block w-full text-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  시작하기
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600">
              연간 구독 시 17% 할인
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">1분 창업 키트</h3>
              <p className="text-gray-400">AI로 만드는 스마트한 MVP 테스트</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">연락처</h3>
              <p className="text-gray-400">이메일: wjb127@naver.com</p>
              <p className="text-gray-400">전화: 010-5056-8463</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 1분 창업 키트. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
