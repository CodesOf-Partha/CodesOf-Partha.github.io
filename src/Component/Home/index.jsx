import React from 'react';
import Profile from './Content/Profile';
import NewsFeed from './Content/NewsFeed';
import Contact from './Content/Contact';

const Index = () => {
    return (
        <div>
           <div className="row">
                <div className="col-lg-3 mb-3">
                   <Profile />
                </div>
                <div className="col-lg-6 mb-3">
                    <NewsFeed />
                </div>
                <div className="col-lg-3 mb-3">
                    <Contact />
               </div>
           </div>
        </div>
    )
}

export default Index;
