import React,{useState} from 'react';
import background from '../Assets/background.jpg';

const Home = () => {
    const [isPopupVisible, setPopupVisibility] = useState(false);
  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '90vw',
        backgroundPosition: 'center',
        overflow: 'hidden',
        marginBottom: '40px',
      }}
    >
      <div
        style={{
          color: 'white',
          fontSize: '30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
        }}
      >
        OPENING UP TO YOUR
        <h1>HIGHEST POTENTIAL</h1>


       
        <button 
        style={{
            backgroundColor: '#4CAF50 !important',
            color: 'white !important',
            padding: '10px 20px !important',
            border: 'none !important',
            borderRadius: '5px !important',
            cursor: 'pointer !important',
            fontSize: '16px !important',
            height:'20%'
          }}
          onClick={togglePopup}
        >
          Book Now
        </button>

       
      </div>
      
      <div>
        
      </div>
    </div>
  );
};

export default Home;
