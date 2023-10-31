import {useState} from 'react'

const Create=() => {
    const [value, setValue] = useState('')
    return (
        <div>
            <form>
                <label>Blog Title</label>
                <input 
                    type="text" 
                    required></input>
                <label>Blog Body</label>
                <textarea 
                    required></textarea>
                <label>Author</label>
                <select>
                    <option value="Emran">Emran</option>
                    <option value="Oumer">Oumer</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default Create