import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  Clock,
  CheckCircle,
  XCircle,
  FileSearch,
  Building,
  AlertCircle,
  LucideIcon,
} from "lucide-react";
import { ReactNode } from "react";

type TimelineSubItem = {
  title: string;
  content: ReactNode;
};

type TimelineItemProps = {
  title: string;
  description: string;
  content: ReactNode;
  icon: LucideIcon;
  isLast?: boolean;
  cumulativeTime?: string;
  date?: string;
  subItems?: TimelineSubItem[];
};

const TimelineItem = ({
  title,
  description,
  content,
  icon: Icon,
  isLast = false,
  cumulativeTime,
  date,
  subItems = [],
}: TimelineItemProps) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary bg-background">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      {!isLast && <div className="w-0.5 h-full bg-primary mt-2"></div>}
    </div>
    <div className="flex-1 md:min-w-xl mb-6">
      <Card className="mb-2">
        <CardHeader>
          <CardTitle className="text-orange-500 font-bold text-xl">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{content}</CardContent>
      </Card>
      {subItems.map((item, index) => (
                <Card key={index} className="ml-8 mt-2 border-dashed">
                    <CardHeader>
                        <CardTitle className="text-sm">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>{item.content}</CardContent>
                </Card>
            ))}
      {/* {cumulativeTime && (
                <div className="mt-2 text-right">
                    <span className="bg-muted px-2 py-1 rounded text-sm font-semibold">{cumulativeTime}</span>
                </div>
            )} */}
    </div>
  </div>
);

export default function ProcessFlowSinglePaths() {
  const renderHomesNSWPath = (): ReactNode => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mt-6 mb-4">Event Schedule</h2>
      <TimelineItem
        title="Phase 1: Registration"
        description="Complete your team registration. Each team should have 3-4 members with diverse skills in AI, development, and problem-solving."
        icon={Building}
        content={
          <p>
            <Clock className="inline mr-2" />
            Until May 31, 2025
          </p>
        }
        cumulativeTime="Start"
      />
      <TimelineItem
        title="Phase 2: Primary Idea Submission"
        description="Submit your innovative idea or choose from our provided use cases for the competition. This is your chance to showcase your creative solution."
        icon={CheckCircle}
        content={
          <p>
            <Clock className="inline mr-2" />
            June 15, 2025
          </p>
        }
        cumulativeTime="6 weeks"
        subItems={
            [
                {
                title: "Master class on genAI",
                content: (
                    <p>
                    <Clock className="inline mr-2" />
                    Date announce soon
                    </p>
                ),
                },
            ]
        }
      />
      <TimelineItem
        title="Phase 3: Concept Shortlisting"
        description="Our committee will evaluate and shortlist the prospective ideas. Selected teams will be notified to prepare their strategy presentations. The results will be available on the results tab as well as linkedin."
        icon={FileSearch}
        content={
          <p>
            <Clock className="inline mr-2" />
            June 16-20, 2025
          </p>
        }
        cumulativeTime="14 weeks"
      />
      <TimelineItem
        title="Phase 4: Travel Information"
        description="Travel details and location along with tickets will be made available."
        icon={FileSearch}
        content={
          <p>
            <Clock className="inline mr-2" />
            June 30, 2025
          </p>
        }
        cumulativeTime="14 weeks"
      />
      <TimelineItem
        title="Phase 5: Event Kickoff"
        description="Report at the venue to collect your IDs and receive resources. Begin your 48-hour journey of innovation and development."
        icon={FileSearch}
        content={
          <p>
            <Clock className="inline mr-2" />
            July 10, 2025 (Afternoon)
          </p>
        }
        cumulativeTime="14 weeks"
      />
      <TimelineItem
        title="Phase 6: Mid-Event Checkpoint"
        description="Progress review at halfway point. Mentors will be available to assist with any technical challenges to help achieve your goals."
        icon={FileSearch}
        content={
          <p>
            <Clock className="inline mr-2" />
            July 11, 2025 (Afternoon)
          </p>
        }
        cumulativeTime="14 weeks"
      />
      {renderFinalSteps(10)}
    </div>
  );

  // const renderLandcomPath = (): ReactNode => (
  //     <div className="space-y-4">
  //         <h2 className="text-xl font-semibold mt-6 mb-4">Path 2: Homes NSW Declines, Landcom Acquires</h2>
  //         <TimelineItem
  //             title="Preliminary DD Complete"
  //             description="Property Offered to Homes NSW"
  //             icon={Building}
  //             content={
  //                 <p>
  //                     <Clock className="inline mr-2" />
  //                     Homes NSW: 6 weeks to confirm interest
  //                 </p>
  //             }
  //             cumulativeTime="Start"
  //         />
  //         <TimelineItem
  //             title="Homes NSW Declines Interest"
  //             description="Homes NSW decides not to proceed"
  //             icon={XCircle}
  //             content={<p>Homes NSW declines interest in acquiring the property</p>}
  //             cumulativeTime="6 weeks"
  //         />
  //         <TimelineItem
  //             title="Property Offered to Landcom"
  //             description="Landcom considers the property"
  //             icon={Building}
  //             content={
  //                 <p>
  //                     <Clock className="inline mr-2" />
  //                     Landcom: 2 weeks to confirm interest
  //                 </p>
  //             }
  //             cumulativeTime="8 weeks"
  //         />
  //         <TimelineItem
  //             title="Landcom Confirms Interest"
  //             description="Landcom decides to proceed"
  //             icon={CheckCircle}
  //             content={<p>Landcom confirms interest in acquiring the property</p>}
  //             cumulativeTime="10 weeks"
  //         />
  //         <TimelineItem
  //             title="Landcom Due Diligence"
  //             description="Landcom conducts due diligence"
  //             icon={FileSearch}
  //             content={
  //                 <p>
  //                     <Clock className="inline mr-2" />2 months for due diligence
  //                 </p>
  //             }
  //             subItems={[
  //                 {
  //                     title: "Information Requests",
  //                     content: (
  //                         <p>
  //                             <Clock className="inline mr-2" />
  //                             Land-owning agencies: 5 business days to respond to requests
  //                         </p>
  //                     ),
  //                 },
  //             ]}
  //             cumulativeTime="18 weeks"
  //         />
  //         {renderFinalSteps(18)}
  //     </div>
  // )

  const renderFinalSteps = (previousWeeks: number): ReactNode => (
    <>
      <TimelineItem
        title="Final Submission"
        description="Push your final code to the repository with complete documentation in readme.md for running the code. Prepare for demonstrations."
        icon={AlertCircle}
        isLast={true}
        content={
          <p>
            <Clock className="inline mr-2" />
            July 12, 2025 (Afternoon)
          </p>
        }
        cumulativeTime={`${previousWeeks + 4} weeks`}
      />
    </>
  );

  return (
    <div className="container mx-auto p-4 space-y-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-8">
        T$O Hackathon Schedule
      </h1>
      <div className="flex items-center justify-center gap-8">
        <TracingBeam className="px-6">
          {renderHomesNSWPath()}
          {/* {renderLandcomPath()} */}
          {/* {renderFinalSteps(0)} */}
        </TracingBeam>
      </div>
    </div>
  );
}
