import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Cake } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  const isMenu = location.pathname === "/menu";
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/70 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/menu" className="flex items-center gap-2 text-primary-deep font-semibold text-lg">
          <Cake className="h-5 w-5" />
          <span>Birthday</span>
        </Link>
        {!isMenu && (
          <Button asChild variant="ghost" size="sm" className="rounded-full">
            <Link to="/menu">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Menu
            </Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
