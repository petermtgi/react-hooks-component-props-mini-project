import React from 'react';

const About = () => {
  const image = "https://placehold.co/300x100?text=Blog+Header"; 
  const paragraphText = "This is a blog about React and its ecosystem."; 

  return (
    <aside>
      <img src={image} alt="Blog logo" />
      <p>{paragraphText}</p>
    </aside>
  );
};

export default About;