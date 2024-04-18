import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AxiosInstance } from '../src/api/axios';

function CreateForm({open,setOpen}) {

  const [input,setinput] = React.useState({})
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit= async()=>{
    const {email,name,time,year,introduce,file}= input
    console.log(file[0])
    const CreateMovie = await AxiosInstance.post("/movie/create",{
      email,
      file:file[0],
      name,
      time,
      year,
      introduce
    },{headers:{'Content-Type':'multipart/form-data'}})
    console.log(CreateMovie)
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
        }}
      >
        <DialogTitle>Upload movie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create movie with this form
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            onChange={(e)=>setinput({...input,name:e.target.value})}
            id="name"
            name="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            onChange={(e)=>setinput({...input,time:e.target.value})}

            id="time"
            name="time"
            label="Time"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            onChange={(e)=>setinput({...input,year:e.target.value})}

            id="year"
            name="year"
            label="Year"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            onChange={(e)=>setinput({...input,introduce:e.target.value})}
            id="introduce"
            name="introduce"
            label="Introduce"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            onChange={(e)=>setinput({...input,file:e.target.files})}
            id="file"
            name="file"
            label="File"
            type="file"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default CreateForm