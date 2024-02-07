import classes from './UserProblem.module.scss'


export default function problem100 () {
  
  // function goToProblem(problemId: number) {
    //   window.location.href=`https://www.acmicpc.net/problem/${problemId}`
    // }
    // const tier = ''
    // 1. 한 개의 grid에 10개의 문제를 묶기
    //       2. 반응형으로 
    //       3. 푼 문제가 새로 생길 때 마다 10개의 그룹으로 넣어야하고<br />
    //       4. 문제별로 problemNum에 따라서 링크 넣어줘야하고<br />
    //       5. 문제 아이콘에 마우스를 올리면 마커 띄워줘야하고<br />
    //       6. 문제 정보 가져와서 마커에 티어 이미지, 문제 num, 문제 title 표시<br />
    //       7. 푼 문제 표시하는 아이콘은 별 모양으로
          
    // const GridList = () => {
    //   return (
    //     <div className={classes["grid-list"]}>
    //       <a href="">1</a>
    //     </div>
    //   );
    // };
    
    return(
    <div className={classes['grid-container']}>
      {/* {data.map((item, index) => (
        <GridList key={index} data={item.gridList1} />
      ))} */}
      {/* <div className={classes['grid-list']}>
        <span>
          <a href="">
          <img src='' alt="" />
          </a>
        </span>
      </div> */}
      {/* {SolvedList.map((item, index) => (
            <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[300px]"
                src={`https://source.unsplash.com/random?${index}`}
            />
            
        ))} */}
      <div className={classes['grid-list']}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div className={classes['grid-list']}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div className={classes['grid-list']}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div className={classes['grid-list']}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div className={classes['grid-list']}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div className={classes['grid-list']}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div className={classes['grid-list']}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div className={classes['grid-list']}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div className={classes['grid-list']}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div className={classes['grid-list']}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

        {/* <div>
          <a onClick={() => goToProblem(1000)}>
            <img src="../../assets/logo/kakaoSymbol.png" alt="문제" />
          </a>
        </div> */}
      </div>
  )
}