import React from "react";

const CommonSvg = (props) => {
  const { width, height, fill, type } = props;
  return type === "logo" ? (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.43033 1H1V29.0645H6.43033V1Z" stroke="black" />
      <path d="M8.405 2.9353H2.97467V30.9998H8.405V2.9353Z" stroke="black" />
      <path
        d="M2.97467 12.613L2.97467 17.9355H17.291V12.613H2.97467Z"
        stroke="black"
      />
      <path
        d="M2.97467 14.5483L2.97467 19.8708H19.2656V14.5483H2.97467Z"
        stroke="black"
      />
      <path
        d="M6.43036 0.999929V6.32251L17.291 6.32251V0.999929L6.43036 0.999929Z"
        stroke="black"
      />
      <path
        d="M2.97467 2.93548L2.97467 8.25806L19.2656 8.25806V2.93548L2.97467 2.93548Z"
        stroke="black"
      />
      <path
        d="M19.0188 8.01611H17.5378V3.1774H19.0188V8.01611Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M2.72782 1.24194H1.24683V28.8226H2.72782V1.24194Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M8.15818 3.17725H6.67719V29.3063H8.15818V3.17725Z"
        fill="url(#paint2_linear)"
      />
      <path
        d="M17.5378 8.01631V6.5647L3.22153 6.5647V8.01631H17.5378Z"
        fill="url(#paint3_linear)"
      />
      <path
        d="M17.5378 14.3066V12.855H3.22153V14.3066H17.5378Z"
        fill="url(#paint4_linear)"
      />
      <path
        d="M3.2215 29.3064V30.7581H8.15815V29.3064H3.2215Z"
        fill="url(#paint5_linear)"
      />
      <path
        d="M2.72784 1.24199V2.6936L17.0442 2.6936V1.24199L2.72784 1.24199Z"
        fill="url(#paint6_linear)"
      />
      <path
        d="M17.5378 19.6289V18.1772H3.22153V19.6289H17.5378Z"
        fill="url(#paint7_linear)"
      />
      <path
        d="M19.0188 19.6289H17.5378V14.7902H19.0188V19.6289Z"
        fill="url(#paint8_linear)"
      />
      <path d="M6.18349 6.08057H3.2215V6.56444H6.18349V6.08057Z" fill="black" />
      <path
        d="M17.5378 12.3708H17.0441V14.3063H17.5378V12.3708Z"
        fill="black"
      />
      <path
        d="M8.15818 6.08057H6.67719V6.56444H8.15818V6.08057Z"
        fill="black"
      />
      <path
        d="M8.15818 12.3708H6.67719V12.8547H8.15818V12.3708Z"
        fill="black"
      />
      <path
        d="M8.15818 17.6936H6.67719V18.1775H8.15818V17.6936Z"
        fill="black"
      />
      <path
        d="M8.15818 8.01611H6.67719V8.49998H8.15818V8.01611Z"
        fill="black"
      />
      <path
        d="M8.15818 14.3066H6.67719V14.7905H8.15818V14.3066Z"
        fill="black"
      />
      <path
        d="M8.15818 19.6289H6.67719V20.1128H8.15818V19.6289Z"
        fill="black"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="18.2783"
          y1="8.01611"
          x2="18.2783"
          y2="3.1774"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08AEEA" />
          <stop offset="1" stopColor="#20FF99" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="1.98733"
          y1="1.24194"
          x2="1.98733"
          y2="28.8226"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08AEEA" />
          <stop offset="1" stopColor="#20FF99" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="7.41768"
          y1="3.17725"
          x2="7.41768"
          y2="29.3063"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08AEEA" />
          <stop offset="1" stopColor="#20FF99" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="17.5378"
          y1="7.2905"
          x2="3.22153"
          y2="7.2905"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08AEEA" />
          <stop offset="1" stopColor="#20FF99" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="17.5378"
          y1="13.5808"
          x2="3.22153"
          y2="13.5808"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08AEEA" />
          <stop offset="1" stopColor="#20FF99" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="3.2215"
          y1="30.0323"
          x2="8.15815"
          y2="30.0323"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08AEEA" />
          <stop offset="1" stopColor="#20FF99" />
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="2.72784"
          y1="1.9678"
          x2="17.0442"
          y2="1.9678"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08AEEA" />
          <stop offset="1" stopColor="#20FF99" />
        </linearGradient>
        <linearGradient
          id="paint7_linear"
          x1="17.5378"
          y1="18.9031"
          x2="3.22153"
          y2="18.9031"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08AEEA" />
          <stop offset="1" stopColor="#20FF99" />
        </linearGradient>
        <linearGradient
          id="paint8_linear"
          x1="18.2783"
          y1="19.6289"
          x2="18.2783"
          y2="14.7902"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08AEEA" />
          <stop offset="1" stopColor="#20FF99" />
        </linearGradient>
      </defs>
    </svg>
  ) : type === "add" ? (
    <svg
      height="512"
      viewBox="0 0 32 32"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="add,-cross,-plus,-sign" fill="none" fillRule="evenodd">
        <path
          id="Path"
          d="m17 4v11h11v2h-11v11h-2v-11h-11v-2h11v-11z"
          fill="#0d47a1"
          fillule="nonzero"
        />
      </g>
    </svg>
  ) : type === "dropdown" ? (
    <svg
      viewBox="0 0 20 20"
      width={width}
      fill={fill}
      height={height}
      style={{ transform: "rotate(180deg)" }}
    >
      <path id="a" d="M10 7l6 7H4z" />
    </svg>
  ) : type === "google" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 210 210"
      xmlSpace="preserve"
      width={width}
      height={height}
      class=""
    >
      <g>
        <path
          d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40  c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105  S0,162.897,0,105z"
          dataOriginal="#000000"
          class="active-path"
          style={{ fill: "#FFFFFF" }}
          dataOldColor="#000000"
        />
      </g>{" "}
    </svg>
  ) : type === "coluredGoogle" ? (
    <svg
      id="Capa_1"
      enableBackground="new 0 0 512 512"
      height={width}
      viewBox="0 0 512 512"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="m420.7 450.7c-44.4 37.5-101.999 61.3-164.7 61.3-93.3 0-175.201-51.4-219.6-126.4l16.622-76.622 73.678-13.678c17.1 55.199 68.699 95.7 129.3 95.7 29.399 0 56.7-9.3 79.2-25.8l70.8 10.8z"
          fill="#59c36a"
        />
        <path
          d="m420.7 450.7-14.7-74.7-70.8-10.8c-22.5 16.5-49.801 25.8-79.2 25.8v121c62.701 0 120.3-23.8 164.7-61.3z"
          fill="#00a66c"
        />
        <g id="Connected_Home_1_">
          <g>
            <g>
              <g>
                <path
                  d="m121 256c0 13.799 2.1 26.999 5.7 39.3l-90.3 90.3c-22.5-37.8-36.4-82.201-36.4-129.6 0-47.401 13.9-91.8 36.4-129.6l72.473 12.473 17.827 77.827c-3.6 12.299-5.7 25.499-5.7 39.3z"
                  fill="#ffda2d"
                />
              </g>
            </g>
          </g>
        </g>
        <path
          d="m512 256c0 77.999-36.099 147.9-91.3 194.7l-85.5-85.5c17.399-12.601 32.1-29.401 41.7-49.2h-120.9c-8.401 0-15-6.601-15-15v-90c0-8.401 6.599-15 15-15h236.8c7.2 0 13.5 5.099 14.7 12.299 3 15.601 4.5 31.8 4.5 47.701z"
          fill="#4086f4"
        />
        <path
          d="m376.901 316c-9.6 19.799-24.302 36.599-41.7 49.2l85.499 85.5c55.201-46.8 91.3-116.7 91.3-194.7 0-15.901-1.5-32.1-4.501-47.701-1.199-7.2-7.5-12.299-14.7-12.299h-236.799v120z"
          fill="#4175df"
        />
        <path
          d="m424.9 71.499c.3 4.2-1.5 8.101-4.2 11.1l-64.2 63.9c-5.099 5.4-13.499 6-19.499 1.5-23.702-17.699-51.602-26.999-81.001-26.999-60.601 0-112.2 40.499-129.3 95.7l-90.3-90.3c44.399-75 126.3-126.4 219.6-126.4 59.7 0 117.9 22 163.5 60.399 3.3 2.701 5.1 6.9 5.4 11.1z"
          fill="#ff641a"
        />
        <path
          d="m337 147.999c6 4.501 14.399 3.9 19.499-1.5l64.2-63.9c2.701-2.999 4.501-6.899 4.2-11.1s-2.1-8.399-5.4-11.1c-45.599-38.399-103.799-60.399-163.499-60.399v121c29.399 0 57.299 9.3 81 26.999z"
          fill="#f03800"
        />
      </g>
    </svg>
  ) : type === "brand" ? (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M32.0001 14.4474H17.7648V17.079H32.0001V14.4474Z"
          fill="white"
        />
        <path
          d="M32.0001 18.3948H21.6472V21.0264H32.0001V18.3948Z"
          fill="white"
        />
        <path
          d="M32.0001 27.6052H17.7648V30.2368H32.0001V27.6052Z"
          fill="white"
        />
        <path
          d="M32.0001 31.5526H21.6472V34.1842H32.0001V31.5526Z"
          fill="white"
        />
        <path d="M10 10.5L10 35.5H12.5882L12.5882 10.5H10Z" fill="white" />
        <path
          d="M13.8824 10.5L13.8824 35.5H16.4706V10.5H13.8824Z"
          fill="white"
        />
        <path d="M32 10.5H13.8824V13.1316H32V10.5Z" fill="white" />
        <path d="M32 23.6579H13.8824V26.2894H32V23.6579Z" fill="white" />
        <path d="M17.7648 27.6053V35.5H20.353V27.6053H17.7648Z" fill="white" />
        <path
          d="M17.7648 14.4474V22.3421H20.353V14.4474H17.7648Z"
          fill="white"
        />
        <path
          d="M21.6472 18.3948V22.3421H24.2354V18.3948H21.6472Z"
          fill="white"
        />
        <path d="M21.6472 31.5526V35.5H24.2354V31.5526H21.6472Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="22"
            height="25"
            fill="white"
            transform="translate(10 10.5)"
          />
        </clipPath>
      </defs>
    </svg>
  ) : (
    ""
  );
};

export default CommonSvg;
