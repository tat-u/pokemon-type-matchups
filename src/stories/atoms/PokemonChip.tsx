type Props = { children: string; percentage: number };

export function PokemonChip({ children, percentage }: Props) {
  let backgroundColor = "#666666"; // Fallback background color

  switch (percentage) {
    case 256:
      backgroundColor = "#f54545";
      break;
    case 160:
      backgroundColor = "#e89595";
      break;
    case 100:
      backgroundColor = "#ffffff";
      break;
    case 63:
      backgroundColor = "#a8a8ff";
      break;
    case 39:
      backgroundColor = "#6262fc";
      break;
    case 24:
      backgroundColor = "#4a4aff";
      break;
    default:
      break;
  }

  return (
    <div
      style={{ backgroundColor }}
      className="w-[48px] h-[20px] text-xs/[12px] rounded-full bg-stone-100 shadow-sm flex justify-center items-center text-black font-bold"
    >
      {children}
    </div>
  );
}
