import React from "react";
import GetStarted from "./GetStarted";
import App from "./App";

const Temporary = () => {
  const [splashScreen, setSplashScreen] = React.useState(true);
  const SplashScreen = () => {
    return (
      <svg
        width="390"
        height="844"
        viewBox="0 0 390 844"
        className={splashScreen ? "splashScreen" : "fade-out"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_403_62)">
          <rect width="390" height="844" fill="white" />
          <rect width="390" height="844" fill="white" />
          <path
            d="M73 73.5C73 99.7335 46.3609 121 13.5 121C-19.3609 121 -46 99.7335 -46 73.5C-46 47.2665 -19.3609 26 13.5 26C46.3609 26 73 47.2665 73 73.5Z"
            fill="#2E424D"
          />
          <rect y="-17" width="91" height="90" fill="#588291" />
          <ellipse cx="378.5" cy="769.5" rx="59.5" ry="47.5" fill="#2E424D" />
          <g filter="url(#filter0_d_403_62)">
            <path d="M299 769.5H390V859.5H299V769.5Z" fill="#588291" />
          </g>
          <rect x="86" y="359" width="215" height="126" rx="8" fill="#F2FFFC" />
          <path
            d="M95.652 419.18C94.62 419.18 93.708 418.976 92.916 418.568C92.136 418.16 91.464 417.548 90.9 416.732L92.232 415.202C92.82 416.042 93.384 416.624 93.924 416.948C94.464 417.272 95.106 417.434 95.85 417.434C96.306 417.434 96.72 417.362 97.092 417.218C97.464 417.074 97.758 416.876 97.974 416.624C98.19 416.372 98.298 416.084 98.298 415.76C98.298 415.544 98.262 415.34 98.19 415.148C98.118 414.956 98.004 414.782 97.848 414.626C97.704 414.47 97.512 414.326 97.272 414.194C97.044 414.062 96.774 413.948 96.462 413.852C96.15 413.744 95.79 413.654 95.382 413.582C94.734 413.45 94.17 413.276 93.69 413.06C93.21 412.844 92.808 412.574 92.484 412.25C92.16 411.926 91.92 411.56 91.764 411.152C91.608 410.732 91.53 410.264 91.53 409.748C91.53 409.064 91.722 408.458 92.106 407.93C92.49 407.402 93.006 406.988 93.654 406.688C94.314 406.376 95.052 406.22 95.868 406.22C96.84 406.22 97.686 406.412 98.406 406.796C99.138 407.168 99.714 407.714 100.134 408.434L98.766 409.784C98.406 409.196 97.974 408.746 97.47 408.434C96.978 408.122 96.426 407.966 95.814 407.966C95.346 407.966 94.938 408.038 94.59 408.182C94.242 408.326 93.966 408.53 93.762 408.794C93.57 409.046 93.474 409.346 93.474 409.694C93.474 409.946 93.522 410.18 93.618 410.396C93.714 410.6 93.858 410.786 94.05 410.954C94.254 411.11 94.524 411.254 94.86 411.386C95.196 411.506 95.598 411.614 96.066 411.71C96.726 411.854 97.314 412.04 97.83 412.268C98.346 412.484 98.784 412.742 99.144 413.042C99.504 413.342 99.774 413.678 99.954 414.05C100.146 414.422 100.242 414.824 100.242 415.256C100.242 416.06 100.056 416.756 99.684 417.344C99.312 417.932 98.784 418.388 98.1 418.712C97.416 419.024 96.6 419.18 95.652 419.18ZM102.492 419V409.55H104.364V411.566L104.022 411.782C104.118 411.47 104.268 411.17 104.472 410.882C104.688 410.594 104.946 410.342 105.246 410.126C105.558 409.898 105.888 409.718 106.236 409.586C106.596 409.454 106.962 409.388 107.334 409.388C107.874 409.388 108.348 409.478 108.756 409.658C109.164 409.838 109.5 410.108 109.764 410.468C110.028 410.828 110.22 411.278 110.34 411.818L110.052 411.746L110.178 411.44C110.31 411.164 110.49 410.906 110.718 410.666C110.958 410.414 111.228 410.192 111.528 410C111.828 409.808 112.146 409.658 112.482 409.55C112.818 409.442 113.148 409.388 113.472 409.388C114.18 409.388 114.762 409.532 115.218 409.82C115.686 410.108 116.034 410.546 116.262 411.134C116.502 411.722 116.622 412.454 116.622 413.33V419H114.75V413.438C114.75 412.634 114.594 412.046 114.282 411.674C113.982 411.29 113.508 411.098 112.86 411.098C112.524 411.098 112.206 411.158 111.906 411.278C111.618 411.386 111.366 411.542 111.15 411.746C110.934 411.95 110.766 412.19 110.646 412.466C110.526 412.73 110.466 413.024 110.466 413.348V419H108.594V413.402C108.594 412.658 108.432 412.088 108.108 411.692C107.796 411.296 107.34 411.098 106.74 411.098C106.404 411.098 106.092 411.158 105.804 411.278C105.516 411.386 105.264 411.542 105.048 411.746C104.832 411.938 104.664 412.172 104.544 412.448C104.424 412.712 104.364 413 104.364 413.312V419H102.492ZM124.703 419V412.844C124.703 412.316 124.511 411.89 124.127 411.566C123.755 411.23 123.281 411.062 122.705 411.062C122.177 411.062 121.697 411.17 121.265 411.386C120.845 411.602 120.461 411.932 120.113 412.376L118.907 411.17C119.471 410.558 120.077 410.102 120.725 409.802C121.385 409.502 122.093 409.352 122.849 409.352C123.569 409.352 124.193 409.472 124.721 409.712C125.249 409.952 125.657 410.306 125.945 410.774C126.233 411.23 126.377 411.788 126.377 412.448V419H124.703ZM121.877 419.18C121.265 419.18 120.719 419.06 120.239 418.82C119.759 418.58 119.375 418.25 119.087 417.83C118.811 417.398 118.673 416.894 118.673 416.318C118.673 415.814 118.763 415.37 118.943 414.986C119.123 414.602 119.387 414.284 119.735 414.032C120.095 413.78 120.539 413.588 121.067 413.456C121.607 413.324 122.225 413.258 122.921 413.258H125.549L125.387 414.734H122.687C122.327 414.734 122.003 414.77 121.715 414.842C121.439 414.902 121.199 415.004 120.995 415.148C120.803 415.28 120.659 415.442 120.563 415.634C120.467 415.814 120.419 416.03 120.419 416.282C120.419 416.546 120.485 416.78 120.617 416.984C120.749 417.176 120.929 417.326 121.157 417.434C121.385 417.542 121.649 417.596 121.949 417.596C122.381 417.596 122.789 417.524 123.173 417.38C123.569 417.224 123.917 417.014 124.217 416.75C124.529 416.486 124.769 416.192 124.937 415.868L125.369 417.074C125.117 417.494 124.805 417.86 124.433 418.172C124.061 418.484 123.659 418.73 123.227 418.91C122.795 419.09 122.345 419.18 121.877 419.18ZM128.72 419V409.55H130.592V412.52L130.412 411.8C130.544 411.344 130.766 410.93 131.078 410.558C131.402 410.186 131.768 409.892 132.176 409.676C132.596 409.46 133.028 409.352 133.472 409.352C133.676 409.352 133.868 409.37 134.048 409.406C134.24 409.442 134.39 409.484 134.498 409.532L134.012 411.548C133.868 411.488 133.706 411.44 133.526 411.404C133.358 411.356 133.19 411.332 133.022 411.332C132.698 411.332 132.386 411.398 132.086 411.53C131.798 411.65 131.54 411.824 131.312 412.052C131.096 412.268 130.922 412.526 130.79 412.826C130.658 413.114 130.592 413.432 130.592 413.78V419H128.72ZM137.501 419V407.138H139.355V419H137.501ZM135.539 411.35V409.55H141.551V411.35H135.539ZM154.386 419.18C153.474 419.18 152.622 419.018 151.83 418.694C151.038 418.358 150.342 417.896 149.742 417.308C149.142 416.72 148.674 416.036 148.338 415.256C148.014 414.464 147.852 413.612 147.852 412.7C147.852 411.8 148.014 410.96 148.338 410.18C148.674 409.4 149.136 408.722 149.724 408.146C150.324 407.558 151.02 407.102 151.812 406.778C152.604 406.454 153.456 406.292 154.368 406.292C155.004 406.292 155.622 406.382 156.222 406.562C156.834 406.742 157.386 406.994 157.878 407.318C158.37 407.642 158.772 408.014 159.084 408.434L157.824 409.748C157.284 409.232 156.72 408.842 156.132 408.578C155.556 408.314 154.968 408.182 154.368 408.182C153.72 408.182 153.12 408.296 152.568 408.524C152.028 408.752 151.548 409.07 151.128 409.478C150.72 409.886 150.402 410.366 150.174 410.918C149.946 411.458 149.832 412.052 149.832 412.7C149.832 413.324 149.952 413.918 150.192 414.482C150.432 415.034 150.762 415.52 151.182 415.94C151.614 416.36 152.106 416.69 152.658 416.93C153.222 417.17 153.816 417.29 154.44 417.29C154.908 417.29 155.352 417.224 155.772 417.092C156.192 416.948 156.564 416.75 156.888 416.498C157.212 416.246 157.464 415.958 157.644 415.634C157.824 415.298 157.914 414.944 157.914 414.572V414.212L158.184 414.464H154.332V412.538H159.912C159.936 412.67 159.954 412.802 159.966 412.934C159.978 413.054 159.984 413.174 159.984 413.294C159.996 413.402 160.002 413.51 160.002 413.618C160.002 414.446 159.858 415.202 159.57 415.886C159.282 416.558 158.88 417.14 158.364 417.632C157.86 418.124 157.266 418.508 156.582 418.784C155.91 419.048 155.178 419.18 154.386 419.18ZM167.664 419V412.844C167.664 412.316 167.472 411.89 167.088 411.566C166.716 411.23 166.242 411.062 165.666 411.062C165.138 411.062 164.658 411.17 164.226 411.386C163.806 411.602 163.422 411.932 163.074 412.376L161.868 411.17C162.432 410.558 163.038 410.102 163.686 409.802C164.346 409.502 165.054 409.352 165.81 409.352C166.53 409.352 167.154 409.472 167.682 409.712C168.21 409.952 168.618 410.306 168.906 410.774C169.194 411.23 169.338 411.788 169.338 412.448V419H167.664ZM164.838 419.18C164.226 419.18 163.68 419.06 163.2 418.82C162.72 418.58 162.336 418.25 162.048 417.83C161.772 417.398 161.634 416.894 161.634 416.318C161.634 415.814 161.724 415.37 161.904 414.986C162.084 414.602 162.348 414.284 162.696 414.032C163.056 413.78 163.5 413.588 164.028 413.456C164.568 413.324 165.186 413.258 165.882 413.258H168.51L168.348 414.734H165.648C165.288 414.734 164.964 414.77 164.676 414.842C164.4 414.902 164.16 415.004 163.956 415.148C163.764 415.28 163.62 415.442 163.524 415.634C163.428 415.814 163.38 416.03 163.38 416.282C163.38 416.546 163.446 416.78 163.578 416.984C163.71 417.176 163.89 417.326 164.118 417.434C164.346 417.542 164.61 417.596 164.91 417.596C165.342 417.596 165.75 417.524 166.134 417.38C166.53 417.224 166.878 417.014 167.178 416.75C167.49 416.486 167.73 416.192 167.898 415.868L168.33 417.074C168.078 417.494 167.766 417.86 167.394 418.172C167.022 418.484 166.62 418.73 166.188 418.91C165.756 419.09 165.306 419.18 164.838 419.18ZM174.831 419.18C174.039 419.18 173.325 419.042 172.689 418.766C172.053 418.49 171.525 418.082 171.105 417.542L172.365 416.462C172.725 416.882 173.115 417.188 173.535 417.38C173.967 417.56 174.453 417.65 174.993 417.65C175.209 417.65 175.407 417.626 175.587 417.578C175.779 417.518 175.941 417.434 176.073 417.326C176.217 417.218 176.325 417.092 176.397 416.948C176.469 416.792 176.505 416.624 176.505 416.444C176.505 416.132 176.391 415.88 176.163 415.688C176.043 415.604 175.851 415.514 175.587 415.418C175.335 415.31 175.005 415.202 174.597 415.094C173.901 414.914 173.331 414.71 172.887 414.482C172.443 414.254 172.101 413.996 171.861 413.708C171.681 413.48 171.549 413.234 171.465 412.97C171.381 412.694 171.339 412.394 171.339 412.07C171.339 411.542 171.489 411.074 171.789 410.666C172.089 410.258 172.491 409.94 172.995 409.712C173.511 409.472 174.087 409.352 174.723 409.352C175.167 409.352 175.605 409.412 176.037 409.532C176.481 409.652 176.889 409.826 177.261 410.054C177.633 410.282 177.945 410.552 178.197 410.864L177.135 412.034C176.907 411.806 176.655 411.608 176.379 411.44C176.115 411.26 175.845 411.122 175.569 411.026C175.293 410.93 175.041 410.882 174.813 410.882C174.561 410.882 174.333 410.906 174.129 410.954C173.925 411.002 173.751 411.074 173.607 411.17C173.475 411.266 173.373 411.386 173.301 411.53C173.229 411.674 173.193 411.836 173.193 412.016C173.205 412.172 173.241 412.322 173.301 412.466C173.373 412.598 173.469 412.712 173.589 412.808C173.721 412.904 173.919 413.006 174.183 413.114C174.447 413.222 174.783 413.324 175.191 413.42C175.791 413.576 176.283 413.75 176.667 413.942C177.063 414.122 177.375 414.332 177.603 414.572C177.843 414.8 178.011 415.064 178.107 415.364C178.203 415.664 178.251 416 178.251 416.372C178.251 416.912 178.095 417.398 177.783 417.83C177.483 418.25 177.075 418.58 176.559 418.82C176.043 419.06 175.467 419.18 174.831 419.18ZM185.807 419V406.4H190.739C191.639 406.4 192.449 406.55 193.169 406.85C193.901 407.15 194.525 407.582 195.041 408.146C195.557 408.71 195.953 409.376 196.229 410.144C196.505 410.912 196.643 411.764 196.643 412.7C196.643 413.636 196.505 414.494 196.229 415.274C195.953 416.042 195.557 416.708 195.041 417.272C194.537 417.824 193.919 418.25 193.187 418.55C192.455 418.85 191.639 419 190.739 419H185.807ZM187.751 417.326L187.697 417.128H190.649C191.285 417.128 191.849 417.026 192.341 416.822C192.845 416.618 193.265 416.33 193.601 415.958C193.949 415.574 194.213 415.106 194.393 414.554C194.573 414.002 194.663 413.384 194.663 412.7C194.663 412.016 194.573 411.404 194.393 410.864C194.213 410.312 193.949 409.844 193.601 409.46C193.253 409.076 192.833 408.782 192.341 408.578C191.849 408.374 191.285 408.272 190.649 408.272H187.643L187.751 408.11V417.326ZM203.214 419.18C202.242 419.18 201.378 418.976 200.622 418.568C199.878 418.148 199.29 417.578 198.858 416.858C198.438 416.138 198.228 415.31 198.228 414.374C198.228 413.63 198.348 412.952 198.588 412.34C198.828 411.728 199.158 411.2 199.578 410.756C200.01 410.3 200.52 409.952 201.108 409.712C201.708 409.46 202.356 409.334 203.052 409.334C203.664 409.334 204.234 409.454 204.762 409.694C205.29 409.922 205.746 410.24 206.13 410.648C206.526 411.056 206.826 411.542 207.03 412.106C207.246 412.658 207.348 413.264 207.336 413.924L207.318 414.716H199.596L199.182 413.24H205.716L205.446 413.546V413.114C205.41 412.718 205.278 412.364 205.05 412.052C204.822 411.74 204.534 411.494 204.186 411.314C203.838 411.134 203.46 411.044 203.052 411.044C202.404 411.044 201.858 411.17 201.414 411.422C200.97 411.662 200.634 412.022 200.406 412.502C200.178 412.97 200.064 413.552 200.064 414.248C200.064 414.908 200.202 415.484 200.478 415.976C200.754 416.456 201.144 416.828 201.648 417.092C202.152 417.356 202.734 417.488 203.394 417.488C203.862 417.488 204.294 417.41 204.69 417.254C205.098 417.098 205.536 416.816 206.004 416.408L206.94 417.722C206.652 418.01 206.298 418.262 205.878 418.478C205.47 418.694 205.032 418.868 204.564 419C204.108 419.12 203.658 419.18 203.214 419.18ZM210.521 419V407.138H212.375V419H210.521ZM208.559 411.35V409.55H214.571V411.35H208.559ZM220.581 419.18C219.609 419.18 218.745 418.976 217.989 418.568C217.245 418.148 216.657 417.578 216.225 416.858C215.805 416.138 215.595 415.31 215.595 414.374C215.595 413.63 215.715 412.952 215.955 412.34C216.195 411.728 216.525 411.2 216.945 410.756C217.377 410.3 217.887 409.952 218.475 409.712C219.075 409.46 219.723 409.334 220.419 409.334C221.031 409.334 221.601 409.454 222.129 409.694C222.657 409.922 223.113 410.24 223.497 410.648C223.893 411.056 224.193 411.542 224.397 412.106C224.613 412.658 224.715 413.264 224.703 413.924L224.685 414.716H216.963L216.549 413.24H223.083L222.813 413.546V413.114C222.777 412.718 222.645 412.364 222.417 412.052C222.189 411.74 221.901 411.494 221.553 411.314C221.205 411.134 220.827 411.044 220.419 411.044C219.771 411.044 219.225 411.17 218.781 411.422C218.337 411.662 218.001 412.022 217.773 412.502C217.545 412.97 217.431 413.552 217.431 414.248C217.431 414.908 217.569 415.484 217.845 415.976C218.121 416.456 218.511 416.828 219.015 417.092C219.519 417.356 220.101 417.488 220.761 417.488C221.229 417.488 221.661 417.41 222.057 417.254C222.465 417.098 222.903 416.816 223.371 416.408L224.307 417.722C224.019 418.01 223.665 418.262 223.245 418.478C222.837 418.694 222.399 418.868 221.931 419C221.475 419.12 221.025 419.18 220.581 419.18ZM230.732 419.18C229.856 419.18 229.07 418.964 228.374 418.532C227.69 418.1 227.144 417.512 226.736 416.768C226.34 416.024 226.142 415.19 226.142 414.266C226.142 413.342 226.34 412.508 226.736 411.764C227.144 411.02 227.69 410.432 228.374 410C229.07 409.568 229.856 409.352 230.732 409.352C231.572 409.352 232.334 409.526 233.018 409.874C233.714 410.21 234.242 410.672 234.602 411.26L233.576 412.52C233.384 412.244 233.138 411.992 232.838 411.764C232.538 411.536 232.22 411.356 231.884 411.224C231.548 411.092 231.224 411.026 230.912 411.026C230.336 411.026 229.82 411.17 229.364 411.458C228.92 411.734 228.566 412.118 228.302 412.61C228.038 413.102 227.906 413.654 227.906 414.266C227.906 414.878 228.044 415.43 228.32 415.922C228.596 416.402 228.962 416.786 229.418 417.074C229.874 417.362 230.378 417.506 230.93 417.506C231.254 417.506 231.566 417.452 231.866 417.344C232.178 417.236 232.478 417.074 232.766 416.858C233.054 416.642 233.324 416.378 233.576 416.066L234.602 417.326C234.218 417.866 233.666 418.31 232.946 418.658C232.238 419.006 231.5 419.18 230.732 419.18ZM237.521 419V407.138H239.375V419H237.521ZM235.559 411.35V409.55H241.571V411.35H235.559ZM243.565 419V409.55H245.419V419H243.565ZM244.465 407.462C244.069 407.462 243.763 407.36 243.547 407.156C243.331 406.952 243.223 406.664 243.223 406.292C243.223 405.944 243.331 405.662 243.547 405.446C243.775 405.23 244.081 405.122 244.465 405.122C244.861 405.122 245.167 405.224 245.383 405.428C245.599 405.632 245.707 405.92 245.707 406.292C245.707 406.64 245.593 406.922 245.365 407.138C245.149 407.354 244.849 407.462 244.465 407.462ZM252.517 419.18C251.593 419.18 250.765 418.97 250.033 418.55C249.313 418.118 248.743 417.536 248.323 416.804C247.903 416.06 247.693 415.214 247.693 414.266C247.693 413.318 247.903 412.478 248.323 411.746C248.743 411.002 249.313 410.42 250.033 410C250.765 409.568 251.593 409.352 252.517 409.352C253.429 409.352 254.245 409.568 254.965 410C255.697 410.42 256.273 411.002 256.693 411.746C257.113 412.478 257.323 413.318 257.323 414.266C257.323 415.214 257.113 416.06 256.693 416.804C256.273 417.536 255.697 418.118 254.965 418.55C254.245 418.97 253.429 419.18 252.517 419.18ZM252.517 417.488C253.081 417.488 253.585 417.35 254.029 417.074C254.473 416.786 254.821 416.402 255.073 415.922C255.325 415.43 255.445 414.878 255.433 414.266C255.445 413.642 255.325 413.09 255.073 412.61C254.821 412.118 254.473 411.734 254.029 411.458C253.585 411.182 253.081 411.044 252.517 411.044C251.953 411.044 251.443 411.188 250.987 411.476C250.543 411.752 250.195 412.136 249.943 412.628C249.691 413.108 249.571 413.654 249.583 414.266C249.571 414.878 249.691 415.43 249.943 415.922C250.195 416.402 250.543 416.786 250.987 417.074C251.443 417.35 251.953 417.488 252.517 417.488ZM259.343 419V409.55H261.197V411.494L260.873 411.71C260.993 411.29 261.227 410.906 261.575 410.558C261.923 410.198 262.337 409.91 262.817 409.694C263.297 409.466 263.789 409.352 264.293 409.352C265.013 409.352 265.613 409.496 266.093 409.784C266.573 410.06 266.933 410.486 267.173 411.062C267.413 411.638 267.533 412.364 267.533 413.24V419H265.679V413.366C265.679 412.826 265.607 412.382 265.463 412.034C265.319 411.674 265.097 411.416 264.797 411.26C264.497 411.092 264.125 411.02 263.681 411.044C263.321 411.044 262.991 411.104 262.691 411.224C262.391 411.332 262.127 411.488 261.899 411.692C261.683 411.896 261.509 412.136 261.377 412.412C261.257 412.676 261.197 412.964 261.197 413.276V419H260.279C260.123 419 259.967 419 259.811 419C259.655 419 259.499 419 259.343 419ZM284.147 419L282.509 417.254L282.221 416.93L279.107 413.456C278.807 413.12 278.519 412.778 278.243 412.43C277.967 412.07 277.721 411.716 277.505 411.368C277.301 411.02 277.133 410.684 277.001 410.36C276.881 410.024 276.821 409.712 276.821 409.424C276.821 408.812 276.977 408.266 277.289 407.786C277.613 407.294 278.051 406.91 278.603 406.634C279.167 406.358 279.815 406.22 280.547 406.22C281.087 406.22 281.591 406.322 282.059 406.526C282.527 406.718 282.929 406.994 283.265 407.354C283.613 407.702 283.865 408.11 284.021 408.578L282.617 409.478C282.389 408.926 282.107 408.524 281.771 408.272C281.447 408.02 281.039 407.894 280.547 407.894C280.175 407.894 279.863 407.954 279.611 408.074C279.359 408.182 279.167 408.344 279.035 408.56C278.903 408.776 278.837 409.046 278.837 409.37C278.837 409.634 278.909 409.928 279.053 410.252C279.209 410.564 279.401 410.882 279.629 411.206C279.857 411.53 280.091 411.83 280.331 412.106C280.571 412.382 280.781 412.622 280.961 412.826L283.463 415.616L283.985 416.192L286.559 419H284.147ZM279.305 419.18C278.453 419.18 277.679 419 276.983 418.64C276.287 418.268 275.729 417.782 275.309 417.182C274.901 416.57 274.697 415.904 274.697 415.184C274.697 414.236 274.955 413.414 275.471 412.718C275.999 412.022 276.767 411.488 277.775 411.116L278.927 412.502C278.159 412.67 277.589 412.952 277.217 413.348C276.845 413.732 276.659 414.254 276.659 414.914C276.659 415.418 276.779 415.862 277.019 416.246C277.259 416.63 277.601 416.93 278.045 417.146C278.501 417.362 279.041 417.47 279.665 417.47C280.205 417.47 280.697 417.368 281.141 417.164C281.597 416.948 282.005 416.648 282.365 416.264C282.725 415.88 283.019 415.418 283.247 414.878C283.487 414.338 283.661 413.738 283.769 413.078H285.425C285.329 413.81 285.155 414.488 284.903 415.112C284.663 415.736 284.357 416.3 283.985 416.804C283.625 417.308 283.205 417.74 282.725 418.1C282.257 418.448 281.735 418.718 281.159 418.91C280.583 419.09 279.965 419.18 279.305 419.18ZM111.944 442V429.4H113.852L118.442 436.87L117.524 436.852L122.168 429.4H123.968V442H122.024V436.834C122.024 435.754 122.048 434.782 122.096 433.918C122.156 433.054 122.252 432.196 122.384 431.344L122.636 432.01L118.514 438.382H117.326L113.33 432.082L113.528 431.344C113.66 432.148 113.75 432.976 113.798 433.828C113.858 434.668 113.888 435.67 113.888 436.834V442H111.944ZM131.28 442.18C130.356 442.18 129.528 441.97 128.796 441.55C128.076 441.118 127.506 440.536 127.086 439.804C126.666 439.06 126.456 438.214 126.456 437.266C126.456 436.318 126.666 435.478 127.086 434.746C127.506 434.002 128.076 433.42 128.796 433C129.528 432.568 130.356 432.352 131.28 432.352C132.192 432.352 133.008 432.568 133.728 433C134.46 433.42 135.036 434.002 135.456 434.746C135.876 435.478 136.086 436.318 136.086 437.266C136.086 438.214 135.876 439.06 135.456 439.804C135.036 440.536 134.46 441.118 133.728 441.55C133.008 441.97 132.192 442.18 131.28 442.18ZM131.28 440.488C131.844 440.488 132.348 440.35 132.792 440.074C133.236 439.786 133.584 439.402 133.836 438.922C134.088 438.43 134.208 437.878 134.196 437.266C134.208 436.642 134.088 436.09 133.836 435.61C133.584 435.118 133.236 434.734 132.792 434.458C132.348 434.182 131.844 434.044 131.28 434.044C130.716 434.044 130.206 434.188 129.75 434.476C129.306 434.752 128.958 435.136 128.706 435.628C128.454 436.108 128.334 436.654 128.346 437.266C128.334 437.878 128.454 438.43 128.706 438.922C128.958 439.402 129.306 439.786 129.75 440.074C130.206 440.35 130.716 440.488 131.28 440.488ZM138.107 442V432.55H139.961V434.494L139.637 434.71C139.757 434.29 139.991 433.906 140.339 433.558C140.687 433.198 141.101 432.91 141.581 432.694C142.061 432.466 142.553 432.352 143.057 432.352C143.777 432.352 144.377 432.496 144.857 432.784C145.337 433.06 145.697 433.486 145.937 434.062C146.177 434.638 146.297 435.364 146.297 436.24V442H144.443V436.366C144.443 435.826 144.371 435.382 144.227 435.034C144.083 434.674 143.861 434.416 143.561 434.26C143.261 434.092 142.889 434.02 142.445 434.044C142.085 434.044 141.755 434.104 141.455 434.224C141.155 434.332 140.891 434.488 140.663 434.692C140.447 434.896 140.273 435.136 140.141 435.412C140.021 435.676 139.961 435.964 139.961 436.276V442H139.043C138.887 442 138.731 442 138.575 442C138.419 442 138.263 442 138.107 442ZM149.118 442V432.55H150.972V442H149.118ZM150.018 430.462C149.622 430.462 149.316 430.36 149.1 430.156C148.884 429.952 148.776 429.664 148.776 429.292C148.776 428.944 148.884 428.662 149.1 428.446C149.328 428.23 149.634 428.122 150.018 428.122C150.414 428.122 150.72 428.224 150.936 428.428C151.152 428.632 151.26 428.92 151.26 429.292C151.26 429.64 151.146 429.922 150.918 430.138C150.702 430.354 150.402 430.462 150.018 430.462ZM154.991 442V430.138H156.845V442H154.991ZM153.029 434.35V432.55H159.041V434.35H153.029ZM164.89 442.18C163.966 442.18 163.138 441.97 162.406 441.55C161.686 441.118 161.116 440.536 160.696 439.804C160.276 439.06 160.066 438.214 160.066 437.266C160.066 436.318 160.276 435.478 160.696 434.746C161.116 434.002 161.686 433.42 162.406 433C163.138 432.568 163.966 432.352 164.89 432.352C165.802 432.352 166.618 432.568 167.338 433C168.07 433.42 168.646 434.002 169.066 434.746C169.486 435.478 169.696 436.318 169.696 437.266C169.696 438.214 169.486 439.06 169.066 439.804C168.646 440.536 168.07 441.118 167.338 441.55C166.618 441.97 165.802 442.18 164.89 442.18ZM164.89 440.488C165.454 440.488 165.958 440.35 166.402 440.074C166.846 439.786 167.194 439.402 167.446 438.922C167.698 438.43 167.818 437.878 167.806 437.266C167.818 436.642 167.698 436.09 167.446 435.61C167.194 435.118 166.846 434.734 166.402 434.458C165.958 434.182 165.454 434.044 164.89 434.044C164.326 434.044 163.816 434.188 163.36 434.476C162.916 434.752 162.568 435.136 162.316 435.628C162.064 436.108 161.944 436.654 161.956 437.266C161.944 437.878 162.064 438.43 162.316 438.922C162.568 439.402 162.916 439.786 163.36 440.074C163.816 440.35 164.326 440.488 164.89 440.488ZM171.716 442V432.55H173.588V435.52L173.408 434.8C173.54 434.344 173.762 433.93 174.074 433.558C174.398 433.186 174.764 432.892 175.172 432.676C175.592 432.46 176.024 432.352 176.468 432.352C176.672 432.352 176.864 432.37 177.044 432.406C177.236 432.442 177.386 432.484 177.494 432.532L177.008 434.548C176.864 434.488 176.702 434.44 176.522 434.404C176.354 434.356 176.186 434.332 176.018 434.332C175.694 434.332 175.382 434.398 175.082 434.53C174.794 434.65 174.536 434.824 174.308 435.052C174.092 435.268 173.918 435.526 173.786 435.826C173.654 436.114 173.588 436.432 173.588 436.78V442H171.716ZM179.282 442V432.55H181.136V442H179.282ZM180.182 430.462C179.786 430.462 179.48 430.36 179.264 430.156C179.048 429.952 178.94 429.664 178.94 429.292C178.94 428.944 179.048 428.662 179.264 428.446C179.492 428.23 179.798 428.122 180.182 428.122C180.578 428.122 180.884 428.224 181.1 428.428C181.316 428.632 181.424 428.92 181.424 429.292C181.424 429.64 181.31 429.922 181.082 430.138C180.866 430.354 180.566 430.462 180.182 430.462ZM183.985 442V432.55H185.839V434.494L185.515 434.71C185.635 434.29 185.869 433.906 186.217 433.558C186.565 433.198 186.979 432.91 187.459 432.694C187.939 432.466 188.431 432.352 188.935 432.352C189.655 432.352 190.255 432.496 190.735 432.784C191.215 433.06 191.575 433.486 191.815 434.062C192.055 434.638 192.175 435.364 192.175 436.24V442H190.321V436.366C190.321 435.826 190.249 435.382 190.105 435.034C189.961 434.674 189.739 434.416 189.439 434.26C189.139 434.092 188.767 434.02 188.323 434.044C187.963 434.044 187.633 434.104 187.333 434.224C187.033 434.332 186.769 434.488 186.541 434.692C186.325 434.896 186.151 435.136 186.019 435.412C185.899 435.676 185.839 435.964 185.839 436.276V442H184.921C184.765 442 184.609 442 184.453 442C184.297 442 184.141 442 183.985 442ZM198.921 446.14C198.249 446.14 197.577 446.032 196.905 445.816C196.245 445.612 195.711 445.342 195.303 445.006L195.987 443.566C196.347 443.842 196.791 444.064 197.319 444.232C197.859 444.4 198.393 444.484 198.921 444.484C199.581 444.484 200.133 444.376 200.577 444.16C201.021 443.944 201.357 443.626 201.585 443.206C201.813 442.786 201.927 442.264 201.927 441.64V439.822L202.125 439.948C202.065 440.32 201.867 440.68 201.531 441.028C201.207 441.364 200.799 441.64 200.307 441.856C199.815 442.072 199.311 442.18 198.795 442.18C197.895 442.18 197.091 441.97 196.383 441.55C195.687 441.118 195.135 440.536 194.727 439.804C194.319 439.06 194.115 438.214 194.115 437.266C194.115 436.318 194.313 435.478 194.709 434.746C195.117 434.002 195.669 433.42 196.365 433C197.073 432.568 197.865 432.352 198.741 432.352C199.101 432.352 199.449 432.4 199.785 432.496C200.121 432.58 200.433 432.706 200.721 432.874C201.009 433.03 201.267 433.204 201.495 433.396C201.723 433.588 201.909 433.792 202.053 434.008C202.197 434.224 202.287 434.428 202.323 434.62L201.927 434.764V432.55H203.781V441.424C203.781 442.18 203.667 442.846 203.439 443.422C203.223 444.01 202.905 444.502 202.485 444.898C202.065 445.306 201.555 445.612 200.955 445.816C200.355 446.032 199.677 446.14 198.921 446.14ZM198.993 440.47C199.581 440.47 200.103 440.332 200.559 440.056C201.015 439.78 201.369 439.402 201.621 438.922C201.873 438.442 201.999 437.89 201.999 437.266C201.999 436.642 201.867 436.09 201.603 435.61C201.351 435.118 200.997 434.734 200.541 434.458C200.097 434.182 199.581 434.044 198.993 434.044C198.417 434.044 197.901 434.188 197.445 434.476C197.001 434.752 196.647 435.136 196.383 435.628C196.131 436.108 196.005 436.654 196.005 437.266C196.005 437.878 196.131 438.43 196.383 438.922C196.647 439.402 197.001 439.78 197.445 440.056C197.901 440.332 198.417 440.47 198.993 440.47ZM215.781 442.18C214.749 442.18 213.837 441.976 213.045 441.568C212.265 441.16 211.593 440.548 211.029 439.732L212.361 438.202C212.949 439.042 213.513 439.624 214.053 439.948C214.593 440.272 215.235 440.434 215.979 440.434C216.435 440.434 216.849 440.362 217.221 440.218C217.593 440.074 217.887 439.876 218.103 439.624C218.319 439.372 218.427 439.084 218.427 438.76C218.427 438.544 218.391 438.34 218.319 438.148C218.247 437.956 218.133 437.782 217.977 437.626C217.833 437.47 217.641 437.326 217.401 437.194C217.173 437.062 216.903 436.948 216.591 436.852C216.279 436.744 215.919 436.654 215.511 436.582C214.863 436.45 214.299 436.276 213.819 436.06C213.339 435.844 212.937 435.574 212.613 435.25C212.289 434.926 212.049 434.56 211.893 434.152C211.737 433.732 211.659 433.264 211.659 432.748C211.659 432.064 211.851 431.458 212.235 430.93C212.619 430.402 213.135 429.988 213.783 429.688C214.443 429.376 215.181 429.22 215.997 429.22C216.969 429.22 217.815 429.412 218.535 429.796C219.267 430.168 219.843 430.714 220.263 431.434L218.895 432.784C218.535 432.196 218.103 431.746 217.599 431.434C217.107 431.122 216.555 430.966 215.943 430.966C215.475 430.966 215.067 431.038 214.719 431.182C214.371 431.326 214.095 431.53 213.891 431.794C213.699 432.046 213.603 432.346 213.603 432.694C213.603 432.946 213.651 433.18 213.747 433.396C213.843 433.6 213.987 433.786 214.179 433.954C214.383 434.11 214.653 434.254 214.989 434.386C215.325 434.506 215.727 434.614 216.195 434.71C216.855 434.854 217.443 435.04 217.959 435.268C218.475 435.484 218.913 435.742 219.273 436.042C219.633 436.342 219.903 436.678 220.083 437.05C220.275 437.422 220.371 437.824 220.371 438.256C220.371 439.06 220.185 439.756 219.813 440.344C219.441 440.932 218.913 441.388 218.229 441.712C217.545 442.024 216.729 442.18 215.781 442.18ZM224.241 446.14L226.149 441.73L226.167 443.206L221.451 432.55H223.611L226.563 439.498C226.623 439.618 226.695 439.804 226.779 440.056C226.863 440.296 226.935 440.536 226.995 440.776L226.527 440.884C226.623 440.632 226.713 440.38 226.797 440.128C226.893 439.876 226.983 439.624 227.067 439.372L229.533 432.55H231.729L227.841 442L226.239 446.14H224.241ZM236.091 442.18C235.299 442.18 234.585 442.042 233.949 441.766C233.313 441.49 232.785 441.082 232.365 440.542L233.625 439.462C233.985 439.882 234.375 440.188 234.795 440.38C235.227 440.56 235.713 440.65 236.253 440.65C236.469 440.65 236.667 440.626 236.847 440.578C237.039 440.518 237.201 440.434 237.333 440.326C237.477 440.218 237.585 440.092 237.657 439.948C237.729 439.792 237.765 439.624 237.765 439.444C237.765 439.132 237.651 438.88 237.423 438.688C237.303 438.604 237.111 438.514 236.847 438.418C236.595 438.31 236.265 438.202 235.857 438.094C235.161 437.914 234.591 437.71 234.147 437.482C233.703 437.254 233.361 436.996 233.121 436.708C232.941 436.48 232.809 436.234 232.725 435.97C232.641 435.694 232.599 435.394 232.599 435.07C232.599 434.542 232.749 434.074 233.049 433.666C233.349 433.258 233.751 432.94 234.255 432.712C234.771 432.472 235.347 432.352 235.983 432.352C236.427 432.352 236.865 432.412 237.297 432.532C237.741 432.652 238.149 432.826 238.521 433.054C238.893 433.282 239.205 433.552 239.457 433.864L238.395 435.034C238.167 434.806 237.915 434.608 237.639 434.44C237.375 434.26 237.105 434.122 236.829 434.026C236.553 433.93 236.301 433.882 236.073 433.882C235.821 433.882 235.593 433.906 235.389 433.954C235.185 434.002 235.011 434.074 234.867 434.17C234.735 434.266 234.633 434.386 234.561 434.53C234.489 434.674 234.453 434.836 234.453 435.016C234.465 435.172 234.501 435.322 234.561 435.466C234.633 435.598 234.729 435.712 234.849 435.808C234.981 435.904 235.179 436.006 235.443 436.114C235.707 436.222 236.043 436.324 236.451 436.42C237.051 436.576 237.543 436.75 237.927 436.942C238.323 437.122 238.635 437.332 238.863 437.572C239.103 437.8 239.271 438.064 239.367 438.364C239.463 438.664 239.511 439 239.511 439.372C239.511 439.912 239.355 440.398 239.043 440.83C238.743 441.25 238.335 441.58 237.819 441.82C237.303 442.06 236.727 442.18 236.091 442.18ZM242.724 442V430.138H244.578V442H242.724ZM240.762 434.35V432.55H246.774V434.35H240.762ZM252.784 442.18C251.812 442.18 250.948 441.976 250.192 441.568C249.448 441.148 248.86 440.578 248.428 439.858C248.008 439.138 247.798 438.31 247.798 437.374C247.798 436.63 247.918 435.952 248.158 435.34C248.398 434.728 248.728 434.2 249.148 433.756C249.58 433.3 250.09 432.952 250.678 432.712C251.278 432.46 251.926 432.334 252.622 432.334C253.234 432.334 253.804 432.454 254.332 432.694C254.86 432.922 255.316 433.24 255.7 433.648C256.096 434.056 256.396 434.542 256.6 435.106C256.816 435.658 256.918 436.264 256.906 436.924L256.888 437.716H249.166L248.752 436.24H255.286L255.016 436.546V436.114C254.98 435.718 254.848 435.364 254.62 435.052C254.392 434.74 254.104 434.494 253.756 434.314C253.408 434.134 253.03 434.044 252.622 434.044C251.974 434.044 251.428 434.17 250.984 434.422C250.54 434.662 250.204 435.022 249.976 435.502C249.748 435.97 249.634 436.552 249.634 437.248C249.634 437.908 249.772 438.484 250.048 438.976C250.324 439.456 250.714 439.828 251.218 440.092C251.722 440.356 252.304 440.488 252.964 440.488C253.432 440.488 253.864 440.41 254.26 440.254C254.668 440.098 255.106 439.816 255.574 439.408L256.51 440.722C256.222 441.01 255.868 441.262 255.448 441.478C255.04 441.694 254.602 441.868 254.134 442C253.678 442.12 253.228 442.18 252.784 442.18ZM258.885 442V432.55H260.757V434.566L260.415 434.782C260.511 434.47 260.661 434.17 260.865 433.882C261.081 433.594 261.339 433.342 261.639 433.126C261.951 432.898 262.281 432.718 262.629 432.586C262.989 432.454 263.355 432.388 263.727 432.388C264.267 432.388 264.741 432.478 265.149 432.658C265.557 432.838 265.893 433.108 266.157 433.468C266.421 433.828 266.613 434.278 266.733 434.818L266.445 434.746L266.571 434.44C266.703 434.164 266.883 433.906 267.111 433.666C267.351 433.414 267.621 433.192 267.921 433C268.221 432.808 268.539 432.658 268.875 432.55C269.211 432.442 269.541 432.388 269.865 432.388C270.573 432.388 271.155 432.532 271.611 432.82C272.079 433.108 272.427 433.546 272.655 434.134C272.895 434.722 273.015 435.454 273.015 436.33V442H271.143V436.438C271.143 435.634 270.987 435.046 270.675 434.674C270.375 434.29 269.901 434.098 269.253 434.098C268.917 434.098 268.599 434.158 268.299 434.278C268.011 434.386 267.759 434.542 267.543 434.746C267.327 434.95 267.159 435.19 267.039 435.466C266.919 435.73 266.859 436.024 266.859 436.348V442H264.987V436.402C264.987 435.658 264.825 435.088 264.501 434.692C264.189 434.296 263.733 434.098 263.133 434.098C262.797 434.098 262.485 434.158 262.197 434.278C261.909 434.386 261.657 434.542 261.441 434.746C261.225 434.938 261.057 435.172 260.937 435.448C260.817 435.712 260.757 436 260.757 436.312V442H258.885Z"
            fill="black"
            fill-opacity="0.72"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_403_62"
            x="295"
            y="769.5"
            width="99"
            height="98"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_403_62"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_403_62"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_403_62">
            <rect width="390" height="844" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };
  React.useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 1500);
  });
  return splashScreen ? (
    <SplashScreen />
  ) : window.localStorage.getItem("notFirstTime") === "true" ? (
    <App />
  ) : (
    <GetStarted />
  );

  return <div>Temporary</div>;
};

export default Temporary;
