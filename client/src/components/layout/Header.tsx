import { Link } from "wouter";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <div className="wrap">
      <header id="header" className="bg-white border-b">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <img 
                src="/img/logo.jpg"
                alt="Facility Bazar Logo" 
                className="h-20 w-auto"
              />
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/">
                    <NavigationMenuLink>Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about">
                    <NavigationMenuLink>About Us</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink href="/services/f-and-b">
                          Food & Beverages-Tuck Shop
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="/services/vending">
                          Smart Vending Solutions
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="/services/housekeeping">
                          House Keeping & Stationary Supply
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="/services/b2b">
                          B2B Supply
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="/services/facility-management">
                          Facility Management for Corporates
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/partners">
                    <NavigationMenuLink>Our Partners</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/blogs">
                    <NavigationMenuLink>FB Blogs</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact">
                    <NavigationMenuLink>Contact Us</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>
    </div>
  );
}
