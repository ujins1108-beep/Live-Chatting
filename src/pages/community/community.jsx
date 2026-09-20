import './community.css'
import { supabase } from '../../supabaseClient.js'
import { useEffect, useState } from 'react'
import Warning from '../../components/warning/warning.jsx'

export default function Community() {
    const [posts, setPosts] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [warning, setWarning] = useState({isOpen: true, message: ''})
    const posts_per_page = 5

    const loadChattings = async () => {
        const {data} = await supabase.from('chattings').select('*').range(0, posts_per_page - 1).order('time', {ascending: false})
        setPosts(data)
    }

    useEffect(() => {
        // eslint-disable-next-line
        loadChattings()
    }, [])

    const addPost = async () => {
        if (inputValue.includes('바보')) {
            setWarning({isOpen: true, message: '부적절한 메세지가 감지되었어요'})
        } else {
            await supabase.from('chattings').insert([{ content: inputValue }])
            loadChattings()
        }
    }

    return (
        <>
            <Warning warning={warning} setWarning={setWarning} />
            <div className='homepage-page'>
                <div className='posts'>
                    <div className='insert-input'>
                        <input onChange={(e) => {setInputValue(e.target.value)}} />
                        <button onClick={() => {addPost()}}>send</button>
                    </div>
                    {posts.map((post, index) => (
                        <div className='post'>
                            <div className='post-information'>
                                <h3>익명</h3>
                                <h3>{posts[index].time}</h3>
                            </div>
                            <h3 style={{marginTop: 0, marginBottom: 0}}>{posts[index].content}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}