import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StoryCard = ({ story }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{story.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Upvotes: {story.score}</p>
        <Button as="a" href={story.url} target="_blank" rel="noopener noreferrer">
          Read more
        </Button>
      </CardContent>
    </Card>
  );
};

export default StoryCard;