// src/App.js

import React from "react";
import Card from "./Card";

const App = () => {
  const data = [
    {
      name: "John Doe",
      address: "123 Main St",
      phoneNumber: "123-456-7890",
      skills: "Programming, Design",
    },
    {
      name: "Jane Smith",
      address: "456 Elm St",
      phoneNumber: "987-654-3210",
      skills: "Writing, Marketing",
    },
    {
      name: "Jane Smith",
      address: "456 Elm St",
      phoneNumber: "987-654-3210",
      skills: "Writing, Marketing",
    },
    {
      name: "Jane Smith",
      address: "456 Elm St",
      phoneNumber: "987-654-3210",
      skills: "Writing, Marketing",
    },
    {
      name: "Jane Smith",
      address: "456 Elm St",
      phoneNumber: "987-654-3210",
      skills: "Writing, Marketing",
    },
    {
      name: "Jane Smith",
      address: "456 Elm St",
      phoneNumber: "987-654-3210",
      skills: "Ai Skills",
    },
    {
      name: "Jane Smith",
      address: "456 Elm St",
      phoneNumber: "987-654-3210",
      skills: "Writing, Marketing",
    },
    {
      name: "Jane Smith",
      address: "456 Elm St",
      phoneNumber: "987-654-3210",
      skills: "Writing, Marketing",
    },
    {
      name: "Jane Smith",
      address: "456 Elm St",
      phoneNumber: "987-654-3210",
      skills: "Writing, Marketing",
    },
    {
      name: "Jane Smith",
      address: "456 Elm St",
      phoneNumber: "987-654-3210",
      skills: "Writing, Marketing",
    },
    {
      name: "Jane Smith",
      address: "456 Elm St",
      phoneNumber: "987-654-3210",
      skills: "Writing, Marketing",
    },
    // Add more data as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            address={item.address}
            phoneNumber={item.phoneNumber}
            skills={item.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
