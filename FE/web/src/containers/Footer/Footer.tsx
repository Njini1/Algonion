import classes from "./Footer.module.scss"

export default function Footer() {
  return (
    <footer className={classes.footer}>
      {/* <div className={classes.block}></div> */}

      <div className={classes.contents}>
        <div className={classes['contents-container']}>
          <span>정보</span>
          <a href="#">업데이트</a>
          <a href="#">이슈 트래커</a>
          <a href="#">문제 출처</a>
        </div>
        <div className={classes['contents-container']}>
          <span>콘텐츠</span>
          <a href="#">기본 프로필</a>
          <a href="#">기본 배경</a>
        </div>
        <div className={classes['contents-container']}>
          <span>티어와 경험치</span>
          <a href="#">티어 측정 기준</a>
          <a href="#">경험치 기준</a>
          <a href="#">경험치 수정 요청</a>

        </div>
        <div className={classes['contents-container']}>
          <span>커뮤니티 · 도구</span>
          <a href="#">Discord</a>
        </div>
        <div className={classes['contents-container']}>
          <span>도움말</span>
          <a href="#">규칙</a>
          <a href="#">기여 가이드라인</a>
          <a href="#">고급 검색</a>
          <a href="#">신규 티어 등록 신청</a>
          <a href="#">신규 문제 등록</a>
          <a href="#">이용 약관</a>
          <a href="#"><b>개인정보 처리방침</b></a>
        </div>
      </div>
      <div className={classes.block}></div>
      <div className={classes.about}>
        <div>
          <b>algonion.store</b>
        </div>
        <div>
          © 2023 -
        </div>
        <div className={classes.block}></div>
        <div>
          <b>알고니온 </b>
          B108 - E1I5
        </div>
        <div>
          34153 대전광역시 유성구 동서대로 98-39 (덕명동 124, 삼성화재연수원)
        </div>
        <div className={classes.block}></div>
        <div>
          'algonion.store', 'algonion', '알고니온'은 팀 E1I5의 산물입니다.
        </div>
      </div>
    </footer>
  )
}