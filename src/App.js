
import './App.css';
import Navbar from './components/Navbar'
import { Grid,Typography } from "@material-ui/core"
import Mycard from './components/Mycard'
import getMatches from './API/Api';
import { useEffect,useState } from 'react';
import React from 'react';
function App() {
  const [matches,setmatches] = useState([]);
  useEffect(() => {
    getMatches().then((data)=> {
      setmatches(data.matches)
      console.log(data.matches)
    }).catch(error=>alert("could not load data"));
  }, []);
  return (
    <div className="App">
     <Navbar />
     <Typography variant="h3" style={{marginTop: 20}}>Welcome to my live score app</Typography>
     <Grid container>
       <Grid sm="2"></Grid>
       <Grid sm="8">
       {
       matches.map((match) => (
        <React.Fragment key={match.unique_id}>
           {(match.type === "Twenty20") ? <Mycard key={match.unique_id} match={match}/> : " "}
        </React.Fragment>
       ))}
       </Grid>
     </Grid>
    </div>
  );
}

export default App;
