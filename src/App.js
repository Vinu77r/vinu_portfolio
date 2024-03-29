import logo from "./logo.svg";
import "../src/css/App.scss";
import Vinu_resume_pdf from "../src/files/resume.pdf";
//import { render } from "@testing-library/react";
import user from "../src/user.json";
//import React, { useState } from "react";

//mail click
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";

import icon_html from "../src/images/html.svg";
import icon_css from "../src/images/css.svg";
import icon_javaScript from "../src/images/javascript.svg";
import icon_sassy from "../src/images/sass.svg";
import icon_react from "../src/images/react.svg";
import icon_expo from "../src/images/expo.svg";

//Version control
import icon_github from "../src/images/github.svg";
import icon_gitlab from "../src/images/gitlab.svg";

//IDE
import icon_vscode from "../src/images/vs.svg";

//Design tools
import icon_figma from "../src/images/figma.svg";
import icon_sketch from "../src/images/sketch.svg";

//Collabration tool
import icon_zeplin from "../src/images/zeplin.svg";
import icon_invision from "../src/images/invision.svg";

//organization logo

import logo_zoho from "../src/images/zoho/zoho.svg";
import logo_zoho_workplace from "../src/images/zoho/workplace.svg";
import logo_zoho_mail from "../src/images/zoho/mail.svg";
import logo_zoho_mail_admin_panel from "../src/images/zoho/008.svg";
import logo_zoho_mail_360 from "../src/images/zeplin.svg";

import logo_sutherland from "../src/images/sutherland/sutherland.svg";

import under_construction from "../src/images/uc.svg";
import { BiMenu } from "react-icons/bi";

function App() {
  return (
    <div className="pf">
      <Header_nav />
      <main>
        <About />
        <Skills />
        <Experience />
        <Products />
      </main>
    </div>
  );
}
const open_in_Newtab = (url) => {
  const newWindow = window.open(url, "_blank");
  if (newWindow) newWindow.opener = null;
};

function ham_click() {
  var element = document.getElementById("ham_list");
  element.classList.toggle("pf-header-nav-ham-list-show");
}

function menu_select() {
  var element = document.getElementById("ham_list");
  element.classList.toggle("pf-header-nav-ham-list-show");
}

function Header_nav() {
  return (
    <header className="pf-header">
      <div className="pf-header__logo">VR</div>
      <nav className="pf-header-nav">
        <ScrollIntoView selector="#about" className="pf-header-nav__item">
          About
        </ScrollIntoView>
        <ScrollIntoView selector="#skills" className="pf-header-nav__item">
          Skills
        </ScrollIntoView>
        <ScrollIntoView selector="#experience" className="pf-header-nav__item">
          Experience
        </ScrollIntoView>
        <ScrollIntoView selector="#products" className="pf-header-nav__item">
          Products
        </ScrollIntoView>
      </nav>
      <div className="pf-header-socialprofile">
        <button
          className="pf-icon-button"
          onClick={() => open_in_Newtab("https://github.com/Vinu77r")}
        >
          <i className="pfi-github"></i>
        </button>
        <button
          className="pf-icon-button"
          onClick={() => open_in_Newtab("https://www.linkedin.com/in/pf77/")}
        >
          <i className="pfi-linkedin"></i>
        </button>
        <button
          className="pf-icon-button"
          onClick={() => open_in_Newtab("https://www.instagram.com/__pf77__")}
        >
          <i className="pfi-insta"></i>
        </button>
      </div>
      <button
        className="pf-header-nav-ham-icon"
        onClick={ham_click}
      >
        <BiMenu size={26} />
      </button>
      <div className="pf-header-nav-ham-list" id="ham_list">
        <ScrollIntoView
          selector="#about"
          className="pf-header-nav-ham-list-item"
          onClick={menu_select}
        >
          About
        </ScrollIntoView>
        <ScrollIntoView
          selector="#skills"
          className="pf-header-nav-ham-list-item"
          onClick={menu_select}
        >
          Skills
        </ScrollIntoView>
        <ScrollIntoView
          selector="#experience"
          className="pf-header-nav-ham-list-item"
          onClick={menu_select}
        >
          Experience
        </ScrollIntoView>
        <ScrollIntoView
          selector="#products"
          className="pf-header-nav-ham-list-item"
          onClick={menu_select}
        >
          Products
        </ScrollIntoView>
      </div>
    </header>
  );
}

