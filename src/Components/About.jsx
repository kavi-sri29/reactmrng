import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(location.search){
      console.log('search',location.search);
    }
  },[location])
  return (
    <div>
      <h2>About Page</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae doloremque aperiam enim, pariatur tenetur laudantium eaque at maxime quam possimus modi necessitatibus quisquam distinctio quos similique atque sint et voluptas.</p>
   <br />
   <button onClick={() => navigate('/contact')}>Go to Contact Page</button>
   <h2> {location.state.name}</h2>
    </div>
  )
}

export default About