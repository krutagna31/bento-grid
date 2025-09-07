import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: React.ComponentProps<"div">) {
  return <div className={cn(className, "rounded-md p-6")}>{children}</div>;
}

export { Card };
