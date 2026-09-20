import './warning.css'

export default function Warning({ warning, setWarning }) {
    return (
        <>
            {warning.isOpen ? (
                <div className='warning-background'>
                    <div className='warning-box'>
                        <h1>{warning.message}</h1>
                        <button onClick={() => {setWarning({isOpen: false})}}>확인</button>
                    </div>
                </div>
            ):(
                null
            )}
        </>
    )
}