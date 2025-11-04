import React from "react";

/**
 * Reusable Card component
 * Props:
 * - title: string (optional)
 * - subtitle: string (optional)
 * - image: url string (optional)
 * - children: node (body content)
 * - actions: node (buttons / links)
 * - className: additional tailwind classes
 */
const Card = ({
  title,
  subtitle,
  image,
  children,
  actions,
  className = "",
  badge,
}) => {
  return (
    <div
      className={
        "bg-white rounded-lg shadow-sm border overflow-hidden flex flex-col " +
        className
      }
      role="article"
    >
      {image && (
        <div className="w-full h-40 bg-gray-100 overflow-hidden">
          <img
            src={image}
            alt={title || "card image"}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-4 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            {title && <h3 className="text-lg font-semibold text-gray-800">{title}</h3>}
            {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          </div>
          {badge && (
            <div className="ml-2 text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">{badge}</div>
          )}
        </div>

        {children && <div className="mt-3 text-gray-700 text-sm">{children}</div>}
      </div>

      {actions && <div className="px-4 pb-4 pt-2 border-t bg-gray-50">{actions}</div>}
    </div>
  );
};

export default Card;
