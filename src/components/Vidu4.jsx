import {useState, useEffect} from 'react'
import {Alert, Button} from 'react-bootstrap'
function Vidu4() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    useEffect(() => {
        console.log('Khong co gi');
    });
    useEffect(() => {
        console.log('co array rong');
    },[]);
    useEffect(() => {
        console.log('co countA va countB');
    },[countA, countB]);
  return (
    <div>
        <Alert variant='primary'>
        <h3>
            CountA: {countA}
            <br/>
            CountB: {countB}
            <br/>
        </h3>
        <Button variant='primary' onClick={() => setCountA(countA + 1)} style={{width:160}} className='me-2'>Tang CountA</Button>
        <Button variant='primary' onClick={() => setCountB(countB + 1)} style={{width:160}} className='me-2'>Tang CountB</Button>
        </Alert>
    </div>
  )
}

export default Vidu4