import React, { Component } from "react";

import "../styles/description.css";

class PageDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="description-container">
        <b className="page-title">タイピングアプリのプロトタイプ</b>
        <br />
        寿限無寿限無 五劫の擦り切れ 海砂利水魚の 水行末 雲来末 風来末
        <br />
        食う寝る処に 住む処 藪ら柑子の 藪柑子
        <br />
        パイポ パイポ パイポの シューリンガン
        <br />
        シューリンガンの グーリンダイ
        <br />
        グーリンダイの ポンポコピーの ポンポコナの
        <br />
        長久命の 長助
      </div>
    );
  }
}

export default PageDescription;