function About() {
  const about = {
    title: "Hello",
    userName: " I am  Vinu",
    jobTitle: "UI Developer",
    aboutUser:
      "I'm a UI Developer with 5+ years of experience who loves design, code, and coffee. I have a passion for crafting human-computer interaction and believe in building easy-to-maintain websites/apps by breaking them down into its smallest components. ",
  };
  return (
    <section className="pf-about" id="about">
      <p className="pf-title pf-title--md pf-about__hello">{about.title}</p>
      <p className="pf-title pf-title--lg pf-about__name">
        {about.userName} - {about.jobTitle}
      </p>
      <p className="pf-desc pf-about__desc">{about.aboutUser}</p>
      <a href={Vinu_resume_pdf} download="Vinu_resume.pdf">
        <button className="pf-primary-button pf-about__button">
          Get resume
        </button>
      </a>
    </section>
  );
}

function Skills() {
  const skills_set_1 = {
    skills_title: "Development skills",
    skill_1: "HTML/HTML5",
    skill_2: "CSS/CSS3",
    skill_3: "JavaScript",
    skill_4: "Sassy CSS",
    skill_5: "React.js",
    skill_6: "Expo",
  };
  const skills_set_2 = {
    skills_title: "Version control",
    skill_1: "Github",
    skill_2: "Gitlab",
  };
  const skills_set_3 = {
    skills_title: "IDE",
    skill_1: "VS Code ",
  };
  const skills_set_4 = {
    skills_title: "Design tools",
    skill_1: "Figma ",
    skill_2: "Sketch",
  };
  const skills_set_5 = {
    skills_title: "Collabration tools",
    skill_1: "Zeplin ",
    skill_2: "Invision ",
  };
  return (
    <section className="pf-skills" id="skills">
      <p className="pf-title pf-title--sm">Skills</p>
      <div className="pf-skills-cat-list">
        <div className="pf-skills-cat-item">
          <p className="pf-title pf-title--xs">{skills_set_1.skills_title}</p>
          <div className="pf-skills-list">
            <div className="pf-skills-item">
              <div className="pf-skills-item__icon">
                <img src={icon_html} />
              </div>
              <p className="pf-skills-item__desc">{skills_set_1.skill_1}</p>
            </div>
            <div className="pf-skills-item">
              <div className="pf-skills-item__icon">
                <img src={icon_css} />
              </div>
              <p className="pf-skills-item__desc">{skills_set_1.skill_2}</p>
            </div>
            <div className="pf-skills-item">
              <div className="pf-skills-item__icon">
                <img src={icon_javaScript} />
              </div>
              <p className="pf-skills-item__desc">{skills_set_1.skill_3}</p>
            </div>
            <div className="pf-skills-item">
              <div className="pf-skills-item__icon">
                <img src={icon_sassy} />
              </div>
              <p className="pf-skills-item__desc">{skills_set_1.skill_4}</p>
            </div>
            <div className="pf-skills-item">
              <div className="pf-skills-item__icon">
                <img src={icon_react} />
              </div>
              <p className="pf-skills-item__desc">{skills_set_1.skill_5}</p>
            </div>
            <div className="pf-skills-item">
              <div className="pf-skills-item__icon">
                <img src={icon_expo} />
              </div>
              <p className="pf-skills-item__desc">{skills_set_1.skill_6}</p>
            </div>
          </div>
        </div>
        <div className="pf-skills-cat-item">
          <p className="pf-title pf-title--xs">{skills_set_2.skills_title}</p>
          <div className="pf-skills-list">
            <div className="pf-skills-item">
              <div className="pf-skills-item__icon">
                <img src={icon_github} />
              </div>
              <p className="pf-skills-item__desc">{skills_set_2.skill_1}</p>
            </div>
            <div className="pf-skills-item">
              <div className="pf-skills-item__icon">
                <img src={icon_gitlab} />
              </div>
              <p className="pf-skills-item__desc">{skills_set_2.skill_2}</p>
            </div>
          </div>
        </div>
        <div className="pf-skills-cat-item">
          <p className="pf-title pf-title--xs">{skills_set_3.skills_title}</p>
          <div className="pf-skills-list">
            <div className="pf-skills-item">
              <div className="pf-skills-item__icon">
                <img src={icon_vscode} />
              </div>
              <p className="pf-skills-item__desc">{skills_set_3.skill_1}</p>
            </div>
          </div>
        </div>{" "}
        <div className="pf-skills-cat-item">
          <p className="pf-title pf-title--xs">{skills_set_4.skills_title}</p>
          <div className="pf-skills-list">
            <div className="pf-skills-item">
              <div className="pf-skills-item__icon">
                <img src={icon_figma} />
              </div>
              <p className="pf-skills-item__desc">{skills_set_4.skill_1}</p>
            </div>
            <div className="pf-skills-item">
              <div className="pf-skills-item__icon">
                <img src={icon_sketch} />
              </div>
              <p className="pf-skills-item__desc">{skills_set_4.skill_2}</p>
            </div>
          </div>
        </div>
        <div className="pf-skills-cat-item">
          <p className="pf-title pf-title--xs">{skills_set_5.skills_title}</p>
          <div className="pf-skills-list">
            <div className="pf-skills-item">
              <div className="pf-skills-item__icon">
                <img src={icon_zeplin} />
              </div>
              <p className="pf-skills-item__desc">{skills_set_5.skill_1}</p>
            </div>
            <div className="pf-skills-item">
              <div className="pf-skills-item__icon">
                <img src={icon_invision} />
              </div>
              <p className="pf-skills-item__desc">{skills_set_5.skill_2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <div className="pf-experience" id="experience">
      <p className="pf-title pf-title--sm">Experience</p>
      <div className="pf-experience-organization">
        <div className="pf-experience-organization-details">
          <img
            className="pf-experience-organization-details__logo"
            src={logo_zoho}
          />
          <div className="pf-experience-organization-details-role-name-wra">
            <p className="pf-experience-organization-details__role">
              Web developer
            </p>
            ,
            <p className="pf-experience-organization-details__name">
              Zoho Corporation
            </p>
          </div>
          <div className="pf-experience-organization-details-duration-wra">
            <p className="pf-experience-organization-details__timeperiod">
              April 2018 - Present
            </p>
            <p className="pf-experience-organization-details__timeduration">
              2 year 7 months
            </p>
          </div>
        </div>
        <ul className="pf-experience-organization-responsibility">
          <li>Developing new UI features with interactive user experience</li>
          <li>Writing client-side Javascript and CSS preprocessor SASS</li>
          <li>Building reusable code and components for future use</li>
          <li>Developing customized themes for the application</li>
          <li>
            Implementing features to improve the user experience and usability
          </li>
          <li>Ensuring the technical feasibility of UI/UX design</li>
        </ul>
        <div className="pf-experience-organization-projects">
          <div className="pf-experience-organization-projects-item">
            <div className="pf-experience-organization-projects-item-header">
              <div className="pf-experience-organization-projects-item__logo">
                <img src={logo_zoho_workplace} />
              </div>
              <div className="pf-experience-organization-projects-item-title-wra">
                <p className="pf-experience-organization-projects-item__title">
                  Zoho Workplace
                </p>
                <a
                  href="https://www.zoho.com/workplace"
                  className="pf-experience-organization-projects-item__url"
                >
                  https://www.zoho.com/workplace
                </a>
              </div>
            </div>
            <div className="pf-experience-organization-projects-item__desc">
              Zoho Workplace is an office suite with nine integrated Zoho apps
              like Mail, Cliq, Connect, WorkDrive, Show, Sheet, Writer, Meeting
              and ShowTime. You can access all the apps without switching
              between browser tabs with the help of a Workplace Dashboard with
              apps displayed as widgets.Dashboard is customisable and users can
              rearrange the app widgets and stay connected with the unified
              interface.
            </div>
          </div>
          <div className="pf-experience-organization-projects-item">
            <div className="pf-experience-organization-projects-item-header">
              <div className="pf-experience-organization-projects-item__logo">
                <img src={logo_zoho_mail} />
              </div>
              <div className="pf-experience-organization-projects-item-title-wra">
                <p className="pf-experience-organization-projects-item__title">
                  Zoho Mail
                </p>
                <a
                  href="https://www.zoho.com/mail/"
                  className="pf-experience-organization-projects-item__url"
                >
                  https://www.zoho.com/mail/
                </a>
              </div>
            </div>
            <div className="pf-experience-organization-projects-item__desc">
              Zoho Mail is a secure and reliable business email suite for
              organisations; Zoho mail is integrated with apps like Events,
              Task, Notes, Contacts and Bookmarks that helps the user to stay
              organised. It has a asynchronous communication feature called
              Streams which helps the user to collaborate, socialise and
              integrate within teams. Users can integrate third-party apps like
              Asana,Trello etc from the eWidgets panel.
            </div>
          </div>
          <div className="pf-experience-organization-projects-item">
            <div className="pf-experience-organization-projects-item-header">
              <div className="pf-experience-organization-projects-item__logo">
                <img src={logo_zoho_mail_admin_panel} />
              </div>
              <div className="pf-experience-organization-projects-item-title-wra">
                <p className="pf-experience-organization-projects-item__title">
                  Zoho Mail Control Panel
                </p>
                <a
                  href="https://www.zoho.com/mail/control-panel.html"
                  className="pf-experience-organization-projects-item__url"
                >
                  https://www.zoho.com/mail/control-panel.html
                </a>
              </div>
            </div>
            <div className="pf-experience-organization-projects-item__desc">
              Zoho Mail Control panel helps administrators manage the
              organisation mailboxes, configure email policies, setup
              restrictions and customise user information. Administrators can
              also manage domain details, add spam policies and manage groups
              from this central space.
            </div>
          </div>
          <div className="pf-experience-organization-projects-item">
            <div className="pf-experience-organization-projects-item-header">
              <div className="pf-experience-organization-projects-item__logo">
                <img src={logo_zoho_mail_admin_panel} />
              </div>
              <div className="pf-experience-organization-projects-item-title-wra">
                <p className="pf-experience-organization-projects-item__title">
                  Zoho Mail Control Panel
                </p>
                <a
                  href="https://www.zoho.com/mail/control-panel.html"
                  className="pf-experience-organization-projects-item__url"
                >
                  https://www.zoho.com/mail/control-panel.html
                </a>
              </div>
            </div>
            <div className="pf-experience-organization-projects-item__desc">
              Zoho Mail Control panel helps administrators manage the
              organisation mailboxes, configure email policies, setup
              restrictions and customise user information. Administrators can
              also manage domain details, add spam policies and manage groups
              from this central space.
            </div>
          </div>
        </div>
      </div>
      <div className="pf-experience-organization">
        <div className="pf-experience-organization-details">
          <img
            className="pf-experience-organization-details__logo"
            src={logo_sutherland}
          />
          <div className="pf-experience-organization-details-role-name-wra">
            <p className="pf-experience-organization-details__role">
              Web developer
            </p>
            ,
            <p className="pf-experience-organization-details__name">
              Sutherland
            </p>
          </div>
          <div className="pf-experience-organization-details-duration-wra">
            <p className="pf-experience-organization-details__timeperiod">
              November 2016- April 2018
            </p>
            <p className="pf-experience-organization-details__timeduration">
              1 year 6 months
            </p>
          </div>
        </div>
        <ul className="pf-experience-organization-responsibility">
          <li>Designed UI from scratch for the product </li>
          <li>Wrote client-side Javascript and CSS for the production</li>
          <li>
            Assured that all user input is validated before submitting to
            back-end{" "}
          </li>
          <li>
            Designed and created multiple modules and reusable components{" "}
          </li>
          <li>Handled client requests using ASP.Net MVC back-end</li>
          <li>Converting designs into pixel-perfect web pages</li>
        </ul>
        <div className="pf-experience-organization-projects">
          <div className="pf-experience-organization-projects-item">
            <div className="pf-experience-organization-projects-item-header">
              <div className="pf-experience-organization-projects-item-title-wra">
                <p className="pf-experience-organization-projects-item__title">
                  Call back lightweight application
                </p>
              </div>
            </div>
            <div className="pf-experience-organization-projects-item__desc">
              Call Back lightweight web application is an ASP.Net MVC based
              lightweight application to dial-out a phone call with the help of
              Ipf to a user as per user preference.
            </div>
          </div>
          <div className="pf-experience-organization-projects-item">
            <div className="pf-experience-organization-projects-item-header">
              <div className="pf-experience-organization-projects-item-title-wra">
                <p className="pf-experience-organization-projects-item__title">
                  Toll-free Number alive testing web application
                </p>
              </div>
            </div>
            <div className="pf-experience-organization-projects-item__desc">
              Toll-free Number alive testing is an ASP. Net based application
              where organizations or users can test whether their toll-free
              number is alive or not by scheduling calls. Test results will be
              generated and displayed in the user dashboard for analysis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <section className="pf-uc" id="products">
      <h1>Products</h1>
      <div>
        <h2>Section Under Construction</h2>
        <img className="pf-uc-image" src={under_construction} />
      </div>
    </section>
  );
}

export default App;
