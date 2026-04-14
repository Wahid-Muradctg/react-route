import React from 'react';
import { useState } from 'react';

const Text = () => {
   const [showMore, setShowMore] = useState(false);

  const text =
    "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state efficiently. React helps build fast and interactive web applications.";

  const shortText = text.slice(0, 50);

  const toggleText = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <p>
        {showMore ? text : shortText + "..."}
      </p>

      <button onClick={toggleText}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Text;