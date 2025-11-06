import { Badge } from "./ui/badge";
import app1 from "@/assets/app1.jpg";
import app2 from "@/assets/app2.jpg";
import app3 from "@/assets/app3.jpg";
import app4 from "@/assets/app4.jpg";
import app5 from "@/assets/app5.jpg";
import app6 from "@/assets/app6.jpg";
import app7 from "@/assets/app7.jpg";
import app8 from "@/assets/app8.jpg";
import app9 from "@/assets/app9.jpg";
import app10 from "@/assets/app10.jpg";

interface App {
  id: number;
  title: string;
  category: string;
  platforms: string[];
  image: string;
}

const Portfolio = () => {
  const apps: App[] = [
    { id: 1, title: "E-Commerce Shopping App", category: "Retail", platforms: ["Android", "iOS"], image: app1 },
    { id: 2, title: "Fitness Tracker Pro", category: "Health & Fitness", platforms: ["Android", "iOS"], image: app2 },
    { id: 3, title: "Food Delivery Service", category: "Food & Drink", platforms: ["Android"], image: app3 },
    { id: 4, title: "Social Media Dashboard", category: "Social", platforms: ["Android", "iOS"], image: app4 },
    { id: 5, title: "Banking & Finance App", category: "Finance", platforms: ["Android"], image: app5 },
    { id: 6, title: "Travel Booking Platform", category: "Travel", platforms: ["Android"], image: app6 },
    { id: 7, title: "Education Learning Hub", category: "Education", platforms: ["Android", "iOS"], image: app7 },
    { id: 8, title: "Real Estate Finder", category: "Real Estate", platforms: ["Android"], image: app8 },
    { id: 9, title: "Music Streaming App", category: "Entertainment", platforms: ["Android"], image: app9 },
    { id: 10, title: "Task Management Pro", category: "Productivity", platforms: ["Android"], image: app10 },
  ];

  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h3 className="text-xs tracking-[0.15em] font-bold uppercase mb-6">
            experience
          </h3>
          <h2 className="text-4xl font-bold leading-tight">
            Over the last 3+ years I've created beautiful, user-centered mobile experiences for a diverse range of industries including:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <div key={app.id} className="group cursor-pointer">
              <div className="aspect-[9/16] bg-muted mb-4 overflow-hidden">
                <img 
                  src={app.image} 
                  alt={app.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex gap-2 mb-2">
                {app.platforms.map((platform) => (
                  <Badge key={platform} variant="secondary" className="text-xs">
                    {platform}
                  </Badge>
                ))}
              </div>
              <h4 className="font-bold mb-1">{app.title}</h4>
              <p className="text-sm text-muted-foreground">{app.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
