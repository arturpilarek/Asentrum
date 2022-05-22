<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="66"
    height="67"
    viewBox="0 0 66 67"
  >
    <defs>
      <filter
        id="Rectangle_188"
        x="0"
        y="0"
        width="66"
        height="67"
        filterUnits="userSpaceOnUse"
      >
        <feOffset input="SourceAlpha" />
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feFlood flood-opacity="0.2" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g
      id="Component_54_2"
      data-name="Component 54 – 2"
      transform="translate(12 12)"
    >
      <g transform="matrix(1, 0, 0, 1, -12, -12)" filter="url(#Rectangle_188)">
        <rect
          id="Rectangle_188-2"
          data-name="Rectangle 188"
          width="42"
          height="43"
          rx="4"
          transform="translate(12 12)"
          fill="#27b981"
        />
      </g>
      <path
        id="Icon_awesome-plus"
        data-name="Icon awesome-plus"
        d="M21.589,11.384H14.116V3.911A1.661,1.661,0,0,0,12.455,2.25H10.795A1.661,1.661,0,0,0,9.134,3.911v7.473H1.661A1.661,1.661,0,0,0,0,13.045v1.661a1.661,1.661,0,0,0,1.661,1.661H9.134v7.473A1.661,1.661,0,0,0,10.795,25.5h1.661a1.661,1.661,0,0,0,1.661-1.661V16.366h7.473a1.661,1.661,0,0,0,1.661-1.661V13.045A1.661,1.661,0,0,0,21.589,11.384Z"
        transform="translate(9.375 7.625)"
        fill="#fff"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "AddIcon",
};
</script>

<style scoped></style>
