import React, { useState } from 'react'
import style from "./Main.module.scss"
import Image from 'next/image'
import {RiCheckboxCircleLine} from "react-icons/ri"
import {FcGoogle} from "react-icons/fc"


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


function Main() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signState, setSignState] = useState(true);
    const [name, setName] = useState("")

    const toggleSign =()=>{
        setSignState(!signState);
        }

  return (
    <div className={style.main}>
        <div className={style.text}>
            <h1>All of Your Documents, at One place</h1>
            <p>docsbox makes creating, editing ,sharing pdf and Documents easy</p>
            <div className={style.feat}>
                <RiCheckboxCircleLine color='green'/>
                Oraganise your documents
            </div>
            <div className={style.feat}>
                <RiCheckboxCircleLine color='green'/>
                Documents are securely stored
            </div>
            <div className={style.feat}><RiCheckboxCircleLine color='green'/>Easy to use</div>
            <p className={style.feat}>To start using docxbox</p>
            <button className={style.btn} onClick={onOpen}>
                Signup
            </button>
        </div>
{/* <img src="/assets/home-header-bg.jpg" alt="" className={style.RightImg} /> */}
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={"30%"} className={style.mainModel}>
          <ModalHeader style={{textAlign:"center"}}>{!signState ? "Signup" : "SignIn"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {signState ?<div className={style.form}>
                <div className={style.inputBox}>       
                    <label>Email:</label>
                    <input type={"email"} placeholder="Email"  value={email} onChange={(target)=> setEmail(target.target.value)}/>
                </div>
                <div className={style.inputBox}>
                    <lable>Password:</lable>
                    <input type={"password"} placeholder="Password"  value={password} onChange={(target)=> setPassword(target.target.value)}/>
                </div>
                <div className={style.mid}>
                    <button className={style.signBtn}>
                    SignIn
                    </button>
                    <p>Or</p>
                    <button className={style.google}><FcGoogle fontSize={35}/> SignIn with Google</button>
                    <p>Dont have and Accout?<button onClick={()=>setSignState(!signState)}>Signup</button></p>
                </div>
            </div>
            :
            <div className={style.form}>
                <div className={style.inputBox}>
                    <lable>Name:</lable>
                    <input type={"text"} placeholder="Full Name"  value={name} onChange={(target)=> setName(target.target.value)}/>
                </div>
                <div className={style.inputBox}>       
                    <lable>Email:</lable>
                    <input type={"email"} placeholder="Email"  value={email} onChange={(target)=> setEmail(target.target.value)}/>
                </div>
                <div className={style.inputBox}>
                    <lable>Password:</lable>
                    <input type={"password"} placeholder="Passwords"  value={password} onChange={(target)=> setPassword(target.target.value)}/>
            
                </div>
                <div className={style.mid}>
                    <button className={style.signBtn}>
                    SignIn
                    </button>
                    <p>Or</p>
                    <button className={style.google}><FcGoogle fontSize={35}/> SignIn with Google</button>
                    <p>Dont have and Accout?<button onClick={()=>setSignState(!signState)}>Signup</button></p>
                </div>
            </div>
}
          </ModalBody>

          <ModalFooter>
            
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Main