"use client";
import { useState } from "react";

import { Sword, Shield } from "lucide-react";
import { Header } from "../components/header";
import { TypeSelect } from "./_components/type-select";

export default function Page() {
  const [type1, setType1] = useState("grass");
  const [type2, setType2] = useState("grass");
  const [moveType, setMoveType] = useState("grass");

  const options = [
    { value: "none", text: "なし" },
    { value: "normal", text: "ノーマル" },
    { value: "fire", text: "ほのお" },
    { value: "water", text: "みず" },
    { value: "grass", text: "くさ" },
  ];

  return (
    <>
      <Header className="w-full sticky top-0" />
      <main className="flex flex-col gap-5 items-center p-5">
        <p className="w-full text-sm text-center">
          あなたのポケモンのタイプとわざのタイプから、各タイプの相手ポケモンとの相性を調べます。
        </p>

        <div className="w-70 flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <Sword className="size-5" />
            <span className="text-sm w-full">
              このタイプのポケモンを攻撃したときの有利・不利
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <Shield className="size-5" />
            <span className="text-sm w-full">
              このタイプのわざを受けたときの有利・不利
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-60">
          <div className="flex justify-between items-center">
            <span className="text-sm">タイプ 1</span>
            <TypeSelect
              name="type1"
              items={options}
              value={type1}
              onValueChange={setType1}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">タイプ 2</span>
            <TypeSelect
              name="type2"
              items={options}
              value={type2}
              onValueChange={setType2}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">わざのタイプ</span>
            <TypeSelect
              name="moveType"
              items={options}
              value={moveType}
              onValueChange={setMoveType}
            />
          </div>
        </div>
      </main>
    </>
  );
}
