import{Avatar, Grid,Paper, TextField,Button,Checkbox, Typography} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
const Signup =()=>{
    const paperStyle={ padding:'30px 20px', width:300, margin: "20px auto" }
  const headerStyle ={margin:0}
  return(
<>
<Grid>
    <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
            <Avatar>

            </Avatar>
            <h2>Sign up</h2>
            <Typography variant='caption' gutterBottom> fill this form to create an account</Typography>
        </Grid>
        <form>
            <TextField  fullWidth label='Name'/>
            <TextField  fullWidth label='Email'/>
            <TextField  fullWidth label='Phone Number'/>
            <TextField  fullWidth label='Password' type='password'/>
            <TextField  fullWidth label='Confirm Password' type='password'/>
            <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="I accept the terms and condions."
      />
            <Button href="https://codeconvey.com/wp-content/uploads/2020/06/registration-successful-message-html.png" type='submit' variant='contained' color='primary' >Sign Up</Button>
        </form>
    </Paper>
</Grid>
</>
    )
}
export default Signup;
