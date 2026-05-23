import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

type AnimatedRoutesProps = {
  children: ReactNode;
};

export function AnimatedRoutes({ children }: AnimatedRoutesProps) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="screen-enter h-full w-full">
      {children}
    </div>
  );
}
