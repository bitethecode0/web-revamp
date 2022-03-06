import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Home() {
    return (
        <div>
          <div className="summary">
            <div className="bio">
                <h1>Hi, I’m June</h1><br/>
                <p>I'm an enthusiastic <span className="underlined">web engineer</span> interested in making a postivie impact on community by building meaningful things.<br/><br/> I'm a backend nerd who loves Go, JavaScript and build scalable distributed systems</p>
            </div>
            <img alt="profile pic" src={require('../../images/main_photo.jpeg')} className="profile"/>
          </div>
          <div className="info">
                <h2>Currently.. </h2>
                <ul>
                    <li>Builing a developer playbook</li>
                    <li>Building mastery of data structures and algorithms</li>
                    <li>Buidling a system to be an ultralearner</li>
                </ul>
          </div>
          <div className="connect">
            <h2>Connect</h2>
            <br/>
            <p>Let's get connected and learn each other</p>
            <br/>
            <ul>
              <li>
                <a href="https:twitter.com/bitethecode" target="_blank"><FontAwesomeIcon icon={faTwitter}/><span>Twitter</span></a>
              </li>
              <li>
                <a href="https:github.com/bitethecode" target="_blank"><FontAwesomeIcon icon={faGithub}/><span>Github</span></a>
              </li>
              <li>
                <a href="https:www.linkedin.com/in/joonhyeok-ahn" target="_blank"><FontAwesomeIcon icon={faLinkedin}/><span>LinkedIn</span></a>
              </li>
            </ul>
          </div>
        </div>
    );
}
