import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Be_Vietnam_Pro } from "next/font/google";

export const metadata: Metadata = {
    title: "Lumy - AI Powered Dental Assistant ",
    description:
        "Lumy is an AI-powered dental assistant that helps you with dental care and oral health.",
};

export const fontBeVietnamPro = Be_Vietnam_Pro({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body
                    className={`${fontBeVietnamPro.className} antialiased dark`}
                >
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
