import {useState, useEffect} from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Link} from "@nextui-org/react";
import getAsset from "../../utils/getAsset";
import {MyInput} from "./MyInput"
import styles from "./searchModal.module.scss"
import { useNavigate } from "react-router-dom";

export default function SearchModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const navigate = useNavigate();
  
  const [text, newText] = useState(""); // State to store the search query
  
  const onChange = (event: { target: { value: string; }; }) => {
    newText(event.target.value);
    console.log(text);
  }

  const goToSearchPage = () => {
    navigate(`/search/${text}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <Link onPress={onOpen} color="secondary" className="max-w-fit ">
        <img src={getAsset('search_icon.svg')} className={styles.img} />
        유저검색
      </Link>    
        {/* <Button onPress={onOpen}>Open Modal</Button> */}
        <Modal
          size="2xl"
          isOpen={isOpen}
          placement={"top"}
          onOpenChange={onOpenChange}
        >


        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">유저 이름을 검색해주세요!</ModalHeader>
              <ModalBody>
                <MyInput
                  onChange={onChange}
                  value={text}
                  isClearable
                  placeholder="Search..."
                  radius="md"
                  size="md"
                  startContent={<img src={getAsset('search_icon.svg')} className="text-zinc-500"/>}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="secondary" onPress={goToSearchPage}>
                  Search
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>

        </Modal>
    </div>
  );
}