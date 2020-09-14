// libraries
import React, { Component } from "react";
// import { connect } from "react-redux";

// actions
// import {
//   updateCurrentTime,
//   updateTypoCount,
//   resetState
// } from "../store/actions";

// css
import "../styles/typing.css";

class TypingDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 今後ランダムな単語の配列からタイピング文を作りたいので，配列にしている．
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
    // first call
    if (!this.state.startFlag) {
      this.setState({
        startFlag: true // 開始フラグ true
      });
      const start = new Date().getTime();
      // タイマーセット
      this.timer = setInterval(() => {
        this.setState({
          time: new Date().getTime() - start
        });
      }, 10);
    }

    // 終了判定が入るまで
    if (!this.state.endFlag) {
      // 押されたキーと現在の文字が一致したら
      if (e.key === this.state.typingArr.join(" ")[this.state.currentIdx]) {
        this.setState({
          typo: false, // タイポなし
          currentIdx: this.state.currentIdx + 1 // 次のidxへ
        });
      }
      // タイポしたら
      else {
        this.setState({
          typo: true, // タイポ true
          typoCount: this.state.typoCount + 1 // タイポ回数 + 1
        });
      }

      // 最終文字の入力が終了したら
      if (this.state.currentIdx + 1 >= this.state.typingArr.join(" ").length) {
        this.setState({
          endFlag: true // 終了フラグ true
        });
        clearInterval(this.timer); // タイマー停止
      }
    }
  };

  // リセットボタンクリック時
  _onResetClick = () => {
    // state リセット
    this.setState({
      currentIdx: 0,
      typo: false,
      typoCount: 0,
      startFlag: false,
      endFlag: false,
      time: 0
    });
    // タイマー停止
    clearInterval(this.timer);
  };

  render() {
    return (
      <>
        <div
          className="typing-div"
          id="typing"
          onKeyDown={e => this._onKeyDown(e)}
          tabIndex={0}
        >
          {/* 文字列先頭から現在の文字手前まで */}
          <span className="done-font">
            {this.state.typingArr.join(" ").slice(0, this.state.currentIdx)}
          </span>

          {/* 現在の文字 */}
          <span
            className={this.state.typo ? "current-font-typo" : "current-font"}
          >
            {this.state.typingArr.join(" ")[this.state.currentIdx]}
          </span>

          {/* 現在の文字以降の文字列 */}
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
      </>
    );
  }
}

// const sharedState = state => ({
//   currentTime: state.currentTimeState.currentTime,
//   typoCount: state.typoCountState.typoCount
// });

// const actions = dispatch => ({
//   updateCurrentTime: currentTime => dispatch(updateCurrentTime(currentTime)),
//   updateTypoCount: typoCount => dispatch(updateTypoCount(typoCount)),
//   resetState: () => dispatch(resetState())
// });

// export default connect(sharedState, actions)(TypingDiv);

export default TypingDiv;
