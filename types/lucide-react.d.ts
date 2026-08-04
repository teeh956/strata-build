declare module "lucide-react" {
  import type { ComponentPropsWithoutRef, SVGProps } from "react";

  export type LucideProps = SVGProps<SVGSVGElement> & ComponentPropsWithoutRef<"svg">;

  export function ArrowRight(props: LucideProps): JSX.Element;
}
