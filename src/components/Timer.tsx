import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
    milliscnds: number
}

export const Timer = ({ milliscnds }: TimerArgs) => {
    
    const [seconds, setSeconds] = useState(0);

    const ref = useRef<NodeJS.Timeout>()

    useEffect(() => {  
        ref.current && clearInterval( ref.current );
      ref.current = setInterval(() => setSeconds( s => s + 1 ) , milliscnds);
    }, [milliscnds]);
    
  return (
    <>
        <h4> Timer: <small>{seconds}</small> </h4>
    </>
  )
}
