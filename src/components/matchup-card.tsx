import { cn } from "@/lib/cn";
import { TypeLabel } from "./type-label";
import {
  Sword,
  Shield,
  ChevronsDown,
  ChevronDown,
  Dot,
  ChevronUp,
  ChevronsUp,
  Sparkles,
} from "lucide-react";

export const MatchupCard = ({
  type,
  text,
  atkEffectiveness,
  defEffectiveness,
}: {
  type: string;
  text: string;
  atkEffectiveness: number;
  defEffectiveness: number;
}) => {
  const renderEffectivenessIcon = (
    effectiveness: number,
    className: string
  ) => {
    switch (effectiveness) {
      case -2:
        return <ChevronsDown className={className} />;
      case -1:
        return <ChevronDown className={className} />;
      case 0:
        return <Dot className={className} />;
      case 1:
        return <ChevronUp className={className} />;
      case 2:
        return <ChevronsUp className={className} />;
      case 3:
        return <Sparkles className={className} />;
      default:
        console.warn("Invalid input:", effectiveness);
        return null;
    }
  };
  const getEffectivenessColor = (effectiveness: number) => {
    if (effectiveness > 0) {
      return "text-red-400";
    } else if (effectiveness < 0) {
      return "text-blue-400";
    } else {
      return "text-neutral-400";
    }
  };

  const iconSizeClassName = "size-5";
  const atkColor = getEffectivenessColor(atkEffectiveness);
  const defColor = getEffectivenessColor(defEffectiveness);

  return (
    <div
      className={cn(
        "w-50 h-8", // Size
        "flex", // Layout
        "rounded-md overflow-hidden shadow-sm bg-neutral-50" // Style
      )}
    >
      <TypeLabel type={type} className="w-2 h-full" />
      <div className={"px-2 flex items-center justify-between w-full"}>
        <span>{text}</span>
        <div className="flex gap-2">
          <div className="flex">
            <Sword className={cn(iconSizeClassName, atkColor)} />
            {renderEffectivenessIcon(
              atkEffectiveness,
              cn(iconSizeClassName, atkColor)
            )}
          </div>
          <div className="flex">
            <Shield className={cn(iconSizeClassName, defColor)} />
            {renderEffectivenessIcon(
              defEffectiveness,
              cn(iconSizeClassName, defColor)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
