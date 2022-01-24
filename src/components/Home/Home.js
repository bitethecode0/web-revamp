import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="content-wrapper">
            <div className="bio">
                <h1>Hi, I’m June. <br/>Nice to meet you.</h1><br/>
                <h3>I'm an enthusiastic dev interested in making a postivie impact on community by building meaningful things. </h3>

            </div>
            <img alt="profile pic" src={require('../../images/main_photo.jpeg')} className="profile"/>
        </div>
    );
}