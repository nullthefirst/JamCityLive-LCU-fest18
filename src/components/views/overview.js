import React, { Component } from 'react';
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import '../Dark.css'

export default class Overview extends Component {
  render() {
    return (
      <div>
        <h1>Overview</h1>
        <Image className="pic" src={'https://res.cloudinary.com/poetrique/image/upload/v1538031478/clients/jamcitylive/iFoundMyInterest.jpg'} title="iFoundMyInterest" alt="iFoundMyInterest" />
        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title="Info 1">
            <Image className="pic" src={'https://res.cloudinary.com/poetrique/image/upload/c_scale,w_316/v1537693154/clients/jamcitylive/fest1.jpg'} title="Fest 1" alt="Fest 1" />
            <p><b>Jam City Live</b> will carry out the <b>3rd Edition</b> of the <b>Lead City Jam City Festival of Music and Culture</b>, in <b>November 2018</b>, partnering with the prestigious <b>Lead City University, Ibadan</b> and <b>Roc World Consulting Services LTD</b>.</p>
            <p>The <b>Jam City Live Program</b> has over the years provided platforms for various young talented individuals. The program has enabled them to find their interests in various fields of expertise while learning by practice in order hone their crafts in the various industries and skills as they   venture into.</p>
            <p>However, over the years, the Lead City Jam City Festival of Music and Culture has been the ultimate platform for all the various participants of the program to showcase their talents to a widespread audience within a <b>3-day period</b> of varieties of events, programs and opportunities.</p>
          </Tab>
          <Tab eventKey={2} title="Info 2">
            <Image className="pic" src={'https://res.cloudinary.com/poetrique/image/upload/c_scale,h_400/v1537693154/clients/jamcitylive/fest2.jpg'} title="Fest 2" alt="Fest 2" />
            <p>The first and second editions of the Lead City Jam City Festival of Music and Culture happened in 2015 and 2016 after which there was a one year break in 2017. The one Year break has allowed the Jam City Live team to evolve to create an improved festival with new, fun, educating, urban and creative concepts for 2018 that will further progress our communities and the nation as a whole. The Events that have occurred in the past and the updated 2018 Festival are illustrated in items <b>3 and 4</b>.</p>
            <p>The Lead City Jam City Festival of Music and Culture, 2018 will come up in November. It will involve executing the project with Roc World Consulting Services Limited; the agency involved in the Lead City University’s Students’ Entrepreneurial Development Program. The Festival is expanding its horizon by providing platforms for the everyday student of Lead City University and beyond, cutting across many industries and entrepreneurial fields.</p>
            <p>Categories that will benefit young participants of the Festival will cover fields such as; <em>Music, Arts, Fashion, Tech and IOT, Audiovisuals, Photography, Project Management, Dance, Public Relations and Marketing, Artiste and Repertoire, Athleticism, Hosting and MC, Planning and Logistics, Book Keeping, Accounting</em> and lots more.</p>
          </Tab>
          <Tab eventKey={3} title="Info 3">
            <Image className="pic" src={'https://res.cloudinary.com/poetrique/image/upload/c_scale,h_400/v1537693153/clients/jamcitylive/smade.jpg'} title="Smade" alt="Smade" />
            <p>The <b>Smvde Memorial Concert</b> which comes up on the <b>final day</b> of the festival will be dedicated to commemorate late Lead City University and Jam City Live Media team member; <b>Daniel “Smade” Ilesanmi</b>.</p>
            <p>Other new events such as the <em>Friday Night Spice, Cook-Off, Movie Screening, Project Exhibitions by the students of the Entrepreneurial Development Program</em> and other side attractions such as <em>gaming, Photo booth, Trade Fairs</em> and lots more will occur.</p>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
