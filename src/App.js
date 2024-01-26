

import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import { Box, Container, Grid, Stack } from '@mui/material';




export default function App() {
  const [count, setCount] = useState(0);
  

  
  useEffect(()=>{
    if(count===10){
      setCount(0);
     alert('you are reach the limit');

    }
   
     
    
 
 
   },[count])
   

 
    
    
  
  return(
 <Box sx={{m: 2,border: "2px black"}}>
<Container fixed>
    <Grid item xs={4}>
      <Stack direction={"column"} spacing={2}>
        <div className='d-flex justfy-content-start'>
          <h1>Counter app</h1>

        </div>
      <h2>{count}</h2>
    
    <Stack direction={'row'} spacing={2}>
        
        <Button variant="contained" onClick={()=>setCount(count+1)}>+</Button>
        <Button variant="contained" onClick={()=>setCount(count-1)}>-</Button>
        <Button variant="contained" onClick={()=>setCount(0)}>Reset</Button>
      

        
       
 
 
       
          
        
      </Stack>
      </Stack>
      


    
    </Grid>



  

</Container>

 </Box>
 








  );
}


    

  





  


  
 








