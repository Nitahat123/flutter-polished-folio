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
      description: "Using Rest API for theme selection and hive database using for data storage and Localization. Firebase analytics, crashalytics and other services use, notification and app open ad and reward ad show."
    },
    {
      name: "Surat Farmhouse Booking",
      description: "User can see all farm house in surat and take farm detail and photos and available farm booking. Rest API calling, data filter, all photos and detail display and location show using iframe."
    },
    {
      name: "EGSPay - Games Load and Bills",
      description: "EGSPay brings great deals and offers for all your gaming needs. Buy your digital game codes. More than 100 payment method handle using webview, phone, email and fingerprint authentication."
    },
    {
      name: "OpenCart Admin Mobile App",
      description: "OC M-App will provide the ability to manage order, products, categories, statistics and many features. Manage 10+ different version and data display, filter, login, user manage etc."
    },
    {
      name: "My Parivar - Connect to Family",
      description: "Register parivar and make profile your parivar, events, member, committee, family tree, relation. Rest API calling, user and parivar wise request, data handling, relation management, etc."
    },
    {
      name: "Plada",
      description: "Social networking app designed exclusively for parents, by parents. Rest API calling, user display in google map with profile image, realtime chat using socket and recurring subscriptions using google play store and app store."
    },
    {
      name: "Nobless Tailoring",
      description: "Multiple for measurement, custom validation etc."
    },
    {
      name: "NJMW",
      description: "Website display using webview and thermal printer attach and make invoice and get print."
    },
    {
      name: "Odeka",
      description: "Live broadcasting, with user join count real time chat tips, gift etc."
    },
    {
      name: "Khata Billing",
      description: "Invoice generator and display all details, report etc. (currently working)."
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
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
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
