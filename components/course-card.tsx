"use client";

import { Course } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/courses/${course.id}`}>
        <div className="aspect-video relative">
          <img
            src={course.image}
            alt={course.title}
            className="object-cover w-full h-full"
          />
        </div>
      </Link>
      <CardHeader className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "fill-red-500 text-red-500" : ""
            }`}
          />
        </Button>
        <CardTitle className="text-xl">
          <Link href={`/courses/${course.id}`}>{course.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {course.description}
        </p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progresso</span>
            <span>{course.progress}%</span>
          </div>
          <Progress value={course.progress} />
        </div>
      </CardContent>
    </Card>
  );
}