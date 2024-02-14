import { useState, useEffect, useCallback, Key } from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip} from "@nextui-org/react";
import { EditIcon } from "./CodeLogList/editIcon.tsx";
import { DeleteIcon  } from "./CodeLogList/deleteIcon.tsx";

import { deleteCodeLog, getCodeLog } from "../../api/ccodeLogAPI.ts"
// import {columns, logs} from "./CodeLogList/data";

import classes from './CodeLogList.module.scss'
import { getNickname } from '../../api/nicknameAPI.ts';


export default function CodeLogList() {
  interface Log {
    solvedId: string,
    siteName: string;
    language: string;
    problemNum: string;
    problemTitle: string;
    classification: string[];
    problemLevel: string;
    strClassification: string,
    submissionTime: string;
    url: string;
  }

  const columns = [
    {name: "제  목", uid: "title"},
    {name: "레  벨", uid: "level"},
    {name: "언  어", uid: "language"},
    {name: "제 출 일", uid: "date"},
    {name: "삭  제", uid: "delete"},
  ];
  
  const [nickname, setNickname] = useState('');
  const [logs, setlogs] = useState<Log[]>([]);
  useEffect(() => {
    async function getAxios(){
      let name = await getNickname()
      setNickname(name)
    }
    getAxios()
  }, []);

  useEffect(() => {
    async function getAxios(){
      let res = await getCodeLog(nickname);
      setlogs(res);
    }
    getAxios()
  }, [nickname]);
  
  function goToDetailPage(nickname: string, problemId: string) {
    window.location.href=`/code-log/${nickname}/${problemId}`;
  }

  function deleteLog(problemId: string) {
    deleteCodeLog(problemId);
    console.log(problemId);
    window.location.reload();
  }

  ///////////////////////////////////////////
  const renderCell = useCallback((log: Log, columnKey: Key) => {
    const cellValue = log[columnKey as keyof Log];
    
    switch (columnKey) {
      case "title":
        return (
          <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{log.problemNum}. {log.problemTitle}</p>
              <p className="text-bold text-sm capitalize text-default-400">{log.strClassification}</p>
            </div>
        );
      case "level":
        return (
          <div className="flex flex-col">
            <p className={`text-bold text-sm capitalize ${classes.center}`}>{log.problemLevel}</p>
            <p className={`text-bold text-sm capitalize text-default-400 ${classes.center}`}>{log.siteName}</p>
          </div>
        );
      case "language":
        return (
          <div className={classes.center}>
            <Chip className="capitalize" color='secondary' size="sm" variant="flat">
              {log.language}
            </Chip>
          </div>
        );
      case "date":
        return (
          <div className="flex flex-col">
            <p className={`text-bold text-sm capitalize ${classes.center}`}>{log.submissionTime}</p>
          </div>
        );
      case "delete":
        return (
          <div className={`relative flex items-center gap-2 justify-center`}>
            <Tooltip content="Edit CodeLog">
              <span className="text-lg text-green-500 cursor-pointer active:opacity-50" onClick={() => goToDetailPage(nickname, log.solvedId)}>
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete CodeLog">
              <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => deleteLog(log.solvedId)}>
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
  <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} className={classes.center}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={logs}>
        {(item) => (
          <TableRow key={item.problemNum}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}