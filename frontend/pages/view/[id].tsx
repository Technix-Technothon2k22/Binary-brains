import React, { useState } from "react";
import style from "../../styles/Pages/Viewstyle.module.scss";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import Link from "next/link";

function View_pdf() {
  const [isPdf, setIsPdf] = useState(false);
  const file_url = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  return (
    <div className={style.main}>
      <Header/>
      {isPdf ? (
        <iframe src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" />
      ) : (
        <iframe  width="100%" height="600"  src={`https://docs.google.com/gview?url=${file_url}&embedded=true`}></iframe>
      )}

      <Footer/>
    </div>
  );
}

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className={style.nav}> 
      <div className={style.head}>
        <div className={style.Home}>
          <h1>
            docsbox
          </h1>
          <Link   className={style.MainLink} href={"/"}>Home</Link>
        </div>
        <div>
          <Button colorScheme='blue' onClick={onOpen} className={style.btn}>Create Sharable Link</Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sharable Link</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className={style.modal}>
              <lable>
                Copy the Link below to share
              </lable>
              <input value={"link"} className={style.input}/>
            </div>
          </ModalBody>

          <ModalFooter>
            
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

function Footer() {
  return (
    <div> 
      <h1>
        footer cousasas
      </h1>
      
    </div>
  )
}




export default View_pdf;
