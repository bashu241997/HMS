class logger {
  static log = (that:any, data:any) => {
    if (window) {
        console.log(that,data)
    }
  };
  static debug = (that:any, data:any) => {
    if (window) {
        console.log(that,data)
    }
  };
  static error = (that:any, data:any) => {
    if (window) {
        console.log(that,data)
    }
  };
}
