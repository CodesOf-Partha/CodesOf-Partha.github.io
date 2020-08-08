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
            color:'#105292',
            redirectLink:'https://www.linkedin.com/in/iampartha/',
            handle:'iampartha'
        },
        {
            img: Twitter,
            color:'#1776D1',
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
            {data.map((data)=><div className="d-flex justify-content-start pointer-cursor mb-3" onClick={()=>{window.open(data.redirectLink)}}>
                <data.img style={{color:data.color}} />
                <div className="pl-2 pointer-link pt-1">{data.handle}</div>
            </div>)}
        </div>
    )
}

export default Index;
