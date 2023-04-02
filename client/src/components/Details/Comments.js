import { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { dateCreator } from '../../utils/dateCreator';
import { getAllComments, createComment, deleteComment } from '../../services/commentService';
import { useAuthContext } from '../../contexts/AuthContext';

import styles from './Details.module.css'


export default function Comments({ carId }) {
    const { userId,  userName } = useAuthContext();

    const [comments, setComments] = useState([])

    useEffect(() => {
        getAllComments(carId)
            .then(result => setComments(result))
    }, [carId])

    const onCommentSubmit = async (values) => {
        const result = await createComment({ ...values, carId: carId });
        result.author = { username: userName };
        console.log(comments)
        setComments((state) => (  [...state, result ] ))
    }

    const { values, changeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);





    const onCommentDelete = async (commentId) => {
        await deleteComment(commentId)
        setComments((state) => (state.filter(c => c._id !== commentId)))
    }





    return (


        <div className={styles['comments']} >

            <h1>Commnets</h1>
            <div>
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={onSubmit}>
                        <textarea name="comment" placeholder="Comment......" value={values.comment} onChange={changeHandler}></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>

            </div>

            {
                (comments?.length !== 0) ? <div >
                    <ul>
                        {comments && Object.values(comments).map(c =>
                            <li key={c._id}>

                                <p className={styles['comment-header']}>
                                    Posted by:&nbsp;<strong> {c?.author?.username}</strong>&nbsp;at&nbsp;{dateCreator(c._createdOn)}</p>
                                <p>{c.comment}</p>
                                {userId === c._ownerId && <>
                                    <button type="button" onClick={() => onCommentDelete(c._id)} >Delete</button>
                                    <button type="button" onClick={() => onCommentDelete(c._id)} >Edit</button>
                                </>}
                            </li>
                        )}
                    </ul>
                </div> : <ul> <li>No comments yet.</li> </ul>
            }
        </div>


    );
};
