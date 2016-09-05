"use strict"

function getDocWidth () {
  return document.documentElement.clientWidth;
} 

export default {

  small : 600,

  medium : 992,
  
  large : 1200,

  isSmall() {
    return getDocWidth() <= this.small;
  },
  isMedium() {
    const width = getDocWidth();
    return width > this.small && width <= this.medium;
  },
  isLarge() {
    const width = getDocWidth();
    return width > this.medium && width <= this.large;
  },

  isxLarge() {
    return getDocWidth() > this.large;
  },

  setSmall(num) {
    this.small = num;
  },

  setMedium(num) {
    this.medium = num;
  },

  setLarge(num) {
    this.large = num;
  }

}
