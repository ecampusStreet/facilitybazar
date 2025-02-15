import { Link } from "wouter";
import { useState } from "react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <img 
              src="/img/logo.jpg"
              alt="Facility Bazar Logo" 
              className="h-16 w-auto cursor-pointer"
            />
          </Link>

          <NavigationMenu className="relative">
            <NavigationMenuList className="hidden md:flex">
              <NavigationMenuItem>
                <Link href="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[300px] p-2">
                    <div className="flex flex-col space-y-1">
                      <ListItem
                        href="/services/cafeteria"
                        title="F&B Counter"
                        description="Modern Corporate Cafeteria Management Solutions"
                      />
                      <ListItem
                        href="/services/vending/coffee"
                        title="Tea/Coffee Vending"
                        description="Smart Coffee and Tea Vending Solutions"
                      />
                      <ListItem
                        href="/services/vending/snacks"
                        title="Snacks Vending"
                        description="Automated Snacks and Beverages Vending"
                      />
                      <ListItem
                        href="/services/housekeeping"
                        title="B2B/Housekeeping"
                        description="Professional Housekeeping Services"
                      />
                      <ListItem
                        href="/services/stationary"
                        title="Stationary Supply"
                        description="Office Supplies and Cleaning Products"
                      />
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </NavigationMenu>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen 
            ? "max-h-screen opacity-100 visible" 
            : "max-h-0 opacity-0 invisible"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link 
            href="/" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/services/cafeteria" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            F&B Counter
          </Link>
          <Link 
            href="/services/vending/coffee" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Tea/Coffee Vending
          </Link>
          <Link 
            href="/services/vending/snacks" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Snacks Vending
          </Link>
          <Link 
            href="/services/housekeeping" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            B2B/Housekeeping
          </Link>
          <Link 
            href="/services/stationary" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Stationary Supply
          </Link>
          <Link 
            href="/about" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

const ListItem = ({
  className,
  title,
  description,
  href,
  ...props
}: {
  className?: string;
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className={cn(
          "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none mb-1">{title}</div>
        <p className="text-xs leading-snug text-muted-foreground">
          {description}
        </p>
      </Link>
    </NavigationMenuLink>
  );
};