import { useState } from 'react';

type FaqType = {
  id: number;
  f: string;
  q: string;
};

const FAQ_CONTENTS: FaqType[] = [
  {
    id: 1,
    f: '어떤 사이트 인가요?',
    q: '나만의 링크를 관리하는 사이트 입니다.',
  },
  { id: 2, f: '회원탈퇴 못하나요?', q: '회원탈퇴는 없습니다.' },
  { id: 3, f: '비밀번호 변경 못하나요?', q: '비밀번호 변경 못합니다.' },
  { id: 4, f: '질문 영역 입니다.', q: '답변 영역 입니다.' },
  { id: 5, f: '질문 영역 입니다.', q: '답변 영역 입니다.' },
  { id: 6, f: '질문 영역 입니다.', q: '답변 영역 입니다.' },
  { id: 7, f: '질문 영역 입니다.', q: '답변 영역 입니다.' },
  { id: 8, f: '질문 영역 입니다.', q: '답변 영역 입니다.' },
  { id: 9, f: '질문 영역 입니다.', q: '답변 영역 입니다.' },
  { id: 10, f: '질문 영역 입니다.', q: '답변 영역 입니다.' },
];

const Faq = () => {
  const [isFaqActive, setIsFaqActive] = useState<number | null>(null);

  const handleFaqToggle = (id: number) => {
    setIsFaqActive(isFaqActive === id ? null : id);
  };

  return (
    <>
      <section className="bg-bg h-[88px] pt-[10px] text-center mb-[20px] md:mb-[100px] md:h-[128px] md:pt-[20px]">
        <h2 className="text-[32px] font-bold md:text-[40px]">🤔 FAQ</h2>
      </section>
      <section className="px-[20px] mb-[120px]">
        <div className="w-full max-w-[1060px] mx-auto">
          <ul>
            {FAQ_CONTENTS.map((faq) => {
              return (
                <li key={faq.id} className="mb-[20px]">
                  <button
                    type="button"
                    className={`relative flex justify-between items-center w-full min-h-[70px] pl-[60px] pr-[20px] text-base font-bold rounded-[11px] bg-white border-solid  border-2 cursor-pointer hover:text-primary hover:border-primary md:min-h-[80px] md:text-lg ${isFaqActive === faq.id ? 'text-primary border-primary' : 'border-gray-200'}`}
                    onClick={() => handleFaqToggle(faq.id)}
                  >
                    <i
                      className={`absolute top-[50%] translate-y-[-50%] left-[20px] text-[20px] font-medium md:text-[26px] ${isFaqActive === faq.id && 'text-primary'}`}
                    >
                      Q
                    </i>
                    {faq.f}
                    <i className="text-lg">
                      {isFaqActive === faq.id ? '▲' : '▼'}
                    </i>
                  </button>
                  <p
                    className={`relative transition-all duration-500 ease-out overflow-hidden text-sm md:text-base ${isFaqActive === faq.id ? 'h-[154px] md:h-[204px]' : 'h-0'}`}
                  >
                    <i className="absolute top-[20px] left-[23px] text-[20px] font-medium text-secondary-60 md:text-[26px]">
                      A
                    </i>
                    <span className="block min-h-[150px]  rounded-[11px] border-gray-200 border-2 border-solid bg-gray-100 p-[20px] pl-[60px] md:min-h-[200px]">
                      {faq.q}
                    </span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Faq;
