import {useState, useRef} from 'react'
import {Button} from 'react-bootstrap'
function Vidu5() {
    const [dem, setDem] = useState(0);
    const demRef = useRef(0);
    const DoiTuong={
        dem:0
    }
    function handleTang(){
        setDem(dem + 1);
        demRef.current++;
        DoiTuong.dem++;
    }
  return (
    <div>
        <h3>
            Dem (useState): {dem}
            <br/>
            Dem (useRef): {demRef.current}
            <br/>
            Dem (DoiTuong): {DoiTuong.dem}
        </h3>
        <Button variant='success' onClick={handleTang} className='me-2'>Tang len 1</Button>
    </div>
  )
}

export default Vidu5