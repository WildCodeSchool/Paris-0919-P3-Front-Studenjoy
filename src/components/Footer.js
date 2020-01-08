import React from 'react'
import Facebook from '../images/Facebook.png'
import Insta from '../images/Insta.png'
import Linkedin from '../images/Linkedin.png'
import Twitter from '../images/Twitter.png'





export default class Footer extends React.Component {
    render() {
        return (
            <div className="Container">
                <div className="Contact">
                    <ul>
                        <li>Adresse: 7, rue Mansour El abidi boulevard Bir anzarane maarif</li>
                        <li>Phone: 0661454441</li>
                        <li> ✉ :  admission@studenjoy.com  </li>
                    </ul>

                </div>
                <div className="Follow">
                 
                 <p>FOLLOW US</p>
                  <img
                    src={Facebook}
                    alt=""  
                  />
                  <img
                    src={Insta}
                    alt=""
                  />
                  <img
                    src={Linkedin}
                    alt=""
                  />
                  <img
                    src={Twitter}
                    alt=""
                  />

                </div>
            </div>

        )
    }
}