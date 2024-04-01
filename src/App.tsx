import React from "react";
import TopicCard from "./TopicCard";

const App: React.FC = () => {
  const topicCardsData: {
    name: string;
    simpleDescription: string;
    detailedDescription: string;
    imgSrc: string;
  }[] = [
    {
      name: "Debbie O'Brien",
      simpleDescription: "Samer Program Manager at Microsoft",
      detailedDescription:
        "Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.",
      imgSrc: "/mike.png",
    },
    {
      name: "John Doe",
      simpleDescription: "Web Developer",
      detailedDescription:
        "Passionate about creating beautiful and responsive websites using modern web technologies.",
      imgSrc: "/mike.png",
    },
    {
      name: "Jane Smith",
      simpleDescription: "Graphic Designer",
      detailedDescription:
        "Specialized in creating visually appealing graphics and illustrations for digital and print media.",
      imgSrc: "/mike.png",
    },
    {
      name: "Jane Smith",
      simpleDescription: "Graphic Designer",
      detailedDescription:
        "Specialized in creating visually appealing graphics and illustrations for digital and print media.",
      imgSrc: "/mike.png",
    },
    {
      name: "Jane Smith",
      simpleDescription: "Graphic Designer",
      detailedDescription:
        "Specialized in creating visually appealing graphics and illustrations for digital and print media.",
      imgSrc: "/mike.png",
    },
    {
      name: "Jane Smith",
      simpleDescription: "Graphic Designer",
      detailedDescription:
        "Specialized in creating visually appealing graphics and illustrations for digital and print media.",
      imgSrc: "/mike.png",
    },
    {
      name: "Jane Smith",
      simpleDescription: "Graphic Designer",
      detailedDescription:
        "Specialized in creating visually appealing graphics and illustrations for digital and print media.",
      imgSrc: "/mike.png",
    },
    // Add more sample data for additional cards...
  ];

  return (
    <div className="flex justify-center min-h-screen bg-gray-900">
      <div className="max-w-screen-lg w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topicCardsData.map((card, index) => (
          <TopicCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default App;
