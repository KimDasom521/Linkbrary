import { TopTitle } from '@/components/landingPage/index';

const PrivacyPolicy = () => {
  const privacySubTitleClassName =
    'text-base font-bold mb-[0.625rem] md:text-lg';
  const privacyTextClassName = 'break-keep leading-[1.5] text-sm md:text-base';

  return (
    <>
      <TopTitle>📋 PRIVACY POLICY</TopTitle>
      <section className="px-5 mb-[7.5rem]">
        <div className="w-full max-w-[66.25rem] mx-auto">
          <h2 className="font-bold border-b-2 border-solid border-gray-300 pb-[0.625rem] mb-5 text-xl md:text-[1.5rem]">
            개인정보 보호 정책
          </h2>
          <p className="leading-[1.2] mb-10 break-keep text-sm md:text-base">
            본 LinkBrary는 귀하의 개인정보보호를 매우 중요시하며, 개인정보보호법
            및 정보통신망 이용촉진 및 정보보호 등에 관한 법률을 준수하고
            있습니다.
            <br />
            본사는 개인정보처리방침을 통하여 귀하께서 제공하시는 개인정보가
            어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한
            조치가 취해지고 있는지 알려드립니다.
          </p>

          <div className="mb-10">
            <h3 className={privacySubTitleClassName}>제 1 조 총칙</h3>
            <p className={privacyTextClassName}>
              1. 개인정보란 살아 있는 개인에 관한 정보로서 성명, 주민등록번호 및
              영상 등을 통하여 개인을 알아볼 수 있는 정보(해당 정보 만으로는
              특정 개인을 알아볼 수 없더라도 다른 정보와 쉽게 결합하여 알아볼 수
              있는 것을 포함한다) 등 개인정보보호법에 정의된 “개인정보”를
              말합니다.
              <br /> 2. 정보주체란 처리되는 정보에 의하여 알아볼 수 있는
              사람으로서 그 정보의 주체가 되는 사람을 말합니다.
              <br /> 3. 회사는 개인정보처리방침을 디자인하우스 공식 사이트
              (www.linkbrary.co.kr) 에 항상 공개함으로써 언제나 쉽게 확인할 수
              있도록 조치하고 있으며, 개인정보처리방침을 개정하는 경우 웹사이트
              공지사항(또는 개별 공지)을 통하여 공지할 것입니다.
            </p>
          </div>

          <div className="mb-[40px]">
            <h3 className={privacySubTitleClassName}>
              제 2 조 수집하는 개인정보의 처리 항목
            </h3>
            <p className={privacyTextClassName}>
              회사는 법령의 규정 또는 정보 주체의 동의 없이는 정보 주체의
              사생활을 현저히 침해할 우려가 있는 민감 정보, 개인을 고유하게
              구별하기 위하여 부여된 고유식별정보를 처리하지 않습니다. 선택
              항목은 입력하지 않더라도 서비스 이용에는 제한이 없습니다.
              <br />
              <br /> 1. 수집하는 개인정보의 항목
              <br />
              ① 회사는 회원가입, 정기구독 신청 및 상품 구매 등의 원활한
              고객상담, 각종 서비스의 제공을 위해 최초 회원가입 당시 아래와 같은
              최소한의 개인정보를 필수항목으로 수집하고 있습니다.
              <br />② 유료 서비스 이용(정기구독 신청, 쇼핑몰 구매 등) 과정에서
              아래와 같은 결제 정보들이 수집 될 수 있습니다.
              <br /> - 아이디, 이름, 전화번호, 휴대전화번호, 이메일 등 ※결제정보{' '}
              <br /> - 신용카드결제: 카드사명, 카드번호, 카드사코드 등 <br /> -
              휴대전화결제: 통신사명, 휴대폰번호 등 <br /> - 계좌이체결제:
              은행명, 은행코드, 계좌번호 등 <br /> - 무통장입금결제: 은행명,
              은행코드, 가상계좌번호 등
              <br />③ 서비스 이용 과정이나 사업 처리 과정에서 아래와 같은
              정보들이 자동으로 생성되어 수집 될 수 있습니다.. - IP Address,
              쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록, 기기정보,
              회원이 등록한 사진
              <br />④ 회원 아이디를 이용한 부가 서비스, 맞춤식 서비스 이용,
              문의사항 또는 불만처리, 이용자와 약속한 서비스 제공, 이벤트 응모
              과정에서 해당 서비스의 이용자에 한해서 사전에 해당사항을 알리고
              동의를 받아, 개인정보들을 추가 수집 할 수 있습니다.
            </p>
          </div>

          <div className="mb-[40px]">
            <h3 className={privacySubTitleClassName}>
              제 3 조 개인정보의 처리 목적
            </h3>
            <p className={privacyTextClassName}>
              회사는 회원관리, 서비스 제공 및 향상, 맞춤형 서비스 제공 등 아래의
              목적으로만 이용정보를 이용합니다.
              <br />- 회원 가입의사 확인, 연령 확인 및 법정대리인의 동의 진행,
              이용자 및 법정대리인의 본인 확인, 이용자 식별, 회원탈퇴 의사의
              확인 등의 회원 관리
              <br /> - 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금
              정산
              <br /> - 정기구독 대상으로 한 마케팅 및 프로모션 - 제품 배송,
              이벤트 선물 발송
              <br /> - 불만 처리 등 민원 처리
              <br /> - 이벤트 정보 및 참여기회 제공, 광고성 정보 제공 등 마케팅
              및 프로모션
              <br /> - 온라인 시장 조사 또는 여론 조사
              <br /> - 서비스 이용기록과 접속 빈도 분석, 서비스 이용에 대한
              통계, 서비스 분석 및 통계에 따른 맞춤 서비스 제공 및 광고 게재 등
              <br /> - 보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할
              수 있는 서비스 이용환경 구축
            </p>
          </div>

          <div className="mb-[40px]">
            <h3 className={privacySubTitleClassName}>
              제 4 조 개인정보의 보유 및 이용 기간
            </h3>
            <p className={privacyTextClassName}>
              회사는 개인정보 사용을 제한하기 위해 개인정보 수집 및 이용 목적이
              달성 된 후에는 해당 정보를 사용하지 않습니다. 단, 개인정보 수집
              목적 또는 제공 받은 목적이 달성 된 경우에도 상법 등 법령의 규정에
              의하여 보존할 필요성이 있는 경우에는 이용자의 개인정보를 보유할 수
              있습니다.
              <br />
              <br />위 개인정보 수집 목적 달성 시 즉시 파기 원칙에도 불구하고
              다음과 같이 거래 관련 권리 의무 관계의 확인 등을 이유로 일정 기간
              보유하여야 할 필요가 있을 경우에는 전자상거래 등에서의
              소비자보호에 관한 법률 등에 근거하여 일정 기간 보유합니다. ①
              「전자상거래 등에서의 소비자보호에 관한 법률」에 의한 보관 - 계약
              또는 청약 철회 등에 관한 기록 : 5년 - 대금결제 및 재화 등의 공급에
              관한 기록 : 5년 - 소비자의 불만 또는 분쟁 처리에 관한 기록 : 3년 ②
              「통신비밀보호법」 시행령 제41조에 의한 통신사실확인자료 보관 -
              컴퓨터 통신, 인터넷 로그기록자료, 접속지 추적 자료 : 3개월 ③
              설문조사, 이벤트 등 일시적 목적을 위하여 수집한 경우 : 당해
              설문조사, 이벤트 등의 종료 시점
            </p>
          </div>

          <div className="mb-[40px]">
            <h3 className={privacySubTitleClassName}>
              제 5 조 개인정보의 파기에 관한 사항
            </h3>
            <p className={privacyTextClassName}>
              회사는 수집한 개인정보의 처리 목적이 달성 되거나 그 보유 기간이
              종료되는 경우 정보주체의 동의, 이용약관, 관련 법령에 따라 보관이
              필요한 경우를 제외하고 해당 정보를 지체 없이 파기합니다. 파기절차
              및 방법은 아래와 같습니다. 회사의 개인정보 파기절차 및 방법은
              다음과 같습니다.
              <br />
              <br />위 개인정보 수집 목적 달성 시 즉시 파기 원칙에도 불구하고
              다음과 같이 거래 관련 권리 의무 관계의 확인 등을 이유로 일정 기간
              보유하여야 할 필요가 있을 경우에는 전자상거래 등에서의
              소비자보호에 관한 법률 등에 근거하여 일정 기간 보유합니다. ①
              「전자상거래 등에서의 소비자보호에 관한 법률」에 의한 보관 - 계약
              또는 청약 철회 등에 관한 기록 : 5년 - 대금결제 및 재화 등의 공급에
              관한 기록 : 5년 - 소비자의 불만 또는 분쟁 처리에 관한 기록 : 3년 ②
              「통신비밀보호법」 시행령 제41조에 의한 통신사실확인자료 보관 -
              컴퓨터 통신, 인터넷 로그기록자료, 접속지 추적 자료 : 3개월 ③
              설문조사, 이벤트 등 일시적 목적을 위하여 수집한 경우 : 당해
              설문조사, 이벤트 등의 종료 시점
            </p>
          </div>

          <div className="mb-[40px]">
            <h3 className={privacySubTitleClassName}>
              제 6 조 개인정보의 동의 철회, 열람 또는 정정
            </h3>
            <p className={privacyTextClassName}>
              ① 회원 또는 회원의 법정대리인은 언제든지 개인정보의 수집 및 이용,
              목적 외의 사용, 제3자 제공에 대한 동의를 철회할 수 있습니다.
              <br />② 회원 또는 회원의 법정대리인은 언제든지 자신의 개인정보를
              열람할 수 있으며, 스스로 정보 및 오류를 수정할 수 있습니다. 그
              자세한 방법은 홈페이지의 공지, 서비스 이용 안내에서 정한 바에
              따릅니다.
            </p>
          </div>

          <div className="mb-[40px]">
            <h3 className={privacySubTitleClassName}>
              제 7 조 개인정보의 제3자 제공의 금지
            </h3>
            <p className={privacyTextClassName}>
              제공된 개인정보는 원칙적으로 당해 이용자의 동의 없이 목적 외의
              이용이나 제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 회사가
              집니다. 다만, 개인정보보호법에 따라 허용되는 당초 수집 목적과
              합리적으로 관련된 범위 내 이용 및 다음의 경우에는 예외로 합니다.
              <br />
              가. 배송업무상 배송업체에게 배송에 필요한 최소한의 이용자의
              정보(성명, 주소, 전화번호)를 알려주는 경우
              <br /> 나. 통계작성, 학술연구 또는 시장조사를 위하여 필요한
              경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우
              <br /> 다. 재화 등의 거래에 따른 대금정산을 위하여 필요한 경우
              <br /> 라. 도용방지를 위하여 본인확인에 필요한 경우 마. 법령의
              규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라
              수사기관의 요구가 있는 경우
            </p>
          </div>

          <div className="mb-[40px]">
            <h3 className={privacySubTitleClassName}>
              제 8 조 수집한 개인정보의 위탁
            </h3>
            <p className={privacyTextClassName}>
              회사는 정보 주체의 동의 없이 개인정보의 처리를 외부 업체에
              위탁하지 않습니다. 회사는 아래와 같이 개인정보의 처리를 위탁하고
              있으며, 관련 법령에 따라 위탁계약 시 개인정보가 안전하게 관리될 수
              있도록 필요한 사항을 규정하고 있습니다. 회사의 개인정보 위탁처리
              기관 및 위탁업무 내용은 아래와 같습니다.
            </p>
          </div>

          <div className="mb-[40px]">
            <h3 className={privacySubTitleClassName}>
              제 9 조 이용자 및 법정 대리인의 권리와 그 행사 방법
            </h3>
            <p className={privacyTextClassName}>
              모든 정보 주체는 회사가 처리하는 자신의 개인정보에 대한 열람,
              정정, 삭제 및 처리 정지를 요구할 수 있습니다. 다만, 아래 사항에
              해당하는 경우 회사는 위와 같은 요구를 거절하거나 제한할 수
              있습니다.
              <br /> - 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여
              불가피한 경우
              <br /> - 다른 사람의 생명 또는 신체를 해할 우려가 있거나 다른
              사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우
              <br /> - 개인정보를 처리하지 아니하면 정보 주체와 약정한 서비스를
              제공하지 못하는 등 계약의 이행이 곤란한 경우로서 정보 주체가 그
              계약의 해지 의사를 명확하게 밝히지 아니한 경우
            </p>
          </div>

          <div className="mb-[40px]">
            <h3 className={privacySubTitleClassName}>
              제 10 조 개인정보의 기술적/관리적/물리적 보호 대책
            </h3>
            <p className={privacyTextClassName}>
              회사는 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출 변조
              또는 훼손되지 않도록 아래와 같은 안전성 확보 조치를 취하고
              있습니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
