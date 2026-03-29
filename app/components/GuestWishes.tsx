"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { create } from "domain";

interface GuestMessage {
  id: number;
  guest_name: string;
  guest_wish: string;
  created_at?: string;
}

export default function GuestWishes() {
  const [wish, setWish] = useState("");
  const [name, setName] = useState("");
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMessages = useCallback(async () => {
    try {
      const response = await fetch("/api/messages");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();

      if (Array.isArray(data)) {
        setMessages(data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !wish) return;

    setLoading(true);
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          message: wish,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setName("");
        setWish("");
        await fetchMessages();
      }
    } catch (err) {
      console.error("Post error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center gap-3 mt-8">
        <Image
          src="/images/icon4.png"
          alt="Icon Image"
          width={100}
          height={70}
          className="mx-auto rotate-180"
        />
        <p className="font-chenla font-bold text-gold-dark text-2xl text-center leading-relaxed">
          សារជូនពរ
        </p>
        <Image
          src="/images/icon4.png"
          alt="Icon Image"
          width={100}
          height={70}
          className="mx-auto"
        />
      </div>
      <div className="flex flex-col items-center gap-6 w-full max-w-[600px] p-8 border shadow-md rounded-xl bg-cream">
        {/* 2. Input Form */}
        <div className="w-full space-y-4 flex flex-col items-center">
          <Textarea
            placeholder="Name"
            className="min-h-[50px] bg-transparent border shadow-md focus-visible:ring-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Textarea
            placeholder="Write your message here..."
            className="min-h-[100px] bg-transparent border shadow-md focus-visible:ring-1"
            value={wish}
            onChange={(e) => setWish(e.target.value)}
          />
          <button
            className="bg-gold-dark hover:bg-gold text-white p-2 rounded-md"
            onClick={handleSubmit}
          >
            Send message
          </button>
        </div>

        <Separator className="my-2" />

        {/* 3. Messages List (Scrollable) */}
        <ScrollArea className="h-[400px] w-full pr-4">
          <div className="flex flex-col gap-6">
            {messages.map((msg, index) => (
              <div key={msg.id || index} className="flex gap-4 items-start">
                <Avatar className="h-10 w-10 border">
                  <AvatarFallback className="bg-transparent text-gold text-xs">
                    {msg.guest_name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-gold-dark">
                      {msg.guest_name}
                    </h4>
                    <span className="text-[10px] text-muted-foreground uppercase">
                      {msg.created_at &&
                        new Date(msg.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                    </span>
                  </div>
                  <div className="bg-transparent p-3 rounded-2xl rounded-tl-none border border-slate-200">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {msg.guest_wish}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
