import { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { dateCreator } from '../../utils/dateCreator';
import { getAllComments, createComment, deleteComment, getOneComment, updateComment } from '../../services/commentService';
import { useAuthContext } from '../../contexts/AuthContext';

import styles from './Details.module.css'


export default function Comments({ carId }) {
    const { userId, userName } = useAuthContext();

    const [comments, setComments] = useState([]);

    const [editComment, setEditComment] = useState(null);

    useEffect(() => {
        getAllComments(carId)
            .then(result => setComments(result))
    }, [carId])

    const onCommentSubmit = async (values) => {
        const result = await createComment({ ...values, carId: carId });
        result.author = { username: userName };
        setComments((state) => ([...state, result]))
    }

    const onEditClick = async (commentId) => {
        const result = await getOneComment(commentId);
        setEditComment(result);
        changeValues({ comment: result.comment })
    }

    const onEditSubmit = async (values) => {
        const result = await updateComment(editComment._id, { ...editComment, comment: values.comment });
        result.author = { username: userName };
        setComments(comments.map(c => c._id === result._id ? result : c));
        setEditComment(null);
    }


    const { values, changeHandler, onSubmit, changeValues } = useForm({
        comment: ''
    }, onCommentSubmit, onEditSubmit, editComment)

    const onCommentDelete = async (commentId) => {
        await deleteComment(commentId)
        setComments((state) => (state.filter(c => c._id !== commentId)))
    }








    return (


        <div className={styles['comments']} >

            <h1>Comments</h1>
            <div>
                <article className="create-comment">
                    <label> {!editComment ? 'Add new comment: ' : 'Edit your comment:'}  </label>
                    <form name="comment" className="form" onSubmit={onSubmit}>
                        <textarea name="comment" placeholder="Comment......" value={values.comment} onChange={changeHandler}  maxLength={150} required={true}  ></textarea>
                        <input  className={styles['rm']}  type="submit" value={!editComment ? "Add Comment" : "Edit Comment"} />
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
                                    {!editComment && <>
                                        <button type="button" onClick={() => onCommentDelete(c._id)} >Delete</button>
                                        <button type="button" onClick={() => onEditClick(c._id)} >Edit</button>
                                        </>
                                    }

                                </>}
                            </li>
                        )}
                    </ul>
                </div> : <ul> <li>No comments yet.</li> </ul>
            }
        </div>


    );
};
