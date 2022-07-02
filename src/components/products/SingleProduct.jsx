import React from "react";
import { Grid } from "@material-ui/core";
import {Typography} from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import productService from "../../Services/ProductService";
import {withRouter} from "react-router";

const SingleProduct = (props) => {
    const {product,onDelete,history}= props;
    return ( 
       
        <Grid item xs={6} sm={5} md={6} lg={4}>
            <Card sx={{maxWidth:350}} style={{background:"#ef9a9a"}}>
            
        <CardContent>
            <Typography gutterBottom variant ="h5" component="div">
            <h2>{product.BrandName}</h2>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <p>{product.Description}</p>
            <Button  variant="outlined" 
           style={{backgroundColor:"white",fontSize:"20px",color:"#ef9a9a"}}
           onClick={ (e)=>{
               history.push("/products/updateproduct/" + product._id);
            
        }}
           
           >
              Edit
            </Button>
            <Button variant="outlined" 
           style={{backgroundColor:"white",fontSize:"20px",color:"#ef9a9a",paddingLeft:"10px"}}
           onClick={e=>{
               productService.deleteProduct(product._id).then((data)=>{
                console.log(data);
                onDelete();
            }).catch((err)=>
            {
                console.log("Error");
            });
           }}
           >
                Delete
                </Button>
            </Typography>
        </CardContent>
            </Card>
           
</Grid>
     );
}
 
export default withRouter(SingleProduct);