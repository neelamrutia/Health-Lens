import React from 'react'; // Importing React library to use JSX syntax and create React components
import Togglebutton from '../../utils/Togglebutton'; // Importing the Togglebutton component from a relative path

// Defining the Navbar functional component
const Navbar = () => {
  // Returning JSX for the Navbar component
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Creating a navigation bar with fixed position, using inline styles */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        {/* Creating a div element with flex display, aligning items center, and justifying content space-between */}
        <img src="./logo_hl.png" alt="" style={{ height: "10vh" }} />
        <a href="https://www.youtube.com/watch?v=mEXxfgKfdtg">
          <img src="./youtube_icon.png" alt="" style={{ height: "5vh" }} />
        </a>
        <a href="https://github.com/Sahil4804/Health-lens-v2">
          <img src="./githublink.png" alt="" style={{ height: "5vh" }} />
        </a>
        <a href="https://iiitaphyd-my.sharepoint.com/:b:/g/personal/archit_pethani_students_iiit_ac_in/Eeabbpa_A_1AuLqnEtPdcZoBurlaWeNJlj-i34mUh8865Q?e=ZsdVx0">
          <img src="./docs_icon.png" alt="" style={{ height: "5vh" }} />
        </a>
        <Togglebutton />
      </div>
    </nav>
  );
}

export default Navbar; // Exporting the Navbar component to be used elsewhere in the application
