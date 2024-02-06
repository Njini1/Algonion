import { motion } from "framer-motion";
import LogoBox from "../components/LogoBox";
import StreakBox from "../components/StreakBox";
import { TierBox } from "../components/TierBox";
import TodayBox from "../components/TodayBox";
import axios from "axios";
import { useState, useEffect } from "react";
import useSWR from "swr";

function UserPage(props: { data: any }) {
    const [problemCnt, setProblemCnt] = useState(0);
    const [streak, setStreak] = useState(Array.from({ length: 7 }, () => false));
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0,
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };


    useEffect(() => {
        console.log(props.data);
        let res: { [key: string]: number } = { "2024-01-27": 5, "2024-01-28": 5, "2024-01-29": 5, "2024-01-30": 5, "2024-01-31": 0, "2024-02-01": 1, "2024-02-02": 3 };
        let newStreak = Object.values(res).map(cnt => cnt > 0 ? true : false);
        let dayList = Object.keys(res);
        let lastValue = dayList[dayList.length - 1];
        setProblemCnt(() => res[lastValue]);
        setStreak(() => newStreak);
    }, []);
    return (<motion.main className="container" variants={container} initial="hidden" animate="visible">
        <div className="first-line">
            {props.data}
            <TierBox item={item} />
            <div>
                <LogoBox item={item} />
                <TodayBox item={item} problemCnt={problemCnt} />
                <motion.div className="box" variants={item}><p>🚧</p></motion.div>
            </div>
        </div>
        <StreakBox item={item} streak={streak} />
    </motion.main>)
}
export default UserPage;