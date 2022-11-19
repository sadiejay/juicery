import './About.scss';
import Info from './Info';
import gut from '../images/gut-icon.jpeg';
import heart from '../images/heart-icon.jpg';
import skin from '../images/skin-icon.jpg';
import brain from '../images/brain-icon.jpg';
import colon from '../images/colon-icon.jpg';

/*
This component is rendered when a user clicks "About" in the header or Footer
*/
function About() {
  return (
     <div>



     <Info></Info>


     <h2>Meet the Team</h2>
      <section className='meetTeamSection'>
        <div className='profileCard'>
          <img src={heart} alt='Heart Icon'/>
          <p className='profileName'>Sierra Douglas</p>
          <p>Project & Content Manager</p>
        </div>
        <div className='profileCard'>
          <img src={skin} alt='Skin Icon'/>
          <p className='profileName'>Sadie Jay</p>
          <p>Designer and Front End Developer</p>
        </div>
        <div className='profileCard'>
          <img src={brain} alt='Brain Icon'/>
          <p className='profileName'>Laura Botel</p>
          <p>Back End Developer</p>
        </div>
        <div className='profileCard'>
          <img src={colon} alt='Colon Icon'/>
          <p className='profileName'>Jasmine Reese</p>
          <p>Front End Developer</p>
        </div>
      </section>

     </div>



  );

}

export default About;
