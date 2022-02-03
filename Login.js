import {Button, TextField, Typography ,Link,Avatar, Grid,Paper} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Forgotpassword from './Forgotpassword';
import { BrowserRouter,Route } from 'react-router-dom';
import Signup from './Signup';
import {useHistory} from "react-router-dom";
const Login =()=>{
  
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const paperStyle={ padding:'30px 20px', width:300, margin: "20px auto" }
  const headerStyle ={margin:0}
   return (<>
   <Grid>
  
    <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
            <Avatar>

            </Avatar>
            <h2>Log in</h2>
            <Typography variant='caption' gutterBottom>fill this form to log in</Typography>
        </Grid>
        <form>
<TextField label=" name" placeholder='Enter user name' fullWidth required value={name} onChange={(e)=>setName(e.target.value)} ></TextField>
<TextField label="email" placeholder='Enter email' fullWidth required value={email} onChange={(e)=>setEmail(e.target.value)} ></TextField>
<TextField label="password" placeholder='Enter passeord' fullWidth required type='password' value={password} onChange={(e)=>setPassword(e.target.value)} ></TextField>
<FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />
      <Button href="https://www.dbs.com.sg/sme/day-to-day/ways-to-bank/digital-token/images/generate-otp.png" type='submit' color='primary' variant='contained' fullWidth > 
      
       Log in</Button>
     <Typography>      </Typography>
      <Typography> Do you forgot password ?
      <Link href="https://images-na.ssl-images-amazon.com/images/I/31MOtFKea2L._SX331_BO1,204,203,200_.jpg">
    fogot password
  </Link>
      </Typography></form>
 {/*<BrowserRouter>
 <Route exact path="/login" component={Login}/> 
 <Route exact path="/dashboard" component={Dashboard}/>
 <Route exact path="/signup" component={Signup}/>
 </BrowserRouter>*/}
 </Paper>
 </Grid>
 
  </> )
}
export default Login;
