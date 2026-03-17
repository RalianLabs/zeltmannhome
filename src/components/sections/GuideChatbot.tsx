"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useState, useRef, useEffect, useMemo, FormEvent } from "react";

export default function GuideChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/chat" }),
    []
  );

  const { messages, sendMessage, status, error } = useChat({
    id: "zeltmann-guide",
    transport,
    messages: [
      {
        id: "welcome",
        role: "assistant" as const,
        parts: [
          {
            type: "text" as const,
            text: "¡Hola! Soy tu asistente virtual de ZeltmannHome. Pregúntame sobre el apartamento, Nerja, restaurantes, playas, excursiones... ¡Estoy aquí para ayudarte!",
          },
        ],
      },
    ] satisfies UIMessage[],
  });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text || isLoading) return;
    setInputValue("");
    await sendMessage({ text });
  };

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-navy text-white shadow-lg hover:bg-navy/90 transition-all duration-300 flex items-center justify-center"
        aria-label={isOpen ? "Cerrar asistente" : "Abrir asistente"}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div
          className="fixed bottom-40 right-6 z-40 w-[350px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-xl border border-sand/20 flex flex-col overflow-hidden"
          style={{ height: "480px" }}
        >
          {/* Header */}
          <div className="bg-navy text-white px-5 py-4 shrink-0">
            <h3 className="font-serif font-bold text-sm">Asistente ZeltmannHome</h3>
            <p className="text-white/60 text-xs mt-0.5">Pregunta sobre tu estancia en Nerja</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${(msg.role as string) === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    (msg.role as string) === "user"
                      ? "bg-navy text-white rounded-br-md"
                      : "bg-cream text-navy rounded-bl-md"
                  }`}
                >
                  {msg.parts
                    ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
                    .map((p, i) => <span key={i}>{p.text}</span>)}
                </div>
              </div>
            ))}
            {isLoading && (messages[messages.length - 1]?.role as string) === "user" && (
              <div className="flex justify-start">
                <div className="bg-cream text-navy rounded-2xl rounded-bl-md px-4 py-2.5 text-sm">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
                    <span className="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
                  </span>
                </div>
              </div>
            )}
            {error && (
              <div className="text-center text-xs text-red-500 py-2">
                Error al conectar. Inténtalo de nuevo.
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="shrink-0 border-t border-sand/15 px-4 py-3 flex gap-2">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="flex-1 text-sm bg-cream/50 border border-sand/20 rounded-full px-4 py-2.5 text-navy placeholder:text-muted/50 focus:outline-none focus:border-sand/50"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-navy/90 transition-colors disabled:opacity-40"
              aria-label="Enviar"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
