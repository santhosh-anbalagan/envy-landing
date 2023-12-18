import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardProps) {
  return (
    <Card shadow={false} className="items-center text-center" placeholder={undefined}>
      <CardBody placeholder={undefined}>
        <Avatar src={img} className="mb-3" alt={client} size="lg"  placeholder={undefined}/>
        <Typography variant="h6" color="blue-gray" placeholder={undefined}>
          {client}
        </Typography>
        <Typography variant="small" className="mb-3 font-medium !text-gray-700" placeholder={undefined}>
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 font-normal !text-gray-500" placeholder={undefined}
        >
          &quot;{feedback}&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}

export default TestimonialCard;