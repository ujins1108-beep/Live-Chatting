import './header.css'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()

    return (
        <> 
            <div className='header-box'>
                <div className='header-left' style={{marginRight: 'auto'}}>
                    <h1 style={{margin: 0}}>KkeuJeock</h1>
                </div>
                <div className='header-right' style={{marginLeft: 'auto'}}>
                    <h1 style={{margin: 0}} onClick={() => {navigate('/')}}>홈</h1>
                    <h1 style={{margin: 0}} onClick={() => {navigate('/community')}}>커뮤니티</h1>
                </div>
            </div>
        </>
    )
}