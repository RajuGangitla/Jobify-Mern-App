import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>job <span>tarcking</span> app</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam odit laborum inventore optio! Amet temporibus voluptatem maiores quisquam incidunt impedit doloribus minus repellendus illo? Enim natus doloremque repellat? Placeat distinctio fugiat nostrum ipsa dolorum?
          </p>
          <Link to='/register'
            className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </div>
    </Wrapper>
  )
}


export default Landing