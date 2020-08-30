export const autosize = (e) => {
  let el = e.target;
  setTimeout(() => {
    el.style.cssText = "height:auto; padding:0";
    el.style.cssText = "height:" + el.scrollHeight + "px";
  }, 0);
};

export const size = (elem) => {
  let el = elem.current;
  el.style.cssText = "height:" + el.scrollHeight + "px";
};
