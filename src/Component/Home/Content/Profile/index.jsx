import React from 'react';

const Index = () => {
    return (
        <div className="component-overall p-3 text-center">
            <div className="d-flex justify-content-center">
                <img src={require('./Image/icon.png')} onClick={()=>{window.open('https://www.linkedin.com/in/iampartha/')}} className="profile-picture pointer-cursor" alt="Profile of parthasarathi" />
            </div>
            <h6 className="pointer-cursor mt-2" onClick={()=>{window.open('https://www.linkedin.com/in/iampartha/')}}>Parthasarathi R V</h6>
            <p className="profile-description">Full stack developer [ MERN / MEAN ] | ReactJS | AngularJS | Node.js | Javascript | Passionate Researcher</p>
            <button className="btn profile-view mb-3" onClick={()=>{window.open('https://www.linkedin.com/in/iampartha/')}}>View Profile</button>
        </div>
    )
}

export default Index;
