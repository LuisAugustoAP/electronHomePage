import "./leftMenu.css"

const LeftMenu = () => {

  function toggleMenu(){
    let menu = document.querySelector(".leftMenu");
    menu!.classList.toggle('active');
  }
  
  return (
    <div className="fullLeftMenu">
      <div className='leftMenu'>
        <div className="menuControl" id="menuToggle" onClick={toggleMenu}>
          <span className="fa-solid fa-bars"/>
        </div>
        <ul className='menuElements'>
          <li className="iconMenu">
            <a href="#">
              <span className="fa-solid fa-house" id="icon"/>
              <span className="tooltip">Home</span>
            </a>
          </li>
          <li className="iconMenu">
            <a href="#">
              <span className="fa-solid fa-ghost" id="icon"/>
              <span className="tooltip">Arcade</span>
            </a>
          </li>
          <li className="iconMenu">
            <a href="#">
              <span className="fa-solid fa-circle-user" id="icon"/>
              <span className="tooltip">Account</span>
            </a>
            
          </li>
        </ul>
      </div>
      <script type="text/javascript" src="./menuScript.js"></script>
    </div>
  )
}

export default LeftMenu
