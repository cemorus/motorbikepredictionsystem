import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router'


const LoadingToRedirect = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((currentCount)=> --currentCount);
        }, 10);
        //redirect once count is equal to 0
        count === 0 && navigate('/login');
        //cleanup
        return ()=> clearInterval(interval);
    },[count, navigate])
  return (
    <div style={{marginTop:"100px", textAlign:"center"}}>
        <h4>Redirecting you in {count} seconds</h4>
    </div>
  )
}

export default LoadingToRedirect