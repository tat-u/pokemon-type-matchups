"use client";
import { Header } from "../components/header";
import { Sword, Shield } from "lucide-react";
import { Select } from "../components/select";

export default function Page() {
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
            <Select options={options} defaultValue="normal" name="type1" />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">タイプ 2</span>
            <Select options={options} defaultValue="normal" name="type2" />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">わざのタイプ</span>
            <Select options={options} defaultValue="normal" name="moveType" />
          </div>
        </div>
      </main>
    </>
  );
}
