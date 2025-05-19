import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/images/prof-photo.png"
                alt="Abhina Sathyan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 16rem, 20rem"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>

            <p className="text-muted-foreground mb-4">
              I'm a full-stack developer with 7 years of experience in web and
              mobile app development, specializing in React.js, TypeScript,
              Next.js, and Node.js. I also have a strong background in AWS and
              AI.
            </p>

            <p className="text-muted-foreground mb-6">
              My experience spans both startups and medium-sized enterprises,
              where I've taken on roles beyond coding—acting as a Scrum Master,
              mentoring junior engineers, and even stepping into product
              management. I thrive on solving complex problems, refining user
              experiences, and ensuring seamless collaboration across teams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-medium mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">
                  B.E Computer Science
                  <br />
                  Coorg Institute of Technology, 2013
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Bangalore, India
                  <br />
                  Available for remote work
                </p>
              </div>
            </div>

            {/* <Button asChild variant="outline" className="gap-2">
              <Link href="/resume.pdf" target="_blank">
                <FileText className="h-4 w-4" />
                Download Resume
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
