import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ThemeToggle } from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import ImageSlider from "@/components/ImageSlider";
import { useLanguage } from "@/contexts/LanguageContext";
import { Github, Linkedin, ExternalLink, Code, Gamepad2, Image } from "lucide-react";
import { useState } from "react";

// Featured Projects Data - You can edit this
const getFeaturedProjects = (t: (key: string) => string) => [
  {
    id: 1,
    name: t('projects.library.title'),
    description: t('projects.library.description'),
    sourceCode: "https://github.com/LaFoxyy/acervoBiblioteca",
    coverImage: "https://i.imgur.com/NSQWcB5.jpeg",
    screenshots: [
      "https://i.imgur.com/NSQWcB5.jpeg", "https://i.imgur.com/PKdxvGD.jpeg", "https://i.imgur.com/jHJACgC.jpeg", "https://i.imgur.com/Ww6KSVX.jpeg"
    ]
  },
  {
    id: 2,
    name: t('projects.prordr.title'),
    description: t('projects.prordr.description'),
    sourceCode: "https://github.com/LaFoxyy/prordrMaker",
    coverImage: "https://i.imgur.com/aXiuV7K.jpeg",
    screenshots: [
      "https://i.imgur.com/eYfzZLa.jpeg", "https://i.imgur.com/PEHiMPq.jpeg", "https://i.imgur.com/aXiuV7K.jpeg", "https://i.imgur.com/qHJydXm.jpeg"
    ]
  },
  {
    id: 3,
    name: t('projects.calculator.title'),
    description: t('projects.calculator.description'),
    sourceCode: "https://github.com/LaFoxyy/calculadoraSimples",
    coverImage: "https://i.imgur.com/g5MNBbS.jpeg",
    screenshots: [
       "https://i.imgur.com/74kbjqF.jpeg", "https://i.imgur.com/g5MNBbS.jpeg", "https://i.imgur.com/NnEHqpL.jpeg", "https://i.imgur.com/kEYb7HV.jpeg"
    ]
  },
  {
    id: 4,
    name: t('projects.lia.title'),
    description: t('projects.lia.description'),
    sourceCode: "https://github.com/LaFoxyy/ai-automation-lia",
    coverImage: "https://i.imgur.com/dsVWBbg.jpeg",
    screenshots: [
      "https://i.imgur.com/48Q9821.jpeg", "https://i.imgur.com/PaP3nXE.jpeg", "https://i.imgur.com/6YKRDhM.jpeg", "https://i.imgur.com/lQL4QxK.jpeg"
    ]
  },
  {
    id: 5,
    name: t('projects.first.title'),
    description: t('projects.first.description'),
    sourceCode: "https://github.com/LaFoxyy/firstProject",
    coverImage: "https://i.imgur.com/1uIyfLM.jpeg",
    screenshots: [
      "https://i.imgur.com/1uIyfLM.jpeg", "https://i.imgur.com/yVCmUOk.jpeg", "https://i.imgur.com/BlrAo8r.jpeg", "https://i.imgur.com/plmYbKk.jpeg"
    ]
  },
  {
    id: 6,
    name: t('projects.ivory.title'),
    description: t('projects.ivory.description'),
    sourceCode: "https://drive.google.com/file/d/1QPRtnWNATtHnnpf5VPpGSML2LA6i0B5M/view?usp=sharing",
    coverImage: "https://i.imgur.com/DSh2iZO.jpeg",
    screenshots: [
      "https://i.imgur.com/VXzj6nI.jpeg", "https://i.imgur.com/2m0dkPo.jpeg", "https://i.imgur.com/YlEiWSA.jpeg", "https://i.imgur.com/VPO20dK.jpeg"
    ]
  }
];

