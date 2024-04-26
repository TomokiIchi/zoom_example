"use client";
import { useState } from "react";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { Resizable } from "re-resizable";

const Canvas = () => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(scale - 0.1);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-center p-4 bg-gray-200">
        <button
          title="Zoom In"
          onClick={handleZoomIn}
          className="px-2 py-1 mx-2 bg-blue-500 text-white rounded"
        >
          <FiZoomIn />
        </button>
        <button
          title="Zoom Out"
          onClick={handleZoomOut}
          className="px-2 py-1 mx-2 bg-blue-500 text-white rounded"
        >
          <FiZoomOut />
        </button>
      </div>
      <div className="flex-grow flex items-center justify-center bg-white">
        <Resizable
          size={{ width: 800, height: 600 }}
          style={{ transform: `scale(${scale})` }}
          className="border border-gray-400 justify-center items-center flex"
          onResize={(e, direction, ref, d) => {
            setScale((prevScale) => prevScale + d.width / 800);
          }}
        >
          {/* サイズが小さいときは数字とカードを表示し、サイズが大きくなるとアバターとコメントがカードで表示するようなもの */}
          {scale < 1 ? (
            <div className="max-w-lg mx-auto border px-6 py-4 rounded-lg bg-black">
              <div className="flex items-center justify-center">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full"
                />
              </div>
            </div>
          ) : (
            <div className="max-w-lg mx-auto border px-6 py-4 rounded-lg bg-black">
              <div className="flex items-center mb-6">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="text-lg font-medium text-gray-800">
                    John Doe
                  </div>
                  <div className="text-gray-500">2 hours ago</div>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet lorem nulla. Donec consequat urna a tortor sagittis
                lobortis.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-700 mr-4"
                  >
                    <i className="far fa-thumbs-up"></i> Like
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    <i className="far fa-comment-alt"></i> Reply
                  </a>
                </div>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-700 mr-4"
                  >
                    <i className="far fa-flag"></i> Report
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    <i className="far fa-share-square"></i> Share
                  </a>
                </div>
              </div>
            </div>
          )}
        </Resizable>
      </div>
    </div>
  );
};

export default Canvas;
