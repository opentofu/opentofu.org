import React from "react";

export default function Card({ section, title, description }) {
  return (
    <div className="p-10 bg-blue-900 text-white border-t-4 border-brand-500 w-[600px] h-[300px] flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-full w-full flex z-[0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="601"
          height="600"
          className="object-cover w-[600px] opacity-[3%]"
        >
          <g clipPath="url(#a)">
            <path fill="#fff" d="M.988 0h600v600h-600z" />
            <path
              fill="url(#b)"
              d="m566.478 57.96.12.08-.12.18v45.74l34.5-23v-46L548.538 0h-62.67v4.22l80.61 53.74Z"
            />
            <path
              fill="url(#c)"
              d="m485.868 204.22 80.61 53.74.12.08-.12.18v45.74l34.5-23v-46l-115.11-76.74v46Z"
            />
            <path
              fill="url(#d)"
              d="m485.868 404.22 80.61 53.74.12.08-.12.18v45.74l34.5-23v-46l-115.11-76.74v46Z"
            />
            <path fill="url(#e)" d="M485.868 600h62.67l-62.67-41.78V600Z" />
            <path fill="url(#f)" d="M422.438 0h-5.94v3.96l5.94-3.96Z" />
            <path
              fill="url(#g)"
              d="m416.738 158.12-.24.36v45.48l34.5-23v-45.74l.12-.18-.12-.08-115.13-76.74v46l80.61 53.74.26.16Z"
            />
            <path
              fill="url(#h)"
              d="m416.498 403.96 34.5-23v-45.74l.12-.18-.12-.08-115.13-76.74v46l80.61 53.74.26.16-.24.36v45.48Z"
            />
            <path
              fill="url(#i)"
              d="m450.998 535.22.12-.18-.12-.08-115.13-76.74v46l80.61 53.74.26.16-.24.36V600h5.94l28.56-19.04v-45.74Z"
            />
            <path
              fill="url(#j)"
              d="m266.488 57.96.12.08-.12.18v45.74l34.5-23v-46L248.538 0h-62.67v4.22l80.62 53.74Z"
            />
            <path
              fill="url(#k)"
              d="m185.868 204.22 80.62 53.74.12.08-.12.18v45.74l34.5-23v-46l-115.12-76.74v46Z"
            />
            <path
              fill="url(#l)"
              d="m185.868 404.22 80.62 53.74.12.08-.12.18v45.74l34.5-23v-46l-115.12-76.74v46Z"
            />
            <path fill="url(#m)" d="M185.868 600h62.67l-62.67-41.78V600Z" />
            <path fill="url(#n)" d="M122.438 0h-5.95v3.96l5.95-3.96Z" />
            <path
              fill="url(#o)"
              d="m116.728 158.12-.24.36v45.48l34.5-23v-45.74l.12-.18-.12-.08-115.11-76.74v46l80.61 53.74.24.16Z"
            />
            <path
              fill="url(#p)"
              d="m150.988 335.22.12-.18-.12-.08-115.11-76.74v46l80.61 53.74.24.16-.24.36v45.48l34.5-23v-45.74Z"
            />
            <path
              fill="url(#q)"
              d="m150.988 535.22.12-.18-.12-.08-115.11-76.74v46l80.61 53.74.24.16-.24.36V600h5.95l28.55-19.04v-45.74Z"
            />
            <path fill="url(#r)" d="M1.008 80.94V34.96h-.02v46h.02v-.02Z" />
            <path fill="url(#s)" d="M1.008 280.94V234.96h-.02v46h.02v-.02Z" />
            <path fill="url(#t)" d="M1.008 480.94V434.96h-.02v46h.02v-.02Z" />
            <path
              fill="url(#u)"
              d="M300.979 115.93V200l63.07-42.04-63.07-42.03Z"
            />
            <path
              fill="url(#v)"
              d="M.988 115.93V200l63.07-42.04-63.07-42.03Z"
            />
            <path
              fill="url(#w)"
              d="m300.979 400 63.07-42.04-63.07-42.03V400Z"
            />
            <path
              fill="url(#x)"
              d="M.988 315.93V400l63.07-42.04-63.07-42.03Z"
            />
            <path
              fill="url(#y)"
              d="M300.979 515.93V600l63.07-42.04-63.07-42.03Z"
            />
            <path
              fill="url(#z)"
              d="M.988 515.93V600l63.07-42.04-63.07-42.03Z"
            />
            <path
              fill="url(#A)"
              d="m150.988 500 63.07-42.04-63.07-42.03V500Z"
            />
            <path
              fill="url(#B)"
              d="m450.988 500 63.07-42.04-63.07-42.03V500Z"
            />
            <path
              fill="url(#C)"
              d="M150.988 215.93V300l63.07-42.04-63.07-42.03Z"
            />
            <path
              fill="url(#D)"
              d="M450.988 215.93V300l63.07-42.04-63.07-42.03Z"
            />
            <path
              fill="url(#E)"
              d="M150.988 15.93V100l63.07-42.04-63.07-42.03Z"
            />
            <path
              fill="url(#F)"
              d="M450.988 15.93V100l63.07-42.04-63.07-42.03Z"
            />
            <path
              fill="url(#G)"
              d="m485.488 557.96 80.99-54v-45.74l.12-.18-.12-.08-115.48 77 .12.08-.12.18v45.74l28.54 19.04h6.33v-41.78l-.38-.26Z"
            />
            <path
              fill="url(#H)"
              d="m416.739 558.12-.26-.16-63.05 42.04h63.07v-41.52l.24-.36Z"
            />
            <path
              fill="url(#I)"
              d="m185.488 557.96 81-54v-45.74l.12-.18-.12-.08-115.5 77 .12.08-.12.18v45.74l28.54 19.04h6.34v-41.78l-.38-.26Z"
            />
            <path
              fill="url(#J)"
              d="m116.728 558.12-.24-.16L53.448 600h63.04v-41.52l.24-.36Z"
            />
            <path fill="url(#K)" d="m600.979 480.96.01.01v-46.01h-.01v46Z" />
            <path
              fill="url(#L)"
              d="m485.868 358.22-.38-.26 80.99-54v-45.74l.12-.18-.12-.08-115.48 77 .12.08-.12.18v45.74l34.87 23.26v-46Z"
            />
            <path
              fill="url(#M)"
              d="m335.488 457.96 81.01-54v-45.48l.24-.36-.26-.16-115.49 77v46l34.88 23.26v-46l-.38-.26Z"
            />
            <path fill="url(#N)" d="m600.979 280.96.01.01v-46.01h-.01v46Z" />
            <path fill="url(#O)" d="m600.979 80.96.01.01V34.96h-.01v46Z" />
            <path
              fill="url(#P)"
              d="m485.868 158.22-.38-.26 80.99-54V58.22l.12-.18-.12-.08-115.48 77 .12.08-.12.18v45.74l34.87 23.26v-46Z"
            />
            <path fill="url(#Q)" d="M485.868 0h-6.33l6.33 4.22V0Z" />
            <path
              fill="url(#R)"
              d="m335.868 258.22-.38-.26 81.01-54v-45.48l.24-.36-.26-.16-115.49 77v46l34.88 23.26v-46Z"
            />
            <path
              fill="url(#S)"
              d="m300.988 80.96 34.88 23.26v-46l-.38-.26 81.01-54V0h-63.07l-52.44 34.96v46Z"
            />
            <path
              fill="url(#T)"
              d="M266.488 303.96v-45.74l.12-.18-.12-.08-115.5 77 .12.08-.12.18v45.74l34.88 23.26v-46l-.38-.26 81-54Z"
            />
            <path
              fill="url(#U)"
              d="m151.108 135.04-.12.18v45.74l34.88 23.26v-46l-.38-.26 81-54V58.22l.12-.18-.12-.08-115.5 77 .12.08Z"
            />
            <path fill="url(#V)" d="M185.868 0h-6.34l6.34 4.22V0Z" />
            <path
              fill="url(#W)"
              d="M116.488 403.96v-45.48l.24-.36-.24-.16-115.48 77V480.96l34.87 23.26v-46l-.39-.26 81-54Z"
            />
            <path
              fill="url(#X)"
              d="m35.878 258.22-.39-.26 81-54v-45.48l.24-.36-.24-.16-115.48 77V280.96l34.87 23.26v-46Z"
            />
            <path
              fill="url(#Y)"
              d="M1.008 34.98V80.96l34.87 23.26v-46l-.39-.26 81-54V0h-63.04L1.008 34.96v.02Z"
            />
            <path
              fill="url(#Z)"
              d="M600.988 200v-84.07l-63.07 42.03 63.07 42.04Z"
            />
            <path
              fill="url(#aa)"
              d="M300.978 200v-84.07l-63.07 42.03 63.07 42.04Z"
            />
            <path
              fill="url(#ab)"
              d="M600.988 400v-84.07l-63.07 42.03 63.07 42.04Z"
            />
            <path
              fill="url(#ac)"
              d="M300.978 400v-84.07l-63.07 42.03 63.07 42.04Z"
            />
            <path
              fill="url(#ad)"
              d="M600.988 600v-84.07l-63.07 42.03 63.07 42.04Z"
            />
            <path
              fill="url(#ae)"
              d="m237.908 557.96 63.07 42.04v-84.07l-63.07 42.03Z"
            />
            <path
              fill="url(#af)"
              d="M150.988 500v-84.07l-63.07 42.03 63.07 42.04Z"
            />
            <path
              fill="url(#ag)"
              d="M450.988 500v-84.07l-63.07 42.03 63.07 42.04Z"
            />
            <path
              fill="url(#ah)"
              d="M150.988 300v-84.07l-63.07 42.03 63.07 42.04Z"
            />
            <path
              fill="url(#ai)"
              d="M450.988 300v-84.07l-63.07 42.03 63.07 42.04Z"
            />
            <path
              fill="url(#aj)"
              d="m150.988 15.93-63.07 42.03 63.07 42.04V15.93Z"
            />
            <path
              fill="url(#ak)"
              d="m450.988 15.93-63.07 42.03 63.07 42.04V15.93Z"
            />
          </g>
          <defs>
            <linearGradient
              id="b"
              x1="521.368"
              x2="564.098"
              y1="75.78"
              y2="7.4"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="c"
              x1="511.978"
              x2="554.838"
              y1="269.91"
              y2="201.32"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="d"
              x1="511.978"
              x2="554.838"
              y1="469.91"
              y2="401.32"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="e"
              x1="475.108"
              x2="517.788"
              y1="646.48"
              y2="578.17"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="f"
              x1="416.848"
              x2="459.378"
              y1="4.19"
              y2="-63.86"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="g"
              x1="361.988"
              x2="404.848"
              y1="169.91"
              y2="101.33"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="h"
              x1="361.988"
              x2="404.848"
              y1="369.91"
              y2="301.33"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="i"
              x1="361.988"
              x2="404.848"
              y1="569.92"
              y2="501.33"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="j"
              x1="221.378"
              x2="264.098"
              y1="75.77"
              y2="7.4"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="k"
              x1="211.988"
              x2="254.838"
              y1="269.91"
              y2="201.33"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="l"
              x1="211.988"
              x2="254.838"
              y1="469.91"
              y2="401.33"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="m"
              x1="175.108"
              x2="217.788"
              y1="646.48"
              y2="578.17"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="n"
              x1="116.848"
              x2="159.378"
              y1="4.19"
              y2="-63.88"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="o"
              x1="61.998"
              x2="104.848"
              y1="169.91"
              y2="101.32"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="p"
              x1="61.998"
              x2="104.848"
              y1="369.91"
              y2="301.32"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="q"
              x1="61.988"
              x2="104.848"
              y1="569.92"
              y2="501.32"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="r"
              x1="-29.422"
              x2="13.248"
              y1="106.65"
              y2="38.35"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="s"
              x1="-29.422"
              x2="13.248"
              y1="306.65"
              y2="238.35"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="t"
              x1="-29.422"
              x2="13.248"
              y1="506.65"
              y2="438.35"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736357" />
              <stop offset=".2" stopColor="#7D6C5F" />
              <stop offset=".54" stopColor="#988674" />
              <stop offset=".99" stopColor="#C5B097" />
              <stop offset="1" stopColor="#C7B299" />
            </linearGradient>
            <linearGradient
              id="u"
              x1="332.519"
              x2="332.519"
              y1="115.93"
              y2="194.7"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7B299" />
              <stop offset=".01" stopColor="#C5B097" />
              <stop offset=".46" stopColor="#988674" />
              <stop offset=".8" stopColor="#7D6C5F" />
              <stop offset="1" stopColor="#736357" />
            </linearGradient>
            <linearGradient
              id="v"
              x1="32.518"
              x2="32.518"
              y1="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7B299" />
              <stop offset=".01" stopColor="#C5B097" />
              <stop offset=".46" stopColor="#988674" />
              <stop offset=".8" stopColor="#7D6C5F" />
              <stop offset="1" stopColor="#736357" />
            </linearGradient>
            <linearGradient
              id="w"
              x1=".988"
              x2="1.988"
              y1="315.93"
              y2="394.7"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7B299" />
              <stop offset=".01" stopColor="#C5B097" />
              <stop offset=".46" stopColor="#988674" />
              <stop offset=".8" stopColor="#7D6C5F" />
              <stop offset="1" stopColor="#736357" />
            </linearGradient>
            <linearGradient
              id="x"
              x1="32.518"
              x2="32.518"
              y1="315.93"
              y2="394.7"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7B299" />
              <stop offset=".01" stopColor="#C5B097" />
              <stop offset=".46" stopColor="#988674" />
              <stop offset=".8" stopColor="#7D6C5F" />
              <stop offset="1" stopColor="#736357" />
            </linearGradient>
            <linearGradient
              id="y"
              x1=".988"
              x2="1.988"
              y1="515.93"
              y2="594.7"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7B299" />
              <stop offset=".01" stopColor="#C5B097" />
              <stop offset=".46" stopColor="#988674" />
              <stop offset=".8" stopColor="#7D6C5F" />
              <stop offset="1" stopColor="#736357" />
            </linearGradient>
            <linearGradient
              id="z"
              x1="32.518"
              x2="32.518"
              y1="515.93"
              y2="594.7"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7B299" />
              <stop offset=".01" stopColor="#C5B097" />
              <stop offset=".46" stopColor="#988674" />
              <stop offset=".8" stopColor="#7D6C5F" />
              <stop offset="1" stopColor="#736357" />
            </linearGradient>
            <linearGradient
              id="A"
              x1="182.528"
              x2="182.528"
              y1="415.93"
              y2="494.7"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7B299" />
              <stop offset=".01" stopColor="#C5B097" />
              <stop offset=".46" stopColor="#988674" />
              <stop offset=".8" stopColor="#7D6C5F" />
              <stop offset="1" stopColor="#736357" />
            </linearGradient>
            <linearGradient
              id="B"
              x1="482.518"
              x2="482.518"
              y1="415.93"
              y2="494.7"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7B299" />
              <stop offset=".01" stopColor="#C5B097" />
              <stop offset=".46" stopColor="#988674" />
              <stop offset=".8" stopColor="#7D6C5F" />
              <stop offset="1" stopColor="#736357" />
            </linearGradient>
            <linearGradient
              id="C"
              x1="182.528"
              x2="182.528"
              y1="215.93"
              y2="294.7"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7B299" />
              <stop offset=".01" stopColor="#C5B097" />
              <stop offset=".46" stopColor="#988674" />
              <stop offset=".8" stopColor="#7D6C5F" />
              <stop offset="1" stopColor="#736357" />
            </linearGradient>
            <linearGradient
              id="D"
              x1="482.518"
              x2="482.518"
              y1="215.93"
              y2="294.7"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7B299" />
              <stop offset=".01" stopColor="#C5B097" />
              <stop offset=".46" stopColor="#988674" />
              <stop offset=".8" stopColor="#7D6C5F" />
              <stop offset="1" stopColor="#736357" />
            </linearGradient>
            <linearGradient
              id="E"
              x1="182.528"
              x2="182.528"
              y1="15.93"
              y2="94.7"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7B299" />
              <stop offset=".01" stopColor="#C5B097" />
              <stop offset=".46" stopColor="#988674" />
              <stop offset=".8" stopColor="#7D6C5F" />
              <stop offset="1" stopColor="#736357" />
            </linearGradient>
            <linearGradient
              id="F"
              x1="482.518"
              x2="482.518"
              y1="15.93"
              y2="94.7"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7B299" />
              <stop offset=".01" stopColor="#C5B097" />
              <stop offset=".46" stopColor="#988674" />
              <stop offset=".8" stopColor="#7D6C5F" />
              <stop offset="1" stopColor="#736357" />
            </linearGradient>
            <linearGradient
              id="G"
              x1="497.338"
              x2="540.438"
              y1="501.17"
              y2="570.14"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="H"
              x1="384.419"
              x2="427.339"
              y1="578"
              y2="646.68"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="I"
              x1="197.348"
              x2="240.438"
              y1="501.17"
              y2="570.14"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="J"
              x1="84.428"
              x2="127.348"
              y1="578"
              y2="646.69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="K"
              x1="588.717"
              x2="631.598"
              y1="438.34"
              y2="507.038"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="L"
              x1="497.338"
              x2="540.428"
              y1="301.17"
              y2="370.13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="M"
              x1="347.368"
              x2="390.458"
              y1="401.15"
              y2="470.11"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="N"
              x1="588.717"
              x2="631.598"
              y1="238.34"
              y2="307.048"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="O"
              x1="588.717"
              x2="631.598"
              y1="38.34"
              y2="107.048"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="P"
              x1=".988"
              x2="540.428"
              y1="101.17"
              y2="170.13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="Q"
              x1="442.718"
              x2="485.488"
              y1="-63.99"
              y2="4.46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="R"
              x1="347.368"
              x2="390.458"
              y1="201.15"
              y2="270.11"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="S"
              x1="338.008"
              x2="380.968"
              y1="7.29"
              y2="76.04"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="T"
              x1="197.348"
              x2="240.428"
              y1="301.17"
              y2="370.12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="U"
              x1="197.348"
              x2="240.428"
              y1="101.17"
              y2="170.12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="V"
              x1="142.718"
              x2="185.488"
              y1="-63.98"
              y2="4.46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="W"
              x1="47.378"
              x2="90.468"
              y1="401.15"
              y2="470.11"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="X"
              x1="47.378"
              x2="90.468"
              y1="201.15"
              y2="270.11"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="Y"
              x1="38.008"
              x2="80.968"
              y1="7.3"
              y2="76.05"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="Z"
              x1="569.458"
              x2="569.458"
              y1="134.67"
              y2="213.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="aa"
              x1="269.448"
              x2="269.448"
              y1="134.67"
              y2="213.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="ab"
              x1="569.458"
              x2="569.458"
              y1="334.67"
              y2="413.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="ac"
              x1="269.448"
              x2="269.448"
              y1="334.67"
              y2="413.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="ad"
              x1="569.458"
              x2="569.458"
              y1="534.67"
              y2="613.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="ae"
              x1="269.448"
              x2="269.448"
              y1="534.67"
              y2="613.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="af"
              x1="119.458"
              x2="119.458"
              y1="434.67"
              y2="513.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="ag"
              x1="419.448"
              x2="419.448"
              y1="434.67"
              y2="513.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="ah"
              x1="119.458"
              x2="119.458"
              y1="234.67"
              y2="313.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="ai"
              x1="419.448"
              x2="419.448"
              y1="234.67"
              y2="313.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="aj"
              x1="119.458"
              x2="119.458"
              y1="34.67"
              y2="113.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="ak"
              x1="419.448"
              x2="419.448"
              y1="34.67"
              y2="113.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#736558" />
              <stop offset=".17" stopColor="#65594D" />
              <stop offset=".49" stopColor="#433B33" />
              <stop offset=".92" stopColor="#0B0A08" />
              <stop offset="1" />
            </linearGradient>
            <clipPath id="a">
              <path fill="#fff" d="M.988 0h600v600h-600z" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col relative flex-1 items-start justify-center">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 154 48"
          className="w-48 h-16 mb-1"
        >
          <path
            fill="currentColor"
            d="M81.439 41.68V20.247h4.834v21.431H81.44Zm-6.805-17.521v-4.22H92.87v4.22H74.634ZM97.723 42.018c-1.54 0-2.936-.339-4.188-1.016a7.909 7.909 0 0 1-2.925-2.833c-.719-1.19-1.078-2.525-1.078-4.003 0-1.478.36-2.802 1.078-3.972a7.75 7.75 0 0 1 2.925-2.771c1.232-.698 2.627-1.047 4.188-1.047 1.56 0 2.956.338 4.187 1.016a7.678 7.678 0 0 1 2.926 2.802c.718 1.17 1.078 2.494 1.078 3.972 0 1.478-.36 2.813-1.078 4.003a7.912 7.912 0 0 1-2.926 2.833c-1.231.677-2.627 1.016-4.187 1.016Zm0-4.28c.677 0 1.272-.144 1.786-.431a3.02 3.02 0 0 0 1.17-1.263c.287-.554.431-1.18.431-1.878s-.144-1.303-.431-1.817a3.023 3.023 0 0 0-1.201-1.231c-.493-.308-1.078-.462-1.755-.462-.657 0-1.242.154-1.755.462a3.019 3.019 0 0 0-1.201 1.231c-.288.534-.431 1.15-.431 1.848 0 .677.143 1.293.43 1.847a3.23 3.23 0 0 0 1.201 1.263c.514.287 1.099.431 1.756.431ZM109.867 41.68V25.42c0-1.211.267-2.3.801-3.264a5.942 5.942 0 0 1 2.31-2.31c.985-.574 2.155-.862 3.51-.862 1.026 0 1.919.175 2.679.524.78.328 1.457.79 2.032 1.386l-2.956 2.956a2.01 2.01 0 0 0-.708-.462c-.246-.123-.544-.185-.893-.185-.637 0-1.139.185-1.509.554-.369.37-.554.873-.554 1.509v16.412h-4.712Zm-3.294-10.963v-4.003h12.317v4.003h-12.317ZM128.021 42.018c-1.375 0-2.597-.277-3.664-.831a6.441 6.441 0 0 1-2.464-2.34c-.595-1.006-.893-2.156-.893-3.45v-8.683h4.712v8.622c0 .514.082.955.246 1.324.185.37.452.657.801.863.349.205.769.307 1.262.307.698 0 1.252-.215 1.663-.646.411-.452.616-1.068.616-1.848v-8.622h4.711v8.653c0 1.314-.298 2.474-.893 3.48a6.432 6.432 0 0 1-2.463 2.34c-1.047.554-2.258.831-3.634.831ZM11.494 42.049c-1.642 0-3.16-.288-4.557-.862a11.44 11.44 0 0 1-3.633-2.402A10.933 10.933 0 0 1 .87 35.213c-.575-1.375-.862-2.854-.862-4.434 0-1.601.287-3.08.862-4.434a10.82 10.82 0 0 1 2.402-3.541 10.687 10.687 0 0 1 3.603-2.371c1.395-.575 2.915-.863 4.557-.863 1.622 0 3.12.288 4.496.863a10.616 10.616 0 0 1 3.633 2.37 10.518 10.518 0 0 1 2.433 3.572c.575 1.355.862 2.833.862 4.435 0 1.58-.287 3.058-.862 4.434a11.172 11.172 0 0 1-2.402 3.572 11.25 11.25 0 0 1-3.634 2.37c-1.375.575-2.863.863-4.465.863Zm-.061-4.403c1.293 0 2.422-.288 3.387-.863a5.842 5.842 0 0 0 2.279-2.401c.533-1.047.8-2.248.8-3.603 0-1.027-.154-1.95-.462-2.771a6.05 6.05 0 0 0-1.324-2.156 5.47 5.47 0 0 0-2.063-1.386c-.78-.328-1.652-.492-2.617-.492-1.293 0-2.433.287-3.418.862-.965.554-1.714 1.345-2.248 2.37-.534 1.007-.8 2.197-.8 3.573 0 1.026.153 1.96.461 2.802.308.842.74 1.57 1.294 2.186a5.988 5.988 0 0 0 2.063 1.386c.8.328 1.683.493 2.648.493ZM34.117 41.987c-1.006 0-1.93-.195-2.772-.585-.841-.39-1.529-.924-2.063-1.6a4.516 4.516 0 0 1-.924-2.372v-6.313c.083-.882.39-1.683.924-2.401a5.561 5.561 0 0 1 2.063-1.694c.842-.41 1.766-.616 2.772-.616 1.416 0 2.668.339 3.756 1.016a7.01 7.01 0 0 1 2.587 2.772c.636 1.17.954 2.504.954 4.003 0 1.498-.318 2.833-.954 4.003a7.01 7.01 0 0 1-2.587 2.771c-1.088.678-2.34 1.016-3.756 1.016Zm-.862-4.249c.677 0 1.262-.154 1.755-.462a3.23 3.23 0 0 0 1.2-1.262c.288-.534.432-1.14.432-1.817 0-.698-.144-1.314-.431-1.848a3.019 3.019 0 0 0-1.201-1.231c-.493-.308-1.068-.462-1.725-.462s-1.242.154-1.755.462a3.08 3.08 0 0 0-1.17 1.231c-.287.534-.431 1.15-.431 1.848 0 .677.133 1.283.4 1.817a3.23 3.23 0 0 0 1.201 1.262 3.287 3.287 0 0 0 1.724.462Zm-7.76 10.254V26.714h4.711v3.85l-.77 3.633.708 3.633v10.162h-4.65ZM52.45 42.018c-1.622 0-3.07-.328-4.342-.985a7.616 7.616 0 0 1-2.956-2.802c-.719-1.191-1.078-2.536-1.078-4.034 0-1.499.35-2.833 1.047-4.003a7.739 7.739 0 0 1 2.895-2.802c1.21-.678 2.576-1.017 4.095-1.017 1.478 0 2.782.319 3.91.955a6.84 6.84 0 0 1 2.649 2.648c.657 1.13.985 2.423.985 3.88 0 .267-.02.554-.061.862-.021.288-.072.626-.154 1.016l-12.902.031v-3.233l10.9-.03-2.032 1.354c-.02-.862-.154-1.57-.4-2.125-.247-.574-.616-1.006-1.11-1.293-.471-.308-1.056-.462-1.754-.462-.74 0-1.386.175-1.94.524-.534.328-.955.8-1.263 1.416-.287.616-.43 1.365-.43 2.248 0 .883.153 1.642.461 2.279.329.615.78 1.098 1.355 1.447.595.328 1.293.493 2.094.493.739 0 1.406-.124 2.001-.37a4.564 4.564 0 0 0 1.57-1.17l2.587 2.587a6.982 6.982 0 0 1-2.679 1.94c-1.047.43-2.196.646-3.448.646ZM72.126 41.68v-8.53c0-.78-.246-1.406-.739-1.878-.472-.493-1.077-.74-1.816-.74-.513 0-.965.113-1.355.34-.39.204-.698.512-.924.923-.226.39-.339.842-.339 1.355l-1.816-.893c0-1.17.256-2.197.77-3.08a5.195 5.195 0 0 1 2.124-2.032c.924-.492 1.96-.739 3.11-.739 1.109 0 2.084.267 2.925.8.863.514 1.54 1.202 2.033 2.064.492.862.478 1.806.478 2.833v9.576h-4.45Zm-9.884 0V26.713h4.711V41.68h-4.71Z"
          />
          <path
            fill="#0D1A2B"
            fillRule="evenodd"
            d="M143.325.207a1.668 1.668 0 0 0-1.607 0l-8.233 4.526a3.096 3.096 0 0 0-.021.011l-1.084.596a1.668 1.668 0 0 0-.864 1.462V16.98c0 .609.331 1.169.864 1.462l8.312 4.568.032.018.994.546c.5.275 1.106.275 1.607 0l.996-.548.03-.016 8.311-4.568c.534-.293.865-.853.865-1.462V6.802c0-.609-.331-1.17-.865-1.462l-1.08-.594a2.892 2.892 0 0 0-.024-.013L143.325.207Zm.529 11.684 7.704-4.235a3.17 3.17 0 0 0 .024-.013l.092-.05a.385.385 0 0 1 .57.337v7.922a.385.385 0 0 1-.57.338l-.071-.04a3.397 3.397 0 0 0-.045-.025l-7.704-4.234Zm-10.389-4.246a.32.32 0 0 0 .02.011l7.704 4.235-7.704 4.234a1.08 1.08 0 0 0-.043.024l-.073.04a.385.385 0 0 1-.57-.337V7.93c0-.293.313-.479.57-.338l.096.053Zm17.487-1.781-7.219-3.968a.385.385 0 0 0-.57.326v8.584l7.788-4.28a.385.385 0 0 0 .001-.662Zm-16.859.662 7.787 4.28V2.222a.385.385 0 0 0-.57-.326l-7.217 3.966a.385.385 0 0 0 0 .664Zm.01 11.398a.385.385 0 0 1-.021-.662l7.798-4.286v8.584a.385.385 0 0 1-.555.334l-7.222-3.97Zm9.06 3.625v-8.573l7.798 4.286a.385.385 0 0 1-.021.662l-7.221 3.97a.385.385 0 0 1-.556-.334v-.011Z"
            clipRule="evenodd"
          />
          <path
            fill="#E2D23F"
            d="M142.336 1.33a.385.385 0 0 1 .371 0l8.233 4.526a.385.385 0 0 1 0 .675l-8.233 4.525a.386.386 0 0 1-.371 0l-8.233-4.525a.385.385 0 0 1 0-.675l8.233-4.525Z"
          />
          <path
            fill="#FFEC40"
            d="M132.799 7.928c0-.292.314-.478.57-.337l8.312 4.568a.384.384 0 0 1 .199.338v9.05a.385.385 0 0 1-.57.338l-8.312-4.569a.385.385 0 0 1-.199-.337V7.93Z"
          />
          <path
            fill="#fff"
            d="M151.674 7.591a.385.385 0 0 1 .57.337v9.051c0 .14-.076.27-.199.338l-8.312 4.568a.385.385 0 0 1-.57-.338v-9.05c0-.14.077-.27.2-.338l8.311-4.568Z"
          />
          <path
            fill="#0D1A2B"
            d="m136.289 15.03-.001.013-1.948-1.025.001-.013c.045-.606.518-.868 1.056-.585.538.283.937 1.004.892 1.61ZM139.355 16.8l-.001.013-1.948-1.025.001-.013c.045-.606.517-.868 1.055-.585.538.283.938 1.004.893 1.61Z"
          />
        </svg> */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="h-8 w-8 shrink-0 mb-6"
          viewBox="0 0 368 368"
        >
          <path
            fill="#0D1A2B"
            fillRule="evenodd"
            d="M182.263 3.883a25.742 25.742 0 0 0-24.799 0L30.391 73.728c-.106.058-.21.116-.315.176L13.345 83.1A25.743 25.743 0 0 0 0 105.659v157.098a25.743 25.743 0 0 0 13.344 22.56l128.278 70.507c.165.091.331.18.497.267l15.344 8.433a25.743 25.743 0 0 0 24.799 0l15.382-8.455c.153-.08.305-.162.457-.245l128.278-70.507a25.742 25.742 0 0 0 13.343-22.56V105.659c0-9.39-5.113-18.036-13.343-22.56l-16.673-9.164a33.52 33.52 0 0 0-.371-.207L182.263 3.883Zm8.164 180.321 118.909-65.357c.122-.067.243-.135.364-.204l1.419-.78c3.959-2.176 8.802.688 8.802 5.206v122.279c0 4.517-4.843 7.382-8.802 5.206l-1.096-.603a25.432 25.432 0 0 0-.687-.39l-118.909-65.357ZM30.084 118.676l.307.171L149.3 184.204 30.391 249.561c-.223.122-.442.247-.66.374l-1.125.619c-3.96 2.176-8.802-.689-8.802-5.206V123.069c0-4.518 4.843-7.382 8.802-5.206l1.478.813Zm269.891-27.494L188.564 29.946c-3.907-2.147-8.675.615-8.8 5.03l.001.177v132.311l120.206-66.07c3.873-2.291 3.874-7.919.004-10.212ZM39.783 101.41l120.177 66.054V34.976c-.124-4.415-4.892-7.177-8.799-5.03L39.779 91.166c-3.907 2.289-3.905 7.958.003 10.244Zm.146 175.916c-3.998-2.197-4.103-7.85-.313-10.228l120.344-66.146v132.489c-.121 4.325-4.699 7.063-8.559 5.155l-111.472-61.27Zm139.836 55.938V200.952l120.359 66.154c3.776 2.383 3.667 8.025-.326 10.22l-111.454 61.26c-3.864 1.928-8.457-.813-8.58-5.145l.001-.087v-.09Z"
            clipRule="evenodd"
          />
          <path
            fill="#E7C200"
            d="M167.001 21.23a5.938 5.938 0 0 1 5.722 0l127.073 69.845c4.106 2.256 4.106 8.155 0 10.412l-127.073 69.844a5.936 5.936 0 0 1-5.722 0L39.928 101.487c-4.106-2.257-4.106-8.156 0-10.412L167 21.23Z"
          />
          <path
            fill="#FFDA18"
            d="M19.802 123.062c0-4.517 4.843-7.382 8.802-5.206l128.278 70.507a5.942 5.942 0 0 1 3.08 5.206v139.688c0 4.518-4.843 7.383-8.803 5.207L22.881 267.957a5.94 5.94 0 0 1-3.079-5.206V123.062Z"
          />
          <path
            fill="#fff"
            d="M311.118 117.856c3.959-2.176 8.802.689 8.802 5.206v139.689a5.94 5.94 0 0 1-3.079 5.206l-128.278 70.507c-3.959 2.176-8.802-.689-8.802-5.207V193.569a5.94 5.94 0 0 1 3.079-5.206l128.278-70.507Z"
          />
          <path
            fill="#0D1A2B"
            d="m73.679 232.662-.016.194-30.068-15.819.014-.195c.697-9.357 7.993-13.401 16.297-9.032 8.303 4.369 14.47 15.495 13.773 24.852ZM120.996 259.984l-.016.194-30.068-15.819.014-.195c.697-9.357 7.993-13.401 16.297-9.032 8.303 4.369 14.47 15.495 13.773 24.852Z"
          />
        </svg>

        <span className="bg-brand-500/20 text-brand-500 py-1 px-2 font-bold rounded-3xl shrink-0 mb-3 -ml-2">
          {section}
        </span>

        <h2 className="font-bold text-2xl mb-0 mt-0">{title}</h2>
        <h3 className="text-lg text-gray-400 mt-1 mb-0 leading-snug font-normal">
          {description}
        </h3>
      </div>
    </div>
  );
}
