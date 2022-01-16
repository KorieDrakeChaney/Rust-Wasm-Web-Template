use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

#[wasm_bindgen(start)]
pub fn main() {
    alert("Hello World!");
}
