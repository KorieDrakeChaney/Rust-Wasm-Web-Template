const wasm = import('./import.js')
    .catch(e => console.error("Error importing `index.js`:", e));

