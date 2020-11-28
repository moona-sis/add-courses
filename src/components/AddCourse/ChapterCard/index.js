import React from 'react'
import './chapterCard.css'
import { Input, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

const { TextArea } = Input;

function ChapterCard({ champsId, onChangeForm }) {
    const dispatch = useDispatch()
    const { chapter } = useSelector((state) => state.addCourse)
    const deleteQuestion = (id) => {
        dispatch({
            type: 'SET_STATE',
            payload: { chapter: chapter.filter((elem, i) => i !== id) }

        })
        console.log(id)
    }
    return (
        <div>
            <div className='chapter-content'>
                <Input onChange={(e) => onChangeForm(champsId, 'title', e.target.value)} value={chapter.title} placeholder='Chapter title' className='chapter-input' />
                <Input onChange={(e) => onChangeForm(champsId, 'mainIdeas', e.target.value)} value={chapter.mainIdeas} placeholder=' main ideas' className='chapter-input' />
                <TextArea onChange={(e) => onChangeForm(champsId, 'content', e.target.value)} value={chapter.content} placeholder='Chapter content' className='chapter-input' />
                <div className='button-content'>
                    <div></div>

                    <Button style={{
                        backgroundColor: '#3edcad',
                        marginBottom: '15px',
                        border: '#fff solid 2px',
                        color: '#fff',
                        width: 'fit-content',
                        height: '5vh',
                        fontSize: '20px',
                        fontWeight: '900',

                    }} onClick={() => deleteQuestion()}>Delete</Button>
                </div>

            </div>

        </div>
    )
}

export default ChapterCard
