// import React from "react";
import { Link } from "@nextui-org/react";
import classes from "./RoomList.module.scss"

export default function RoomList() {
  return(
    <div className={classes.product_container}>
            <div className={classes.product}>
                <div className={classes.product_img_div}><img src="../../assets/logo/icon_circle.svg" className={classes.product_img}/></div>
                <h5 className={classes.product_title}> 상품 제목</h5>
                <p className={classes.product_des}> 상품 내용 요약</p>
                <div className={classes.product_mon}> 월 : 15,000￦</div>
                <div className={classes.product_link_div}><Link className={classes.product_link}> 구독하러가기</Link></div>
            </div>
            <div className={classes.product}>
                <div className={classes.product_img_div}><img src="../../assets/logo/icon_circle.svg" className={classes.product_img}/></div>
                <h5 className={classes.product_title}> 상품 제목</h5>
                <p className={classes.product_des}> 상품 내용 요약</p>
                <div className={classes.product_mon}> 월 : 15,000￦</div>
                <div className={classes.product_link_div}><Link className={classes.product_link}> 구독하러가기</Link></div>
            </div>
            <div className={classes.product}>
                <div className={classes.product_img_div}><img src="../../assets/logo/icon_circle.svg" className={classes.product_img}/></div>
                <h5 className={classes.product_title}> 상품 제목</h5>
                <p className={classes.product_des}> 상품 내용 요약</p>
                <div className={classes.product_mon}> 월 : 15,000￦</div>
                <div className={classes.product_link_div}><Link className={classes.product_link}> 구독하러가기</Link></div>
            </div>
            <div className={classes.product}>
                <div className={classes.product_img_div}><img src="../../assets/logo/icon_circle.svg" className={classes.product_img}/></div>
                <h5 className={classes.product_title}> 상품 제목</h5>
                <p className={classes.product_des}> 상품 내용 요약</p>
                <div className={classes.product_mon}> 월 : 15,000￦</div>
                <div className={classes.product_link_div}><Link className={classes.product_link}> 구독하러가기</Link></div>
            </div>
            <div className={classes.product}>
                <div className={classes.product_img_div}><img src="../../assets/logo/icon_circle.svg" className={classes.product_img}/></div>
                <h5 className={classes.product_title}> 상품 제목</h5>
                <p className={classes.product_des}> 상품 내용 요약</p>
                <div className={classes.product_mon}> 월 : 15,000￦</div>
                <div className={classes.product_link_div}><Link className={classes.product_link}> 구독하러가기</Link></div>
            </div>
            <div className={classes.product}>
                <div className={classes.product_img_div}><img src="../../assets/logo/icon_circle.svg" className={classes.product_img}/></div>
                <h5 className={classes.product_title}> 상품 제목</h5>
                <p className={classes.product_des}> 상품 내용 요약</p>
                <div className={classes.product_mon}> 월 : 15,000￦</div>
                <div className={classes.product_link_div}><Link className={classes.product_link}> 구독하러가기</Link></div>
            </div>
      </div>
      
  )
}