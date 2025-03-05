import { useState } from "react";

export default function Faq() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  function handleClick(stateName) {
    if (stateName == "open1") {
      setOpen1(!open1);
    } else if (stateName == "open2") {
      setOpen2(!open2);
    } else if (stateName == "open3") {
      setOpen3(!open3);
    } else if (stateName == "open4") {
      setOpen4(!open4);
    }
  }

  return (
    <>
      <div className="relative h-screen bg-[#F5E9FC] flex items-center z-0">
        <div className="absolute top-0 left-0 w-full h-[230px] bg-[url(./assets/background-pattern-mobile.svg)] lg:bg-[url(./assets/background-pattern-desktop.svg)] bg-cover bg-center bg-no-repeat -z-10"></div>
        <div className="container mx-auto px-5 lg:max-w-[500px]">
          <div className="w-full bg-white px-6 py-4 rounded-md">
            <div className="w-full flex items-center gap-7">
              <img
                src="./src/assets/icon-star.svg"
                alt="Star Icon"
                height="25px"
                width="25px"
              />
              <h1 className="font-bold text-4xl pb-1 font-work text-darkPurple">
                FAQs
              </h1>
            </div>
            <div className="w-full mt-6">
              <div className="w-full flex justify-between items-center">
                <h3 className="text-sm font-semibold max-w-[200px] font-work text-darkPurple">
                  What is Frontend Mentor, and how will it help me?
                </h3>
                <button
                  type="button"
                  onClick={() => handleClick("open1")}
                  className="flex items-center"
                >
                  <img
                    src={
                      open1
                        ? "./src/assets/icon-minus.svg"
                        : "./src/assets/icon-plus.svg"
                    }
                    alt="Star Icon"
                    className={`transition-transform duration-300 transform ${
                      open1 ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
              <p
                className={`text-xs font-work overflow-hidden text-grayishPurple ${
                  open1 ? "max-h-[40px] opacity-100 mt-3" : "max-h-0 opacity-0"
                } transition-all duration-300`}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                nihil quibusdam sed sunt eius laboriosam non temporibus pariatur
                praesentium quidem.
              </p>
              <hr className="mt-3" />
            </div>
            <div className="w-full mt-6">
              <div className="w-full flex justify-between items-center">
                <h3 className="text-sm font-semibold max-w-[200px] text-darkPurple font-work">
                  What is Frontend Mentor, and how will it help me?
                </h3>
                <button
                  type="button"
                  onClick={() => handleClick("open2")}
                  className="flex items-center"
                >
                  <img
                    src={
                      open2
                        ? "./src/assets/icon-minus.svg"
                        : "./src/assets/icon-plus.svg"
                    }
                    alt="Star Icon"
                    className={`transition-transform duration-300 transform ${
                      open2 ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
              <p
                className={`text-xs font-work overflow-hidden text-grayishPurple ${
                  open2
                    ? "max-h-[40px] opacity-100 mt-3"
                    : "max-h-0 opacity-0 mt-0"
                } transition-all duration-300`}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus rem porro voluptatum nobis id in blanditiis quam iste
                hic quae?
              </p>
              <hr className="mt-3" />
            </div>
            <div className="w-full mt-6">
              <div className="w-full flex justify-between items-center">
                <h3 className="text-sm font-semibold max-w-[200px] font-work text-darkPurple">
                  What is Frontend Mentor, and how will it help me?
                </h3>
                <button
                  type="button"
                  onClick={() => handleClick("open3")}
                  className="flex items-center"
                >
                  <img
                    src={
                      open3
                        ? "./src/assets/icon-minus.svg"
                        : "./src/assets/icon-plus.svg"
                    }
                    alt="Star Icon"
                    className={`transition-transform duration-300 transform ${
                      open3 ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
              <p
                className={`text-xs font-work overflow-hidden text-grayishPurple ${
                  open3
                    ? "max-h-[40px] opacity-100 mt-3"
                    : "max-h-0 opacity-0 mt-0"
                } transition-all duration-300`}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus rem porro voluptatum nobis id in blanditiis quam iste
                hic quae?
              </p>
              <hr className="mt-3" />
            </div>
            <div className="w-full mt-6">
              <div className="w-full flex justify-between items-center">
                <h3 className="text-sm font-semibold max-w-[200px] font-work text-darkPurple">
                  What is Frontend Mentor, and how will it help me?
                </h3>
                <button
                  type="button"
                  onClick={() => handleClick("open4")}
                  className="flex items-center"
                >
                  <img
                    src={
                      open4
                        ? "./src/assets/icon-minus.svg"
                        : "./src/assets/icon-plus.svg"
                    }
                    alt="Star Icon"
                    className={`transition-transform duration-300 transform ${
                      open4 ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
              <p
                className={`text-xs font-work overflow-hidden text-grayishPurple ${
                  open4
                    ? "max-h-[40px] opacity-100 mt-3"
                    : "max-h-0 opacity-0 mt-0"
                } transition-all duration-300`}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus rem porro voluptatum nobis id in blanditiis quam iste
                hic quae?
              </p>
              <hr className="mt-3 mb-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
