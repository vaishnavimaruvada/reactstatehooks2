import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'
import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')

  const [commentList, setCommentsList] = useState([])

  console.log(name)
  console.log(commentText)
  const onChangeName = event => {
    setName(event.target.value)
  }

  const onChangeComment = event => {
    setCommentText(event.target.value)
  }
  const onAddComment = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentsList(prevCommentList => [...prevCommentList, newComment])

    setName('')
    setCommentText('')
  }
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          onChange={onChangeName}
          placeholder="Your name"
          value={name}
        />
        <CommentTextInput
          onChange={onChangeComment}
          value={commentText}
          placeholder="Your comment"
          rows="6"
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentList.map(eachcomment => (
          <CommentItem commentDetails={eachcomment} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
