import React, { Component } from 'react';
import '../Dark.css'

export default class History extends Component {
  render() {
    return (
      <div>
        <h1>History</h1>
        <Image className="pic" src={'https://res.cloudinary.com/poetrique/image/upload/v1538031523/clients/jamcitylive/FridayNightSpice.jpg'} title="FridayNightSpice" alt="FridayNightSpice" width="350" height="450" />
        <p>In 2015, the first Edition of the Lead City Jam City Festival of Music and Culture saw the inception of an urban movement which triggered a chain reaction that opened the eye of many Nigerians to the potential magnitude of such an event. The Festival brought to the limelight many hidden talents with great potential by synching into their interests, as well as constantly reminding them about the Nigerian cultural values.</p>
        <p>In 2016, the Second the Lead City Jam City Festival of Music and Culture was an improved version of the former. The Events included a Welcome Party, ShowBiz101 (Seminar), Community Service, Camp Fire, Concerts, Sports Tourneys, Video Gaming Tourneys, Fashion Show, Theatre Performance, GrubbleDub (Eating Contest), Pool Party, Graffiti Painting and other side attractions.</p>
      </div>
    );
  }
}