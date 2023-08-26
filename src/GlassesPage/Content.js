import React, { Component } from "react";
import { glassesData } from "./data";

export default class Content extends Component {
  state = {
    name: "",
    url: "",
    desc: "",
  };

  handleClickGlasses = (name, url, desc) => {
    this.setState({
      name: name,
      url: url,
      desc: desc,
    });
    console.log(this.state.name);
  };
  renderListGlasses = () => {
    return glassesData.map((el, index) => {
      let { url, name, desc } = el;
      return (
        <div
          key={index}
          className="border p-2 hover:scale-105 duration-300 cursor-pointer"
          onClick={() => {
            console.log(url);
            this.handleClickGlasses(name, url, desc);
          }}
        >
          <img src={url} alt="" className="w-full" />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container max-w-5xl mx-auto py-10 flex justify-center items-center flex-col">
        <div className="relative w-[200px] mb-12">
          <img src="./glassesImage/model.jpg" alt="" />
          <img
            src={this.state.url}
            alt={this.state.name}
            className="absolute translate-x-[50px] translate-y-[-180px] w-[100px] opacity-80"
          />
          <div
            className={`absolute translate-y-[-80px] bg-cyan-600 w-full h-[80px] opacity-80 text-left overflow-hidden pt-1 pl-1 ${
              this.state.name ? "block" : "hidden"
            }`}
          >
            <h2 className="font-semibold">{this.state.name}</h2>
            <p className=" text-white">{this.state.desc}</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg grid grid-cols-6 gap-5">
          {this.renderListGlasses()}
        </div>
      </div>
    );
  }
}
