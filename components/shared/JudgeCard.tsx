import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from 'next/link';



interface Judge {
  id: number;
  name: string;
  image: string;
  currentPosition: string;
  company: string;
  pastPositions: string[];
  education: string[];
  expertise: string[];
  linkedIn?: string; // Optional LinkedIn profile URL
}

interface JudgeCardProps {
  judge: Judge;
}

const JudgeCard: React.FC<JudgeCardProps> = ({ judge }) => {
  const initials = judge.name
    .split(' ')
    .map(name => name[0])
    .join('');

  return (
    <Card className="px-2">
      <CardHeader className="pt-2">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16 border-2 border-orange-200">
            <AvatarImage src={judge.image} alt={judge.name} />
            <AvatarFallback className="bg-orange-100 text-orange-500">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold">{judge.name}</h3>
            <p className="text-sm text-muted-foreground">
              {judge.currentPosition} 
            </p>
            <p className="text-sm text-muted-foreground">
                {judge.company}
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="px-2">
        {/* <div className="flex flex-wrap gap-1 mb-3">
          {judge.expertise.slice(0, 2).map((skill, index) => (
            <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-500 hover:bg-orange-200">
              {skill}
            </Badge>
          ))}
          {judge.expertise.length > 2 && (
            <Badge variant="outline" className="bg-transparent border-orange-200 text-orange-500">
              +{judge.expertise.length - 2}
            </Badge>
          )}
        </div> */}
        
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full items-center justify-center gap-1 rounded-md py-2 text-sm border-orange-100 font-medium text-orange-700 hover:bg-orange-50 transition-colors"
            >
              View details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-center">{judge.name}</DialogTitle>
            </DialogHeader>
            
            <div className="flex flex-col md:flex-row gap-6 pt-4">
              <div className="flex flex-col items-center space-y-3">
                <Avatar className="h-32 w-32 border-2 border-orange-200">
                  <AvatarImage src={judge.image} alt={judge.name} className="object-cover" />
                  <AvatarFallback className="bg-orange-100 text-orange-500 text-2xl">{initials}</AvatarFallback>
                </Avatar>
                
                <div className="text-center">
                  <p className="font-medium text-lg">{judge.currentPosition}</p>
                  <p className="text-muted-foreground">{judge.company}</p>
                </div>
                <Link href={judge.linkedIn || '#'} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="flex gap-2 mt-2">
                  <Linkedin className="h-4 w-4" />
                  {/* <span>LinkedIn Profile</span> */}
                </Button>
                </Link>
              </div>
              
              <div className="flex-1 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                    <Briefcase className="h-4 w-4 text-orange-600" />
                    <span>Past Positions</span>
                  </div>
                  <ul className="space-y-1 text-sm px-4">
                    {judge.pastPositions.map((position, index) => (
                      <li key={index} className="text-slate-600 list-disc">{position}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                    <GraduationCap className="h-4 w-4 text-orange-600" />
                    <span>Education</span>
                  </div>
                  <ul className="space-y-1 text-sm px-4">
                    {judge.education.map((edu, index) => (
                      <li key={index} className="text-slate-600 list-disc">{edu}</li>
                    ))}
                  </ul>
                </div>
                
                {/* <div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                    <span>Expertise</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {judge.expertise.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-500">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default JudgeCard;
