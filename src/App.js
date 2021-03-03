import logo from "./logo.svg";
import "../src/css/App.scss";
import Vinu_resume_pdf from "../src/files/vinu_resume.pdf";
//import { render } from "@testing-library/react";
import user from "../src/user.json";
//import React, { useState } from "react";

//mail click
import { Link } from "react-router-dom";

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

function App() {
  return (
    <div className="vr">
      <Header_nav />
      <main>
        <About />
        <Skills />
        <Experience />
      </main>
    </div>
  );
}
const open_in_Newtab = (url) => {
  const newWindow = window.open(url, "_blank");
  if (newWindow) newWindow.opener = null;
};

function Header_nav() {
  return (
    <header className="vr-header">
      <div className="vr-header__icon">VR</div>
      <nav className="vr-header-nav">
        <a className="vr-header-nav__item" href="#">
          About
        </a>
        <a className="vr-header-nav__item" href="#">
          Skills
        </a>
        <a className="vr-header-nav__item" href="#">
          Experience
        </a>
      </nav>
      <div className="vr-header-public-profile">
        <button
          className="vr-icon-button"
          onClick={() => open_in_Newtab("https://github.com/Vinu77r")}
        >
          <i className="vri-github"></i>
        </button>
        <button
          className="vr-icon-button"
          onClick={() => open_in_Newtab("https://www.linkedin.com/in/vr77/")}
        >
          <i className="vri-linkedin"></i>
        </button>
        <button
          className="vr-icon-button"
          onClick={() => open_in_Newtab("https://www.instagram.com/__vr77__")}
        >
          <i className="vri-insta"></i>
        </button>
      </div>
    </header>
  );
}

