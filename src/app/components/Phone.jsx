"use client";

export default function Iphone({ screenshotSrc }) {
  return (
    <div className="relative rounded-lg oshadow-lg "
        style={{
            height:700,
            width:400
        }}
    >
      <img
        src="/phone.webp"
        alt="Iphone Frame"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Uncomment if you want to display a screenshot */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={screenshotSrc} 
            alt="App Screenshot"
            className="w-4/5 h-4/5 object-cover rounded-lg"
          />
      </div> */}
    </div>
  );
}
