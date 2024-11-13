import React from "react";

const DescriptionReview = () => {
  return (
    <div className="w-[90%] mx-auto container">
      <div className="flex gap-10 py-5">
        <h1
          className="federo-regular text-gray-900 border-b border-gray-300 pb-2"
          style={{ fontSize: "1.25rem" }}
        >
          Description
        </h1>
        <h1
          className="federo-regular text-gray-500"
          style={{ fontSize: "1.25rem" }}
        >
          Reviews (24)
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <p className="montserrat text-gray-500" style={{ fontSize: "0.8rem" }}>
          Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
          purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
          sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget
          sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor.
          Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet
          interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi.
          In nulla quam, lacinia eu aliquam ac, aliquam in nisl
        </p>
        <p className="montserrat text-gray-500" style={{ fontSize: "0.8rem" }}>
          Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur
          blandit justo urna, id porttitor est dignissim nec. Pellentesque
          scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan
          et sagittis massa. Aliquam aliquam accumsan lectus quis auctor.
          Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula
          fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor
          sodales. Suspendisse eu fringilla leo, non aliquet sem.
        </p>
        <h1 className="federo-regular text-gray-900">Key Benfits</h1>
        <ul
          className="list-disc list-inside montserrat pl-5 text-gray-500 space-y-2"
          style={{ fontSize: "0.8rem" }}
        >
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
          <li>
            Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.
          </li>
          <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
          <li>Mauris eget diam magna, in blandit turpis.</li>
        </ul>
      </div>
    </div>
  );
};

export default DescriptionReview;
