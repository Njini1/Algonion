import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
} from "@nextui-org/react";
import getAsset from "../../utils/getAsset";
import { MyInput } from "./MyInput";
import styles from "./searchModal.module.scss";

export default function SearchModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [keyword, setKeyword] = useState(""); // State to store the search query
  const onChange = (event: { target: { value: string } }) => {
    setKeyword(event.target.value);
    // console.log(keyword);
  };

  return (
    <div className="flex flex-col gap-2">
      <Link onPress={onOpen} color="secondary" className="max-w-fit ">
        <img src={getAsset("search_icon.svg")} className={styles.img} />
        유저검색
      </Link>
      {/* <Button onPress={onOpen}>Open Modal</Button> */}
      <Modal
        size="2xl"
        isOpen={isOpen}
        // z-index=200
        placement={"top"}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
              유저의 닉네임을 검색해주세요!
              </ModalHeader>
              <ModalBody>
                <MyInput
                  onChange={onChange}
                  value={keyword}
                  isClearable
                  placeholder="search..."
                  radius="md"
                  size="md"
                  startContent={
                    <img
                      src={getAsset("search_icon.svg")}
                      className="text-zinc-500"
                    />
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  href={`/search?q=${keyword}`}
                  color="secondary"
                  as={Link}
                >
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
