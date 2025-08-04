import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import ImageSlider from "@/components/ImageSlider";
import { Github, Linkedin, Twitter, ExternalLink, Code, Gamepad2 } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold gradient-text">Guilherme Campos Amancio</h1>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-6">
                <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
                <a href="#velvet-paws" className="text-foreground/80 hover:text-foreground transition-colors">Velvet Paws Studio</a>
                <a href="#lafoxy" className="text-foreground/80 hover:text-foreground transition-colors">LaFoxy</a>
                <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6">
            <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Welcome to my creative space. Here you'll find my work as a developer and game creator.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Code className="w-4 h-4 mr-2" />
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              <Gamepad2 className="w-4 h-4 mr-2" />
              Play Games
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Developer & Game Creator</h3>
                  <p className="text-muted-foreground mb-4">
                    I’m a self-taught and formally trained developer with experience in C#, Python, JavaScript, SQL, VBA, and AI automation tools like n8n. With a background in Computer Engineering, I’ve worked on projects ranging from automated Excel systems and Python tools during my year as an IT trainee at Engeselt, to AI-driven automation solutions at my current startup role.
                  </p>
                  <p className="text-muted-foreground">
                    Outside of work, I’m passionate about game development, currently building projects in Java and Unity that combine technical skill with creative design. Whether automating workflows or crafting immersive gameplay, I’m driven by the challenge of creating efficient, impactful, and engaging digital experiences.
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
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Velvet Paws Studio</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            My game development company focused on creating engaging and immersive gaming experiences.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-3xl font-semibold mb-4">About Velvet Paws Studio</h3>
              <p className="text-muted-foreground mb-6">
                Velvet Paws Studio is my personal indie game development space, dedicated to learning, experimenting, and growing as a developer. My mission is to explore new ideas, build my skills, and create games that challenge me creatively and technically. While I dream of one day crafting something truly big and memorable, for now, this is my playground for turning concepts into working games—mostly for my own enjoyment and as a way to push my abilities forward.
              </p>
              <p className="text-muted-foreground mb-6">
                I see game development as both a craft and a journey. Every project is a step toward mastering the art of blending gameplay, storytelling, and design. I experiment with different genres, mechanics, and styles, treating each game as both a finished product and a lesson for the next one. Velvet Paws Studio is where passion meets practice, and every line of code is part of building toward that future big dream.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90">
                <a
                  href="https://velvet-paws-studio.itch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Velvet Paws Studio website"
                >
                  Visit Studio Website
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
          <h3 className="text-2xl font-semibold mb-8 text-center">Featured Games</h3>
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
                    <h4 className="text-xl font-semibold mb-2">Zombielator Survival</h4>
                    <p className="text-muted-foreground mb-4">Dive into frantic, vampire-survivor-style action with this bullet-hell roguelike inspired by Vampire Survivors. As the undead horde closes in, dodge a relentless barrage of projectiles and unleash over-the-top weapons and power-ups. Ultimate goal: survive wave after wave, screen-clearing explosions, epic boss fights, and ever-escalating chaos. Perfect for quick plays and high-score chasers!</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href="https://velvet-paws-studio.itch.io/zombilator-survival"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Play Demo
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
                    <h4 className="text-xl font-semibold mb-2">Game 2 [Work in Progress]</h4>
                    <p className="text-muted-foreground mb-4">I’m currently developing a new portfolio project — a third-person Soulslike Action RPG inspired by Atlyss. Set in a magical forest where animals speak, enemies are corrupted, and bosses are purified rather than killed, the game features a day-night cycle, dynamic enemy rotation, and challenging boss encounters. I’m building everything from scratch, including character and environment modeling, combat mechanics (dodge, parry, and weak points), and a skill/weapon progression system. Developed in Unity with Blender and GIMP.</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href="https://miro.com/welcomeonboard/enNrcHNRYkxzeVVaeVJVSHU4cEZ6T1JXeXBsZG14NXZzN0sxaHQvZ3E1Sjc1ekRwUUJ0K0YrbXBTRUFEbDVkS1BFUzMySTdaQXdSZXpaRzFiU1VuVm9UVFpEcUN1RkFKa0tFdG12QUVPVU9FRHJzV0M2d0VnTTEvR2xPTnd4VWlNakdSWkpBejJWRjJhRnhhb1UwcS9BPT0hdjE=?share_link_id=898682515285"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Miro View
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
                    <h4 className="text-xl font-semibold mb-2">[Game {game} Title]</h4>
                    <p className="text-muted-foreground mb-4">[Add game description, genre, and key features]</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Play Demo
                      </Button>
                      <Button size="sm" variant="ghost">Learn More</Button>
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
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">LaFoxy</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            My development work spanning web applications, software solutions, and technical projects.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="aspect-video bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <Code className="w-16 h-16 text-primary/60" />
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-4">Development Expertise</h3>
              <p className="text-muted-foreground mb-6">
                [Add details about your development skills, technologies you work with, and areas of expertise]
              </p>
              <p className="text-muted-foreground mb-6">
                [Add information about your development approach and what makes your work unique]
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button>
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub
                </Button>
                <Button variant="outline">Download Resume</Button>
              </div>
            </div>
          </div>

          {/* Skills & Technologies */}
          <h3 className="text-2xl font-semibold mb-8 text-center">Technologies & Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {['Frontend', 'Backend', 'Mobile', 'Game Dev'].map((category) => (
              <Card key={category} className="glass-card text-center">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{category}</h4>
                  <p className="text-sm text-muted-foreground">
                    [List relevant technologies for {category.toLowerCase()}]
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Development Projects */}
          <h3 className="text-2xl font-semibold mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <Card key={project} className="glass-card group hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-12 h-12 text-primary/60" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">[Project {project} Name]</h4>
                  <p className="text-muted-foreground mb-4">
                    [Add project description, technologies used, and key achievements]
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Button size="sm">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="w-3 h-3 mr-1" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in working together? Have a project in mind? Let's connect and bring your ideas to life.
          </p>
          <Card className="glass-card max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-muted-foreground">gcamanciomg@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-muted-foreground">+55 (37) 9 9993-4666</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="text-muted-foreground">Divinópolis, Minas Gerais - Brazil</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Social Links</h4>
                  <div className="flex gap-3 justify-center">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </Button>
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
            © 2025 LaFoxy & Velvet Paws Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;