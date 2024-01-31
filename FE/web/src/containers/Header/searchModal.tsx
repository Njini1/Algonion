import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Link} from "@nextui-org/react";
import getAsset from "../../utils/getAsset";
import {MyInput} from "./MyInput"

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      <Link onPress={onOpen} className="max-w-fit">
        유저검색
        <img src={getAsset('search_icon.svg')} className="text-zinc-500" />
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
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
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


