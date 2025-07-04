import React, { useState } from "react";
import { motion } from "framer-motion";
const First = () => {
  const [complete, setComplete] = useState(false);
  return (
    <div className="w-full h-full relative">
      <motion.div
        className="w-full h-full flex items-center justify-center "
        initial={{ scaleY: 1.05 }}
        animate={{ scaleY: 1.4 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          repeat: Infinity, // or a specific number
          repeatType: "mirror",
          repeatDelay: 2,
        }}
        onAnimationComplete={() => setComplete(true)}
      >
        <svg
          width="446"
          height="136"
          viewBox="0 0 446 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_26_57)">
            <path
              d="M2 131.83H50.82C108.74 131.83 164.3 108.82 205.26 67.86C246.22 26.9 301.77 3.89 359.7 3.89H443.19"
              stroke="#939598"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M56 131.83H201.43"
              stroke="#939598"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M201.43 135.72C203.578 135.72 205.32 133.978 205.32 131.83C205.32 129.682 203.578 127.94 201.43 127.94C199.282 127.94 197.54 129.682 197.54 131.83C197.54 133.978 199.282 135.72 201.43 135.72Z"
              fill="#939598"
            />
            <path
              d="M350.75 3.89H205.32"
              stroke="#939598"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M205.32 7.78C207.468 7.78 209.21 6.03839 209.21 3.89C209.21 1.74161 207.468 0 205.32 0C203.172 0 201.43 1.74161 201.43 3.89C201.43 6.03839 203.172 7.78 205.32 7.78Z"
              fill="#939598"
            />
          </g>
          <defs>
            <clipPath id="clip0_26_57">
              <rect width="445.19" height="135.73" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </motion.div>

      <motion.svg
        className="absolute bottom-1/2 left-1/2 -translate-x-7.5 translate-y-3 "
        initial={{ scale: 0 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          repeat: Infinity, // or a specific number
          repeatType: "mirror",
          repeatDelay: 2,
        }}
        width="44"
        height="44"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_30_75)">
          <path
            d="M15.8 32.16H15.78C15.07 32.15 14.35 32.09 13.66 31.98C13.11 31.9 12.74 31.39 12.82 30.84C12.9 30.29 13.42 29.92 13.96 30C14.57 30.09 15.19 30.15 15.82 30.16C16.37 30.17 16.81 30.63 16.8 31.18C16.79 31.73 16.34 32.16 15.8 32.16ZM19.76 31.71C19.31 31.71 18.91 31.41 18.79 30.95C18.66 30.41 18.98 29.87 19.52 29.74C20.12 29.59 20.72 29.4 21.29 29.17C21.8 28.97 22.38 29.22 22.59 29.73C22.79 30.24 22.54 30.82 22.03 31.03C21.37 31.29 20.69 31.51 20 31.68C19.92 31.7 19.84 31.71 19.76 31.71ZM9.98 30.88C9.84 30.88 9.71 30.85 9.58 30.79C8.93 30.5 8.3 30.17 7.69 29.8C7.22 29.51 7.07 28.9 7.36 28.42C7.65 27.95 8.27 27.8 8.74 28.09C9.27 28.41 9.82 28.71 10.39 28.96C10.89 29.18 11.12 29.77 10.9 30.28C10.73 30.65 10.37 30.88 9.98 30.88ZM25.14 29.15C24.84 29.15 24.54 29.01 24.34 28.75C24.01 28.31 24.1 27.68 24.54 27.35C25.04 26.98 25.51 26.57 25.95 26.13C26.34 25.74 26.98 25.75 27.36 26.14C27.75 26.53 27.74 27.17 27.35 27.55C26.84 28.05 26.3 28.51 25.74 28.94C25.56 29.08 25.35 29.14 25.14 29.14V29.15ZM5.11 27.44C4.84 27.44 4.58 27.34 4.38 27.13C3.89 26.61 3.44 26.06 3.02 25.49C2.7 25.04 2.8 24.42 3.25 24.09C3.7 23.77 4.32 23.87 4.65 24.32C5.01 24.82 5.41 25.31 5.84 25.76C6.22 26.16 6.2 26.79 5.8 27.17C5.61 27.35 5.36 27.44 5.11 27.44ZM29.1 24.7C28.93 24.7 28.75 24.66 28.6 24.56C28.12 24.28 27.96 23.67 28.24 23.19C28.55 22.65 28.84 22.09 29.08 21.52C29.29 21.01 29.88 20.77 30.39 20.99C30.9 21.2 31.14 21.79 30.92 22.3C30.65 22.95 30.32 23.59 29.97 24.21C29.78 24.53 29.45 24.7 29.11 24.7H29.1ZM1.95 22.39C1.55 22.39 1.16 22.14 1.01 21.74C0.759999 21.08 0.549999 20.39 0.389999 19.7C0.269999 19.16 0.599999 18.62 1.14 18.5C1.68 18.37 2.21 18.71 2.34 19.25C2.48 19.86 2.66 20.46 2.88 21.04C3.07 21.56 2.81 22.13 2.3 22.33C2.18 22.37 2.07 22.39 1.95 22.39ZM31.04 19.07C31.04 19.07 30.95 19.07 30.91 19.07C30.36 19 29.98 18.5 30.05 17.95C30.13 17.34 30.17 16.71 30.17 16.09C30.17 15.54 30.62 15.09 31.17 15.09C31.72 15.09 32.17 15.54 32.17 16.09C32.17 16.8 32.12 17.51 32.03 18.21C31.96 18.71 31.53 19.08 31.04 19.08V19.07ZM0.999999 16.5C0.999999 16.5 0.979999 16.5 0.959999 16.5C0.409999 16.48 -0.0200011 16.02 -1.05362e-06 15.46C0.0299989 14.75 0.0999989 14.04 0.219999 13.34C0.309999 12.8 0.819999 12.43 1.37 12.52C1.91 12.61 2.28 13.13 2.19 13.67C2.09 14.28 2.02 14.9 2 15.53C1.98 16.07 1.54 16.49 0.999999 16.49V16.5ZM30.91 14.21C30.44 14.21 30.02 13.88 29.93 13.4C29.81 12.79 29.65 12.18 29.46 11.6C29.28 11.08 29.57 10.51 30.09 10.33C30.61 10.15 31.18 10.44 31.36 10.96C31.58 11.63 31.77 12.33 31.9 13.02C32 13.56 31.65 14.09 31.11 14.19C31.05 14.2 30.98 14.21 30.92 14.21H30.91ZM2.39 10.71C2.25 10.71 2.1 10.68 1.97 10.62C1.47 10.39 1.25 9.79 1.49 9.29C1.79 8.65 2.13 8.02 2.52 7.42C2.82 6.95 3.44 6.82 3.9 7.12C4.36 7.42 4.5 8.04 4.2 8.5C3.87 9.02 3.56 9.57 3.3 10.14C3.13 10.5 2.77 10.72 2.39 10.72V10.71ZM28.65 8.7C28.33 8.7 28.01 8.54 27.82 8.25C27.48 7.74 27.09 7.24 26.69 6.77C26.33 6.35 26.37 5.72 26.78 5.36C27.2 5 27.83 5.04 28.19 5.45C28.66 5.98 29.09 6.55 29.49 7.14C29.8 7.6 29.67 8.22 29.21 8.53C29.04 8.64 28.85 8.7 28.66 8.7H28.65ZM5.92 5.91C5.65 5.91 5.38 5.8 5.18 5.58C4.81 5.17 4.84 4.54 5.25 4.17C5.77 3.69 6.33 3.25 6.91 2.84C7.36 2.53 7.99 2.64 8.3 3.09C8.61 3.54 8.5 4.17 8.05 4.48C7.54 4.83 7.05 5.23 6.59 5.64C6.4 5.81 6.16 5.9 5.92 5.9V5.91ZM24.43 4.49C24.24 4.49 24.05 4.44 23.88 4.32C23.36 3.98 22.82 3.66 22.26 3.39C21.76 3.15 21.56 2.55 21.8 2.05C22.04 1.55 22.64 1.35 23.14 1.59C23.78 1.9 24.4 2.26 24.99 2.65C25.45 2.96 25.57 3.58 25.27 4.04C25.08 4.33 24.76 4.49 24.44 4.49H24.43ZM11.03 2.84C10.62 2.84 10.23 2.58 10.09 2.17C9.91 1.65 10.18 1.08 10.7 0.890002C11.37 0.650002 12.06 0.460002 12.75 0.310002C13.29 0.200002 13.82 0.540002 13.94 1.08C14.05 1.62 13.71 2.15 13.17 2.27C12.56 2.4 11.96 2.57 11.37 2.78C11.26 2.82 11.15 2.84 11.04 2.84H11.03ZM18.91 2.24C18.85 2.24 18.79 2.24 18.72 2.22C18.11 2.1 17.49 2.03 16.87 1.99C16.32 1.96 15.9 1.49 15.93 0.940002C15.96 0.390002 16.42 -0.0399979 16.98 2.08709e-06C17.69 0.0400021 18.4 0.130002 19.09 0.260002C19.63 0.360002 19.99 0.890002 19.89 1.43C19.8 1.91 19.38 2.24 18.91 2.24Z"
            fill="#939598"
          />
        </g>
        <defs>
          <clipPath id="clip0_30_75">
            <rect width="32.18" height="32.16" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>

      <motion.svg
        className="absolute bottom-1/2 left-1/2 -translate-x-5 rotate-45 "
        initial={{ scale: 0 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          repeat: Infinity, // or a specific number
          repeatType: "mirror",
          repeatDelay: 2,
        }}
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_31_78)">
          <path
            d="M1.06 1.06L19.76 19.76"
            stroke="#939598"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M1.06 1.06L19.76 19.76"
            stroke="#939598"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M19.76 1.06L1.06 19.76"
            stroke="#939598"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
        </g>
        <defs>
          <clipPath id="clip0_31_78">
            <rect width="20.82" height="20.82" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
};

export default First;
