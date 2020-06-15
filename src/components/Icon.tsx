import React from 'react';
import Svg, { SvgXml, Circle, Path, Rect } from 'react-native-svg';
import { colors } from '../constants';

const Icon = (props: any) => {
  const { color = colors.neutral000, name, size = 24, style } = props;

  const CAMERA_ADD_XML = `
    <svg width=${size} height=${size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0001 11C11.0001 9.52728 12.194 8.33337 13.6667 8.33337H24.3334C25.8062 8.33337 27.0001 9.52728 27.0001 11H29.6667C31.1395 11 32.3334 12.1939 32.3334 13.6667V27C32.3334 28.4728 31.1395 29.6667 29.6667 29.6667H8.33342C6.86066 29.6667 5.66675 28.4728 5.66675 27V13.6667C5.66675 12.1939 6.86066 11 8.33341 11L11.0001 11ZM24.3334 20.3334C24.3334 23.2789 21.9456 25.6667 19.0001 25.6667C16.0546 25.6667 13.6667 23.2789 13.6667 20.3334C13.6667 17.3879 16.0546 15 19.0001 15C21.9456 15 24.3334 17.3879 24.3334 20.3334ZM28.3334 16.3334C29.0698 16.3334 29.6667 15.7364 29.6667 15C29.6667 14.2637 29.0698 13.6667 28.3334 13.6667C27.597 13.6667 27.0001 14.2637 27.0001 15C27.0001 15.7364 27.597 16.3334 28.3334 16.3334Z" fill=${color}/>
      <circle cx="33.5" cy="33.5" r="6.5" fill=transparent />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5 30C34.5 29.4477 34.0523 29 33.5 29C32.9477 29 32.5 29.4477 32.5 30V32.5H30C29.4477 32.5 29 32.9477 29 33.5C29 34.0523 29.4477 34.5 30 34.5H32.5V37C32.5 37.5523 32.9477 38 33.5 38C34.0523 38 34.5 37.5523 34.5 37V34.5H37C37.5523 34.5 38 34.0523 38 33.5C38 32.9477 37.5523 32.5 37 32.5H34.5V30Z" fill=${color}/>
    </svg>
  `;

  switch (name) {
    case iconName.arrowLeft:
      return (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          style={style}
        >
          <Path
            d="M9.29285 18.7071C9.68347 19.0976 10.3165 19.0976 10.7072 18.7071C11.0977 18.3166 11.0977 17.6834 10.7072 17.2929L6.41418 13H20C20.5522 13 21 12.5523 21 12C21 11.4477 20.5522 11 20 11H6.41418L10.7072 6.70708C11.0977 6.31658 11.0977 5.6834 10.7072 5.2929C10.3165 4.90237 9.68347 4.90237 9.29285 5.2929L3.29285 11.2929C3.09766 11.4882 3 11.7441 3 12C3 12.2559 3.09766 12.5118 3.29285 12.7071L9.29285 18.7071Z"
            fill={color}
          />
        </Svg>
      );
    case iconName.arrowRight:
      return (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          style={style}
        >
          <Path
            d="M14.7072 5.2929C14.3165 4.90237 13.6835 4.90237 13.2928 5.2929C12.9023 5.6834 12.9023 6.31658 13.2928 6.70708L17.5858 11H4C3.44775 11 3 11.4477 3 12C3 12.5523 3.44775 13 4 13H17.5858L13.2928 17.2929C12.9023 17.6834 12.9023 18.3166 13.2928 18.7071C13.6835 19.0976 14.3165 19.0976 14.7072 18.7071L20.7072 12.7071C20.9023 12.5118 21 12.2559 21 12C21 11.7441 20.9023 11.4882 20.7072 11.2929L14.7072 5.2929Z"
            fill={color}
          />
        </Svg>
      );
    case iconName.bug:
      return (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          style={style}
        >
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.4363 3.90006C15.77 3.73802 16 3.39587 16 3C16 2.44772 15.5523 2 15 2C14.4477 2 14 2.44772 14 3C14 3.10602 14.0165 3.20819 14.0471 3.30407C13.3996 3.10636 12.7122 3 12 3C11.2878 3 10.6004 3.10636 9.95293 3.30407C9.9835 3.20819 10 3.10602 10 3C10 2.44772 9.55228 2 9 2C8.44772 2 8 2.44772 8 3C8 3.39587 8.23003 3.73802 8.56372 3.90006C7.309 4.60841 6.29467 5.69268 5.67363 7H4C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9H5.07089C5.02417 9.3266 5 9.66048 5 10V12H4C3.44772 12 3 12.4477 3 13C3 13.5523 3.44772 14 4 14H5C5 15.0736 5.24169 16.0907 5.67363 17H5C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H7.10102C8.36355 20.2372 10.0927 21 12 21C13.9073 21 15.6364 20.2372 16.899 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H18.3264C18.7583 16.0907 19 15.0736 19 14H20C20.5523 14 21 13.5523 21 13C21 12.4477 20.5523 12 20 12H19V10C19 9.66048 18.9758 9.3266 18.9291 9H20C20.5523 9 21 8.55228 21 8C21 7.44772 20.5523 7 20 7H18.3264C17.7053 5.69268 16.691 4.60841 15.4363 3.90006ZM10 9.5C9.44772 9.5 9 9.94772 9 10.5C9 11.0523 9.44772 11.5 10 11.5H14C14.5523 11.5 15 11.0523 15 10.5C15 9.94772 14.5523 9.5 14 9.5H10ZM9 15.5C9 14.9477 9.44772 14.5 10 14.5H14C14.5523 14.5 15 14.9477 15 15.5C15 16.0523 14.5523 16.5 14 16.5H10C9.44772 16.5 9 16.0523 9 15.5Z"
            fill={color}
          />
        </Svg>
      );
    case iconName.check:
      return (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          style={style}
        >
          <Path
            d="M21.4743 7.35146C22.2207 6.53722 22.1657 5.27209 21.3514 4.5257C20.5372 3.77932 19.2721 3.83432 18.5257 4.64856L21.4743 7.35146ZM9.00001 18L7.5257 19.3514C7.90452 19.7647 8.4394 20 9.00001 20C9.56062 20 10.0955 19.7647 10.4743 19.3514L9.00001 18ZM5.47432 11.194C4.72793 10.3798 3.4628 10.3248 2.64856 11.0712C1.83432 11.8175 1.77932 13.0827 2.5257 13.8969L5.47432 11.194ZM18.5257 4.64856L7.5257 16.6486L10.4743 19.3514L21.4743 7.35146L18.5257 4.64856ZM10.4743 16.6486L5.47432 11.194L2.5257 13.8969L7.5257 19.3514L10.4743 16.6486Z"
            fill={color}
          />
        </Svg>
      );
    case iconName.cameraAdd:
      return <SvgXml xml={CAMERA_ADD_XML} width={size} height={size} />;
    case iconName.chevronLeft:
      return (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          style={style}
        >
          <Path
            d="M14.7071 18.8492C14.3166 19.2398 13.6834 19.2398 13.2929 18.8492L6.92893 12.4853C6.53841 12.0947 6.53841 11.4616 6.92893 11.0711L7.63604 10.3639L14.7071 17.435C15.0976 17.8255 15.0976 18.4587 14.7071 18.8492V18.8492Z"
            fill={color}
          />
          <Path
            d="M9.05025 11.7782L7.63604 10.3639L13.2929 4.70709C13.6834 4.31657 14.3166 4.31657 14.7071 4.70709V4.70709C15.0976 5.09762 15.0976 5.73078 14.7071 6.12131L9.05025 11.7782Z"
            fill={color}
          />
        </Svg>
      );
    case iconName.chevronRight:
      return (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          style={style}
        >
          <Path
            d="M9.29289 4.70711C9.68342 4.31658 10.3166 4.31658 10.7071 4.70711L17.0711 11.0711C17.4616 11.4616 17.4616 12.0948 17.0711 12.4853L16.364 13.1924L9.29289 6.12132C8.90237 5.7308 8.90237 5.09763 9.29289 4.70711Z"
            fill={color}
          />
          <Path
            d="M14.9497 11.7782L16.364 13.1924L10.7071 18.8492C10.3166 19.2398 9.68342 19.2398 9.29289 18.8492C8.90237 18.4587 8.90237 17.8256 9.29289 17.435L14.9497 11.7782Z"
            fill={color}
          />
        </Svg>
      );
    case iconName.close:
      return (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          style={style}
        >
          <Path
            d="M5.29289 4.70711C5.68342 4.31658 6.31658 4.31658 6.70711 4.70711L13.0711 11.0711C13.4616 11.4616 13.4616 12.0948 13.0711 12.4853L12.364 13.1924L5.29289 6.12132C4.90237 5.7308 4.90237 5.09763 5.29289 4.70711Z"
            fill={color}
          />
          <Path
            d="M10.9497 11.7782L12.364 13.1924L6.70711 18.8492C6.31658 19.2398 5.68342 19.2398 5.29289 18.8492C4.90237 18.4587 4.90237 17.8256 5.29289 17.435L10.9497 11.7782Z"
            fill={color}
          />
          <Path
            d="M19.7071 18.8493C19.3166 19.2398 18.6834 19.2398 18.2929 18.8493L11.9289 12.4853C11.5384 12.0948 11.5384 11.4616 11.9289 11.0711L12.636 10.364L19.7071 17.4351C20.0976 17.8256 20.0976 18.4588 19.7071 18.8493Z"
            fill={color}
          />
          <Path
            d="M14.0503 11.7782L12.636 10.364L18.2929 4.70716C18.6834 4.31663 19.3166 4.31663 19.7071 4.70716C20.0976 5.09768 20.0976 5.73085 19.7071 6.12137L14.0503 11.7782Z"
            fill={color}
          />
        </Svg>
      );
    case iconName.cross:
      return (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          style={style}
        >
          <Path
            d="M3.51473 16.2426C2.34315 17.4142 2.34315 19.3137 3.51473 20.4853C4.6863 21.6568 6.58579 21.6568 7.75737 20.4853L12 16.2426L16.2427 20.4853C17.4142 21.6569 19.3137 21.6569 20.4853 20.4853C21.6569 19.3137 21.6569 17.4142 20.4853 16.2426L16.2426 12L20.4853 7.75735C21.6569 6.58578 21.6569 4.68628 20.4853 3.51471C19.3137 2.34314 17.4142 2.34314 16.2426 3.51471L12 7.75736L7.75737 3.51472C6.5858 2.34315 4.6863 2.34315 3.51473 3.51472C2.34316 4.6863 2.34316 6.58579 3.51473 7.75736L7.75736 12L3.51473 16.2426Z"
            fill={color}
          />
        </Svg>
      );
    case iconName.feedback:
      return (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          style={style}
        >
          <Path
            d="M8.22303 20.7621C8.41417 20.7518 8.60366 20.7979 8.77288 20.8873C11.8893 22.5349 15.7698 22.3981 18.8413 20.1924C23.2525 17.0246 24.3245 10.7891 21.2358 6.26509C18.1471 1.74104 12.0672 0.641562 7.65601 3.80934C4.57908 6.01896 3.1268 9.72116 3.57803 13.294C3.60095 13.4755 3.57989 13.6604 3.50995 13.8294L1.07868 19.7052C0.797199 20.3855 1.30762 21.1331 2.02719 21.0945L8.22303 20.7621Z"
            fill={color}
          />
        </Svg>
      );
    case iconName.info:
      return (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          style={style}
        >
          <Path
            d="M14.1328 1C13.6376 1 13.1626 1.21724 12.8124 1.60393C12.4623 1.99062 12.2655 2.51508 12.2655 3.06194C12.2655 3.6088 12.4623 4.13326 12.8124 4.51995C13.1626 4.90664 13.6376 5.12387 14.1328 5.12387C14.628 5.12387 15.1029 4.90664 15.4531 4.51995C15.8033 4.13326 16 3.6088 16 3.06194C16 2.51508 15.8033 1.99062 15.4531 1.60393C15.1029 1.21724 14.628 1 14.1328 1ZM13.6846 7.55696C12.2033 7.69442 8.15764 11.2547 8.15764 11.2547C7.90868 11.4609 7.98337 11.4471 8.18254 11.832C8.38171 12.2032 8.35682 12.2307 8.59333 12.052C8.84229 11.8733 9.25308 11.5846 9.93773 11.1172C12.5767 9.24775 10.361 13.5641 9.22819 20.8358C8.78005 24.4373 11.7178 22.5816 12.4772 22.0318C13.2241 21.4957 15.2282 19.9698 15.4274 19.8186C15.7012 19.6124 15.5021 19.4475 15.2905 19.1038C15.1411 18.8701 14.9917 19.0351 14.9917 19.0351C14.1826 19.6262 12.7012 20.8633 12.5021 20.0798C12.2655 19.2963 13.7842 13.9215 14.6183 10.2237C14.7552 9.34397 15.1286 7.4195 13.6846 7.55696Z"
            fill={color}
          />
        </Svg>
      );
    case iconName.legal:
      return (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          style={style}
        >
          <Path
            d="M3 3.72076C3 3.29033 3.27543 2.90819 3.68377 2.77208L11.6838 0.105409C11.889 0.0369867 12.111 0.036987 12.3162 0.105409L20.3162 2.77208C20.7246 2.90819 21 3.29033 21 3.72076V14.2037C21 15.3463 20.5114 16.4343 19.6575 17.1934L12.6644 23.4095C12.2855 23.7462 11.7145 23.7462 11.3356 23.4095L4.34254 17.1934C3.48859 16.4343 3 15.3463 3 14.2037V3.72076Z"
            fill={color}
          />
        </Svg>
      );
    case iconName.lock:
      return (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          style={style}
        >
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 5C6 2.79086 7.79086 1 10 1H14C16.2091 1 18 2.79086 18 5V7C20.2091 7 22 8.79086 22 11V19C22 21.2091 20.2091 23 18 23H6C3.79086 23 2 21.2091 2 19V11C2 8.79086 3.79086 7 6 7V5ZM8 7H16V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7ZM13 15.7324C13.5978 15.3866 14 14.7403 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 14.7403 10.4022 15.3866 11 15.7324V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V15.7324Z"
            fill={color}
          />
        </Svg>
      );
    case iconName.more:
      return (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          style={style}
        >
          <Path
            d="M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17Z"
            fill={color}
          />
          <Path
            d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
            fill={color}
          />
          <Path
            d="M12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z"
            fill={color}
          />
        </Svg>
      );
    case iconName.pulse:
      return (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          style={style}
        >
          <Path
            d="M8.42447 11.6996L9.14285 9.54449L11.1868 15.6764C11.4473 16.4579 12.5527 16.4579 12.8131 15.6764L13.9434 12.2857H20.7577C20.6126 12.4673 20.4547 12.6424 20.2842 12.8096L13.3807 19.5818C12.6181 20.3298 11.3818 20.3298 10.6193 19.5818L3.71574 12.8096C3.54523 12.6424 3.38737 12.4673 3.24228 12.2857H7.6113C7.98026 12.2857 8.3078 12.0496 8.42447 11.6996Z"
            fill={color}
          />
          <Path
            d="M2.4079 10.8571H7.19946L8.3297 7.46643C8.59019 6.68496 9.69553 6.68496 9.95602 7.46643L12 13.5984L12.7184 11.4433C12.835 11.0932 13.1626 10.8571 13.5315 10.8571H21.5921C22.4217 8.79276 21.9858 6.35223 20.2842 4.6831C17.9966 2.43897 14.2876 2.43897 12 4.6831C9.71236 2.43897 6.00339 2.43897 3.71575 4.6831C2.01418 6.35223 1.57826 8.79276 2.4079 10.8571Z"
            fill={color}
          />
        </Svg>
      );
    case iconName.settingsActive:
      return (
        <Svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          style={style}
        >
          <Rect
            x="2"
            y="2"
            width="28"
            height="28"
            rx="4"
            fill={colors.blue100}
          />
          <Circle cx="9" cy="16" r="2" fill={colors.blue400} />
          <Circle cx="16" cy="16" r="2" fill={colors.blue400} />
          <Circle cx="23" cy="16" r="2" fill={colors.blue400} />
        </Svg>
      );
    case iconName.settingsInactive:
      return (
        <Svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          style={style}
        >
          <Rect
            x="2"
            y="2"
            width="28"
            height="28"
            rx="4"
            fill={colors.neutral300}
          />
          <Circle cx="9" cy="16" r="2" fill={colors.neutral600} />
          <Circle cx="16" cy="16" r="2" fill={colors.neutral600} />
          <Circle cx="23" cy="16" r="2" fill={colors.neutral600} />
        </Svg>
      );
    default:
      return (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          style={style}
        >
          <Path
            d="M11.3762 5.0994L8 0.666626L4.62382 5.0994L3.75736 4.21528C2.67157 5.32319 2 6.85376 2 8.54437C2 11.9256 4.68629 14.6666 8 14.6666C11.3137 14.6666 14 11.9256 14 8.54437C14 6.85376 13.3284 5.32319 12.2426 4.21528L11.3762 5.0994Z"
            fill={color}
          />
        </Svg>
      );
  }
};

export const iconName = {
  arrowLeft: 'arrowLeft',
  arrowRight: 'arrowRight',
  bug: 'bug',
  cameraAdd: 'cameraAdd',
  check: 'check',
  chevronRight: 'chevronRight',
  chevronLeft: 'chevronLeft',
  close: 'close',
  cross: 'cross',
  feedback: 'feedback',
  info: 'info',
  legal: 'legal',
  lock: 'lock',
  more: 'more',
  pulse: 'pulse',
  settingsActive: 'settingsActive',
  settingsInactive: 'settingsInactive',
};

export default Icon;
