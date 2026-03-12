import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  showValue?: boolean;
  reviewCount?: number;
}

export default function StarRating({ 
  rating, 
  maxRating = 5, 
  size = 16, 
  showValue = false,
  reviewCount 
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {[...Array(maxRating)].map((_, index) => {
          const filled = index < Math.floor(rating);
          const partial = index === Math.floor(rating) && rating % 1 !== 0;
          
          return (
            <div key={index} className="relative">
              <Star
                size={size}
                className={`${
                  filled || partial
                    ? 'text-orange fill-orange'
                    : 'text-gray-400'
                }`}
              />
            </div>
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm text-white/60 ml-1">
          {rating.toFixed(1)}
          {reviewCount !== undefined && ` (${reviewCount} Reviews)`}
        </span>
      )}
    </div>
  );
}
