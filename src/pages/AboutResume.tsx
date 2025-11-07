import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutResume = () => {
  const experiences = [
    {
      title: "Flutter Developer",
      company: "Hit infotech LLP",
      period: "March 2023 - Present",
      points: [
        "Knowledge improve of database and other services and api.",
        "Google ads implements and both platform app live knowledge.",
        "Surat farmhouse booking, Shradhanjali, EGSPay, Nobless."
      ]
    },
    {
      title: "Flutter Developer with Internship",
      company: "Swickteck Company",
      period: "April 2022 - Feb 2023",
      points: [
        "Mobile Application adaptive design.",
        "Built the logic for making app and code improvement.",
        "Hive hotel management system and tic tac toe games logic."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Commerce",
      institution: "M K B U University (Bhavnagar)",
      period: "2019 - 2022"
    },
    {
      degree: "High Secondary School",
      institution: "B N Virani (Bhavnagar)",
      period: "2017 - 2019"
    }
  ];

  const skills = [
    "Github and Bitbucket management",
    "Shared preferences, Hive and Firebase database",
    "Authentication and Firebase service uses",
    "Api calling and data management",
    "Google ads, live broadcasting and subscription",
    "App live in Google play console and App store"
  ];

  const projects = [
    {
      name: "Shradhanjali RIP Card",
      description: "Using Rest API for theme selection and hive database using for data storage and Localization. Firebase analytics, crashalytics and other services use, notification and app open ad and reward ad show.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.shradhanjali",
      appStoreLink: "https://apps.apple.com/app/shradhanjali"
    },
    {
      name: "Surat Farmhouse Booking",
      description: "User can see all farm house in surat and take farm detail and photos and available farm booking. Rest API calling, data filter, all photos and detail display and location show using iframe.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.suratfarmhouse"
    },
    {
      name: "EGSPay - Games Load and Bills",
      description: "EGSPay brings great deals and offers for all your gaming needs. Buy your digital game codes. More than 100 payment method handle using webview, phone, email and fingerprint authentication.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.egspay",
      appStoreLink: "https://apps.apple.com/app/egspay"
    },
    {
      name: "OpenCart Admin Mobile App",
      description: "OC M-App will provide the ability to manage order, products, categories, statistics and many features. Manage 10+ different version and data display, filter, login, user manage etc.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.opencart"
    },
    {
      name: "My Parivar - Connect to Family",
      description: "Register parivar and make profile your parivar, events, member, committee, family tree, relation. Rest API calling, user and parivar wise request, data handling, relation management, etc.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.myparivar"
    },
    {
      name: "Plada",
      description: "Social networking app designed exclusively for parents, by parents. Rest API calling, user display in google map with profile image, realtime chat using socket and recurring subscriptions using google play store and app store.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.plada",
      appStoreLink: "https://apps.apple.com/app/plada"
    },
    {
      name: "Nobless Tailoring",
      description: "Multiple for measurement, custom validation etc.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.nobless"
    },
    {
      name: "NJMW",
      description: "Website display using webview and thermal printer attach and make invoice and get print.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.njmw"
    },
    {
      name: "Odeka",
      description: "Live broadcasting, with user join count real time chat tips, gift etc.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.odeka"
    },
    {
      name: "Khata Billing",
      description: "Invoice generator and display all details, report etc. (currently working).",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.khatabilling"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <section className="mb-20">
            <h1 className="text-5xl md:text-7xl font-display mb-8">
              About & Resume
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                Am a passionate Flutter developer with a deep love for technology, I am a Flutter developer with more than 2.5 years of experience in mobile app cross platform and analytical skills. Able to communicate strongly with a collaborative approach to problem solving.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-20 pb-20 border-b border-border">
            <h2 className="text-xs tracking-[0.15em] font-bold uppercase mb-6">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a href="tel:7487853898" className="text-accent hover:underline">
                  748-785-3898
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:italiyaharshil98@gmail.com" className="text-accent hover:underline break-all">
                  italiyaharshil98@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p>179, Hansvihar soc, Yoginchowk, Surat</p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-20 pb-20 border-b border-border">
            <h2 className="text-xs tracking-[0.15em] font-bold uppercase mb-8">
              Experience
            </h2>
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-display mb-2">{exp.title}</h3>
                  <p className="text-accent mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="text-sm leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-20 pb-20 border-b border-border">
            <h2 className="text-xs tracking-[0.15em] font-bold uppercase mb-8">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index}>
                  <h3 className="text-xl font-display mb-1">{edu.degree}</h3>
                  <p className="text-accent mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills Section */}
          <section className="mb-20 pb-20 border-b border-border">
            <h2 className="text-xs tracking-[0.15em] font-bold uppercase mb-8">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <p className="text-sm leading-relaxed">{skill}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-20">
            <h2 className="text-xs tracking-[0.15em] font-bold uppercase mb-8">
              Projects
            </h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index}>
                  <h3 className="text-lg font-display mb-2 uppercase tracking-wide">
                    {project.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    {project.playStoreLink && (
                      <a 
                        href={project.playStoreLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-xs font-medium rounded hover:opacity-80 transition-opacity"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                        </svg>
                        Google Play
                      </a>
                    )}
                    {project.appStoreLink && (
                      <a 
                        href={project.appStoreLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-xs font-medium rounded hover:opacity-80 transition-opacity"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                        </svg>
                        App Store
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutResume;
