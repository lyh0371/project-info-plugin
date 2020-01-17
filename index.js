const path = require("path");
const fs = require("fs");
class ProjectInfor {
  constructor(options) {
    this.options = options || {};
  }
  getTime() {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    var date = myDate.getDate();
    var h = myDate.getHours(); //获取当前小时数(0-23)
    var m = myDate.getMinutes(); //获取当前分钟数(0-59)
    var s = myDate.getSeconds();
    //获取当前时间
    var now =
      year +
      "-" +
      conver(month) +
      "-" +
      conver(date) +
      " " +
      conver(h) +
      ":" +
      conver(m) +
      ":" +
      conver(s);
    return now;
    //日期时间处理
    function conver(s) {
      return s < 10 ? "0" + s : s;
    }
  }
  apply(compiler) {
    var _this = this;
    compiler.plugin("emit", function (compilation, callback) {
      let packInfo = {};
      const pac = path.join(__dirname, "../../package.json");
      let paczFs = JSON.parse(fs.readFileSync(pac));
      const {
        name = paczFs.name,
        version = paczFs.version,
        description = paczFs.description
      } = _this.options;
      packInfo.name = name;
      packInfo.version = version;
      packInfo.time = _this.getTime();
      packInfo.description = description;
      packInfo = JSON.stringify(packInfo);
      compilation.assets["packInfo.md"] = {
        source: function () {
          return packInfo;
        },
        size: function () {
          return packInfo.length;
        }
      };

      callback();
    });
  }
}

module.exports = ProjectInfor;
