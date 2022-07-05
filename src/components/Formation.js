import React from "react";
import {  Link } from "react-router-dom";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Navbar from "./Navbar";
import { useState,useEffect } from "react";
import axios from "axios";
import EvenementCard from "./EvenementCard";
import FormationCard from "./FormationCard";




export default function Formation() {


  const [formations, setFormations] = useState([]);
  useEffect(function () {
    axios.get("http://localhost:8036/api/v1/formation/").then((res) => {
      setFormations([...res.data]);
    });
  }, []);








  return (
    <div>
      
      <Navbar />      
      <Header />
<HeaderMobile/>


{/* ****** */}
      

      <div class="service_area bg_color2 pt-80 pb-70">
        <div class="container">
          <div class="row">
            {/* <!-- Start Section Tile --> */}
            <div class="col-lg-12">
              <div class="section_title text-center mb-50">
                <div class="section_sub_title uppercase mb-3">
                  <h6></h6>
                </div>
                <div class="section_main_title">
                  <h1> formation</h1>
                  <h1></h1>
                </div>
                <div class="em_bar">
                  <div class="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
          {formations.map((formt, index) => (
              <FormationCard key={index} formt={formt} />
            ))}
            
            {/* <div class="col-lg-4 col-md-6 col-sm-12">
              <div
                class="service_style_nine wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
              >
                <div class="services_style_nine_icon pb-25">
                  <div class="icon">
                    <i class="flaticon-system"></i>
                  </div>
                </div>
                <div class="service_style_nine_content">
                  <h4> Journées doctorales du laboratoires L-QUALIMAT</h4>
                  <p class="pt-15">
                    les Journées doctorales de cetee année du laboratoires
                    L-QALIMAT ,dérigée par Mme LEBZAR, se sont déroulées à la
                    CIM , avec programme des tables rondes sur la publication
                    scientifique en sciences d gestion et des ateliers sur
                    l'entrepreneuriat, l'innovation et la transformation
                    digitale. L'événement a été cloturé par une cérémonie de
                    remise du prix du melleur doctorant 2021, en guise de
                    reconnaissance et d'encouragement
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <div
                class="service_style_nine wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
              >
                <div class="services_style_nine_icon pb-25">
                  <div class="icon">
                    <i class="flaticon-graphic-design"></i>
                  </div>
                </div>
                <div class="service_style_nine_content">
                  <h4>3 éme edition des doctorales de la FSJES</h4>
                  <p class="pt-15">
                    Dans le cadre de la journée doctorale , dérigée par PR
                    RIGAR, de la Fculté des Scineces Juridiques,Economiques et
                    Sociales, les doctorants ont rxposé l'état d'avancement de
                    leur thése devant les jurys dans les locaux de la Cité de
                    l'innovation Plusieurs proffesseurs universitaires se soont
                    réunis lors de l 'évenement et ont assisté aux présentations
                    des doctorants{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div
                class="service_style_nine wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
              >
                <div class="services_style_nine_icon pb-25">
                  <div class="icon">
                    <i class="flaticon-computer-1"></i>
                  </div>
                </div>
                <div class="service_style_nine_content">
                  <h4>démarrage du pole valorisaton</h4>
                  <p class="pt-15">
                    Les membres du pole valorisation se sont réunis plusieurs
                    fois avec la direction de la CIM pour discuter de la vision
                    stratégique des plateformes, le démarrage des activités ,
                    ainsi que les vois de collaboration avec les différents
                    acteurs de l 'écosystéme
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* footer */}
      <div class="footer_middle_area footer_bg_shape bg_color4 pt-250 pb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="footer_middle_social">
                <div class="footer_middle_social_icon">
                  <a class="color1" href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a class="color2" href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a class="color3" href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a class="color4" href="#">
                    <i class="fa fa-pinterest"></i>
                  </a>
                  <a class="color5" href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a class="color6" href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a class="color7" href="#">
                    <i class="fa fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="footer_bottom_menu pt-5">
                <div class="footer_bottom_menu_inner">
                  <ul>
                    <li>
                      <a href="#home">Accueil</a>
                    </li>
                    <li>
                      <a href="#company.html">Company</a>
                    </li>
                    <li>
                      <a href="#service.html">Services</a>
                    </li>
                    <li>
                      <a href="evenement.html">Evénement</a>
                    </li>
                    <li>
                      <a href="formulaire.html">Demande d'incubation</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer-bottom-content pt-4 text-center">
                <div class="footer-bottom-content-copy">
                  <p>© 2020 Techno.All Rights Reserved. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
