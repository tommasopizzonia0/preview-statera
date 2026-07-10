import { Activity, Apple, Calculator, HeartPulse, Leaf, Ruler, Scale, UtensilsCrossed } from "lucide-react";

export const NutritionBackdrop = () => {
  const icons = [Ruler, Apple, Scale, Leaf, UtensilsCrossed, HeartPulse, Activity, Calculator];

  return (
    <div aria-hidden="true" className="nutrition-backdrop">
      {icons.map((Icon, index) => (
        <span key={index} className={`nutrition-float nutrition-float-${index + 1}`}>
          <Icon className="h-full w-full" strokeWidth={1.25} />
        </span>
      ))}
    </div>
  );
};
