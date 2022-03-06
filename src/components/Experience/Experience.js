import React from 'react';
import './Experience.css';


export default function Experience() {
  return (
    <div className="exp">
      <div className="work">
        <img alt="brand logo" src={require('../../images/path.jpeg')} className="journey" />
        <br/>
        <h2>I'm surfing on the waves of life</h2>
        </div>
      <br/>
      <p>
        I'm the main author of this unique journey.
        You may complain the story is boring, crazy, or even scary. Yet, I decided to write it only for myself, not to make others happy long time ago.
        I've been experimenting and stumbling every day to find out what I love thus I don't know where I go. Wish me luck😉

      </p>
      <br/>
      <br/>
      <div className="work">
        <h2>The Journey</h2>
      </div>
      <div className="work">
        <img alt="brand logo" src={require('../../images/wework.jpeg')} className="profile"/>
      </div>
      <h3>Software Engineer - WeWork</h3>
      <i>(Oct 2021 - Current)</i>
      <br/>
      <p>
        As the backend team at WeWork,
        I'm responsible for managing and expanding multiple distributed micro-services related to registration, invoices, payments, or booking logic
        <br/>
        <br/>
        <b>Highlights</b>
      </p>
      <ul>
        <li> Contributed to expanding regions internationally with changes in micro-services for localizations, tax information, and invoices
        </li>
        <li> Currently, refactoring a core service to reduce the complexity of the internal logic to increase the maintainability and further toward a micro-service
        </li>
      </ul>
      <br/>
      <h4>Tech Stack</h4>
      <ul>
        <li>Go</li>
        <li>Postgres</li>
        <li>Docker/K8S</li>
        <li>Kafka</li>
      </ul>

      <div className="work">
        <img alt="brand logo" src={require('../../images/bushel.jpeg')} className="profile"/>
      </div>

      <h3>Software Engineer 1 & 2 - Bushel</h3>
      <i>(Sep 2019 - Oct 2021)</i>
      <br/>
      <p>
        As the trading team at Bushel,
        I was responsible for building and maintaining multiple distributed micro-services related to farming data and trading logic
        <br/>
        <br/>
        <b>Highlights</b>
        <ul>
          <li>Contributed to making automating manual eSgin logic</li>
          <li>Designed and built a message bus in the bridging service to switch from REST to Message based system and reduced a number of failing calls and achieved decoupling between services</li>
          <li>Implemnting logic in the bridging service from digesting, process, and expose freight data to external clients</li>
          <li>Designed and built the API for feeding farming data to internal services</li>
          <li>Designed and built the API for feeding stock data to external clients</li>
        </ul>
      </p>
      <ul>
      </ul>
      <br/>
      <h4>Tech Stack</h4>
      <ul>
        <li>PHP, TypeScript, Kotlin</li>
        <li>Postgres</li>
        <li>Docker/K8S</li>
        <li>REST, Pubsub</li>
      </ul>

      <br/>
      <h3>Software Engineer Intern - Bushel</h3>
      <i>(May 2019 - Sep 2019)</i>
      <br/>
      <p>As the iOS team, I was responsible for maintaining and fixing the existing projects</p>
      <br/>
      <h4>Tech Stack</h4>
      <ul>
        <li>Swift</li>
      </ul>
    </div>
  );
}
