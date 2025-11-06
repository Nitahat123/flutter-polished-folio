const About = () => {
  const skills = [
    {
      title: "Flutter Developer",
      description: "I build with precision and passion.",
      detail: "I'm a developer by trade and meticulous by nature. I have 3+ years of experience crafting beautiful, performant mobile applications from concept to deployment and beyond."
    },
    {
      title: "Cross-Platform Specialist",
      description: "Creating seamless experiences excites me.",
      detail: "I love bringing together native performance with cross-platform efficiency, delivering applications that feel at home on both Android and iOS platforms."
    },
    {
      title: "Mobile Architect",
      description: "I lead with clean code and scalability.",
      detail: "I architect robust solutions using best practices, state management patterns, and maintainable code structures that stand the test of time and user growth."
    },
    {
      title: "Code-Loving Perfectionist",
      description: "Quality is my superpower.",
      detail: "I don't just write code for devices, I craft experiences for real people. Attention to detail drives my development, ensuring every pixel and interaction matters."
    }
  ];

  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skill, index) => (
            <div key={index}>
              <h3 className="text-xs tracking-[0.15em] font-bold uppercase mb-4">
                {skill.title}
              </h3>
              <p className="font-bold mb-2">{skill.description}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {skill.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
