import React, { useState } from 'react'
import './PostCreate.css'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createPost } from '../../services/posts'

const PostCreate = (props) => {

    const [post, setPost] = useState({
            title: '',
            imageURL: '',
            content: ''
        })

    const [isCreated, setCreated] = useState(false)

    const handleChange = (event) => {
        const { title, value } = event.target
        setProduct({
                ...post,
                [title]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const created = await createPost(post)
        setCreated({ created })
    }

    if (isCreated) {
        return <Redirect to={`/posts`} />
    }
    return (
        <Layout> {/* USED TO BE HERE: user={props.user} -- NEED TO FIGURE OUT WHAT USER IS REPLACED BY */}
            <form className="create-form" onSubmit={handleSubmit}>
                <input
                    className="input-title"
                    placeholder='Title'
                    value={post.title}
                    name='title'
                    required
                    autoFocus
                    onChange={handleChange}
                />
                <textarea
                    className="textarea-content"
                    rows={10}
                    placeholder='Content'
                    value={post.title}
                    name='content'
                    required
                    onChange={handleChange}
                />
                <input
                    className="input-image-link"
                    placeholder='Image Link'
                    value={post.imageURL}
                    name='imageURL'
                    required
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
        </Layout>
    )
}

export default PostCreate