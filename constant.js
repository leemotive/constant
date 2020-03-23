const constant = {};

const handler = {
  get(target, key) {
    const value = target[key];
    if (typeof value === 'object' && value !== null) {
      return new Proxy(value, handler);
    }
    return value;
  },
  set(target, key, value) {
    if (target.hasOwnProperty(key)) {
      return false;
    }
    target[key] = value;
    return true;
  },
  deleteProperty() {
    return false;
  },
  defineProperty() {
    return false;
  },
};

const proxyConstant = new Proxy(constant, handler);

export default proxyConstant;

export function parse(o) {
  if (typeof o !== 'object') {
    return;
  }
  Object.entries(o).forEach(([key, value]) => {
    try {
      proxyConstant[key] = value;
    } catch (e) {}
  });
}
