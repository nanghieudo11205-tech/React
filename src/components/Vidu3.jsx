import {useState} from 'react'
import {Button} from 'react-bootstrap';
function Vidu3() {
    const [dem, setDem] = useState(0);
    function handleTang() {
        setDem(dem + 1);
    }
    function handleGiam() {
        setDem(dem - 1);
    }

  return (
    <div>
        <h2 className='mt-4'> Dem: {dem}</h2>
        <Button onClick={handleGiam} className='me-2' style={{width:200}} variant='primary'>Decrease</Button>
        <Button onClick={handleTang} style={{width:200}} variant='primary'>Increase</Button>
    </div>
  )
}

export default Vidu3