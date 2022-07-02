import React from "react";
import { Link } from "@material-ui/core";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { AppBar, Toolbar, Typography,Button} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import userService from "../Services/UserServices";

const pages =[ <Link   underline="hover" href="/"> Home </Link>,
<Link underline="hover" href="/login">Login</Link>]
 const adminpages=[<Link href="/products/newproduct" > NewProducts </Link>,
<Link href="/products"> Products </Link>, <Link href="http://localhost:3000">Visit</Link>,


]




const useStyles = makeStyles((theme) => ({
h3 :
{
    paddingRight:"30px",
    fontStyle:"italic",
    color:"white",
    
    
},
link: {
      
      paddingRight: "50px",
      color:"white"
   
     
     
    }
    
   

  }));

const TopMenu = (props) => {
  

    const classes =useStyles();
    
    const [anchorElNav,setAnchorElNav]=React.useState(null);
   const handleOpenNavMenu = (event)=>
   {
     setAnchorElNav(event.currentTarget);
   };
   const handleCloseNavMenu = ()=>
   {
     setAnchorElNav(null);
   };
 
    
      
return (  
   
               
           <AppBar   style={{backgroundColor:"#ef9a9a",width:"100%",position:"static"}}>
         
             <Toolbar >
               <Box sx={{flexGrow:1,display:{xs:"flex",md:"none",lg:"none"}}}>
             <IconButton size="large" aria-label="account of current user" 
             aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu}
             color="inherit" >
               <MenuIcon/>
               </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} 
            anchorOrigin={{vertical:"bottom",horizontal:"left",}}
             keepMounted transformOrigin={{vertical:"top",horizontal:"left",}}
             open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display:{xs:"block",md:"none"}}}>
              
              {pages.map((page)=>(
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
              ))
              }
              {userService.isAdmin() && <>
                
              {adminpages.map((page)=>(
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
              ))

              }
              </>}
              </Menu>
          </Box>
            
            <Typography>
            
             
                     <h3 className={classes.h3}> Beautify</h3>
                    
                 </Typography>
            <Box sx={{  display: { xs: 'none',md:"flex"} }}>
             
                 

                 <Typography variant="h6">
                     <Link   underline="hover" href="/" className={classes.link} > Home </Link>
                 </Typography>

                     {userService.isAdmin() &&
                      <>
                 <Typography variant="h6">
                     <Link underline="hover" href="/products" className={classes.link}> Products </Link>
                 </Typography>
                 <Typography variant="h6">
                     <Link underline="hover" href="/products/newproduct" className={classes.link}> NewProducts </Link>
                 </Typography>
                 
                 <Typography variant="h6"  >
                    <Link underline="hover" href="http://localhost:3000" className={classes.link}>Visit</Link>
                 
                 </Typography>

                 </>}
                 {!userService.isAdmin()?
               <>
               
               <Typography variant="h6"  >
                  <Link underline="hover" href="/login" className={classes.link}>Login</Link>
               
               </Typography>
               </>:<Button 
               onClick={ e=>{
                userService.logout();
                window.location.href=("/");
                
               }}
               > LogOut {userService.getLoggedInUser().Name}</Button>

              }
                 </Box>
               

             </Toolbar>
            
           </AppBar>
        
    );
}
 
export default TopMenu;