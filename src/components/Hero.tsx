import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[3.5rem] leading-[1.15] font-bold tracking-tight mb-12 animate-fade-in">
          I'm a{" "}
          <TypeAnimation
            sequence={[
              'Flutter developer',
              2000,
              'mobile architect',
              2000,
              'cross-platform specialist',
              2000,
              'code-loving perfectionist',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="italic text-accent"
            repeat={Infinity}
          />
          .
        </h1>
        
        <h2 className="text-[3.5rem] leading-[1.15] font-bold tracking-tight animate-fade-in animation-delay-300">
          I really love what I do.
        </h2>
      </div>
    </section>
  );
};

export default Hero;
