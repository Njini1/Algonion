
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getFriendList } from "../../api/friendListAPI";
// import classes from './UserFriendList.module.scss'
type item = { siteName: string; problemNum: string; problemTitle: string ; problemLevel: string; url: string; }[]


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
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "status",
    label: "STATUS",
  },
];

function UserFriendList() {
  const [data, setData] = useState<item>();
  useEffect(() => {
    async function getAxios(){
      let res =await getFriendList();
      setData(res);
      console.log(res)
      console.log(data)
    }
    getAxios()
  },[]);

  return (
    <div>
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
    </div>
  )
}
  
export default UserFriendList

