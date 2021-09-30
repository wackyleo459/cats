const fs = require("fs");
const catList = "./list.json";

const utils = {
  readAll: function () {
    fs.readFile("./bin/list.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("original type", typeof data);
      console.log(JSON.parse(data));
    });
  },

  add: function (name, color, info) {
    fs.readFile("./bin/list.json", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      let list = JSON.parse(data);

      list[name] = { color: color };
      if (info.weight) {
        list[name].weight = Number(info.weight);
      }
      if (info.age) {
        list[name].age = Number(info.age);
      }

      fs.writeFile("./bin/list.json", JSON.stringify(list), (err, data1) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("added successfully");
        console.log("catsList", list);
      });
    });
  },

  updateOne: function (cat, data) {
    console.log(`${cat}:`, data);

    fs.readFile("./bin/list.json", (err, data1) => {
      if (err) {
        console.error(err);
        return;
      }
      let list = JSON.parse(data1);
      if (data.weight) {
        list[cat].weight = Number(data.weight);
      }
      if (data.color) {
        list[cat].color = data.color;
      }
      if (data.age) {
        list[cat].age = Number(data.age);
      }

      fs.writeFile("./bin/list.json", JSON.stringify(list), (err, data2) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("updated successfully");
        console.log("catsList", list);
      });
    });
  },

  delete: function () {},
};

module.exports = utils;
