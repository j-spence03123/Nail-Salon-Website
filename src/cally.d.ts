import type { HTMLAttributes } from "react";

declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            "calendar-date": HTMLAttributes<HTMLElement> & {
                locale?: string;
                value?: string;
                min?: string;
                onchange?: (event: Event) => void;
            };
            "calendar-month": HTMLAttributes<HTMLElement>;
        }
    }
}