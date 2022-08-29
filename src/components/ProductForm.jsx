import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = props => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/newproduct', {
            title,
            price,
            description
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor='title'> Title : </label>
                <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='price'> Price : </label>
                <input type='number' name='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='desc'> Description : </label>
                <input type="text" name='desc' value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <input type="submit" value="Create"/>
        </form>
    )
}


export default ProductForm