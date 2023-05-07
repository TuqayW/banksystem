import { useRef } from 'react'
import './style.css'
const App = () => {

    let azn=useRef()
    let euro=useRef()
    let lari=useRef()
    let lira=useRef()
    let dirham=useRef()
    let pound=useRef()

    const inptHandle=(e)=>{
        azn.current.innerText=e.target.value*1.7
        euro.current.innerText=e.target.value*0.906242
        lari.current.innerText=e.target.value* 2.485
        lira.current.innerText=e.target.value*19.5195
        pound.current.innerText=e.target.value*0.791213
    }


    return (
        <div>
            <h1>BANK TORRENT</h1>
            <input onChange={inptHandle} type="number" placeholder='Pulu gorumm!' />
            <ul>
                <li>AZN - <span ref={azn}>0</span></li>
                <li>EURO - <span ref={euro}>0</span></li>
                <li>LARI - <span ref={lari}>0</span></li>
                <li>LIRA - <span ref={lira}>0</span></li>
                <li>DIRHAM - <span ref={dirham}>0</span></li>
                <li>POUND - <span ref={pound}>0</span></li>
            </ul>
        </div>
    )
}

export default App