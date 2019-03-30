const constant = {};

const proxyConstant = new Proxy(constant, {
  get(target, key) {
    return target[key];
  },
  set(target, key, value) {
    if (target.hasOwnProperty(key)) {
      throw new Error('duplicate assignment');
    }
    target[key] = value;
  },
  deleteProperty() {
    return false;
  },
  defineProperty() {
    return proxyConstant;
  }
});

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
