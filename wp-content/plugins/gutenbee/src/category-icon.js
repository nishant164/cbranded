import { SVG } from 'wp.components';
import { updateCategory } from 'wp.blocks';

const GutenBeeIcon = () => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    viewBox="0 0 85 42.51996"
    style={{ marginLeft: '6px' }}
  >
    <path d="M64 0H21A21.062 21.062 0 0 0 0 21v.52a21.062 21.062 0 0 0 21 21h43a21.062 21.062 0 0 0 21-21V21A21.062 21.062 0 0 0 64 0zM21.21 38.52a17.26 17.26 0 1 1 17.21-17.26 17.253 17.253 0 0 1-17.21 17.26zm14.17 0a15.993 15.993 0 0 1-1.7-.09 21.235 21.235 0 0 0 0-34.34 15.993 15.993 0 0 1 1.7-.09 17.26 17.26 0 0 1 0 34.52zm14.17 0a15.993 15.993 0 0 1-1.7-.09 21.236 21.236 0 0 0 0-34.34 15.993 15.993 0 0 1 1.7-.09 17.26 17.26 0 0 1 0 34.52zm31.45-17a17.024 17.024 0 0 1-17 17h-2.09a21.242 21.242 0 0 0 0-34.52H64a17.024 17.024 0 0 1 17 17z" />
    <ellipse cx="21.21" cy="21.26" rx="17.21" ry="17.26" fill="#fff" />
    <path
      d="M52.587 21.265a17.253 17.253 0 0 0-17.21-17.26 15.992 15.992 0 0 0-1.7.09 21.203 21.203 0 0 1 8.74 17.17h10.17zM80.702 24.614a16.964 16.964 0 0 0 .295-3.09v-.52a17.024 17.024 0 0 0-17-17h-2.09a21.22 21.22 0 0 1 8.86 17.26v.001h1.27a12.927 12.927 0 0 1 8.665 3.35zM66.767 21.265a17.255 17.255 0 0 0-17.22-17.26 15.993 15.993 0 0 0-1.7.09 21.203 21.203 0 0 1 8.74 17.17h10.18z"
      fill="#ffda00"
    />
    <path
      d="M33.677 38.435a15.995 15.995 0 0 0 1.7.09 17.252 17.252 0 0 0 17.21-17.26h-10.17a21.217 21.217 0 0 1-8.74 17.17zM61.907 38.525h2.09a17.024 17.024 0 0 0 16.705-13.91 12.927 12.927 0 0 0-8.665-3.35h-1.27a21.22 21.22 0 0 1-8.86 17.26zM47.847 38.435a15.996 15.996 0 0 0 1.7.09 17.255 17.255 0 0 0 17.22-17.26h-10.18a21.217 21.217 0 0 1-8.74 17.17z"
      fill="#ffba1f"
    />
    <path d="M28.344 19.264h-5.087v-5.086h-4v5.086h-5.086v4h5.086v5.087h4v-5.087h5.087v-4z" />
  </SVG>
);

updateCategory('gutenbee', { icon: GutenBeeIcon });