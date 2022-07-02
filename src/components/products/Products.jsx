import React from "react";
import SingleProduct from "./SingleProduct";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import { Fab } from "@mui/material";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from '@material-ui/core/styles';
import productService from "../../Services/ProductService";
const useStyles = makeStyles((theme) => ({
     addbtn:
    {
        position:"absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(0)
}
}));
const Products = ( props ) => {
    const classes =useStyles();
  
    const [products,setProducts]=React.useState([]);
    const [total,setTotal]=React.useState(10);
    const page= props.match.params.page ? props.match.params.page: 1;
    const getData = () => {
       
            productService
            .getProduct().then((data)=>{
                setProducts(data);
            }).catch((err)=>
            {
                console.log("Error");
            });
        
    };
   
    React.useEffect(getData,[ page ]);
     //console.log("important");
       const handleNewProductClick= ()=>{ console.log(props); props.history.push("/products/newproduct");};
    return (  

        <div>
            <h1> Make-Up Products </h1>
            <Fab 
            color="white" 
            aria-label="add" 
            className={classes.addbtn}
            onClick={handleNewProductClick}
             >
                <AddIcon/>
            </Fab>
               
         
          { products.length==0?( <p></p>
              ) : (
                  <Grid container spacing={2}>
                      
                      {
                          products.map((product,index)=>
                          (
                          <SingleProduct key={index} product={product} onDelete={getData}/>
                          
                      ))}
                      </Grid>
              )}
        
           <Grid items xs={12}>
            <Pagination 
            count = {Math.ceil( total / 5 )}
             variant="outlined"
            
            shape="rounded" style={{paddingTop:"30px"}}
                onChange={(e,value) => {
                  console.log(value);
                  props.history.push("/products/" + value);
                }
                }
            ></Pagination>
           </Grid>

        </div>
    );
}
 
export default Products;
