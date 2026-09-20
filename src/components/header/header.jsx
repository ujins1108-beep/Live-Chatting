import './header.css'

export default function Header() {
    return (
        <> 
            <div className='header-box'>
                <div className='header-left' style={{marginRight: 'auto'}}>
                    <h1 style={{margin: 0}}>Live Chatting</h1>
                </div>
                <div className='header-right' style={{marginLeft: 'auto'}}>
                    <h1 style={{margin: 0}}>홈</h1>
                    <h1 style={{margin: 0}}>커뮤니티</h1>
                </div>
            </div>
        </>
    )
}