import React, { useState } from "react";
import "./styles.css";

const InputCheckBox = () => {
  //現在選択されているチェックボックスの状態管理変数とそれを管理する関数
  //初期値は空の配列。そのため配列メソッドを用いて処理をうんたら
  const [checkedValues, setCheckedValues] = useState([]);

  //onChangeイベントハンドラー配下につける関数
  const handleChange = (e) => {
    //checkedValuesにonChangeした値が含まれている場合
    if (checkedValues.includes(e.target.value)) {
      setCheckedValues(
        checkedValues.filter((checkedValue) => checkedValue !== e.target.value)
      );
    } else {
      setCheckedValues([...checkedValues, e.target.value]);
    }
  };

  return (
    <div className="App">
      <p>
        現在選択されている値:<b>{checkedValues.join("、")}</b>
      </p>

      <label>
        <input
          type="checkbox"
          value="マウス"
          onChange={handleChange}
          checked={checkedValues.includes("マウス")}
        />
        マウス
      </label>

      <label>
        <input
          type="checkbox"
          value="モニター"
          onChange={handleChange}
          checked={checkedValues.includes("モニター")}
        />
        モニター
      </label>

      <label>
        <input
          type="checkbox"
          value="キーボード"
          onChange={handleChange}
          checked={checkedValues.includes("キーボード")}
        />
        キーボード
      </label>
    </div>
  );
};

export default function App() {
  return <InputCheckBox />;
}
