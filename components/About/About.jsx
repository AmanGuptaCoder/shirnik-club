import React from "react";
import { AboutRow } from "./AboutRow";
import MainImage from "../../public/images/main-img.png";

export const About = () => {
  return (
    
    <div className="flex flex-col gap-20 max-w-7xl mx-auto">
      
      
      <AboutRow
        heading={"About Fin-X-Thon 1.0 GLBITM"}
        img={"./images/gl.png"}
        isReverse
      >
             <p>
          Our hackathon, Fin-X-Thon is ready for making the Fin-Tech to the next level. 
We invite you to imagine a world where everyone, everywhere had access to financial services that met their needs and helped them create better lives.

        </p>
        <p>
          With the first edition of Fin-X-Thon &apos;23, we&apos;re
          hoping to see much more innovative, improved and effective solutions
          to the issues at hand and share them with the rest of the world by
          bringing back the community of student developers together yet again.
        </p>
        { <p> This event is being organised by Department of Information Technology, GL Bajaj Institute of technology and management, in association with Q2 Software </p> }
        
      </AboutRow>
    </div>
  );
};
