import React from 'react';
import {Card, CardBody, CardFooter, Image, RadioGroup, Radio} from "@nextui-org/react";
import classes from "./RoomList.module.scss"
// import getAsset from "../../utils/getAsset";

export default function RoomList() {
    // const getRandomNumber = () => Math.floor(Math.random() * 14) + 1;

    // const randomNumber = getRandomNumber();
    // const imagePath = getAsset(`Landscape/landscape-${randomNumber}.jpg`)
    const [selectedTag, setSelectedTag] = React.useState('');


    const list = [
    {
        title: "BOJ 1016 제곱 ㄴㄴ 수",
        tag: "#도와주세요",  
    },
    {
        title: "SWEA 19189 순열의 아름다움",
        tag: "#도와주세요",

    },
    {
        title: "Pro 160585 혼자서 하는 틱택토",
        tag: "#같이풀어요",

    },
    {
        title: "Pro 42883 큰 수 만들기",
        tag: "#같이풀어요",
    },
    {
        title: "SWEA 15874 흑돌과 백돌",
        tag: "#도와주세요",
    },
    {
        title: "BOJ 1372 단어 합치기",
        tag: "#같이풀어요",
    },
    {
        title: "BOj 1841 군사 배치",
        tag: "#도와주세요",
    },
    {
        title: "Pro 258711 도넛과 막대 그래프",
        tag: "#같이풀어요",
    },
];

    const filteredList = selectedTag ? list.filter(item => item.tag === selectedTag) : list;

  
    return (
        <div>
            <div className={classes.buttonContainer}>
            <div className={classes.communityTitle}>
                커뮤니티 페이지
                <div>
                    {/* 방 생성 버튼 */}

                </div>
            </div>
            <RadioGroup
                label="방을 생성하여 다른 사람들의 도움을 받아보세요"
                value={selectedTag}
                onValueChange={setSelectedTag}
                orientation="horizontal"
                color='secondary'
                
            >
                <Radio value="">
                    전체 보기
                </Radio>
                <Radio value="#도와주세요">
                    도와주세요
                </Radio >
                <Radio value="#같이풀어요">
                    같이풀어요
                </Radio>
            </RadioGroup>
            </div>
        <div className={classes.roomContainer}>
        {filteredList.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("pressed")}>
            <CardBody className="overflow-visible p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[300px]"
                    // index 대신 백엔드에서 방 번호 pk를 받아서 넣기
                    src={`https://source.unsplash.com/random?${index}`}
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.tag}</p>
            </CardFooter>
            </Card>
        ))}
        </div>
    </div>
    );
}
