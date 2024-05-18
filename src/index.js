import VJstree from '@/tree.vue'

const plugin = {
  install(app, options) {
    app.component(VJstree.name, VJstree)
  }
};

export {
  plugin as default,
  VJstree,
};
