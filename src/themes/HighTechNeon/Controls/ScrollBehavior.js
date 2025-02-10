// src/utils/scrollBehavior.js

/**
 * scrollBehavior
 *
 * This function scrolls the element matching the provided selector into view
 * using the given parameters. It prevents the default event behavior and,
 * if provided, calls a callback (for example, to close a menu).
 *
 * @param {Event} event - The click event.
 * @param {string} selector - A CSS selector for the target element.
 * @param {boolean} smooth - If true, uses smooth scrolling (default: true).
 * @param {string} block - Vertical alignment (default: "start").
 * @param {string} inline - Horizontal alignment (default: "nearest").
 * @param {Function|null} callback - Optional callback to invoke after scrolling.
 *
 * @returns {boolean} - Returns true if an element was found and scrolled to; otherwise false.
 */
export const scrollBehavior = (
  event,
  selector,
  smooth = true,
  block = "start",
  inline = "nearest",
  callback = null
) => {
  if (!selector) return false;
  try {
    const element = document.querySelector(selector);
    if (element) {
      event.preventDefault();
      element.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block,
        inline,
      });
      if (callback && typeof callback === "function") {
        callback();
      }
      return true;
    }
  } catch (error) {
    console.error("scrollBehavior error:", error);
  }
  return false;
};
