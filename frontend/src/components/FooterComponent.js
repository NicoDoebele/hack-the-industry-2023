import './../styles/footer.css';

export default function FooterComponent(){
    return(
       <div className="footer">

            <div className="event">
                <h3>Hackathon SS 2023</h3>
            </div>

            <div className="names">
                <h4>Members:</h4>
                <ul className='ul'>
                    <p>Marios Tzialidis</p>
                    <p>Jianbang Zhuang</p>
                </ul>
                <ul className='ul'>
                    <p>Nico Döbele</p>
                    <p>Robin Fink</p>
                </ul>
                <ul className='ul'>
                     <p>Cem Bertram</p>
                </ul>
                
            </div>

       </div>
    );
}