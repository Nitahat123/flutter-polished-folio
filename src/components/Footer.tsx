const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Flutter Developer Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="mailto:your.email@example.com" className="text-sm hover:text-accent transition-colors">
              Email
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
