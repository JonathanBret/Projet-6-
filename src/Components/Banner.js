import logo from '../Assets/logo.png'
/*import '../style/Banner.css'*/

function Banner() {
    return <div className="lmj-banner">
        <img src={logo} alt='Logo Kasa' className='lmj-banner'/>
        <ul>
            <li>Accueil</li>
            <li>À propos</li>
        </ul>
    </div>
}

export default Banner