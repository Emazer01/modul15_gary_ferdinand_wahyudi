import logo from '../logo.svg';
const Footer = () => {
    return (
        <footer>
            <left>
                <h5>About the App</h5>
                <p>Toko Buku Asadel</p>
                <p>Universitas Indonesia</p>
                <p>Depok, Jawa Barat</p>
                <p>© 2022 by Toko Buku Asadel</p>
            </left>
            <left>
                <h5>About the Creator</h5>
                <p>Gary Ferdinand Wahyudi</p>
                <p>Toko Buku Asadel</p>
                <p>320200401008</p>
                <p>© 2022</p>
            </left>
            <left>
                <h5>This App Build Using</h5>
                <div className='logo-foot'>
                    <img src={logo} className="App-logo-foot" alt='logo'/>
                    <h1 style={{marginTop:20}}>ReactJS</h1>
                </div>
            </left>
        </footer>
    )
 }

 export default Footer