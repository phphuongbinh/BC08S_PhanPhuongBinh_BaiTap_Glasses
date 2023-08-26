import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";

export default class GlassesPage extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1660485651003-39b761a38546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        }}
        className="h-[100vh]"
      >
        <Header />
        <Content />
      </div>
    );
  }
}
