import React from "react";

function Map() {
  return (
    <>
      <div className="flex items-center justify-center">
        <iframe
          className="w-[90%] h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.181454360091!2d75.80306297401683!3d26.865975462100185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d63924c2c5%3A0x30526bfa80b93416!2sHariyana%20Brahman%20Hostel%20jaipur!5e0!3m2!1sen!2sin!4v1720437317252!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Map;
