import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Navbar from "./Navbar";

export default function Visite() {
  return (
    <div>
      <Navbar />
      <Header />
      <HeaderMobile />

      {/* visiste */}
      {/* <div class="breatcome_area d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breatcome_title">
                <div class="breatcome_title_inner pb-2">
                  <h2>Visite externe</h2>
                </div>
                <div class="breatcome_content"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div class="how_it_work pt-50 pb-65">
        <div class="container">
          <div class="row">
            {/* <!-- Start Section Tile --> */}
            <div class="col-lg-12">
              <div class="section_title text_center mb-50 mt-3">
                <div class="section_main_title">
                  <h1>Vissite d' établissements de l'université </h1>
                </div>
                <div class="section_sub_title uppercase mb-3"></div>

                <div class="em_bar">
                  <div class="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_it_work mb-4">
                <div class="single_it_work_content pl-2 pr-2">
                  <div class="techno_blog_meta shado_bg">
                    <a href="#"> </a>
                    <span class="meta-date pl-3">1-10-2021</span>
                  </div>
                  <div class="single_work_content_title pb-2">
                    <h4>ENSA MARRAKECH : rencontre avec M.AIT FDIL </h4>
                  </div>
                  <div class="single_it_work_content_text pt-1"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_it_work mb-4">
                <div class="single_it_work_content pl-2 pr-2">
                  <div class="techno_blog_meta shado_bg">
                    <a href="#"> </a>
                    <span class="meta-date pl-3">4-10-2021</span>
                  </div>
                  <div class="single_work_content_title pb-2">
                    <h4>ENCG MARRAKECH : rencontre avec Mme AARIB</h4>
                  </div>
                  <div class="single_it_work_content_text pt-1"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_it_work mb-4">
                <div class="single_it_work_content pl-2 pr-2">
                  <div class="techno_blog_meta shado_bg">
                    <a href="#"> </a>
                    <span class="meta-date pl-3">5-10-2021</span>
                  </div>
                  <div class="single_work_content_title pb-2">
                    <h4>FLSH MARRAKECH:rencontre avec M.BENALI</h4>
                  </div>
                  <div class="single_it_work_content_text pt-1"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_it_work mb-4">
                <div class="single_it_work_content pl-2 pr-2">
                  <div class="techno_blog_meta shado_bg">
                    <a href="#"> </a>
                    <span class="meta-date pl-3">6-10-2021</span>
                  </div>
                  <div class="single_work_content_title pb-2">
                    <h4>FSSM : rencontre avec M.el MOUDDEN</h4>
                  </div>
                  <div class="single_it_work_content_text pt-1"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_it_work mb-4">
                <div class="single_it_work_content pl-2 pr-2">
                  <div class="techno_blog_meta shado_bg">
                    <a href="#"> </a>
                    <span class="meta-date pl-3">7-10-2021</span>
                  </div>
                  <div class="single_work_content_title pb-2">
                    <h4>FSJES : rencontre avec M.OUTALEB</h4>
                  </div>
                  <div class="single_it_work_content_text pt-1"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_it_work mb-4">
                <div class="single_it_work_content pl-2 pr-2">
                  <div class="techno_blog_meta shado_bg">
                    <a href="#"> </a>
                    <span class="meta-date pl-3">8-10-2021</span>
                  </div>
                  <div class="single_work_content_title pb-2">
                    <h4> EST SAFI: renontre avec M.CHEKROUN</h4>
                  </div>
                  <div class="single_it_work_content_text pt-1"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_it_work mb-4">
                <div class="single_it_work_content pl-2 pr-2">
                  <div class="techno_blog_meta shado_bg">
                    <a href="#"> </a>
                    <span class="meta-date pl-3">8-10-2021</span>
                  </div>
                  <div class="single_work_content_title pb-2">
                    <h4>
                      ENSA SAFI: rencontre avec M.ECH-CHADI représentant de M.
                      BENKHOUJA{" "}
                    </h4>
                  </div>
                  <div class="single_it_work_content_text pt-1"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_it_work mb-4">
                <div class="single_it_work_content pl-2 pr-2">
                  <div class="techno_blog_meta shado_bg">
                    <a href="#"> </a>
                    <span class="meta-date pl-3">8-10-2021</span>
                  </div>
                  <div class="single_work_content_title pb-2">
                    <h4>EST ESSAOUIRA : rencontre avec M.EL KALAY </h4>
                  </div>
                  <div class="single_it_work_content_text pt-1"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_it_work mb-4">
                <div class="single_it_work_content pl-2 pr-2">
                  <div class="techno_blog_meta shado_bg">
                    <a href="#"> </a>
                    <span class="meta-date pl-3">11-10-2021</span>
                  </div>
                  <div class="single_work_content_title pb-2">
                    <h4>
                      Cité d'innovation de Fés : rencontre avec M.BENSOUDA
                    </h4>
                  </div>
                  <div class="single_it_work_content_text pt-1"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_it_work mb-4">
                <div class="single_it_work_content pl-2 pr-2">
                  <div class="techno_blog_meta shado_bg">
                    <a href="#"> </a>
                    <span class="meta-date pl-3">11-10-2021</span>
                  </div>
                  <div class="single_work_content_title pb-2">
                    <h4>UIR : rencontre avec M.BOUYA</h4>
                  </div>
                  <div class="single_it_work_content_text pt-1"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_it_work mb-4">
                <div class="single_it_work_content pl-2 pr-2">
                  <div class="techno_blog_meta shado_bg">
                    <a href="#"> </a>
                    <span class="meta-date pl-3">11-10-2021</span>
                  </div>
                  <div class="single_work_content_title pb-2">
                    <h4>EUROMED Fés : rencontre avec M.EL HILALI</h4>
                  </div>
                  <div class="single_it_work_content_text pt-1"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_it_work mb-4">
                <div class="single_it_work_content pl-2 pr-2">
                  <div class="techno_blog_meta shado_bg">
                    <a href="#"> </a>
                    <span class="meta-date pl-3">1-11-2021</span>
                  </div>
                  <div class="single_work_content_title pb-2">
                    <h4>ENS :rencontre avec Mme HARIRI</h4>
                  </div>
                  <div class="single_it_work_content_text pt-1"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_it_work mb-4">
                <div class="single_it_work_content pl-2 pr-2">
                  <div class="techno_blog_meta shado_bg">
                    <a href="#"> </a>
                    <span class="meta-date pl-3">1-11-2021</span>
                  </div>
                  <div class="single_work_content_title pb-2">
                    <h4>FMPM : rencontre avec M.BOUSKRAOUI</h4>
                  </div>
                  <div class="single_it_work_content_text pt-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
