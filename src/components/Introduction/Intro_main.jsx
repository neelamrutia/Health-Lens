import React from "react";
import introImage from './intro.png'; // Import the intro.png image

const Introduction = () => {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center', // Center items vertically
        justifyContent: 'center', // Center items horizontally
    };

    const textStyle = {
        flex: '1', // Allow text to grow and take up remaining space
        textAlign: 'center',
        padding: '0 20px', // Add padding for spacing
        transition: 'transform 0.3s ease-in-out', // Add transition for animation
    };

    const backgroundStyle = {
        backgroundImage: `url('intro.jpg')`, // Assuming you have another background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'black',
        padding: '50px', // Adjust padding as needed
        fontFamily:'Poppins'
    };

    const heading = {
        fontSize: '40px',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        color:'#F2613F',
        marginLeft: '-100px', // Add margin as needed
        marginBottom:'10px',
    };

    const otherImageStyle = {
        width: '500px', // Adjust width and height as needed
        height: '500px',
        backgroundImage: `url(${introImage})`, // Use the imported introImage variable
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '20px', // Adjust margin as needed
        borderRadius: '50%', // Make the image round
        transition: 'transform 0.3s ease-in-out', // Add transition for animation
    };

    // Hover effect for the image
    const handleImageHover = () => {
        const scale = 1.1; // Increase scale on hover
        document.getElementById('introImage').style.transform = `scale(${scale})`;
    };

    // Reset image scale on hover out
    const handleImageHoverOut = () => {
        document.getElementById('introImage').style.transform = 'scale(1)';
    };
    
    return (
        <div style={backgroundStyle}>
            <div style={containerStyle}>
                <div style={textStyle}>
                    <h1 style={heading}>Personal Health Tracker</h1>
                    <hr />
                    <br>
                    </br>
                    
                    <p style={{fontWeight:'lighter',width:'50vw'}}>
                        This is a dashboard that displays the data of a user's daily activities. The data is displayed in the form of charts and graphs.
                        The dashboard is divided into multiple sections, each displaying different types of data. 
                        The data includes information about the user's heart rate, step count, sleep patterns, and calorie. The dashboard is designed to be user-friendly and easy to navigate.
                        Our Dashboard Provides a detailed analysis of the user's daily activities and helps the user to keep track of their health and fitness goals.
                    </p>
                </div>
                <span
                    id="introImage"
                    style={otherImageStyle}
                    onMouseOver={handleImageHover}
                    onMouseOut={handleImageHoverOut}
                ></span>
            </div>
        </div>
    )
}

export default Introduction;
