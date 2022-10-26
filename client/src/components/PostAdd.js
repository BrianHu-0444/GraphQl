import React, {useEffect} from 'react';

export const PostAdd = () => {

  useEffect(()=>{
    console.log("WISE")
  },[])

  // const [author, setAuthor] = useState("ddd");

  const handleSubmit   = (e) =>{
    e.preventDefalut();
    // const post = {
    //   author:
    // }
  }
  return (
    <div>
      <h2>PostAdd</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Body:</label>
          <textarea name="" id="" cols="30" rows="10"  className='form-control bg-secondary text-white' required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="">Author</label>
          <input type="text" className='form-control bg-secondary text-white' 
           required />
        </div>
        <input type="submit" value="Add" className='btn btn-warning form-control' />
      </form>
    </div>
  )
}

