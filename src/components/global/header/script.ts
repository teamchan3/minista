import Hoge from "./scripts/hoge"

class Header{
  constructor() {
    console.log("Header mounted")
    new Hoge()
  }
}
document.addEventListener("DOMContentLoaded", () => {
  new Header()
})