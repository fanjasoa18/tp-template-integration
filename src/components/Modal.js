import React, { useState } from "react";
import { Input } from "./Input";
import { ModalBtn } from "./Button";
import { useRef } from "react";
import axios from "axios";


export function ModalStyle({style, setStyle,nom}) { 
    const ref = useRef(null);
    const NameRef = useRef(null);
    const UsernameRef = useRef(null);
    const EmailRef = useRef(null);
    const AddressRef = useRef(null);
    const PhoneRef = useRef(null);
    const WebsiteRef = useRef(null);
    const CompanyRef = useRef(null);

    const sendData = () => {
        ref.current.style.display= "none";
        const promise = axios.post("https://jsonplaceholder.typicode.com/users", {
                name: "Leanne Graham",
                username: "Bret",
                email:"Sincere@april.biz",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborouh",
                    zipcode: "92998-3874"?
                //geo: {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                   // }
                }
        })
        promise.then((response) => {console.log(response.data);})
        .catch((err) => {console.log()})
    }

    return (<>
        <Form setStyle={setStyle} nom2={nom}/>
        <div className={style} onClick= {setStyle}>
            
        </div>
        </>
    )
}
function Form({setStyle,nom2}) {
    return(
        <div className="form">
           <div>
            <button onClick={setStyle} className="close" title="Close Modal" >X</button><br/>
              <Input  type = "text" placeholder="nom" className="input" label="Name"/>
              <Input  type = "text" placeholder={nom2.name} className="input" label="Username"/>
              <Input  type = "text" placeholder={nom2.name} className="input" label="Email" />
              <Input  type = "text" placeholder="Address" className="input" label="Address"/>
              <Input  type = "text" placeholder="Phone number" className="input" label="Phone number"/>
              <Input  type = "text" placeholder="Website" className="input" label="Website"/> <br/>
              <Input  type = "text" placeholder="Company" className="input" label="Company"/>
             <ModalBtn setStyle={setStyle} label = "Sauvegarder"/>
            </div>
        </div>
    )
}
