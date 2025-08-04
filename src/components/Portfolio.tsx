import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold gradient-text">LaFoxy</h1>
            <div className="flex gap-6">
              <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
              <a href="#velvet-paws" className="text-foreground/80 hover:text-foreground transition-colors">Velvet Paws Studio</a>
              <a href="#lafoxy" className="text-foreground/80 hover:text-foreground transition-colors">LaFoxy</a>
              <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Welcome to my creative space. Here you'll find my work as a developer and game creator.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              Get In Touch
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
                    [Add your bio here - describe your background, skills, and passion for development and game creation]
                  </p>
                  <p className="text-muted-foreground">
                    [Add more details about your journey, experience, and what drives you in your work]
                  </p>
                </div>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">[Your Photo Here]</span>
                </div>
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
                [Add description of your game company - its mission, vision, and what types of games you create]
              </p>
              <p className="text-muted-foreground mb-6">
                [Add more details about your game development philosophy and approach]
              </p>
              <Button className="bg-accent hover:bg-accent/90">
                Visit Studio Website
              </Button>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">[Studio Logo or Featured Game Screenshot]</span>
            </div>
          </div>

          {/* Games Portfolio */}
          <h3 className="text-2xl font-semibold mb-8 text-center">Featured Games</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((game) => (
              <Card key={game} className="glass-card group hover:scale-105 transition-transform">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center mb-4">
                    <span className="text-muted-foreground">[Game {game} Screenshot]</span>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">[Game {game} Title]</h4>
                    <p className="text-muted-foreground mb-4">
                      [Add game description, genre, and key features]
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Play Demo</Button>
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
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">[Developer Setup Photo or Code Screenshot]</span>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-4">Development Expertise</h3>
              <p className="text-muted-foreground mb-6">
                [Add details about your development skills, technologies you work with, and areas of expertise]
              </p>
              <p className="text-muted-foreground mb-6">
                [Add information about your development approach and what makes your work unique]
              </p>
              <div className="flex gap-4">
                <Button>View GitHub</Button>
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
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <span className="text-muted-foreground">[Project {project} Screenshot]</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">[Project {project} Name]</h4>
                  <p className="text-muted-foreground mb-4">
                    [Add project description, technologies used, and key achievements]
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm">Live Demo</Button>
                    <Button size="sm" variant="outline">Source Code</Button>
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
                  <p className="text-muted-foreground">[your.email@example.com]</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Social Links</h4>
                  <div className="flex gap-4 justify-center">
                    <Button variant="outline" size="sm">[GitHub]</Button>
                    <Button variant="outline" size="sm">[LinkedIn]</Button>
                    <Button variant="outline" size="sm">[Twitter]</Button>
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
            © 2024 LaFoxy & Velvet Paws Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;