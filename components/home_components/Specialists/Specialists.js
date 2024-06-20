// Specialists.js
import React from 'react';
import SpecialistsRender from './SpecialistsRender';
import SpecialistsRenderExplore from '../../explore_components/SpecialistsRenderExplore';
import DoctorsData from '../../../utils/data/DoctorsData'

const Specialists = () => {
  // Dummy data for doctors
  // const doctorsData = [
  //   { id: 1, name: 'Dr. John Doe', designation: 'Cardiologist', image: require('../../../assets/images/doc1.png')},
  //   { id: 2, name: 'Dr. Johwen Doe', designation: 'Cardiologist', image: require('../../../assets/images/doc1.png')},
  //   { id: 3, name: 'Dr. Joehn Doe', designation: 'Cardiologist', image: require('../../../assets/images/doc1.png')},
  //   { id: 4, name: 'Dr. Johdfn Doe', designation: 'Cardiologist', image: require('../../../assets/images/doc1.png')},
  //   { id: 5, name: 'Dr. efe Doe', designation: 'Cardiologist', image: require('../../../assets/images/doc1.png')},
  //   { id: 6, name: 'Dr. Jwdcohn Doe', designation: 'Cardiologist', image: require('../../../assets/images/doc1.png')},
  //   { id: 7, name: 'Dr. Jowefhn Doe', designation: 'Cardiologist', image: require('../../../assets/images/doc1.png')},
  //   { id: 8, name: 'Dr. Joswfhn Doe', designation: 'Cardiologist', image: require('../../../assets/images/doc1.png')},
  // ];

  return (
    <>
    
    <SpecialistsRenderExplore data={DoctorsData}/>
    {/* <SpecialistsRender data={doctorsData} /> */}
    </>
  );
};

export default Specialists;



// { id: 2, name: 'Dr. Jane Smith', designation: 'Pediatrician', image: 'https://thispersondoesnotexist.com/' },
    // { id: 3, name: 'Dr. Jane Smith', designation: 'Pediatrician', image: 'https://thispersondoesnotexist.com/' },
    // { id: 4, name: 'Dr. Jane Smith', designation: 'Pediatrician', image: 'https://thispersondoesnotexist.com/' },
    // { id: 5, name: 'Dr. Jane Smith', designation: 'Pediatrician', image: 'https://thispersondoesnotexist.com/' },
    // { id: 6, name: 'Dr. Jane Smith', designation: 'Pediatrician', image: 'https://thispersondoesnotexist.com/' },
    // { id: 7, name: 'Dr. Jane Smith', designation: 'Pediatrician', image: 'https://thispersondoesnotexist.com/' },
    // { id: 8, name: 'Dr. Jane Smith', designation: 'Pediatrician', image: 'https://thispersondoesnotexist.com/' },
    // { id: 9, name: 'Dr. Jane Smith', designation: 'Pediatrician', image: 'https://thispersondoesnotexist.com/' },

    // Add more doctors as needed