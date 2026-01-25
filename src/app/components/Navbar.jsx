"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import { Shield } from "lucide-react";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = ({
    children,
    className
}) => {
    const ref = useRef(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.div
            ref={ref}
            className={cn("sticky inset-x-0 top-6 z-40 w-full px-4 md:px-0", className)}>
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, { visible })
                    : child)}
        </motion.div>
    );
};

export const NavBody = ({
    children,
    className,
    visible
}) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(12px)" : "blur(0px)",
                boxShadow: visible
                    ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 0 0 1px rgba(255, 255, 255, 0.1)"
                    : "none",
                width: visible ? "60%" : "100%",
                y: visible ? 0 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            style={{
                minWidth: visible ? "600px" : "100%",
            }}
            className={cn(
                "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-6 py-4 lg:flex transition-all duration-300",
                visible && "bg-[#0a0a0a]/50 dark:bg-[#0a0a0a]/50 border border-white/5",
                className
            )}>
            {children}
        </motion.div>
    );
};

export const NavItems = ({
    items,
    className,
    onItemClick,
    activeTab
}) => {
    const [hovered, setHovered] = useState(null);

    const handleClick = (e, item) => {
        e.preventDefault();
        if (onItemClick) {
            onItemClick(item);
        }
    };

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "hidden flex-1 flex-row items-center justify-center space-x-2 text-base font-medium transition duration-200 lg:flex lg:space-x-2",
                className
            )}>
            {items.map((item, idx) => (
                <a
                    onMouseEnter={() => setHovered(idx)}
                    onClick={(e) => handleClick(e, item)}
                    className={cn(
                        "relative px-4 py-2 text-slate-200 hover:text-white transition-colors cursor-pointer",
                        activeTab === item.href.replace('#', '') && "text-white"
                    )}
                    key={`link-${idx}`}
                    href={item.href}>
                    {hovered === idx && (
                        <motion.div
                            layoutId="hovered"
                            className="absolute inset-0 h-full w-full rounded-full bg-white/5" />
                    )}
                    {activeTab === item.href.replace('#', '') && (
                        <motion.div
                            layoutId="active"
                            className="absolute bottom-0 left-0 right-0 h-[2px] w-full bg-indigo-500 rounded-full mx-auto"
                            style={{ width: '50%' }}
                        />
                    )}
                    <span className="relative z-20">{item.label}</span>
                </a>
            ))}
        </motion.div>
    );
};

export const MobileNav = ({
    children,
    className,
    visible
}) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(12px)" : "blur(0px)",
                boxShadow: visible
                    ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                    : "none",
                width: visible ? "95%" : "100%",
                paddingRight: visible ? "12px" : "16px",
                paddingLeft: visible ? "12px" : "16px",
                borderRadius: visible ? "16px" : "0px",
                y: visible ? 0 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "relative z-50 mx-auto flex w-full max-w-7xl flex-col items-center justify-between bg-transparent py-4 lg:hidden",
                visible && "bg-[#0a0a0a]/60 border border-white/5",
                className
            )}>
            {children}
        </motion.div>
    );
};

export const MobileNavHeader = ({
    children,
    className
}) => {
    return (
        <div
            className={cn("flex w-full flex-row items-center justify-between", className)}>
            {children}
        </div>
    );
};

export const MobileNavMenu = ({
    children,
    className,
    isOpen,
    onClose
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={cn(
                        "w-full overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 mt-4 rounded-b-xl",
                        className
                    )}>
                    <div className="flex flex-col gap-4 p-4">
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileNavToggle = ({
    isOpen,
    onClick
}) => {
    return isOpen ? (
        <IconX className="text-white w-6 h-6" onClick={onClick} />
    ) : (
        <IconMenu2 className="text-white w-6 h-6" onClick={onClick} />
    );
};

export const NavbarLogo = () => {
    return (
        <a
            href="#"
            className="relative z-20 flex items-center gap-3 px-2 py-1 cursor-pointer">
            <div className="p-1.5 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20">
                <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
                <span className="font-bold text-white text-lg tracking-tight block leading-none">Smart Ration</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Govt. Welfare</span>
            </div>
        </a>
    );
};

export const NavbarButton = ({
    href,
    as: Tag = "a",
    children,
    className,
    variant = "primary",
    ...props
}) => {
    const baseStyles =
        "px-4 py-2 rounded-lg text-sm font-semibold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

    const variantStyles = {
        primary:
            "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500",
        secondary: "bg-transparent text-slate-300 hover:text-white border border-white/10 hover:bg-white/5",
        dark: "bg-slate-800 text-white border border-slate-700",
    };

    return (
        <Tag
            href={href || undefined}
            className={cn(baseStyles, variantStyles[variant], className)}
            {...props}>
            {children}
        </Tag>
    );
};
