import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "./ui/button";
import { Zap, X } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

interface HeroProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  onOpenModal: () => void;
}

export function Hero({ modalOpen, setModalOpen, onOpenModal }: HeroProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const handleJoinEarlyAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !APPS_SCRIPT_URL) return;

    setIsSubmitting(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      setEmail("");
      setModalOpen(false);
    } catch (err) {
      console.error("Failed to submit:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const modal = modalOpen && createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Get early access"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close modal"
        onClick={() => setModalOpen(false)}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          cursor: "pointer",
        }}
      />
      {/* Modal content */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "42rem",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          borderRadius: "var(--radius)",
          border: "1px solid var(--border)",
          padding: "2rem",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setModalOpen(false)}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            cursor: "pointer",
            padding: "0.25rem",
            opacity: 0.7,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
        >
          <X className="size-5" />
        </button>
        <h2 className="text-2xl font-semibold mb-2" style={{ paddingRight: "2.5rem" }}>
          Get Early Access
        </h2>
        <p
          className="text-muted-foreground mb-4"
          style={{ fontSize: "16px", paddingRight: "2.5rem" }}
        >
          We&apos;re onboarding a small group of marketers for our beta.
        </p>
        <ul className="space-y-2 py-4">
          <li className="flex items-center gap-2 text-base">
            <span className="text-green-600">✔</span> Free beta access
          </li>
          <li className="flex items-center gap-2 text-base">
            <span className="text-green-600">✔</span> Lifetime discount after launch
          </li>
          <li className="flex items-center gap-2 text-base">
            <span className="text-green-600">✔</span> Early access to new features
          </li>
          <li className="flex items-center gap-2 text-base">
            <span className="text-green-600">✔</span> Priority support
          </li>
        </ul>
        <p className="text-base text-muted-foreground py-2 mb-2">
          <b>🚀 97+ fellow marketers have already joined the beta list.</b>
        </p>
        <form onSubmit={handleJoinEarlyAccess} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="beta-email">Email</Label>
            <Input
              id="beta-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 px-4 py-3"
              style={{ fontSize: "18px" }}
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full cursor-pointer"
            style={{ fontSize: "18px", paddingTop: "1rem", paddingBottom: "1rem", minHeight: "3.5rem", cursor: isSubmitting ? "wait" : "pointer" }}
          >
            {isSubmitting ? "Joining..." : "Join Early Access"}
          </Button>
        </form>
      </div>
    </div>,
    document.body
  );

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
            Discover your winning Meta Ads in less than a minute

             
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect your ad account and instantly see wasted spend, funnel drop-offs, and scaling opportunities.
            </p>
            
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 cursor-pointer"
              style={{ cursor: "pointer" }}
              onClick={onOpenModal}
            >
              <Zap className="w-5 h-5 mr-2" />
              Analyze My Ads
            </Button>
            
          </div>

          
        </div>
      </div>

      {modal}
      <div
        className="mt-16 flex justify-center px-4"
        style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto" }}
      >
        <img
          src="/hero-image.png"
          alt="Dashboard image"
          className="block w-full h-auto"
          style={{ maxWidth: "100%" }}
        />
      </div>
    </section>
  );
}