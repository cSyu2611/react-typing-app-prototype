import React, { Component } from "react";

import "../styles/typing.css";

class TypingDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typingArr: [
        "jugemu",
        "jugemu",
        "gokounosurikire",
        "kaijarisuigyono",
        "suigyoumatsu",
        "fuuraimatsu",
        "unraimatsu",
        "kuunerutokoroni",
        "sumutokoro",
        "yaburakoujino",
        "burakouji",
        "paipo",
        "paipo",
        "paipono",
        "shu-ringann",
        "shu-ringannno",
        "gu-rindai",
        "gu-rindaino",
        "ponpokopi-no",
        "ponpokonano",
        "choukyuumeino",
        "chousuke"
      ],
      currentIdx: 0,
      typo: false,
      typoCount: 0,
      startFlag: false,
      endFlag: false,
      time: 0
    };
  }

  _onKeyDown = e => {
    // 終了していなければ
    if (!this.state.startFlag) {
      this.setState({
        startFlag: true
      });
      let start = new Date().getTime();
      this.timer = setInterval(() => {
        this.setState({
          time: new Date().getTime() - start
        });
      }, 10);
    }
    if (!this.state.endFlag) {
      // タイポの判定
      if (e.key === this.state.typingArr.join(" ")[this.state.currentIdx]) {
        this.setState({
          typo: false,
          currentIdx: this.state.currentIdx + 1
        });
      } else {
        this.setState({
          typo: true,
          typoCount: this.state.typoCount + 1
        });
      }
      // 終了判定
      if (this.state.currentIdx + 1 >= this.state.typingArr.join(" ").length) {
        this.setState({
          endFlag: true
        });
        clearInterval(this.timer);
      }
    }
  };

  _onResetClick = () => {
    this.setState({
      currentIdx: 0,
      typo: false,
      typoCount: 0,
      startFlag: false,
      endFlag: false,
      time: 0
    });
    clearInterval(this.timer);
  };

  render() {
    return (
      <div>
        <div
          className="typing-div"
          id="typing"
          onKeyDown={e => this._onKeyDown(e)}
          tabIndex={0}
        >
          <span className="done-font">
            {this.state.typingArr.join(" ").slice(0, this.state.currentIdx)}
          </span>
          <span
            className={this.state.typo ? "current-font-typo" : "current-font"}
          >
            {this.state.typingArr.join(" ")[this.state.currentIdx]}
          </span>
          <span className="yet-font">
            {this.state.typingArr
              .join(" ")
              .slice(
                this.state.currentIdx + 1,
                this.state.typingArr.join(" ").length
              )}
          </span>
        </div>
        {/* 結果ブロック */}
        <div className="result-container">
          <button onClick={() => this._onResetClick()}>リセット</button>
          <ul>
            <div>タイポ回数：{this.state.typoCount}</div>
            <div ref={ref => (this.time = ref)}>
              タイム：{this.state.time / 1000}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default TypingDiv;
