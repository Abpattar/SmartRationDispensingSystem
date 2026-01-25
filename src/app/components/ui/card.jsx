"use client";
import * as React from "react";
import { cn } from "./utils";
import { motion } from "motion/react";
import { useState } from "react";

function Card({ className, ...props }) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <motion.div
            data-slot="card"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            animate={{
                scale: isHovering ? 1.02 : 1,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
                boxShadow: isHovering
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    : "0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05)",
            }}
            className={cn(
                "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border relative overflow-hidden transition-shadow duration-200",
                className
            )}
            {...props}
        >
            <Noise />
            {props.children}
        </motion.div>
    );
}

const Noise = () => {
    return (
        <div
            className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)] pointer-events-none"
            style={{
                backgroundImage: "url(/noise.webp)",
                backgroundSize: "30%",
            }}
        ></div>
    );
};
function CardHeader({ className, ...props }) {
    return (<div data-slot="card-header" className={cn("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className)} {...props} />);
}
function CardTitle({ className, ...props }) {
    return (<h4 data-slot="card-title" className={cn("leading-none", className)} {...props} />);
}
function CardDescription({ className, ...props }) {
    return (<p data-slot="card-description" className={cn("text-muted-foreground", className)} {...props} />);
}
function CardAction({ className, ...props }) {
    return (<div data-slot="card-action" className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)} {...props} />);
}
function CardContent({ className, ...props }) {
    return (<div data-slot="card-content" className={cn("px-6 [&:last-child]:pb-6", className)} {...props} />);
}
function CardFooter({ className, ...props }) {
    return (<div data-slot="card-footer" className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)} {...props} />);
}
export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent, };
