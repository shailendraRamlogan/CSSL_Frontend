export default () => ({
  open: false,
  init() {
    console.log("hey coo coo  rolloo")
    // This code will be executed before Alpine
    // initializes the rest of the component.
  },
  toggle() {
    console.log("poopy")
  }
})
