import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={course.thumbnail || "https://via.placeholder.com/400x200"}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-[#1C1C1E] mb-2 truncate">
          {course.title}
        </h2>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
          {course.description}
        </p>
        <p className="text-sm text-gray-700 mb-1">
          Kohëzgjatja: {course.duration} orë
        </p>
        <p className="text-sm text-gray-700 mb-2">
          Rregjistrime: {course.enrollCount || 0}
        </p>
        <Link
          to={`/courses/${course._id}`}
          className="inline-block bg-[#B43F3F] text-white px-4 py-2 rounded hover:bg-[#992e2e]"
        >
          Shiko më shumë
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
