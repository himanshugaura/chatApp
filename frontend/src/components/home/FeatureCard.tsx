import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  bgColor = "bg-indigo-500",
}: FeatureCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 p-8 flex flex-col justify-center items-center">
      <div className={`flex items-center justify-center h-12 w-12 rounded-md ${bgColor} text-white mb-4`}>
        <Icon className="h-6 w-6 transform transition-all duration-1000 ease-in-out group-hover:rotate-[360deg]" />
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2 text-center">{description}</p>
    </div>
  );
}
