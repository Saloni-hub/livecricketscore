import { Typography, Card, CardContent, CardActions,Button,Grid,Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import React, { useState } from 'react'

import { getMatchDetails } from '../API/Api'

const Mycard = ({match}) => {
    const [detail,setdetail] = useState({});
    const [open,setopen] = useState(false)
    const handleClick = (id) => {
        getMatchDetails(id).then((data)=>{console.log("Match data",data)
        setdetail(data);
        handleOpen();
    })
        .catch((err)=>console.log(err))
    }
    const getMatchCard = () => {
        return (
            <Card style={{marginTop:15}}>
                <CardContent>
                   <Grid container justify="center" alignItems="center" spacing="4">
                       <Grid item><Typography variant="h5">{match["team-1"]}</Typography></Grid>
                       <Grid item>
                          <img style={{width:85}} src="vs1.png" alt="myImg"></img>
                       </Grid>
                       <Grid item><Typography variant="h5">{match["team-2"]}</Typography></Grid>
                   </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                        <Button onClick={()=>{
                            handleClick(match.unique_id)
                        }}  variant="contained" color="primary">show detail</Button>
                        <Button style={{marginLeft:5}} variant="contained" color="primary">Start Time {new Date(match.dateTimeGMT).toLocaleString()}</Button>
                    </Grid>
                </CardActions>
            </Card>
        )
    };
    const handleClose = () => {
        setopen(false)
    }
     const handleOpen = () =>{
         setopen(true)
     }
    const getDialog = () => (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-discription">
                <Typography>{detail.stat}</Typography>
                <Typography>
                    Match <span style={{fontStyle:"italic",fontWeight:"bold"}}>{detail.matchStarted? "Started": "Still not started"}{" "}</span>
                </Typography>
                <Typography>
                    Score <span style={{fontStyle:"italic",fontWeight:"bold"}}>
                    {" "}
                    {detail.score}
                    </span>
                </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>Close</Button>
            </DialogActions>
        </Dialog>
    );
    return (
       <>
        {getMatchCard()}
        {getDialog()}
       </>
    );

}
export default Mycard;