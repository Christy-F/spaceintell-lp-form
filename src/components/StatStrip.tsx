import React from "react";

// StatStrip is now integrated directly into Hero's bottom stat row.
// This component is kept as a thin section divider.
export default function StatStrip() {
  return <div className="h-px bg-gradient-to-r from-transparent via-line-mid to-transparent" />;
}
