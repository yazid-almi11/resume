import React from 'react';

import Layout from '../components/Layout';

import kafka from '../assets/images/kafka.png';

import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Développeur Senior riche de 8 années d''expérience dans la
            conception et le développement d'applications,
            <br></br>
            je travaille sur les thématiques suivantes :<br></br>• Développement
            backend JAVA
            <br></br>• Développement front avec React
            <br></br>• Expertise Elasticsearch
            <br></br>• Mise en place et développement avec apache Kafka
            <br></br>• Développement ETL Talend /Logstash
            <br></br>
            Naturellement motivé et enthousiaste, je me forme constamment sur de
            nouvelles technologies. J'aime avant tout l'esprit d'équipe, les
            relations de confiance.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Développeur FullStack / Data</h3>
              <div className="subheading mb-3">Synotis</div>
              <p>
                Interventions pour le compte de plusieurs clients sur les sujets
                suivants:<br></br> • Conception et développement applicatif
                autour de ReactJS.
                <br></br>• Développement de solutions autour d'Elasticsearch
                (installation, ingestion, requêtages, sécurisation..)
                <br></br>• Développement de service web SOAP et REST
                <br></br>• Mise en place de flux Talend/Logstash
                <br></br>• Intégration SSO avec Keycloack
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Décembre 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Développeur JAVA senior</h3>
              <div className="subheading mb-3">SQLI Lausanne</div>
              <p>
                <h5>Client Etat de Vaud</h5>
                Projet Revenu Déterminant Unifié:Harmonisation et mutualisation
                des prestations fiscales pour les résidents du canton de Vaud.
                <br></br>
                <br></br>• Mise en œuvre d’une approche de tests d’acceptation
                fonctionnelle automatisés
                <br></br>• Réalisation d’un tableau de bord permettant de
                monitorer les environnements
                <br></br>• Mise en œuvre d’une chaîne de déploiement continu à
                l’aide du plugin « Build Pipeline » de Jenkins
                <br></br>• Interfacage avec des applications tierces. Conception
                et développement d'API REST, et de nouveaux modules applicatifs
                <br></br>
                <br></br>
                Environnement technique : JAVA 8, Cucumber JVM, Rest API(Jersey,
                Spring4), Oracle, IntelliJ, Ubuntu 14.04, Primefaces 5,1, Spring
                WebFlow 2,4, Activiti, Jenkins, Tomcat 8, Ruby, Dashing, Maven
                3 ; Entrprise Service Bus,Git, Hibernate 4 ; Spring 4 , Junit4
                ,Mockito, JAXB, Maven
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Janvier 2016 - Novembre 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Développeur JAVA</h3>
              <div className="subheading mb-3">SQLI Nantes</div>
              <p>
                <h5>Client Laposte</h5>
                Application de gestion de l’affranchissement du courrier et des
                colis utilisée dans les guichets des bureaux de poste. Services
                web de gestion des affranchissements mutualisés et exploités par
                les automates et les entités courrier et colis. Refonte des
                offres Colissimo France et Outremer :<br></br>• Rédaction des
                spécifications détaillées
                <br></br>• Estimation du chiffrage des évolutions
                <br></br>• Conception et développement
                <br></br>• Packaging des livrables et livraisons
                <br></br>
                <br></br>
                Environnement technique : Rationnal Application Developer 6,
                Struts 1.3, Spring 2.5, Spring MVC, Oracle 10g, SQL Developer ,
                JSP, Hibernate 2.5, Sonar, Checkstyle, Service REST, IBM
                Websphere 6.1
                <br></br>
                <br></br>
                <p>
                  Projet de Bornes interactives pour les Agences Postales
                  Communales (BiAPC) de la banque Postale. Projet de réduction
                  de la « fracture » numérique en fournissant des bornes
                  interactives dans les mairies. Accès aux services publics de
                  l’état :<br></br>• Conception et développement d’évolutions
                  d’un outil d’administration des tablettes. Gestion du
                  paramétrage pour la diffusion des informations sur les bornes.
                  <br></br>• Développement des services web REST de
                  communication entre les tablettes et l’outil d’administration
                  <br></br>• Service d’enregistrement des réponses aux enquêtes
                  diffusées par les APC
                  <br></br>• Refonte et amélioration de la qualité du code
                  existant
                  <br></br>
                  <br></br>
                  Environnement technique : Rationnal Application Developer 6,
                  Struts 1.3, Spring 2.5, Spring MVC, Oracle 10g, SQL Developer
                  , JSP, Hibernate 2.5, Sonar, Checkstyle, Service REST, IBM
                  Websphere 6.1
                </p>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                Novembre 2014 - December 2015
              </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Développeur JAVA</h3>
              <div className="subheading mb-3">STERIA</div>

              <h5>Client Principal : Ministère de l'intérieur</h5>
              <p>
                Tierce Maintenance Applicative de l'application « SIM@T »
                (Système d'Information de la Maintenance du matériel Terrestre),
                utilisée pour le Maintien en Condition Opérationnelles (MCO) du
                matériel de l’armée de terre:<br></br>• Conception et
                développement de corrections et d’évolutions de l’application
                SIM@T
                <br></br>• Conception de la refonte de « Matériels Complets »
                application de gestion de la logistique
                <br></br>• Estimation de charges des réalisations
                <br></br>• Formation des nouveaux arrivants Environnement
                technique : Easy Form (framework du projet), Eclipse Kepler, SQL
                Developer, Together Architect, Framework JSF 2.0, Hibernate 3
                <br></br>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Novembre 2011 - Octobre 2014</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Formation</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Université de Haute Alsace</h3>
              <div className="subheading mb-3">Master Chimie Organique</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Septembre 2008</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Compétences</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-linux"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>

            <li className="list-inline-item">
              <i>
                <img
                  src="https://avatars2.githubusercontent.com/u/5138804?s=200&v=4"
                  width="70px"
                ></img>
              </i>
            </li>
            <li className="list-inline-item">
              <i>
                <img
                  src="https://previews.123rf.com/images/creativepriyanka/creativepriyanka1908/creativepriyanka190800722/129465495-icon-for-elasticsearch-logo.jpg"
                  width="70px"
                ></img>
              </i>
            </li>

            <li className="list-inline-item">
              <i className="fa fa-database"></i>
            </li>
          </ul>

          <div className="subheading mb-3"></div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              TDD
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Développement en mode agile
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Centre d'intérêt</h2>
          <p>
            Passionné de sport, je pratique la course à pied, le vélo et un peu
            natation. Mes références en course à pied :<br></br>- 10 km en
            39min33s
            <br></br>- 1h28 au semi-marathon
            <br></br>- 3h29 au marathon
            <br></br>
            Je prépare actuellement l'étape du Tour de France, cyclosportive qui
            aura lieu le 7 juillet à Nice.
          </p>
          <p className="mb-0">
            En dehors su sport, je m'intéresse beaucoup à la musique, à
            l'histoire ainsi qu'au développement de mes compétences par le biais
            de formations et de veille technologique.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-150">
          <h2 className="mb-5">Certifications</h2>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <img
                src="https://images.youracclaim.com/size/340x340/images/7b8d90af-f937-4068-9179-01cdc6700c74/5274_badge_database_admininstrator_600x600_Certified-Associate-JAVA-SE8-PROGRAMMER.png"
                width="150px"
              ></img>
            </li>
            <li className="list-inline-item">
              <img
                src="https://badge.trueability.com/issued_certifications/473D2bJDLpV.png"
                width="150px"
              ></img>
            </li>
            <li className="list-inline-item">
              <img src={kafka} width="190px"></img>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
