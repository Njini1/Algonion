import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Link} from "@nextui-org/react";
import getAsset from "../../utils/getAsset";
import {MyInput} from "./MyInput"
import styles from "./searchModal.module.scss"

export default function SearchModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                <ModalBody>
                  <MyInput
                    isClearable
                    placeholder="Search..."
                    radius="md"
                    size="md"
                    startContent={<img src={getAsset('search_icon.svg')} className="text-zinc-500" />}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="secondary" onPress={onClose}>
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


