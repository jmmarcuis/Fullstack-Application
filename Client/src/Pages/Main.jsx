import { useRef } from "react";
import "../Pages/Page Styles/Main.css";
import NavBar from "../Components/navBar"; 
import Footer from "../Components/Footer";
import Gallery from "../Components/AccomplishmentGallery";
import FAQ from "../Components/FAQ";
import EventGallery from "../Components/EventGallery";
import MinistryCard from "../Components/MinistryCard";
import ministriesData from "../JSON Data/ministries.json";
import CoreValues from "../Components/CoreValues";
import AboutUs from "../Components/AboutUs";

import headpastor from "../assets/mainpageimages/headpastor.jpg";
import coleadpastor from "../assets/mainpageimages/coleadpastor.jpg";
import mission from "../assets/mainpageimages/mission.jpg";
import vision from "../assets/mainpageimages/vision.jpg";
import mjkbackground from "../assets/mainpageimages/mjkbackground.jpg";
import { Link } from "react-router-dom";



function Main() {
  // This is used for refering to the parent component by both nav and footer components
  const HomeRef = useRef();
  const AboutRef = useRef();
  const FaqRef = useRef();

  return (
    <>
     
        <div ref={HomeRef} className="hero-header-container">
          <NavBar  AboutRef={AboutRef}/>
          <div
            className="header-text-container"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${mjkbackground}) center center/cover no-repeat`,
            }}
          >  
        <h1 className="hero-title">MAKING JESUS KNOWN</h1>
          </div>
        </div>

        {/*Welcome part */}
        <div className="hero-container-welcome-section">
          <h1>Be a part of the New Life Southwoods Family</h1>
          <iframe className="video-placeholder" 
          src="https://www.youtube.com/embed/dfRqYHLanU4?si=KXMR46y-613oQjcc" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        {/*Info of pastors */}
        <div className="hero-container-founder-container">
          <div className="hero-container-founder-flex-wrapper" id="founder1">
            <div className="founder-flex-text-container">
              <h1 className="founder-title">Pastor James Magat</h1>
              <h3 className="founder-description">Lead Pastor</h3>
              <p className="content__text">
                "Wow, how time flies!" Today, with hearts full of gratitude, we come together to celebrate the remarkable milestone 
                of the fourth anniversary of New Life Southwoods FAMILY. Anniversaries, beyond being a mere passage of time, offer us a poignant opportunity 
                to reflect on the incredible journey we've traversed, to assess our current standing, and to cast our collective vision towards the promising future that awaits.
              </p>
              <p className="content__text">
              In these four years, the tapestry of our story has been woven with threads of unwavering faith and the evident hand of our gracious God. 
              It brings to mind the profound words of JESUS in Matthew 16:18, assuring us that He will build His church. New Life Southwoods stands today as a 
              living testament to this divine promise—a vibrant, thriving church that embraces and touches lives across generations. The tapestry is enriched by the collaborative 
              efforts of a diverse and committed community, working harmoniously to manifest the vision that God has laid before us.
              </p>
              <p className="content__text">
              This "heart for the harvest" is more than a concept; it's a shared passion for both God and people. It becomes the driving force behind all our actions and decisions. 
              In expressing our gratitude, Pastor Grace and I extend our heartfelt thanks to the NLSW family—for your love, your prayers, and your generous contributions. 
              We stand in this place today because of your commitment and dedication.
              </p>
            </div>
            <div className="founder-flex-image-container">
              <img className="founder-img fit-image" src={headpastor} alt="Founder Image 1" />
            </div>
          </div>
          <div className="hero-container-founder-flex-wrapper" id="founder2">
            <div className="founder-flex-image-container">
              <img className="founder-img" src={coleadpastor} alt="Founder Image 2" />
            </div>
            <div className="founder-flex-text-container">
              <h1 className="founder-title">Pastora Grace Magat</h1>
              <h3 className="founder-description">Co-Lead Pastor</h3>
              <p className="content__text">
              As we continue our journey towards becoming the church God envisions—a giving church, a praying church, a non-religious church, and a church 
              deeply rooted in God's Word with a Spirit of Faith—we set our gaze on a future where miracles are not just believed but expected, and a fervent passion for the
               harvest propels our every endeavor.
              </p>
              <p className="content__text">
              Special appreciation is extended to our elders, pastors, staff, and volunteer leaders who tirelessly work behind the scenes, meeting the diverse needs of our community.
              Your efforts provide the necessary touch, words, and support that keep this church thriving. A special acknowledgment goes out to our dedicated prayer team. 
              Your unwavering commitment to lifting up the church and its leaders in prayer is acknowledged and deeply appreciated. 
              Indeed, as we often affirm, "Prayer is the backbone of the Ministry."
              </p>
              <p className="content__text">
              In God's providence, we find ourselves strategically positioned with the right people, in the right place, and with hearts attuned to His 
              calling as we brace ourselves for the growth that lies ahead. The greatest need of the church, as we anticipate this expansion, 
              is for people to find their place and remain faithful.
              </p>
            </div>
          </div>
        </div>

        {/*Mission Vision */}
        <div className="hero-container-mission_vision-container">
          <div className="hero-container-mission-flex-wrapper">
            <div className="mission-flex-image-container">
              <img
                className="mission-img"
                src={mission}
                alt="Mission Image Placeholder"
              />{" "}
            </div>
            <div className="mission-flex-text-container">
              <h1 className="mission-title">Mission</h1>
              <h3 className="mission-description">Maturing the BELIEVER</h3>
              <h3 className="mission-description">Making DISCIPLES</h3>
              <h3 className="mission-description">EXPANDING His Kingdom </h3>
              <p className="mission-content__text">
                In every service, our primary mission is to create an atmosphere where the divine presence and the anointing of God are not just felt
                 but actively encountered. We aspire to foster an environment where the Spirit of God permeates every aspect of our worship, touching hearts, and transforming lives.
                  
              </p>

              <p className="mission-content__text">
              At the core of our mission lies the unwavering commitment to teach and uphold the authority of God's Word. 
              In every sermon, lesson, and study, we aim to delve deep into the Scriptures, unveiling the timeless truths and principles that guide our lives. 
              The Word is not merely taught but embraced as the foundation upon which we build our faith, understanding that it holds the power to transform minds, renew spirits, 
              and shape our collective journey.
              </p>

              <p className="mission-content__text">
              A central pillar of our mission revolves around the salvation of the lost and the intentional making of disciples.
             We recognize the urgency and importance of reaching out to those who have yet to experience the life-transforming grace of Christ. 
             Through evangelism, outreach programs, and a genuine concern for the well-being of others, we seek to bring the message of salvation to the lost. 
             Our mission is not confined to the walls of our church; it extends into the lives of individuals, families, and communities. 
              </p>
            </div>
          </div>

          <div className="hero-container-vision-flex-wrapper">
            <div className="vision-flex-text-container">
              <h1 className="vision-title">Vision</h1>
              <h3 className="vision-description">A CITY TO TOUCH!</h3>
              <h3 className="vision-description">A NATION TO REACH! </h3>
              <h3 className="vision-description">A WORLD TO CHANGE!</h3>
              <p className="vision-content__text">
              “I tell you this. You are called Peter, which means a rock. And I will build my church on this rock. Not even the power of hell will destroy my church.”
              </p>
              <p className="vision-content__text">
              A Strong Local Church where people have a solid foundation in God’s WORD.
              </p>
              <p className="vision-content__text">
              A Strong Local Church positioned for the Harvest, trusting in the leading of the HOLY SPIRIT to direct its purpose with passion and fire.
              </p>
              <p className="vision-content__text">
              A Strong Local Church where people are steadfast in PRAYER. Touching the heart of the Father, His glory bringing change to earth.
              </p>
              <p className="vision-content__text">
              A Strong Local Church walking in the GREAT COMMANDMENT and fulfilling the GREAT COMMISSION.
              </p>
            
            </div>
            <div className="vision-flex-image-container">
              <img
                className="vision-img"
                src={vision}
                alt="Vision Image Placeholder"
              />{" "}
            </div>
          </div>
        </div>

        {/*CORE VALUES*/}
        <div className="hero-container-core-values-container">
          <CoreValues />
         </div>

        {/*About us */}
        <div ref={AboutRef} className="hero-container-about-section">
          <AboutUs />

          <div className="hero-container-about-section-description-container">
            <div className="hero-container-about-section-description-wrapper">
              <div className="hero-container-about-section-description-map-container">
               
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.650186562484!2d121.047726475101!3d14.331740786123406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d7ab97796a8f%3A0xbb590b90a63ac105!2sNew%20Life!5e0!3m2!1sen!2sph!4v1705091247844!5m2!1sen!2sph"
                  width="600"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="hero-container-about-section-description-text-container">
              <p className="hero-container-about-section-text"><b>Address:</b></p>
              <p className="hero-container-about-section-text"> 3rd Level, Southwoods Mall, Southwoods City 4024 Binan, Laguna, Philippines </p>
              <p className="hero-container-about-section-text"><b>Contact Us</b></p>
              <p className="hero-container-about-section-text"><b>Email:</b> nlsouthwoods@gmail.com</p>
              <p className="hero-container-about-section-text"><b>Phone Number: </b> 0945 136 8481 (for inquiries and pastoral care services)</p>
              <p className="hero-container-about-section-text"><b>Main Social Media Accounts</b></p>
              <p className="hero-container-about-section-text"><b>Facebook:</b> @Nlsouthwoods</p>
              <p className="hero-container-about-section-text"><b>Instagram:</b> @newlifesouthwoods</p>
              <p className="hero-container-about-section-text"><b>YouTube:</b> New Life Southwoods</p>

              </div>
            </div>
          </div>
          <div style={{paddingBottom: '50px'}}/>
        </div>

        {/*Gallery */}
        <div className="hero-container-gallery-container">
          <Gallery />
        </div>

        {/*Ministry */}
        <div className="hero-container-ministry-container">
          <div className="hero-container-ministry-title">
            <h1>Ministries</h1>
          </div>

          <div className="hero-container-ministry-wrapper">
            
            {ministriesData.map((ministry) => (
              <MinistryCard key={ministry.ministryid} data={ministry} />
            ))}
          </div>

           <div className="hero-container-ministry-button">
            <Link to={"/joinus"}>
              <button className="ministry-button">VIEW MORE</button>
            </Link>
          </div>
        </div>

        {/*Events */}
        <div className="hero-container-event-gallery-container">
          <EventGallery />
        </div>

        {/*FAQ */}
        <div ref={FaqRef} className="hero-container-faq-section">
          <FAQ />
        </div>

        <div className="hero-container-footer-container">
          <Footer HomeRef={HomeRef} AboutRef={AboutRef} FaqRef={FaqRef} ShowCard="show" />
        </div>
      
    </>
  );
}

export default Main;
