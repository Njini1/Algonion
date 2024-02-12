import { useState, useEffect } from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import classes from './CodeLogList.module.scss'

import { getCodeLog } from "../../api/CodeLogAPI.ts"

// import { Key } from 'react'


interface item {
  siteName: string;
  language: string;
  problemNum: string;
  problemTitle: string;
  classification: string[];
  problemLevel: string;
  submissionTime: string;
  username: string;
  url: string;
}


const CodeLogList = () => {
  
  const [data, setData] = useState<item[]>([]);
  console.log(data)
  useEffect(() => {
    async function getAxios(){
      let res = await getCodeLog();
      setData(res);
      console.log(res);
    }
    getAxios()
  }, []);

  // function goToDetailPage(username: string, problemNum: string) {
  //   window.location.href=`/code-log/${username}/${problemNum}`
  // }

  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];
  
  const columns = [
    {
      key: "number",
      label: "문제 번호",
    },
    {
      key: "title",
      label: "문제 이름",
    },
    {
      key: "category",
      label: "알고리즘 분류",
    },
    {
      key: "level",
      label: "난이도",
    },
    {
      key: "date",
      label: "푼 날짜",
    },
  ];

    return (
      <div className={classes.page}>
        <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
        </Table>


        {/* <div>
          <table>
          <thead>
            <tr>
              <th className={classes.site}>사이트</th>
              <th className={classes.number}>문제 번호</th>
              <th className={classes.name}>문제 이름</th>
              <th className={classes.category}>알고리즘 분류</th>
              <th className={classes.tier}>난이도</th>
              <th className={classes.date}>푼 날짜</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item: CodeLog, index: Key) => (
            <tr key={index} className={classes.tdHover} onClick={() => goToDetailPage(item.username, item.problemNum)}>
              <td>{item.siteName}</td>
              <td>{item.problemNum}</td>
              <td><a className={classes.nameHover} href={item.url}>{item.problemTitle}</a></td>
              <td>{item.classification.join("\n")}</td>
              <td>{item.problemLevel}</td>
              <td>{item.submissionTime.split('T')[0]}</td>
            </tr>
              ))}
          </tbody>
          </table>
        </div> */}
      </div>
    )
}

export default CodeLogList