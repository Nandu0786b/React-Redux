import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useRef } from "react";
import { UpdateName,Updatenumber,Updatecountry } from "./features/userslice.js";

function App() {
  const nameRef = useRef();
  const phoneNumberRef = useRef();
  const countryRef = useRef();

  const data=useSelector((state)=>state.user);
  const dispatch = useDispatch();
  console.log(data);
  const handleSubmit = () => {
    const name = nameRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const country = countryRef.current.value;
    dispatch(UpdateName(name))
    dispatch(Updatenumber(phoneNumber))
    dispatch(Updatecountry(country))
  };
  // setInterval(() => {
  //   handleSubmit();
  // }, 1000);
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",margin:"200px",backgroundColor:"black",color:"white"}}>
    <div style={{width:"30%"}}>
    <p>{`name : ${data.name} `}</p>
    <p>{`phone Number : ${data.pNumber} `}</p>
    <p>{`country : ${data.country}`}</p>
    </div>
      <label>
        Name:
        <input type="text" ref={nameRef} />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="text" ref={phoneNumberRef} />
      </label>
      <br />
      <label>
        Country:
        <input type="text" ref={countryRef} />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      
    </div>
  );
}

export default App;
