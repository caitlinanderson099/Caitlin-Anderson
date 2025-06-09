import Navbar from '../components/Navbar'
import Seo from '../components/Seo'


const MyServices = () => {





// MASTER RETURN
return (
    <div className='my-services'>
    <Seo 
        title="My Services | Caitlin Anderson Portfolio"
        description="Explore the portfolio of Caitlin Anderson, a UX Designer & Web Developer based in Wellington, NZ. View featured projects and learn more about my skills."
        url="https://caitlinandersondesign.co.nz/"
    />
    <Navbar/>
    <div className="service-cont">
        <h1>My <span>Services</span></h1>
    </div>
    </div>
  )
}

export default MyServices
