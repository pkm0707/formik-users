import React,{useState,useEffect} from 'react'
import { Button, TextField } from '@mui/material'
import { useNavigate ,useParams} from "react-router-dom"
import axios from 'axios'
import { API_author} from '../Global'
import LinearProgress from '@mui/material/LinearProgress';

function EditAuthor() {
    const { authorid } = useParams(); 
    const [author, setAuthor] = useState(null)
    useEffect(()=>{
       axios.get(`${API_author}/${authorid}`)
       .then((response)=>setAuthor(response.data))
    },[authorid]) //call only once due to empty dependency
    console.log(author)
    return (author?  <EditAuthorsData author={author}/> : <LinearProgress />)
}

function EditAuthorsData({author}){
    const navigate = useNavigate()
    const [name, setName] = useState(author.name)
    const [dob, setDOB] = useState(author.dob)
    const [biography, setBiography] = useState(author.biography)
    return(
        <div className="add-book-form">
            <form >
                <TextField id="name" name ="name" label="Name" variant="standard" value={name}
                onChange={(event) => setName(event.target.value)}/>
                <br/>
                <br/>
                <TextField id="dob" name ="dob" label="DOB" variant="standard" value={dob}
                onChange={(event) => setDOB(event.target.value)}/>
                <br/>
                <br/>
                <TextField  id="biography" name ="biography" label="Biography" variant="standard" value={biography}
                onChange={(event) => setBiography(event.target.value)}/>
                <br/>
                <br/>
            </form>            
            <Button type ="submit" variant="contained" onClick={() => {
                const updateAuthor = {
                    name: name,
                    dob: dob,
                    biography: biography
                }
                axios.put(`${API_author}/${author.id}`,updateAuthor)
                .then((updateAuthor)=>console.log(updateAuthor))
                .then(()=>navigate("/authors"))
            }
            }>Update Author</Button>
        </div>
    ) 
}
export default EditAuthor