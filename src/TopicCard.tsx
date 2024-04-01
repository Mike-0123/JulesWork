import React from "react";

interface TopicCardProps {
  name: string;
  simpleDescription: string;
  detailedDescription: string;
  imgSrc: string;
}

const TopicCard: React.FC<TopicCardProps> = ({
  name,
  simpleDescription,
  detailedDescription,
  imgSrc,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <div className="p-4">
        <div className="mb-4 flex items-center">
          <div className="rounded-full overflow-hidden w-12 h-12 mr-4">
            <img
              className="h-full w-full object-cover"
              src={imgSrc}
              alt="Profile"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
            <p className="text-gray-400">{simpleDescription}</p>
          </div>
        </div>
        <p className="text-gray-300">{detailedDescription}</p>
      </div>
    </div>
  );
};

export default TopicCard;
