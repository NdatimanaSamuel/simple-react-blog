import { useParams } from 'react-router-dom';
import useFetch from './useFetch'; 
import {useHistory} from 'react-router-dom';

 const BlogDetails = () => {

    const { id } = useParams();
    const {data :blog,error,isPending}=useFetch('http://localhost:8000/blogs/'+id);
    const history=useHistory();

    const handleDelete=()=>{
    fetch('http://localhost:8000/blogs/'+blog.id, {
        method:'DELETE',
    }).then(()=>{
        alert('blog deleted successfully');
        history.push('/');
    })
    }

    return ( 
        
        <div className="blog-details">
            
        {isPending && <div>Loading...</div> }
        {error && <div>{error}</div>}
        {blog && <div>
            <h2>{blog.title}</h2>
             <p>{blog.body}</p>
             <p><strong>done by : {blog.author}</strong></p>
             <button className="btndelete" onClick={()=>handleDelete()}>Delete</button>
            </div>
            
            }
        </div>
     );
 }
  
 export default BlogDetails;