function About() {
  const about = {
    title: "Hello",
    userName: " I am  Vinu",
    jobTitle: "UI Engineer",
    aboutUser:
      "I'm a UI Engineer with 4+ years of experience who loves design, code, and coffee. I have a passion for crafting human-computer interaction and believe in building easy-to-maintain websites/apps by breaking them down into its smallest components. ",
  };
  return (
    <div className="vr-about">
      <p className="vr-title vr-title--md vr-about__hello">{about.title}</p>
      <p className="vr-title vr-title--lg vr-about__name">
        {about.userName} - {about.jobTitle}
      </p>
      <p className="vr-desc vr-about__desc">{about.aboutUser}</p>
      <a href={Vinu_resume_pdf} download="My_File.pdf">
        <button className="vr-primary-button vr-about__button">
          Get resume
        </button>
      </a>
    </div>
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
    <div className="vr-skills">
      <p className="vr-title vr-title--sm">Skills</p>
      <div className="vr-skills-cat-list">
        <div className="vr-skills-cat-item">
          <p className="vr-title vr-title--xs">{skills_set_1.skills_title}</p>
          <div className="vr-skills-list">
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={icon_html} />
              </div>
              <p className="vr-skills-item__desc">{skills_set_1.skill_1}</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={icon_css} />
              </div>
              <p className="vr-skills-item__desc">{skills_set_1.skill_2}</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={icon_javaScript} />
              </div>
              <p className="vr-skills-item__desc">{skills_set_1.skill_3}</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={icon_sassy} />
              </div>
              <p className="vr-skills-item__desc">{skills_set_1.skill_4}</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={icon_react} />
              </div>
              <p className="vr-skills-item__desc">{skills_set_1.skill_5}</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={icon_expo} />
              </div>
              <p className="vr-skills-item__desc">{skills_set_1.skill_6}</p>
            </div>
          </div>
        </div>
        <div className="vr-skills-cat-item">
          <p className="vr-title vr-title--xs">{skills_set_2.skills_title}</p>
          <div className="vr-skills-list">
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={icon_github} />
              </div>
              <p className="vr-skills-item__desc">{skills_set_2.skill_1}</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={icon_gitlab} />
              </div>
              <p className="vr-skills-item__desc">{skills_set_2.skill_2}</p>
            </div>
          </div>
        </div>
        <div className="vr-skills-cat-item">
          <p className="vr-title vr-title--xs">{skills_set_3.skills_title}</p>
          <div className="vr-skills-list">
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={icon_vscode} />
              </div>
              <p className="vr-skills-item__desc">{skills_set_3.skill_1}</p>
            </div>
          </div>
        </div>{" "}
        <div className="vr-skills-cat-item">
          <p className="vr-title vr-title--xs">{skills_set_4.skills_title}</p>
          <div className="vr-skills-list">
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={icon_figma} />
              </div>
              <p className="vr-skills-item__desc">{skills_set_4.skill_1}</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={icon_sketch} />
              </div>
              <p className="vr-skills-item__desc">{skills_set_4.skill_2}</p>
            </div>
          </div>
        </div>
        <div className="vr-skills-cat-item">
          <p className="vr-title vr-title--xs">{skills_set_5.skills_title}</p>
          <div className="vr-skills-list">
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={icon_zeplin} />
              </div>
              <p className="vr-skills-item__desc">{skills_set_5.skill_1}</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={icon_invision} />
              </div>
              <p className="vr-skills-item__desc">{skills_set_5.skill_2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="vr-experience">
      <p className="vr-title vr-title--sm">Experience</p>
      <div className="vr-experience-organization">
        <div className="vr-experience-organization-details">
          <img
            className="vr-experience-organization-details__logo"
            src={logo_zoho}
          />
          <div className="vr-experience-organization-details-role-name-wra">
            <p className="vr-experience-organization-details__role">
              Web developer
            </p>
            ,
            <p className="vr-experience-organization-details__name">
              Zoho Corporation
            </p>
          </div>
          <div className="vr-experience-organization-details-duration-wra">
            <p className="vr-experience-organization-details__timeperiod">
              April 2018 - Present
            </p>
            <p className="vr-experience-organization-details__timeduration">
              2 year 7 months
            </p>
          </div>
        </div>
        <ul className="vr-experience-organization-responsibility">
          <li>Developing new UI features with interactive user experience</li>
          <li>Writing client-side Javascript and CSS preprocessor SASS</li>
          <li>Building reusable code and components for future use</li>
          <li>Developing customized themes for the application</li>
          <li>
            Implementing features to improve the user experience and usability
          </li>
          <li>Ensuring the technical feasibility of UI/UX design</li>
        </ul>
        <div className="vr-experience-organization-projects">
          <div className="vr-experience-organization-projects-item">
            <div className="vr-experience-organization-projects-item-header">
              <div className="vr-experience-organization-projects-item__logo">
                <img src={logo_zoho_workplace} />
              </div>
              <div className="vr-experience-organization-projects-item-title-wra">
                <p className="vr-experience-organization-projects-item__title">
                  Zoho Workplace
                </p>
                <a
                  href="https://www.zoho.com/workplace"
                  className="vr-experience-organization-projects-item__url"
                >
                  https://www.zoho.com/workplace
                </a>
              </div>
            </div>
            <div className="vr-experience-organization-projects-item__desc">
              Zoho Workplace is an office suite with nine integrated Zoho apps
              like Mail, Cliq, Connect, WorkDrive, Show, Sheet, Writer, Meeting
              and ShowTime. You can access all the apps without switching
              between browser tabs with the help of a Workplace Dashboard with
              apps displayed as widgets.Dashboard is customisable and users can
              rearrange the app widgets and stay connected with the unified
              interface.
            </div>
          </div>
          <div className="vr-experience-organization-projects-item">
            <div className="vr-experience-organization-projects-item-header">
              <div className="vr-experience-organization-projects-item__logo">
                <img src={logo_zoho_mail} />
              </div>
              <div className="vr-experience-organization-projects-item-title-wra">
                <p className="vr-experience-organization-projects-item__title">
                  Zoho Mail
                </p>
                <a
                  href="https://www.zoho.com/mail/"
                  className="vr-experience-organization-projects-item__url"
                >
                  https://www.zoho.com/mail/
                </a>
              </div>
            </div>
            <div className="vr-experience-organization-projects-item__desc">
              Zoho Mail is a secure and reliable business email suite for
              organisations; Zoho mail is integrated with apps like Events,
              Task, Notes, Contacts and Bookmarks that helps the user to stay
              organised. It has a asynchronous communication feature called
              Streams which helps the user to collaborate, socialise and
              integrate within teams. Users can integrate third-party apps like
              Asana,Trello etc from the eWidgets panel.
            </div>
          </div>
          <div className="vr-experience-organization-projects-item">
            <div className="vr-experience-organization-projects-item-header">
              <div className="vr-experience-organization-projects-item__logo">
                <img src={logo_zoho_mail_admin_panel} />
              </div>
              <div className="vr-experience-organization-projects-item-title-wra">
                <p className="vr-experience-organization-projects-item__title">
                  Zoho Mail Control Panel
                </p>
                <a
                  href="https://www.zoho.com/mail/control-panel.html"
                  className="vr-experience-organization-projects-item__url"
                >
                  https://www.zoho.com/mail/control-panel.html
                </a>
              </div>
            </div>
            <div className="vr-experience-organization-projects-item__desc">
              Zoho Mail Control panel helps administrators manage the
              organisation mailboxes, configure email policies, setup
              restrictions and customise user information. Administrators can
              also manage domain details, add spam policies and manage groups
              from this central space.
            </div>
          </div>
          <div className="vr-experience-organization-projects-item">
            <div className="vr-experience-organization-projects-item-header">
              <div className="vr-experience-organization-projects-item__logo">
                <img src={logo_zoho_mail_admin_panel} />
              </div>
              <div className="vr-experience-organization-projects-item-title-wra">
                <p className="vr-experience-organization-projects-item__title">
                  Zoho Mail Control Panel
                </p>
                <a
                  href="https://www.zoho.com/mail/control-panel.html"
                  className="vr-experience-organization-projects-item__url"
                >
                  https://www.zoho.com/mail/control-panel.html
                </a>
              </div>
            </div>
            <div className="vr-experience-organization-projects-item__desc">
              Zoho Mail Control panel helps administrators manage the
              organisation mailboxes, configure email policies, setup
              restrictions and customise user information. Administrators can
              also manage domain details, add spam policies and manage groups
              from this central space.
            </div>
          </div>
        </div>
      </div>
      <div className="vr-experience-organization">
        <div className="vr-experience-organization-details">
          <img
            className="vr-experience-organization-details__logo"
            src={logo_sutherland}
          />
          <div className="vr-experience-organization-details-role-name-wra">
            <p className="vr-experience-organization-details__role">
              Web developer
            </p>
            ,
            <p className="vr-experience-organization-details__name">
              Sutherland
            </p>
          </div>
          <div className="vr-experience-organization-details-duration-wra">
            <p className="vr-experience-organization-details__timeperiod">
              November 2016- April 2018
            </p>
            <p className="vr-experience-organization-details__timeduration">
              1 year 6 months
            </p>
          </div>
        </div>
        <ul className="vr-experience-organization-responsibility">
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
        <div className="vr-experience-organization-projects">
          <div className="vr-experience-organization-projects-item">
            <div className="vr-experience-organization-projects-item-header">
              <div className="vr-experience-organization-projects-item-title-wra">
                <p className="vr-experience-organization-projects-item__title">
                  Call back lightweight application
                </p>
              </div>
            </div>
            <div className="vr-experience-organization-projects-item__desc">
              Call Back lightweight web application is an ASP.Net MVC based
              lightweight application to dial-out a phone call with the help of
              IVR to a user as per user preference.
            </div>
          </div>
          <div className="vr-experience-organization-projects-item">
            <div className="vr-experience-organization-projects-item-header">
              <div className="vr-experience-organization-projects-item-title-wra">
                <p className="vr-experience-organization-projects-item__title">
                  Toll-free Number alive testing web application
                </p>
              </div>
            </div>
            <div className="vr-experience-organization-projects-item__desc">
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

export default App;
