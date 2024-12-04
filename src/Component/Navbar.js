import'./Navbar.css';
 const max = ['Home', 'About', 'Services', 'Contact'];


const NavBar= ()=>{
    return(
      <nav className="Navbar">
        <div className="nav-div">
          <div className="logo"><a href="/">Trust Bank</a></div>
          <ul className="Navbar-ul">
            {/* <li className="nav-list">
            <a href="/HTML-CLass">Home </a>
            </li>
            <li className="nav-list">
            <a href="/CSS-Class"> About</a>
            </li>
            <li className="nav-list">
            <a href="/JavaScript-Class"> Services</a>
            </li>
            <li className="nav-list">
            <a href="/REACT-JS-Class"> Contact</a>
            </li> */}
            {max.map((kelvin, i)=>(
              <li key={i}>{kelvin}</li>
            ))}
          </ul>
        </div>
       <div className='New-div'>
         <div className='Trust'>
            <h1 className='huss'> Open Our Current <br/> Accout Online</h1>
            <p className='p-tag'> This statistic is based on our average personal currect account online opening time from the last 12 months.</p>
            <button className='btn'> Make an Appointment</button>
          </div>
       </div>
      </nav>
    )
  }
  

export default NavBar;