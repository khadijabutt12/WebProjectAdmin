import React from "react";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@material-ui/core";
import axios from "axios";
import productService from "../../Services/ProductService";

const NewProduct = (props) => {
   const [BrandName,setName]=React.useState("");
   const [Description,setDes]=React.useState("");
    return ( 

    <Grid container spacing={6}>
        <Grid item xs={12}>
            <h1>Add New Product</h1>
          
           <Grid item xs={3}> </Grid>
           <Grid item xs={6}> 
           <TextField label="BrandName" 
           variant="filled"
            
           fullWidth style={{paddingBottom:"20px"}}
           value={BrandName} 
           onChange={(e)=>{
            setName(e.target.value);
            
          }}
           ></TextField>  
          <TextField label="Description" 
          variant="filled" 
           
          fullWidth 
          style={{paddingBottom:"20px"}}
          value={Description} 
          onChange={(e)=>{
              setDes(e.target.value);

            }}
          ></TextField>  
           </Grid>
           <Grid item xs={3}> </Grid>
           <Grid item xs={3}></Grid>
           <Grid item xs={12}> 
           <Button 
           variant="outlined" 
           style={{backgroundColor:"#ef9a9a",fontSize:"20px",color:"white"}}
            onClick={ e=>{
                console.log("added");
                productService.addProduct({ BrandName,Description}).then((data)=>{
                    props.history.push("/products");
                }).catch((err)=>
                {
                    console.log("Error");
                });
            }}
           >
             ADD
           </Button>
           </Grid>
        </Grid>
    </Grid> );
}
 
export default NewProduct;