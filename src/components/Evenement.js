import axios from "axios";
import React, { components, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import EvenementCard from "./EvenementCard";
import Header from "./Header";
import Navbar from "./Navbar";
import HeaderMobile from "./HeaderMobile";



export default function Evenement() {
  

  const [evenements, setEvenements] = useState([]);
  useEffect(function () {
    axios.get("http://localhost:8036/api/v1/evenement/").then((res) => {
      setEvenements([...res.data]);
    });
  }, []);

  return (
    <div>
      <Navbar />      
      <Header />
<HeaderMobile/>
      {/* ************************** */}

     

      <div class="blog_area pt-80 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section_title text_center mb-60 mt-3">
                <div class="section_sub_title uppercase mb-3">
                  <h3>Nos Evénements</h3>
                </div>
                <div class="section_main_title">
                  <h1></h1>
                </div>
                <div class="em_bar">
                  <div class="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            {evenements.map((evenment, index) => (
              <EvenementCard key={index} evenment={evenment} />
            ))}
            {/* <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_blog text_center mb-4">
                <div class="single_blog_thumb">
                  <a href="#blog-details.html">
                    <img
                      width="380"
                      height="400"
                      src="assets/images/blended.png"
                      alt=""
                    />
                  </a>
                </div>
                <div class="single_blog_content pl-4 pr-4">
                  <div class="techno_blog_meta shado_bg">
                    <a href="#"> </a>
                    <span class="meta-date pl-3">4-11-2021</span>
                  </div>
                  <div class="blog_page_title pb-1 pt-3">
                    <h3>
                      <a href="blog-details.html">
                        la cérémonie de la remise de prix
                      </a>
                    </h3>
                  </div>
                  <div class="blog_description">
                    <p>
                      {" "}
                      LAMALIF groupe a organisé le 4 Novembre la cérémonie de la
                      remise de prix de la premires édition du concours Madinaty
                      Smart City ;en présence d'un parterre de personnalités du
                      monde académique de l'écosystéme entrepreneurial et de la
                      société civille . Ce concours a été organisé en
                      partenaeiat avec la Cité de l'Innovation{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_blog text_center mb-4">
                <div class="single_blog_thumb">
                  <a href="#blog-details.html">
                    <img
                      width="380"
                      height="400"
                      src="assets/images/blog2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="single_blog_content pl-4 pr-4">
                  <div class="techno_blog_meta shado_bg">
                    <a href="#"> </a>
                    <span class="meta-date pl-3">25-11-2021</span>
                    <span class="meta-date pl-3">27-11-2021</span>
                  </div>
                  <div class="blog_page_title pt-3 pb-1">
                    <h3>
                      <a href="blog-details.html">
                        la 4éme édition de l'événement
                      </a>
                    </h3>
                  </div>
                  <div class="blog_description">
                    <p>
                      la 4éme édition de l'événement 48h pour innover a été à la
                      Cité de l'innovation et a connu la participation de 120
                      étudiants de toutes discipline confondues venus de
                      plusieurs établissments universitaires avec l'objectif de
                      proposer des solutions innovantes qui répond à des
                      problématiques d'industriels et d'entreprises
                      internationales. Cette édition a été organisé
                      conjointement parplusieurs établissements de l'université
                      CADI AYYAD , notamment la cité de l'innovation de
                      Marrakech , la faculté des sciences juridiques économique
                      et sociales ,la faculté des scineces et technique ,et des
                      établssments privés à savoir,la Grande Ecole de Commerce
                      (GEC), et l'Ecole Supérieure des Arts Visuels(ESAV).{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_blog text_center mb-4">
                <div class="single_blog_thumb">
                  <a href="#blog-details.html">
                    <img
                      width="300"
                      height="400"
                      src="assets/images/pic4.png"
                      alt=""
                    />
                  </a>
                </div>
                <div class="single_blog_content pl-4 pr-4">
                  <div class="techno_blog_meta shado_bg">
                    <a href="#"> </a>
                    <span class="meta-date pl-3"
                     
                    
                    
                    >Octobre 10, 2021</span>
                  </div>
                  <div class="blog_page_title pt-3 pb-1">
                    <h3>
                      <a href="blog-details.html"
                       
                      
                      >
                        Evenement CJD Maroc et CJD France
                      </a>
                    </h3>
                  </div>
                  <div class="blog_description"
                    
                  
                  
                  >
                    <p>
                      L'évènement de rencontre entre les membres du centre des
                      jeunes dirigeants Maroc et les membres du centre des
                      jeunes dirigeants France était une occasion en or pour
                      échanger sur l'entreprenariat et partager les expériences
                      des chefs d'entreprises venus de divers horizons c'était
                      également une opportunité de réseautage pour les étudiants
                      universitaires
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_blog text_center mb-4">
                <div class="single_blog_thumb">
                  <a href="#blog-details.html">
                    <img
                      width="300"
                      height="400"
                      src="assets/images/pic3.png"
                      alt=""
                    />
                  </a>
                </div>
                <div class="single_blog_content pl-4 pr-4">
                  <div class="techno_blog_meta shado_bg">
                 
                    <span class="meta-date pl-3">25-11-2021</span>
                    <span class="meta-date pl-3">27-11-2021</span>
                  </div>
                  <div class="blog_page_title pt-3 pb-1">
                    <h3>
                      <a href="#blog-details.html">
                      
                        Evénement de simulations avec POLYTECH, avec
                        GEC,EBF,FSJES
                      </a>
                    </h3>
                  </div>
                  <div class="blog_description">
                    <p>  
                      Evènement de simulation de création d'entreprise organisé
                      au sein de la CIM au profit des étudiants des différents
                      établissements universitaires de Marrakech notamment la
                      faculté des sciences juridiques et économiques et sociales
                      , grandes écoles de commerce , faculté des sciences et
                      techniques en partenariat avec l'Emerging business factory
                      et la société Polytech .
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_blog text_center mb-4">
                <div class="single_blog_thumb">
                  <a href="#blog-details.html">
                    <img
                      width="300"
                      height="400"
                      src="assets/images/startup.png"
                      alt=""
                    />
                  </a>
                </div>
                <div class="single_blog_content pl-4 pr-4">
                  <div class="techno_blog_meta shado_bg">
                  
                    <span class="meta-date pl-3">25-11-2021</span>
                    <span class="meta-date pl-3">27-11-2021</span>
                  </div>
                  <div class="blog_page_title pt-3 pb-1">
                    <h3>
                    
                      <a href="blog-details.html">
                        Réunions avec les startup incubées
                      </a>
                    </h3>
                  </div>
                  <div class="blog_description">
                  
                    <p>
                      Des réunions et des rencontres individuelles avec les
                      porteurs de projet incubés à la CIM ont eu lieu tout au
                      long du mois de Novembre,et ce pour évaluer le potentiel
                      de chaque projet et étudier le blog_descriptionet les
                      attentes de chaque porteur de projet. Ces rencontres ont
                      permis la création de synergies et d'opportunités
                      d'affaires pour les startup.
                    </p>
                  </div>
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
