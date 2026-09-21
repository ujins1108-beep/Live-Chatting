import './community.css'
import { supabase } from '../../supabaseClient.js'
import { useEffect, useState } from 'react'
import UserIcon from '../../assets/user-icon.png'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import Warning from '../../components/warning/warning.jsx'

export default function Community() {
    const [posts, setPosts] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [warning, setWarning] = useState({isOpen: true, message: '환영합니다'})
    const posts_per_page = 5

    const now = new Date();

    const currentTime = now.toLocaleString('ko-KR', { hour12: false })

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
            await supabase.from('chattings').insert([{content: inputValue, time: currentTime}])
            loadChattings()
        }
    }

    return (
        <>
            <Warning warning={warning} setWarning={setWarning} />
            <div className='homepage-page'>
                <div className='posts'>
                    <div className='input'>
                        <div className='input-info'>
                            <img src={UserIcon} style={{width: '3vw', height: 'auto'}} />
                            <h4>익명</h4>
                        </div>
                        <textarea onChange={(e) => {setInputValue(e.target.value)}} className='input-textarea' />
                        <div onClick={() => {addPost()}} className='add-button'>등록</div>
                    </div>
                    {posts.map((post, index) => (
                        <div className='post'>
                            <div className='post-info'>
                                <img src={UserIcon} style={{width: '3vw', height: 'auto'}} />
                                <h4>익명</h4>
                                <h4 style={{color: 'gray'}}>{posts[index].time}</h4>
                            </div>
                            <h3 style={{marginTop: 0, marginBottom: 0}}>{posts[index].content}</h3>
                            <div className='post-buttons'>
                                <img src={like} style={{width: '2vw'}} />
                                <h5>좋아요</h5>
                                <img src={dislike} style={{width: '2vw'}} />
                                <h5>좋아요</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}