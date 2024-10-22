import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, X, Mail } from "lucide-react";
import "./ContactCard.css";

const ContactCard: React.FC = () => {
  return (
    <Card className="w-full max-w-md m-auto mt-10 overflow-hidden shadow-xl">
      <div className="bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 p-6 text-white">
        <CardHeader className="card-header">
          <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
            <AvatarImage
              src="./public/profile.jpg?height=96&width=96"
              alt="Profile Picture"
            />
            <AvatarFallback>VAB</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h2 className="text-2xl">Vinodh Amudala Bhasker</h2>
            <p className="text-green-100">Technology Leader</p>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-green-100">
            Passionate to solve complex business problems through innovative
            solutions leveraging AI and cloud technologies.
          </p>
        </CardContent>
      </div>
      <CardFooter className="card-footer pt-5">
        <Button variant="outline" size="icon" className="button" asChild>
          <a
            href="https://www.linkedin.com/in/vinodh-bhasker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5 mt-1" />
            <span className="sr-only">LinkedIn profile</span>
          </a>
        </Button>
        <Button variant="outline" size="icon" className="button-teal" asChild>
          <a
            href="https://x.com/vinodh_ab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Twitter profile</span>
          </a>
        </Button>
        <Button variant="outline" size="icon" className="button-teal" asChild>
          <a href="mailto:vinodh@example.com">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email address</span>
          </a>
        </Button>
        <Button variant="outline" size="icon" className="button-blue" asChild>
          <a
            href="https://github.com/vbhasker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className=" h-5 w-5" />
            <span className="sr-only">Github profile</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactCard;
