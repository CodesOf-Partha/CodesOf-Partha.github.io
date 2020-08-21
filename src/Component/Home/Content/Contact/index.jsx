import React from 'react';
import { GitHub, LinkedIn, Twitter, Facebook, Instagram, MailOutline } from '@material-ui/icons';

const Index = () => {
    const data = [
        {
            img: GitHub,
            color:'#000',
            redirectLink:'https://github.com/codesof-partha',
            handle:'CodesOf-Partha'
        },
        {
            img: LinkedIn,
            color:'#0e76a8',
            redirectLink:'https://www.linkedin.com/in/iampartha/',
            handle:'iampartha'
        },
        {
            img: Twitter,
            color:'#00acee',
            redirectLink:'https://twitter.com/RvParthasarathi',
            handle:'RvParthasarathi'
        },
        {
            img: Facebook,
            color:'#4894FF',
            redirectLink:'https://www.facebook.com/rvparthasarathi/',
            handle:'rvparthasarathi'
        },
        {
            img: Instagram,
            color:'#C231A2',
            redirectLink:'https://www.instagram.com/parthasarathi.r.v/',
            handle:'parthasarathi.r.v'
        },
        {
            img: MailOutline,
            color:'#DD4B3E',
            redirectLink:'mailto:rvparthasarathi@gmail.com',
            handle:'rvparthasarathi'
        }
    ]
    return (
        <div className="component-overall p-3 text-center">
            <h6 className="mb-3">Come let's talk with a cup of coffee!<span role="img" aria-label="!!">☕️😋</span></h6>
            <ul>
            {data.map((data)=><li className="pointer-cursor mb-3 text-left" onClick={()=>{window.open(data.redirectLink)}}>
                <div className="pointer-link pt-1"><span className="pr-2"><data.img style={{color:data.color}} /></span>{data.handle}</div>
            </li>)}
            </ul>
        </div>
    )
}

export default Index;
