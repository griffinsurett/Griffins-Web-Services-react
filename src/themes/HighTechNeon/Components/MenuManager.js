// src/themes/HighTechNeon/Components/MenuManager.js
export default class MenuManager {
  constructor(siteSettings) {
    this.siteSettings = siteSettings;
    this.menus = this.initializeMenus();
  }

  // Initialize menus from CMS queries
  initializeMenus() {
    const { queries } = this.siteSettings || {};
    if (!queries || !Array.isArray(queries)) {
      console.error("MenuManager: Invalid or missing 'queries' in siteSettings");
      return {};
    }
    return queries.reduce((menus, query) => {
      menus[query.name] = this.processMenuItems(query.items);
      return menus;
    }, {});
  }

  // Recursively process items to ensure a consistent structure
  processMenuItems(items) {
    return items.map((item) => ({
      ...item,
      items: item.items ? this.processMenuItems(item.items) : [],
    }));
  }

  // Return the entire menu array for the specified name
  getMenu(menuName) {
    return this.menus[menuName] || [];
  }

  // Return the menu in hierarchical form (like a nested “Primary” nav)
  getHierarchicalMenu(menuName) {
    const menu = this.getMenu(menuName);
    return menu.map((item) => ({
      ...item,
      isParent: item.items && item.items.length > 0,
    }));
  }

  // Return a "flat" menu (like for social links or footer links).
  getFlatMenu(menuName) {
    const menu = this.getMenu(menuName);
    // If you want to flatten sub-items, you could do so. 
    // For now, just return items with no children.
    return menu.filter((item) => !item.items || item.items.length === 0);
  }
}
