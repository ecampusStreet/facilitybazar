import { Link } from "wouter";
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

export default function Header() {
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

          <NavigationMenu>
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
                <NavigationMenuContent className="z-[100]">
                  <div className="w-[600px] p-4">
                    <div className="grid grid-cols-2 gap-4">
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
            <button className="md:hidden p-2">
              <span className="sr-only">Open main menu</span>
              {/* Add your mobile menu icon here */}
            </button>
          </NavigationMenu>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="md:hidden">
        {/* Add your mobile menu content here */}
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
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {description}
        </p>
      </Link>
    </NavigationMenuLink>
  );
};