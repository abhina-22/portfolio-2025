import { 
  Code2, Database, Globe, Layout, Server, Smartphone, 
  Cpu, Cloud, GitBranch, Terminal
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    icon: <Layout className="h-8 w-8 text-primary" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML/CSS"]
  },
  {
    title: "Backend Development",
    description: "Creating robust and scalable server-side applications",
    icon: <Server className="h-8 w-8 text-primary" />,
    skills: ["Node.js", "Express", "NestJS", "Django", "GraphQL", "Laravel"]
  },
  {
    title: "Database",
    description: "Designing and optimizing database structures",
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
  },
  {
    title: "DevOps & Cloud",
    description: "Deploying and managing applications in the cloud",
    icon: <Cloud className="h-8 w-8 text-primary" />,
    skills: ["AWS", "Docker", "CI/CD", "Kubernetes", "Terraform", "Jenkins"]
  },
  {
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications",
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    skills: ["React Native", "Expo", "Mobile UI/UX"]
  },
  {
    title: "Other Skills",
    description: "Additional technical and soft skills",
    icon: <Code2 className="h-8 w-8 text-primary" />,
    skills: ["Git", "Agile/Scrum"]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a wide range of technologies across the full stack.
            Here are the key areas where I excel:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="mb-4">{category.icon}</div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}