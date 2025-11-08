import { Badge } from "./ui/badge";
import app1 from "@/assets/shardanjali_app.jpg";
import app2 from "@/assets/suratfarmhouse.png";
import app3 from "@/assets/opencart.png";
import app4 from "@/assets/myparivar.png";
import app5 from "@/assets/pladaapp.png";
import app6 from "@/assets/odekaapp.png";
import app7 from "@/assets/khatabillingadmin.png";
import app8 from "@/assets/youmedating.png";
import app9 from "@/assets/pikazoapp.png";
import app10 from "@/assets/pikazo resturant admin.png";

interface App {
  id: number;
  title: string;
  category: string;
  platforms: string[];
  image: string;
}

const Portfolio = () => {
  const apps: App[] = [
    { id: 1, title: "Shradhanjali RIP Card", category: "Card Making App", platforms: ["Android", "iOS"], image: app1 },
    { id: 2, title: "Surat Farmhouse Booking", category: "Social", platforms: ["Android", "iOS"], image: app2 },
    { id: 3, title: "OpenCart Admin Mobile App", category: "Admin App", platforms: ["Android", "iOS"], image: app3 },
    { id: 4, title: "My Parivar - Connect to Family", category: "Social", platforms: ["Android", "iOS"], image: app4 },
    { id: 5, title: "Plada", category: "Social", platforms: ["Android", "iOS"], image: app5 },
    { id: 6, title: "Odeka", category: "Social", platforms: ["Android"], image: app6 },
    { id: 7, title: "Khata Billing", category: "Business", platforms: ["Android", "iOS"], image: app7 },
    { id: 8, title: "You and Me Dating", category: "Social", platforms: ["Android", "iOS"], image: app8 },
    { id: 9, title: "Pikozo", category: "Food Delivery", platforms: ["Android", "iOS"], image: app9 },
    { id: 10, title: "Pikozo Restaurant Partner", category: "Food Delivery", platforms: ["Android", "iOS"], image: app10 },
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
