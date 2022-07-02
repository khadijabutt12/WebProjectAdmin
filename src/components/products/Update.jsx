import React from "react";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@material-ui/core";

import productService from "../../Services/ProductService";

const Update = (props) => {
   const [BrandName,setName]=React.useState("");
   const [Description,setDes]=React.useState("");
   const id = props.match.params.id;
   React.useEffect(()=>{ productService.getSingle().then(data=>{
       setName(data.BrandName);
       setDes(data.Description);
})},[]) 
      
   
    return ( 

    <Grid container spacing={6}>
        <Grid item xs={12}>
            <h1>Update Product</h1>
          
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
                console.log("updated");
                productService.updateProduct(id,{ BrandName,Description}).then((data)=>{
                    props.history.push("/products");
                }).catch((err)=>
                {
                    console.log("Error");
                });
            }}
           >
             Update
           </Button>
           </Grid>
        </Grid>
    </Grid> );
}
 
export default Update;