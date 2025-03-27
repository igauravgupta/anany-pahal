import React from "react"; // Fix import (React should start with a capital letter)

const LocationMap = () => {
  return (
    <div> 
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Location Map</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224176.69698534257!2d76.76037529453126!3d28.60694920000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bebddef3a4b%3A0xf7ea2f4af17a9076!2sAsha%20Foundation%20(NGO)!5e0!3m2!1sen!2sin!4v1734764611463!5m2!1sen!2sin"
          width="100%"
          height="200"
          className="border-0 rounded-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default LocationMap;
