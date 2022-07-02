import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import userService from "../../Services/UserServices";
import {toast} from "react-toastify";
     const Login = (props) => {
       const[Email,setEmail]=React.useState("");
       const[Password,setPassword]=React.useState("");
         return ( 
             <div style={{display:"flex",alignItems:"center",height:"400px",justifyContent:"center",
            backgroundColor:"#ba6b6c"}}
            >
            <div style={{width:"500px",paddingTop:"10px"}}>
              <h1 style={{textAlign:"center"}}>Login</h1>
               <TextField  variant="filled" label="Email" fullWidth 
               style={{paddingBottom:"20px"}}
               value={Email}
               onChange={ e =>{
                setEmail(e.target.value);
               }}
               >
                
               </TextField><br />
               <TextField variant="filled" label="Password" type="password" fullWidth 
               style={{paddingBottom:"20px"}}
               value={Password}
               onChange={ e =>{
                setPassword(e.target.value);
               }}

               >
                
                </TextField><br />
                <Button variant="filled" 
           style={{backgroundColor:"#ef9a9a",fontSize:"20px",color:"white"}}
           onClick={
             e=>{
                       userService.login(Email,Password).then((data)=>{
                       console.log("data");
                       window.location.href="/";
                    }).catch((err)=>
                    {
                        console.log("Error");
                        toast.error(err.response.data,{
                          position: toast.POSITION.TOP_LEFT
                      });
                    });
             }
           }
           >
                  Login
                </Button>

            </div>

             </div>
          );
     }
      
     export default Login;