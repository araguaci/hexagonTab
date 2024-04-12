const state = {};

state.current = {};

state.default = {
  grid: {
    size: 100,
    column: 4,
    gap: 100,
    perspective: 90,
    transform: {
      focus: 15,
      refresh: 10,
      rotate: { x: 15, y: 15, z: 0 }
    }
  },
  bookmark: {
    size: 70,
    hover: { size: 0, distance: 15 },
    shadow: { distance: 30 },
    newTab: false,
    edit: false,
    add: false
  },
  toolbar: { position: 'bottom-right', size: 100, accent: { show: true }, add: { show: true }, edit: { show: true } },
  theme: {
    color: { range: { primary: { h: 222, s: 14 } }, contrast: { start: 20, end: 100 }, shades: 14 },
    accent: { hsl: { h: 15, s: 90, l: 50 }, rgb: { r: 242, g: 70, b: 13 }, random: { active: false, style: 'any' } },
    font: {
      display: { name: '', weight: 400, style: 'normal' },
      ui: { name: '', weight: 400, style: 'normal' }
    },
    toolbar: { opacity: 0 },
    style: 'light',
    bookmark: {
      shadow: { opacity: 25, blur: 15, color: { type: 'custom', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } } },
      item: { opacity: 100 }
    },
    background: {
      type: 'gradient',
      color: { hsl: { h: 213, s: 40, l: 65 }, rgb: { r: 130, g: 162, b: 201 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 191, s: 66, l: 62 }, rgb: { r: 94, g: 199, b: 222 } },
        end: { hsl: { h: 243, s: 59, l: 22 }, rgb: { r: 26, g: 23, b: 89 } }
      },
      image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } },
      video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
    },
    radius: 25,
    shadow: 75,
    shade: { opacity: 30, blur: 0 },
    custom: { all: [], edit: false }
  },
  modal: false,
  menu: false,
  autoSuggest: false
};

state.minMax = {
  grid: {
    size: { min: 10, max: 200 },
    column: { min: 1, max: 20 },
    gap: { min: 0, max: 300 },
    perspective: { min: 20, max: 1000 },
    transform: {
      focus: { min: 0, max: 200 },
      rotate: {
        x: { min: -80, max: 80 },
        y: { min: -80, max: 80 },
        z: { min: -80, max: 80 }
      }
    }
  },
  bookmark: {
    hover: {
      size: { min: 0, max: 100 },
      distance: { min: 0, max: 300 }
    },
    shadow: { distance: { min: 0, max: 300 } }
  },
  toolbar: {
    size: { min: 50, max: 500 },
    opacity: { min: 0, max: 100 }
  },
  theme: {
    color: {
      range: { primary: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 } } },
      contrast: { start: { min: 0, max: 100 }, end: { min: 0, max: 100 } }
    },
    accent: {
      hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
      rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } },
    },
    font: {
      display: { weight: { min: 100, max: 900 } },
      ui: { weight: { min: 100, max: 900 } }
    },
    toolbar: { opacity: { min: 0, max: 100 } },
    bookmark: {
      shadow: {
        opacity: { min: 0, max: 100 },
        blur: { min: 0, max: 200 },
        color: {
          hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
          rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
        }
      },
      item: { opacity: { min: 0, max: 100 } }
    },
    background: {
      color: {
        hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
        rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
      },
      gradient: {
        angle: { min: 0, max: 360 },
        start: {
          hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
          rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
        },
        end: {
          hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
          rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
        },
      },
      image: { blur: { min: 0, max: 200 }, grayscale: { min: 0, max: 100 }, scale: { min: 100, max: 400 }, accent: { min: 0, max: 100 }, opacity: { min: 0, max: 100 }, vignette: { opacity: { min: 0, max: 100 }, start: { min: 0, max: 100 }, end: { min: 0, max: 100 } } },
      video: { blur: { min: 0, max: 200 }, grayscale: { min: 0, max: 100 }, scale: { min: 100, max: 400 }, accent: { min: 0, max: 100 }, opacity: { min: 0, max: 100 }, vignette: { opacity: { min: 0, max: 100 }, start: { min: 0, max: 100 }, end: { min: 0, max: 100 } } }
    },
    shade: { opacity: { min: 0, max: 100 }, blur: { min: 0, max: 200 } }
  }
};

state.step = {
  theme: {
    font: {
      display: { weight: 100 },
      ui: { weight: 100 }
    }
  }
};

state.option = {
  toolbar: {
    position: ['top-left', 'top-right', 'bottom-right', 'bottom-left']
  },
  theme: {
    accent: { random: { style: ['any', 'light', 'dark', 'pastel', 'saturated'] } },
    style: ['dark', 'light', 'system'],
    bookmark: { shadow: { color: { type: ['theme', 'custom'] } } },
    background: {
      type: ['theme', 'accent', 'color', 'gradient', 'image', 'video']
    }
  }
};

state.get = {
  current: () => { return state.current; },
  default: () => { return JSON.parse(JSON.stringify(state.default)); },
  minMax: () => { return JSON.parse(JSON.stringify(state.minMax)); },
  step: () => { return JSON.parse(JSON.stringify(state.step)); },
  option: () => { return JSON.parse(JSON.stringify(state.option)); }
};

state.set = {
  restore: {
    setup: (dataToRestore) => {

      state.current.grid = dataToRestore.state.grid;
      state.current.bookmark = dataToRestore.state.bookmark;
      state.current.toolbar = dataToRestore.state.toolbar;
      console.log('setup restored');

    },
    theme: (dataToRestore) => {

      state.current.theme = dataToRestore.state.theme;
      console.log('theme restored');

    }
  },
  default: () => {
    state.current = state.get.default();
    console.log('state set to default');
  }
};

export { state };
