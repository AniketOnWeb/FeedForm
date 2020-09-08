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
  ) : (
    ""
  );
};

export default CommonSvg;
