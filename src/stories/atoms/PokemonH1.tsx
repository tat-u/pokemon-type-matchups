type Props = { children: string };

export function PokemonH1({ children }: Props) {
  return (
    <div className="my-[16px] border-t-2 border-b-2 border-stone-200 py-[12px]">
      <h1 className="text-xl/[20px] font-bold">{children}</h1>
    </div>
  );
}
