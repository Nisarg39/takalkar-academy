"use client"
import Image from 'react-bootstrap/Image';
import varadkongari from '../../public/varadkongari.png'
import vidhishaBhakat from '../../public/vidhishaBhakat.png'
import heethBhandari from '../../public/heethBhandari.png'
import srushtiBakare from '../../public/srushtiBakare.png'
import BadgeAnimation from "../small_components.js/BadgeAnimation"
import PartyPopperAnimation from '../small_components.js/PartyPopperAnimation';
import StarsAnimation from '../small_components.js/StarsAnimation';
const ResultSection = () => {
  return (
    <>
    <div style={{position: "fixed", minWidth: "100vh", minHeight: "100vh", right: "40%"}}>
        <PartyPopperAnimation />
       </div>
    <div style={{position: "fixed", minWidth: "100vh", minHeight: "100vh", left: "40%"}}>
        <PartyPopperAnimation />
       </div>
    <div class="site-section pt-5 text-white " id="teachers-section" style={{background: "linear-gradient(252deg, rgb(34, 193, 195) 31%, rgb(172, 223, 233) 63%)", height: "100vh"}}>
       
      <div class="container mt-3">
        <div class="row mb-3 justify-content-center ">
          <div
            class="col-lg-7 mb-3 text-center"
            data-aos="fade-up"
            data-aos-delay=""
          >

            <div className='container d-flex justify-content-center' style={{maxWidth: "9rem"}}>
                <BadgeAnimation />
                {/* <StarsAnimation /> */}
            </div>

            <h2 class="fs-1 fw-bolder" style={{color: "#0d6a90", display: "inline"}} >
                HALL OF FAME
            </h2>
            <p class="mb-1 fs-3 " >
              Our JEE Toppers
            </p>
          </div>
        </div>
        <div class="row">
          <div
            class="col-md-6 col-lg-6 mb-2"
            
          >
            <div className='container'>

             <a href="#" className="course-category img ms-2 mt-3 " 
                style={{backgroundImage: `url(${varadkongari.src})`,
                    backgroundSize: "cover", 
                    backgroundPositionY: "top",
                    position: "absolute",
                    display: "inline",
                    height: "7rem",
                    width: "7rem"
                }}
             >
           </a>

           </div>
            <div class="teacher text-center p-4" 
                style={{padding: "30px", 
                    // border: "1px solid #e9ecef", 
                    background: "#0d6a90",
                    // background: "white",
                    borderRadius: "30px",
                    boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 1rem"
                }}
            >
             

              <div className="py-1 justify-content-end">
                <h3 className="text-white ms-5 mb-0 fs-5 d-flex justify-content-end">Varad Kongari</h3>
                <p className="position mb-0 d-flex justify-content-end fs-3"  style={{color: "greenyellow", fontWeight: "600" }}>IIT Guwahati</p>
                <p className=" ms-5 ps-5 mb-0 fs-6 d-flex justify-content-end">
                    {/* 99.98%ile State Rank 3 (PCM) */}
                </p>
              </div>
            </div>
          </div>


                {/* ------------------------------------------- */}


          <div
            class="col-md-6 col-lg-6 mb-2"
            
          >
            <div className='container'>

             <a href="#" className="course-category img ms-2 mt-3 " 
                style={{backgroundImage: `url(${vidhishaBhakat.src})`,
                    backgroundSize: "cover", 
                    position: "absolute",
                    display: "inline",
                    height: "7rem",
                    width: "7rem"
                }}
             >
           </a>

           </div>
            <div class="teacher text-center p-4" 
                style={{padding: "30px", 
                    // border: "1px solid #e9ecef", 
                    background: "#0d6a90",
                    // background: "white",
                    borderRadius: "30px",
                    
                }}
            >
              <div className="py-1 justify-content-end">
                <h3 className="text-white ms-5 mb-0 fs-5 d-flex justify-content-end">Vidhisha Bhakat</h3>
                <p className="position mb-0 d-flex justify-content-end fs-3"  style={{color: "greenyellow", fontWeight: "600" }}>IIT Kharagpur</p>
                {/* <p className=" ms-5 ps-5 mb-0 fs-6 d-flex justify-content-end">
                    99.98%ile State Rank 3 (PCM)
                </p> */}
              </div>
            </div>
          </div>

                {/* -------------------------------------- */}

        
                <div
            class="col-md-6 col-lg-6 mb-2"
            
          >
            <div className='container'>

             <a href="#" className="course-category img ms-2 mt-3 " 
                style={{backgroundImage: `url(${heethBhandari.src})`,
                    backgroundSize: "cover", 
                    position: "absolute",
                    display: "inline",
                    height: "7rem",
                    width: "7rem"
                }}
             >
           </a>

           </div>
            <div class="teacher text-center p-4" 
                style={{padding: "30px", 
                    // border: "1px solid #e9ecef", 
                    background: "#0d6a90",
                    // background: "white",
                    borderRadius: "30px",
                    
                }}
            >
              <div className="py-1 justify-content-end">
                <h3 className="text-white ms-5 mb-0 fs-5 d-flex justify-content-end">Heeth Bhandari</h3>
                <p className="position mb-0 d-flex justify-content-end fs-3"  style={{color: "greenyellow", fontWeight: "600" }}>NIT Durgapur</p>
                {/* <p className=' ms-5 ps-5 mb-0 fs-6 d-flex justify-content-end'>
                    JEE Mains Session -1 99.05 %ile
                </p> */}
              </div>
            </div>
          </div>

                {/* -------------------------------------- */}


            
                <div
            class="col-md-6 col-lg-6 mb-2"
            
          >
            <div className='container'>

             <a href="#" className="course-category img ms-2 mt-3 " 
                style={{backgroundImage: `url(${srushtiBakare.src})`,
                    backgroundSize: "cover", 
                    position: "absolute",
                    display: "inline",
                    height: "7rem",
                    width: "7rem"
                }}
             >
           </a>

           </div>
            <div class="teacher text-center p-4" 
                style={{padding: "30px", 
                    // border: "1px solid #e9ecef", 
                    background: "#0d6a90",
                    // background: "white",
                    borderRadius: "30px",
                    
                }}
            >
              <div className="py-1 justify-content-end">
                <h3 className="text-white ms-5 mb-0 fs-5 d-flex justify-content-end">Srushti Bakare</h3>
                <p className="position mb-0 d-flex justify-content-end fs-3"  style={{color: "greenyellow", fontWeight: "600" }}>NIT Nagpur</p>
                {/* <p className=' ms-5 ps-5 mb-0 fs-6 d-flex justify-content-end'>
                  Lorem ipsum dolor sit amet
                </p> */}
              </div>
            </div>
          </div>

                    {/* ---------------------------------- */}       
        </div>                
      </div>
    </div>
    </>
  );
}

export default ResultSection