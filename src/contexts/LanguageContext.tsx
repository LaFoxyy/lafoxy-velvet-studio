import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.velvetPaws': 'Velvet Paws Studio',
    'nav.lafoxy': 'LaFoxy',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Portfolio',
    'hero.subtitle': 'Welcome to my creative space. Here you\'ll find my work as a developer and game creator.',
    'hero.viewWork': 'View My Work',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Developer & Game Creator',
    'about.description1': 'I\'m a self-taught and formally trained developer with experience in C#, Python, JavaScript, SQL, VBA, and AI automation tools like n8n. With a background in Computer Engineering, I\'ve worked on projects ranging from automated Excel systems and Python tools during my year as an IT trainee at Engeselt, to AI-driven automation solutions at my current startup role.',
    'about.description2': 'Outside of work, I\'m passionate about game development, currently building projects in Java and Unity that combine technical skill with creative design. Whether automating workflows or crafting immersive gameplay, I\'m driven by the challenge of creating efficient, impactful, and engaging digital experiences.',
    
    // Velvet Paws Studio
    'velvetPaws.title': 'Velvet Paws Studio',
    'velvetPaws.subtitle': 'My game development company focused on creating engaging and immersive gaming experiences.',
    'velvetPaws.aboutTitle': 'About Velvet Paws Studio',
    'velvetPaws.description1': 'Velvet Paws Studio is my personal indie game development space, dedicated to learning, experimenting, and growing as a developer. My mission is to explore new ideas, build my skills, and create games that challenge me creatively and technically. While I dream of one day crafting something truly big and memorable, for now, this is my playground for turning concepts into working games—mostly for my own enjoyment and as a way to push my abilities forward.',
    'velvetPaws.description2': 'I see game development as both a craft and a journey. Every project is a step toward mastering the art of blending gameplay, storytelling, and design. I experiment with different genres, mechanics, and styles, treating each game as both a finished product and a lesson for the next one. Velvet Paws Studio is where passion meets practice, and every line of code is part of building toward that future big dream.',
    'velvetPaws.visitWebsite': 'Visit Studio Website',
    'velvetPaws.featuredGames': 'Featured Games',
    'velvetPaws.playDemo': 'Play Demo',
    'velvetPaws.miroView': 'Miro View',
    'velvetPaws.notReady': 'Not Ready Yet',
    'velvetPaws.pleaseWait': 'Please Wait',
    
    // Game descriptions
    'games.zombielator.title': 'Zombielator Survival',
    'games.zombielator.description': 'Dive into frantic, vampire-survivor-style action with this bullet-hell roguelike inspired by Vampire Survivors. As the undead horde closes in, dodge a relentless barrage of projectiles and unleash over-the-top weapons and power-ups. Ultimate goal: survive wave after wave, screen-clearing explosions, epic boss fights, and ever-escalating chaos. Perfect for quick plays and high-score chasers!',
    'games.game2.title': 'Game 2 [Work in Progress]',
    'games.game2.description': 'I\'m currently developing a new portfolio project — a third-person Soulslike Action RPG inspired by Atlyss. Set in a magical forest where animals speak, enemies are corrupted, and bosses are purified rather than killed, the game features a day-night cycle, dynamic enemy rotation, and challenging boss encounters. I\'m building everything from scratch, including character and environment modeling, combat mechanics (dodge, parry, and weak points), and a skill/weapon progression system. Developed in Unity with Blender and GIMP.',
    'games.idea.title': '[Idea in Progress]',
    'games.idea.description': 'This game is my third game that is being produced in parallel with my second game, it\'s still a work in progress that it\'s not even on the paper yet since it\'s going to be my main project by the end of the year.',
    
    // LaFoxy Section
    'lafoxy.title': 'LaFoxy',
    'lafoxy.subtitle': 'My development work spanning web applications, software solutions, and technical projects.',
    'lafoxy.expertiseTitle': 'Development Expertise',
    'lafoxy.description1': 'I specialize in C#, Python, and AI automation solutions, with a strong focus on backend development. While backend work is my preference, I\'m fully capable of delivering full-stack and frontend projects when needed. My technical experience includes building scalable APIs, automating workflows, and integrating AI-driven features into applications.',
    'lafoxy.description2': 'I learn best by doing, so I actively explore different approaches to problem-solving. This not only expands my skill set but also allows me to discover more efficient and creative solutions. I enjoy experimenting with new techniques, frameworks, and tools to keep my work innovative and adaptable. My goal is always to deliver clean, maintainable, and high-performance solutions that meet the needs of both users and businesses.',
    'lafoxy.viewGithub': 'View GitHub',
    'lafoxy.downloadResumeEn': 'Download Resume English',
    'lafoxy.downloadResumePt': 'Download Resume Portuguese',
    'lafoxy.technologiesTitle': 'Technologies & Skills',
    'lafoxy.frontend': 'Frontend',
    'lafoxy.backend': 'Backend',
    'lafoxy.gamedev': 'Game Development',
    'lafoxy.languagesFrameworks': 'Languages & Frameworks:',
    'lafoxy.toolsPlatforms': 'Tools & Platforms:',
    'lafoxy.languages': 'Languages:',
    'lafoxy.technologies': 'Technologies & Tools:',
    'lafoxy.engines': 'Engines & Tools:',
    'lafoxy.programmingLanguages': 'Programming Languages:',
    'lafoxy.featuredProjects': 'Featured Projects',
    'lafoxy.screenshots': 'Screenshots',
    'lafoxy.sourceCode': 'Source Code',
    'lafoxy.projectScreenshots': 'Project Screenshots',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Interested in working together? Have a project in mind? Let\'s connect and bring your ideas to life.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.socialLinks': 'Social Links',
    
    // Footer
    'footer.copyright': '© 2025 LaFoxy & Velvet Paws Studio. All rights reserved.',
    
    // Projects
    'projects.library.title': 'Library Collection in C++',
    'projects.library.description': 'Work carried out in the fourth semester of college, replicating a library collection for the Object-Oriented Programming course, using only OOP concepts, without delving into graphical interface development.',
    'projects.prordr.title': 'PRORDR Maker',
    'projects.prordr.description': 'An application for generating .txt files in a specific format to be used in a DOS system during the design of electrical projects and the implementation of power networks in rural areas. The application simplifies line editing, detects errors, and calculates the construction cost in USD. Developed for the company Engeselt Engenharia e Serviços Elétricos.',
    'projects.calculator.title': 'Calculator',
    'projects.calculator.description': 'This is central coordination server of a distributed calculator system developed in Java. It communicates with multiple clients and subordinate slave calculators — both basic and special — through RMI (Remote Method Invocation) and TCP sockets.',
    'projects.lia.title': 'L.IA Solucões - Main page',
    'projects.lia.description': 'This website started as a project where I built the foundation using HTML, CSS, and JavaScript. After establishing the base structure and layout, I integrated Lovable AI to help enhance the codebase, apply modern best practices, and implement a more scalable design using modern tools and libraries. Still a work in progress.',
    'projects.first.title': 'My First Learning Project',
    'projects.first.description': 'This was one of my first web projects, built to practice HTML and introduce tabletop RPGs to new players.',
    'projects.ivory.title': 'Ivory Tower',
    'projects.ivory.description': 'A report and data analysis presenting the findings of a research project investigating the role and impact of university research activities in Divinópolis, Brazil, specifically from 2010 to 2020, focusing on the UEMG (State University of Minas Gerais) Divinópolis campus.'
  },
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.velvetPaws': 'Velvet Paws Studio',
    'nav.lafoxy': 'LaFoxy',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.title': 'Portfólio',
    'hero.subtitle': 'Bem-vindo ao meu espaço criativo. Aqui você encontrará meu trabalho como desenvolvedor e criador de jogos.',
    'hero.viewWork': 'Ver Meu Trabalho',
    
    // About Section
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Desenvolvedor & Criador de Jogos',
    'about.description1': 'Sou um desenvolvedor autodidata e formalmente treinado com experiência em C#, Python, JavaScript, SQL, VBA e ferramentas de automação de IA como n8n. Com formação em Engenharia de Computação, trabalhei em projetos que vão desde sistemas automatizados de Excel e ferramentas Python durante meu ano como estagiário de TI na Engeselt, até soluções de automação baseadas em IA no meu cargo atual em startup.',
    'about.description2': 'Fora do trabalho, sou apaixonado pelo desenvolvimento de jogos, atualmente construindo projetos em Java e Unity que combinam habilidade técnica com design criativo. Seja automatizando fluxos de trabalho ou criando jogabilidade imersiva, sou motivado pelo desafio de criar experiências digitais eficientes, impactantes e envolventes.',
    
    // Velvet Paws Studio
    'velvetPaws.title': 'Velvet Paws Studio',
    'velvetPaws.subtitle': 'Minha empresa de desenvolvimento de jogos focada em criar experiências de jogo envolventes e imersivas.',
    'velvetPaws.aboutTitle': 'Sobre o Velvet Paws Studio',
    'velvetPaws.description1': 'Velvet Paws Studio é meu espaço pessoal de desenvolvimento de jogos indie, dedicado a aprender, experimentar e crescer como desenvolvedor. Minha missão é explorar novas ideias, construir minhas habilidades e criar jogos que me desafiem criativa e tecnicamente. Embora eu sonhe em um dia criar algo verdadeiramente grande e memorável, por enquanto, este é meu playground para transformar conceitos em jogos funcionais—principalmente para meu próprio prazer e como uma forma de impulsionar minhas habilidades.',
    'velvetPaws.description2': 'Vejo o desenvolvimento de jogos como um ofício e uma jornada. Cada projeto é um passo em direção ao domínio da arte de misturar jogabilidade, narrativa e design. Experimento com diferentes gêneros, mecânicas e estilos, tratando cada jogo como um produto finalizado e uma lição para o próximo. Velvet Paws Studio é onde paixão encontra prática, e cada linha de código é parte da construção em direção a esse grande sonho futuro.',
    'velvetPaws.visitWebsite': 'Visitar Site do Studio',
    'velvetPaws.featuredGames': 'Jogos em Destaque',
    'velvetPaws.playDemo': 'Jogar Demo',
    'velvetPaws.miroView': 'Ver no Miro',
    'velvetPaws.notReady': 'Ainda Não Pronto',
    'velvetPaws.pleaseWait': 'Por Favor Aguarde',
    
    // Game descriptions
    'games.zombielator.title': 'Zombielator Survival',
    'games.zombielator.description': 'Mergulhe em uma ação frenética no estilo vampire-survivor com este roguelike bullet-hell inspirado em Vampire Survivors. Enquanto a horda de mortos-vivos se aproxima, desvie de uma barragem implacável de projéteis e libere armas e power-ups exagerados. Objetivo final: sobreviver onda após onda, explosões que limpam a tela, lutas épicas contra chefes e caos sempre crescente. Perfeito para partidas rápidas e caçadores de pontuação alta!',
    'games.game2.title': 'Jogo 2 [Trabalho em Progresso]',
    'games.game2.description': 'Atualmente estou desenvolvendo um novo projeto de portfólio — um Action RPG Soulslike em terceira pessoa inspirado em Atlyss. Ambientado em uma floresta mágica onde animais falam, inimigos são corrompidos e chefes são purificados ao invés de mortos, o jogo apresenta um ciclo dia-noite, rotação dinâmica de inimigos e encontros desafiadores com chefes. Estou construindo tudo do zero, incluindo modelagem de personagens e ambientes, mecânicas de combate (esquiva, aparar e pontos fracos) e um sistema de progressão de habilidades/armas. Desenvolvido em Unity com Blender e GIMP.',
    'games.idea.title': '[Ideia em Progresso]',
    'games.idea.description': 'Este jogo é meu terceiro jogo que está sendo produzido em paralelo com meu segundo jogo, ainda é um trabalho em progresso que nem está no papel ainda, pois será meu projeto principal até o final do ano.',
    
    // LaFoxy Section
    'lafoxy.title': 'LaFoxy',
    'lafoxy.subtitle': 'Meu trabalho de desenvolvimento abrangendo aplicações web, soluções de software e projetos técnicos.',
    'lafoxy.expertiseTitle': 'Experiência em Desenvolvimento',
    'lafoxy.description1': 'Sou especializado em C#, Python e soluções de automação de IA, com forte foco em desenvolvimento backend. Embora o trabalho backend seja minha preferência, sou totalmente capaz de entregar projetos full-stack e frontend quando necessário. Minha experiência técnica inclui construção de APIs escaláveis, automatização de fluxos de trabalho e integração de recursos baseados em IA em aplicações.',
    'lafoxy.description2': 'Aprendo melhor fazendo, então exploro ativamente diferentes abordagens para resolução de problemas. Isso não apenas expande meu conjunto de habilidades, mas também me permite descobrir soluções mais eficientes e criativas. Gosto de experimentar com novas técnicas, frameworks e ferramentas para manter meu trabalho inovador e adaptável. Meu objetivo é sempre entregar soluções limpas, sustentáveis e de alta performance que atendam às necessidades tanto dos usuários quanto dos negócios.',
    'lafoxy.viewGithub': 'Ver GitHub',
    'lafoxy.downloadResumeEn': 'Baixar Currículo Inglês',
    'lafoxy.downloadResumePt': 'Baixar Currículo Português',
    'lafoxy.technologiesTitle': 'Tecnologias & Habilidades',
    'lafoxy.frontend': 'Frontend',
    'lafoxy.backend': 'Backend',
    'lafoxy.gamedev': 'Desenvolvimento de Jogos',
    'lafoxy.languagesFrameworks': 'Linguagens & Frameworks:',
    'lafoxy.toolsPlatforms': 'Ferramentas & Plataformas:',
    'lafoxy.languages': 'Linguagens:',
    'lafoxy.technologies': 'Tecnologias & Ferramentas:',
    'lafoxy.engines': 'Engines & Ferramentas:',
    'lafoxy.programmingLanguages': 'Linguagens de Programação:',
    'lafoxy.featuredProjects': 'Projetos em Destaque',
    'lafoxy.screenshots': 'Capturas de Tela',
    'lafoxy.sourceCode': 'Código Fonte',
    'lafoxy.projectScreenshots': 'Capturas de Tela do Projeto',
    
    // Contact Section
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Interessado em trabalhar juntos? Tem um projeto em mente? Vamos nos conectar e dar vida às suas ideias.',
    'contact.email': 'Email',
    'contact.phone': 'Telefone',
    'contact.location': 'Localização',
    'contact.socialLinks': 'Links Sociais',
    
    // Footer
    'footer.copyright': '© 2025 LaFoxy & Velvet Paws Studio. Todos os direitos reservados.',
    
    // Projects
    'projects.library.title': 'Coleção de Biblioteca em C++',
    'projects.library.description': 'Trabalho realizado no quarto semestre da faculdade, replicando um acervo de biblioteca para a disciplina de Programação Orientada a Objetos, usando apenas conceitos de POO, sem se aprofundar no desenvolvimento de interface gráfica.',
    'projects.prordr.title': 'PRORDR Maker',
    'projects.prordr.description': 'Uma aplicação para gerar arquivos .txt em formato específico para ser usado em sistema DOS durante o projeto de projetos elétricos e implementação de redes de energia em áreas rurais. A aplicação simplifica a edição de linhas, detecta erros e calcula o custo de construção em USD. Desenvolvido para a empresa Engeselt Engenharia e Serviços Elétricos.',
    'projects.calculator.title': 'Calculadora',
    'projects.calculator.description': 'Este é o servidor de coordenação central de um sistema de calculadora distribuída desenvolvido em Java. Ele se comunica com múltiplos clientes e calculadoras escravas subordinadas — tanto básicas quanto especiais — através de RMI (Remote Method Invocation) e sockets TCP.',
    'projects.lia.title': 'L.IA Soluções - Página Principal',
    'projects.lia.description': 'Este site começou como um projeto onde construí a base usando HTML, CSS e JavaScript. Após estabelecer a estrutura e layout base, integrei Lovable AI para ajudar a aprimorar o código, aplicar melhores práticas modernas e implementar um design mais escalável usando ferramentas e bibliotecas modernas. Ainda é um trabalho em progresso.',
    'projects.first.title': 'Meu Primeiro Projeto de Aprendizado',
    'projects.first.description': 'Este foi um dos meus primeiros projetos web, construído para praticar HTML e introduzir RPGs de mesa para novos jogadores.',
    'projects.ivory.title': 'Torre de Marfim',
    'projects.ivory.description': 'Um relatório e análise de dados apresentando os achados de um projeto de pesquisa investigando o papel e impacto das atividades de pesquisa universitária em Divinópolis, Brasil, especificamente de 2010 a 2020, focando no campus da UEMG (Universidade do Estado de Minas Gerais) Divinópolis.'
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};