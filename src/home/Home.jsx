import React, { useEffect, useState, useRef } from "react";
import "./home.css";
import Carousel from "react-material-ui-carousel";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { Images } from "../Images/images";
import Slider from "react-slick";
import MenuIcon from '@material-ui/icons/Menu';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';
import CloseIcon from '@material-ui/icons/Close';
export default function Home({slidesToShow = 3}) {
  const [showText, setShowText] = useState(false);
  const [ImageIndex,setImageIndex] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [hamburgerMenuFixedNavbar, setHamburgerMenuFixedNavbar] = useState(false);
  useEffect(() => {
    setShowText(true);
  }, []);
  useEffect(() => {
    window.onscroll = function(e) {
      if(window.innerWidth>768){
    window.scrollY > 270 ? setNavbar(true) : setNavbar(false);
    }
  }
  }, [])
  var reviewsData = [
    {
      img: "https://einfotech.in/images/einfo/shubham.jpeg",
      Description:
        "Great thought and perfect implementation. App is very good with its content.",
      Name: "Subham Gupta",
    },
    {
      img: "https://einfotech.in/images/einfo/ayush.jpeg",
      Description: "Best app with future requirements of youth.",
      Name: "Ayush Maheswari",
    },
    {
      img: "https://einfotech.in/images/einfo/jame_sir.jpg",
      Description:
        "The best ever news app in the world I would say!!!. I mean it. Delivers exactly what you need",
      Name: "James Joel",
    },
  ];
  const home = useRef();
  const about = useRef();
  const feature = useRef();
  const screenshot = useRef();
  const testimonial = useRef();
  const contact = useRef();
  const homeScrollHandler = () => {
    home.current.scrollIntoView({ behavior: "smooth" });
  };
  const aboutScrollHandler = () => {
    about.current.scrollIntoView({ behavior: "smooth" });
  };
  const testimonialScrollHandler = () => {
    testimonial.current.scrollIntoView({ behavior: "smooth" });
  };
  const featureScrollHandler = () => {
    feature.current.scrollIntoView({ behavior: "smooth" });
  };
  const contactScrollHandler = () => {
    contact.current.scrollIntoView({ behavior: "smooth" });
  };
  const settings = {
    centerMode: true,
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const scrolltoTopHandler = () => {
    home.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
   <div className="container">
      <section className="firstSectionContainer" ref={home}>
        {navbar && (<div className="toggleNavbar">
        <div className="logoContainer">
            <img className="logoImg" src="https://intrigd.co/assets/images/logo.png" alt="" />
          </div>
        <ul className="fixedNavbarItemContainer">
            <li className="navbarItem" onClick={homeScrollHandler}>
              home
            </li>
            <li className="navbarItem" onClick={aboutScrollHandler}>
              about
            </li>
            <li className="navbarItem" onClick={testimonialScrollHandler}>
              testimonial
            </li>
            <li className="navbarItem" onClick={featureScrollHandler}>
              feature
            </li>
            <li className="navbarItem" onClick={contactScrollHandler}>
              contact
            </li>
          </ul>
        </div>)}
        <div className="flexibleNavbar">
          <div className="logoContainer">
            <img className="logoImg" src="https://intrigd.co/assets/images/logo.png" alt="" />
          </div>
          <ul className="navbarItemContainer">
            <li className="navbarItem" onClick={homeScrollHandler}>
              home
            </li>
            <li className="navbarItem" onClick={aboutScrollHandler}>
              about
            </li>
            <li className="navbarItem" onClick={testimonialScrollHandler}>
              testimonial
            </li>
            <li className="navbarItem" onClick={featureScrollHandler}>
              feature
            </li>
            <li className="navbarItem" onClick={contactScrollHandler}>
              contact
            </li>
          </ul>
          <div className="hamburgerMenuFixedNavbar">
        <ul className={hamburgerMenuFixedNavbar?"hamburgerMenuFixedNavbarListContainer":"hiddenHamburgerMenuFixedNavbarListContainer"}>
        <li className="hamburgerMenuFixedNavbarListItem">HOME</li>
        <li className="hamburgerMenuFixedNavbarListItem">ABOUT</li>
        <li className="hamburgerMenuFixedNavbarListItem">FEATURE</li>
        <li className="hamburgerMenuFixedNavbarListItem">SCREENSHOT</li>
        <li className="hamburgerMenuFixedNavbarListItem">TESTIMONIAL</li>
        <li className="hamburgerMenuFixedNavbarListItem">CONTACT</li>
        </ul>
        </div>
        </div>
        <div className={hamburgerMenu?"hamburgerMenuContainer":"hiddenHamburgerMenuContainer"}>
        {hamburgerMenu || hamburgerMenuFixedNavbar?<CloseIcon className="closeHamburgerMenu" onClick={()=>{window.innerWidth>768?setHamburgerMenu(false):setHamburgerMenuFixedNavbar(false)  
      }}/>:<MenuIcon className="hamburgerMenuIcon" onClick={()=>{
          window.innerWidth>768?setHamburgerMenu(true):setHamburgerMenuFixedNavbar(!hamburgerMenuFixedNavbar);
        }
          }
          />}
        <div className="hamburgerMenu">
        <ul className={hamburgerMenu?"hamburgerMenuListContainer":"hiddenHamburgerMenuListContainer"}>
        <li className="hamburgerMenuListItem">HOME</li>
        <li className="hamburgerMenuListItem">ABOUT</li>
        <li className="hamburgerMenuListItem">FEATURE</li>
        <li className="hamburgerMenuListItem">SCREENSHOT</li>
        <li className="hamburgerMenuListItem">TESTIMONIAL</li>
        <li className="hamburgerMenuListItem">CONTACT</li>
        </ul>
        </div>
        </div>
        <div className="titleSection">
          <div className="wrapper">
            <div className={hamburgerMenuFixedNavbar?"toggledTitleAndBtnWrapper":"titleaAndBtnWrapper"}>
              <h1 className={showText ? "title" : "hiddenText"}>
                Intrigd The Ultimate Reading App.
              </h1>
              <div className={showText?"appStoreBtnContainer":"initialAppStoreBtnContainer"}>
                <button className="appstoreBtn">
                  <div style={{display:"flex",justifyContent:"center",color:"#333"}}>                 
                  <AndroidIcon/>
                  <p className="btnText">Android</p>
                  </div>
                </button>
                <button className="appstoreBtn">
                <div style={{display:"flex",justifyContent:"center",color:"#333"}}>
                <AppleIcon style={{marginTop:"-2px"}}/>
                  <p className="btnText">iOS</p>
                  </div>
                </button>
              </div>
            </div>
            <img
              className="floatingPhoneImg"
              src="https://intrigd.co/assets/images/about1/inner-1.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="aboutContainer" ref={about}>
        <div className="aboutWrapper">
          <img
            src="https://intrigd.co/assets/images/about1/01.png"
            alt=""
            className="aboutSectionImage"
          />
          <div className="aboutSectionDescription">
            <h1 className="aboutTitleText">ABOUT INTRIGD</h1>
            <p>An opinion aggregator for long format content </p>
            <p>
              {" "}
              presents unbiased content with a vast coverage across industries
              and daily events.{" "}
            </p>
            <p>
              helps in effortless consumption of opinions through meaningful
              summaries
            </p>
            <button className="downloadBtn">Download</button>
          </div>
        </div>
      </section>
      <section className="featureSection" ref={feature}>
        <h1 className="featureSectionTitleText">OUR APP FEATURE</h1>

        <div className="featureWrapper">
          <div className="cardContainer">
            <div className="cardComponent">
              <img
                style={{ width: "2.375rem" }}
                src="https://intrigd.co/assets/images/Selection.png"
                alt=""
              />
              <h2>Selection</h2>
              <h3>
                Cut out the clutter with curated content handpicked especially
                for you.
              </h3>
            </div>
            <div className="cardComponent">
              <img
                style={{ width: "38px" }}
                src="https://intrigd.co/assets/images/Aggregation.png"
                alt=""
              />
              <h2>Aggregation</h2>
              <h3>
                Differing opinions aggregated in an easy-to-consume fashion.
              </h3>
            </div>
            <div className="cardComponent">
              <img
                style={{ width: "38px" }}
                src="https://intrigd.co/assets/images/Simplification.png"
                alt=""
              />
              <h2>Simplification</h2>
              <h3>Diverse range of complex topics simplified for you.</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="screenshotsContainer" ref={screenshot}>
        <div className="screenshotsWrapper">
          <h1>APP SCREENSHOTS</h1>
          <Slider {...settings}>
          {Images.map((image,index)=>(
           <img src={image.src} alt="" className={index===ImageIndex?"appScreenshotImg":"unactiveScreenshotImg"} />
            ))}
            </Slider>
        </div>
      </section>
      <section className="reviewsContainer" ref={testimonial}>
        <Carousel
          animation="slide"
          timeout={250}
          navButtonsProps={{          
            style: {
                backgroundColor: 'cornflowerblue',
                borderRadius: 0,
                display:"none"
            }
        }} 
          indicatorIconButtonProps={{
            style: {
              color: "white",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: "#29b9f2",
            },
          }}
        >
          {reviewsData.map((review) => (
            <div className="singleReviewComponent">
              <img src={review.img} alt="" className="reviewsAuthor" />
              <ul className="reviewStarList">
                <li className="reviewStarItem">
                  <StarIcon style={{ color: "yellow" }} />
                </li>
                <li className="reviewStarItem">
                  <StarIcon style={{ color: "yellow" }} />
                </li>
                <li className="reviewStarItem">
                  <StarIcon style={{ color: "yellow" }} />
                </li>
                <li className="reviewStarItem">
                  <StarIcon style={{ color: "yellow" }} />
                </li>
                <li className="reviewStarItem">
                  <StarBorderIcon style={{ color: "yellow" }} />
                </li>
              </ul>
              <div className="lines"></div>
              <p>{review.Description}</p>
              <h4>{review.Name}</h4>
            </div>
          ))}
        </Carousel>
      </section>
      <section className="contactUsContainer" ref={contact}>
        <div className="downloadAppWrapper">
          <h1>DOWNLOAD OUR APP</h1>
          <div className="btnContainer">
            <button className="downloadAppBtn">ANDROID </button>
            <button className="downloadAppBtn">iOS </button>
          </div>
        </div>

        <form className="contactUsForm">
          <div className="contactUsInformation">
            <h2>CONTACT US</h2>
            <div className="contactNumber">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="29.000000pt"
                height="29.000000pt"
                viewBox="0 0 60.000000 60.000000"
                preserveAspectRatio="xMidYMid meet"
                className="phoneIcon"
              >
                <g
                  transform="translate(0.000000,60.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M117 516 c-72 -67 -32 -172 119 -316 75 -71 157 -120 202 -120 32 0
78 28 93 57 15 29 5 41 -67 83 l-49 28 -38 -20 -39 -19 -65 64 -64 65 19 39
20 38 -26 45 c-50 88 -63 95 -105 56z"
                  />
                </g>
              </svg>
              <h2 style={{ fontWeight: "500", fontSize: "18px" }}>
                +91-8025043077
              </h2>
            </div>
            <div className="emailContainer">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="29.000000pt"
                height="29.000000pt"
                viewBox="0 0 16.000000 16.000000"
                preserveAspectRatio="xMidYMid meet"
                className="emailIcon"
              >
                <g
                  transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M0 80 l0 -60 80 0 80 0 0 60 0 60 -80 0 -80 0 0 -60z m145 0 l0 -45
-65 0 -65 0 -3 33 c-6 58 1 63 70 60 l63 -3 0 -45z"
                  />
                  <path
                    d="M34 103 c19 -23 19 -23 0 -45 -19 -23 -19 -23 1 -7 24 19 65 19 91
-1 19 -14 19 -14 0 8 -19 22 -19 22 0 45 10 12 4 9 -14 -7 l-32 -30 -32 30
c-18 16 -24 19 -14 7z"
                  />
                </g>
              </svg>
              <h2 style={{ fontWeight: "500", fontSize: "18px" }}>
                info@intrigd.co
              </h2>
            </div>
          </div>
          <div className="contactUsFormInputFields">
            <input type="text" className="nameInputField" placeholder="Name" />
            <input
              type="text"
              className="emailInputField"
              placeholder="Email"
            />
            <input
              type="text"
              className="subjectInputField"
              placeholder="Subject"
            />
            <textarea
              id="messageInputField"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button>Submit</button>
          </div>
        </form>
      </section>
      <footer className="footerContainer">
        <p>Copyright © . All Rights Reserved</p>
        <p>Terms & Conditions</p>
        <p>Privacy and Policy</p>
        <div className="socialMediaIconsContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
          >
            <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
          >
            <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 32">
            <path d="m5.706 7.798v16.202h-5.395v-16.202zm.343-5.002c.001.029.002.063.002.098 0 .749-.318 1.423-.826 1.895l-.002.001c-.545.498-1.274.803-2.075.803-.049 0-.099-.001-.148-.003h.007-.033c-.041.002-.089.003-.137.003-.784 0-1.496-.306-2.025-.804l.001.001c-.504-.488-.816-1.17-.816-1.925 0-.024 0-.048.001-.073v.004c-.001-.021-.001-.045-.001-.069 0-.762.324-1.448.841-1.929l.002-.001c.544-.495 1.271-.799 2.068-.799.046 0 .091.001.137.003h-.006c.043-.002.092-.003.143-.003.785 0 1.5.303 2.034.798l-.002-.002c.515.497.835 1.193.835 1.964v.042-.002zm19.062 11.92v9.284h-5.378v-8.665c.005-.079.007-.171.007-.263 0-.896-.249-1.733-.682-2.447l.012.021c-.427-.596-1.117-.979-1.896-.979-.06 0-.12.002-.18.007h.008c-.027-.001-.058-.002-.089-.002-.62 0-1.19.213-1.641.57l.006-.004c-.453.367-.808.836-1.032 1.375l-.008.023c-.116.355-.182.763-.182 1.187 0 .048.001.096.003.144v-.007 9.042h-5.378q.033-6.523.033-10.578t-.016-4.839l-.016-.785h5.378v2.354h-.033c.214-.345.435-.644.678-.924l-.008.009c.281-.309.583-.588.908-.838l.016-.012c.404-.311.878-.555 1.392-.704l.03-.007c.538-.161 1.157-.254 1.797-.254h.079-.004c.071-.003.154-.005.237-.005 1.681 0 3.195.714 4.256 1.856l.003.004q1.702 1.856 1.702 5.436z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <g data-name="ig instagram insta photo">
              <path d="M20.45,13.32a1,1,0,0,0-.57,1.3,4,4,0,1,1-2.31-2.3,1,1,0,1,0,.71-1.87,6,6,0,0,0-6.37,9.85,6,6,0,0,0,8.48,0,6,6,0,0,0,1.36-6.41A1,1,0,0,0,20.45,13.32Z" />
              <circle cx="23" cy="9" r="1" />
              <path d="M28,9a5,5,0,0,0-4.9-5h0A77.11,77.11,0,0,0,9,4,5,5,0,0,0,4,8.92,91.91,91.91,0,0,0,4,23a5,5,0,0,0,4.9,5h0c2.36.22,4.73.34,7.1.34s4.71-.11,7.05-.34A5,5,0,0,0,28,23.08,87.09,87.09,0,0,0,28,9ZM26,23a3,3,0,0,1-3,3h-.1A71.73,71.73,0,0,1,9,26a3,3,0,0,1-3-3.08A92.4,92.4,0,0,1,6,9,3,3,0,0,1,9.09,6q3.44-.31,6.9-.32T23,6a3,3,0,0,1,3,3.08A85.13,85.13,0,0,1,26,23Z" />
            </g>
          </svg>
        </div>
      </footer>
      {navbar && <button className="scrollToTopBtn" onClick={scrolltoTopHandler}><ArrowUpwardIcon/></button>}
      </div>
    </>
  );
}
