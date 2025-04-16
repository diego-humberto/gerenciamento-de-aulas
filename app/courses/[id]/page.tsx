"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { mockCourses } from "@/lib/mock-data";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function CourseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const course = mockCourses.find((c) => c.id === params.id);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!course) {
    return <div>Curso não encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <p className="text-muted-foreground">{course.description}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart
            className={`h-6 w-6 ${
              isFavorite ? "fill-red-500 text-red-500" : ""
            }`}
          />
        </Button>
      </div>

      <div className="aspect-video w-full mb-8">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="space-y-6">
        {course.modules.map((module) => (
          <Card key={module.id}>
            <CardHeader>
              <CardTitle>{module.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {module.lessons.map((lesson) => (
                  <li
                    key={lesson.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={lesson.id}
                      checked={lesson.completed}
                      onCheckedChange={() => {
                        // Handle lesson completion
                        console.log("Lesson completion toggled:", lesson.id);
                      }}
                    />
                    <label
                      htmlFor={lesson.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {lesson.title}
                    </label>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}