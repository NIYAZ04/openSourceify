import { Quote } from "lucide-react";
import { AvatarInitials } from "@/components/ui/avatar-initials";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[350px] glass-card rounded-2xl p-6 border border-border mx-3">
      <Quote className="w-8 h-8 text-primary/30 mb-4" />
      <p className="text-foreground mb-6 leading-relaxed">
        "{testimonial.comment}"
      </p>
      <div className="flex items-center gap-3">
        <AvatarInitials name={testimonial.name} className="w-10 h-10 text-sm" />
        <div>
          <p className="font-medium text-sm">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