const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedProjectScreenshots, setSelectedProjectScreenshots] = useState<string[]>([]);
  const [isScreenshotsOpen, setIsScreenshotsOpen] = useState(false);
  
  const featuredProjects = getFeaturedProjects(t);

  const openScreenshots = (screenshots: string[]) => {
    setSelectedProjectScreenshots(screenshots);
    setIsScreenshotsOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold gradient-text">Guilherme Campos Amancio</h1>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-6">
                <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">{t('nav.about')}</a>
                <a href="#velvet-paws" className="text-foreground/80 hover:text-foreground transition-colors">{t('nav.velvetPaws')}</a>
                <a href="#lafoxy" className="text-foreground/80 hover:text-foreground transition-colors">{t('nav.lafoxy')}</a>
                <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">{t('nav.contact')}</a>
              </div>
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6">
            <span className="gradient-text">{t('hero.title')}</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://github.com/LaFoxyy" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Code className="w-4 h-4 mr-2" />
                {t('hero.viewWork')}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">{t('about.title')}</h2>
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{t('about.subtitle')}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t('about.description1')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('about.description2')}
                  </p>
                </div>
                <ImageSlider
                  beforeImage="/lovable-uploads/752abd3d-3c2c-4159-ba13-f552fe01007a.png"
                  afterImage="/lovable-uploads/de5c5eaf-747d-4f09-afb6-aa7528e83826.png"
                  beforeAlt="Guilherme Campos Amancio - Real Photo"
                  afterAlt="Guilherme Campos Amancio - Alter Ego"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Velvet Paws Studio Section */}
      <section id="velvet-paws" className="py-16 px-6 bg-muted/30">
         <div className="container mx-auto">
           <h2 className="text-4xl font-bold text-center mb-4 gradient-text">{t('velvetPaws.title')}</h2>
           <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
             {t('velvetPaws.subtitle')}
           </p>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
             <div>
               <h3 className="text-3xl font-semibold mb-4">{t('velvetPaws.aboutTitle')}</h3>
               <p className="text-muted-foreground mb-6">
                 {t('velvetPaws.description1')}
               </p>
               <p className="text-muted-foreground mb-6">
                 {t('velvetPaws.description2')}
               </p>
               <Button asChild className="bg-accent hover:bg-accent/90">
                 <a
                   href="https://velvet-paws-studio.itch.io"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Visit Velvet Paws Studio website"
                 >
                   {t('velvetPaws.visitWebsite')}
                 </a>
               </Button>
             </div>
            <div className="aspect-video bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="https://i.imgur.com/7C7hA9G.png" 
                alt="Velvet Paws Studio Logo/Banner"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

           {/* Games Portfolio */}
           <h3 className="text-2xl font-semibold mb-8 text-center">{t('velvetPaws.featuredGames')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Section 1 */}
            { [1, 2, 3].slice(0, 1).map((game) => (
              <Card key={`s1-${game}`} className="glass-card group hover:scale-105 transition-transform">
                <CardContent className="p-0">
                   <div className="aspect-video rounded-t-lg overflow-hidden">
                    <img
                      src="https://img.itch.zone/aW1hZ2UvODAxODQyLzE0MTMwODc0LnBuZw==/original/InHoxU.png"
                      alt="Zombielator Survival Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                   <div className="p-6">
                     <h4 className="text-xl font-semibold mb-2">{t('games.zombielator.title')}</h4>
                     <p className="text-muted-foreground mb-4">{t('games.zombielator.description')}</p>
                     <div className="flex gap-2">
                       <Button size="sm" variant="outline" asChild>
                         <a
                           href="https://velvet-paws-studio.itch.io/zombilator-survival"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-1"
                         >
                           <ExternalLink className="w-3 h-3 mr-1" />
                           {t('velvetPaws.playDemo')}
                         </a>
                       </Button>
                     </div>
                   </div>
                </CardContent>
              </Card>
            ))}
          
            {/* Section 2 */}
            { [1, 2, 3].slice(1, 2).map((game) => (
              <Card key={`s2-${game}`} className="glass-card group hover:scale-105 transition-transform">
                <CardContent className="p-0">
                   <div className="aspect-video rounded-t-lg overflow-hidden">
                    <img
                      src="https://i.imgur.com/sInnBb8.jpeg"
                      alt="Game 2 Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{t('games.game2.title')}</h4>
                    <p className="text-muted-foreground mb-4">{t('games.game2.description')}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href="https://miro.com/welcomeonboard/enNrcHNRYkxzeVVaeVJVSHU4cEZ6T1JXeXBsZG14NXZzN0sxaHQvZ3E1Sjc1ekRwUUJ0K0YrbXBTRUFEbDVkS1BFUzMySTdaQXdSZXpaRzFiU1VuVm9UVFpEcUN1RkFKa0tFdG12QUVPVU9FRHJzV0M2d0VnTTEvR2xPTnd4VWlNakdSWkpBejJWRjJhRnhhb1UwcS9BPT0hdjE=?share_link_id=898682515285"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          {t('velvetPaws.miroView')}
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          
            {/* Section 3 */}
            { [1, 2, 3].slice(2, 3).map((game) => (
              <Card key={`s3-${game}`} className="glass-card group hover:scale-105 transition-transform">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-t-lg flex items-center justify-center">
                    <Gamepad2 className="w-12 h-12 text-primary/60" />
                  </div>
                   <div className="p-6">
                     <h4 className="text-xl font-semibold mb-2">{t('games.idea.title')}</h4>
                     <p className="text-muted-foreground mb-4">{t('games.idea.description')}</p>
                     <div className="flex gap-2">
                       <Button size="sm" variant="outline">
                         <ExternalLink className="w-3 h-3 mr-1" />
                         {t('velvetPaws.notReady')}
                       </Button>
                       <Button size="sm" variant="ghost">{t('velvetPaws.pleaseWait')}</Button>
                     </div>
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* LaFoxy Developer Section */}
      <section id="lafoxy" className="py-16 px-6">
         <div className="container mx-auto">
           <h2 className="text-4xl font-bold text-center mb-4 gradient-text">{t('lafoxy.title')}</h2>
           <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
             {t('lafoxy.subtitle')}
           </p>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="aspect-video bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/6961036b-b26c-46d5-a6e0-074be50a3674.png" 
                alt="Unity Development Environment"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-4">{t('lafoxy.expertiseTitle')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('lafoxy.description1')}
              </p>
              <p className="text-muted-foreground mb-6">
                {t('lafoxy.description2')}
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button asChild>
                  <a href="https://github.com/LaFoxyy" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                      {t('lafoxy.viewGithub')}
                  </a>
                </Button>
                <a href="/Guilherme_Resume_English.pdf" download>
                  <Button variant="outline">{t('lafoxy.downloadResumeEn')}</Button>
                </a>
                <a href="/Guilherme_Resume_Portugues.pdf" download>
                  <Button variant="outline">{t('lafoxy.downloadResumePt')}</Button>
                </a>
              </div>
            </div>
          </div>

           {/* Skills & Technologies */}
           <h3 className="text-2xl font-semibold mb-8 text-center">{t('lafoxy.technologiesTitle')}</h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
             <Card className="glass-card text-center">
               <CardContent className="p-6">
                 <h4 className="text-lg font-semibold mb-4">{t('lafoxy.frontend')}</h4>
                 <div className="space-y-3 text-sm text-muted-foreground">
                   <div>
                     <p className="font-medium text-foreground mb-1">{t('lafoxy.languagesFrameworks')}</p>
                     <p>JavaScript, TypeScript</p>
                   </div>
                   <div>
                     <p className="font-medium text-foreground mb-1">{t('lafoxy.toolsPlatforms')}</p>
                     <p>Aseprite, Paint.NET</p>
                   </div>
                 </div>
               </CardContent>
             </Card>
            
             <Card className="glass-card text-center">
               <CardContent className="p-6">
                 <h4 className="text-lg font-semibold mb-4">{t('lafoxy.backend')}</h4>
                 <div className="space-y-3 text-sm text-muted-foreground">
                   <div>
                     <p className="font-medium text-foreground mb-1">{t('lafoxy.languages')}</p>
                     <p>Java, C#, C++, Python, SQL, Visual Basic</p>
                   </div>
                   <div>
                     <p className="font-medium text-foreground mb-1">{t('lafoxy.technologies')}</p>
                     <p>API development, AI automation, n8n, Eclipse IDE, Visual Studio Code</p>
                   </div>
                 </div>
               </CardContent>
             </Card>
            
             <Card className="glass-card text-center">
               <CardContent className="p-6">
                 <h4 className="text-lg font-semibold mb-4">{t('lafoxy.gamedev')}</h4>
                 <div className="space-y-3 text-sm text-muted-foreground">
                   <div>
                     <p className="font-medium text-foreground mb-1">{t('lafoxy.engines')}</p>
                     <p>Unity, Blender, Aseprite, Paint.NET</p>
                   </div>
                   <div>
                     <p className="font-medium text-foreground mb-1">{t('lafoxy.programmingLanguages')}</p>
                     <p>C#, C++, Python</p>
                   </div>
                 </div>
               </CardContent>
             </Card>
          </div>

           {/* Development Projects */}
           <h3 className="text-2xl font-semibold mb-8 text-center">{t('lafoxy.featuredProjects')}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="glass-card group hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4">
                    
                    <img
                      src={project.coverImage}
                      alt={project.name}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                     <Button 
                       size="sm" 
                       variant="outline"
                       onClick={() => openScreenshots(project.screenshots)}
                     >
                       <Image className="w-3 h-3 mr-1" />
                       {t('lafoxy.screenshots')}
                     </Button>
                     <Button size="sm" variant="outline" asChild>
                       <a
                         href={project.sourceCode}
                         target="_blank"
                         rel="noopener noreferrer"
                       >
                         <Github className="w-3 h-3 mr-1" />
                         {t('lafoxy.sourceCode')}
                       </a>
                     </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Screenshots Modal */}
          <Dialog open={isScreenshotsOpen} onOpenChange={setIsScreenshotsOpen}>
            <DialogContent className="max-w-4xl">
               <DialogHeader>
                 <DialogTitle>{t('lafoxy.projectScreenshots')}</DialogTitle>
               </DialogHeader>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {selectedProjectScreenshots.map((screenshot, index) => (
                  <div key={index} className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center">
                    {screenshot ? (
                      <img 
                        src={screenshot} 
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-muted-foreground text-center">
                        <Image className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm">Screenshot {index + 1}</p>
                        <p className="text-xs">Add URL to featuredProjects array</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto text-center">
           <h2 className="text-4xl font-bold mb-4 gradient-text">{t('contact.title')}</h2>
           <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
             {t('contact.subtitle')}
           </p>
          <Card className="glass-card max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                 <div>
                   <h4 className="font-semibold mb-2">{t('contact.email')}</h4>
                   <p className="text-muted-foreground">gcamanciomg@gmail.com</p>
                 </div>
                 <div>
                   <h4 className="font-semibold mb-2">{t('contact.phone')}</h4>
                   <p className="text-muted-foreground">+55 (37) 9 9993-4666</p>
                 </div>
                 <div>
                   <h4 className="font-semibold mb-2">{t('contact.location')}</h4>
                   <p className="text-muted-foreground">Divinópolis, Minas Gerais - Brazil</p>
                 </div>
                 <div>
                   <h4 className="font-semibold mb-2">{t('contact.socialLinks')}</h4>
                  <div className="flex gap-3 justify-center">
                    <a href="https://github.com/LaFoxyy" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        GitHub
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/guilherme-campos-amancio-a02866212/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
           <p className="text-muted-foreground">
             {t('footer.copyright')}
           </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;