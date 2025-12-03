"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Mail, Calendar, Loader2, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Imię i nazwisko musi mieć co najmniej 2 znaki"),
  email: z.string().email("Nieprawidłowy adres e-mail"),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
  rodo: z.boolean().refine((val) => val === true, {
    message: "Musisz wyrazić zgodę na kontakt",
  }),
  company: z.string().optional(), // Honeypot field
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check
    if (data.company) {
      return; // Ignore submission if honeypot is filled
    }

    setIsSubmitting(true);

    try {
      // Mock API call
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      toast.success("Dziękuję! Odezwę się wkrótce.");
      reset();
    } catch (error) {
      toast.error("Ups, spróbuj ponownie za chwilę.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-6">
            Kontakt
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Masz pytanie lub chcesz zacząć projekt? Napisz – odpisuję zwykle tego samego dnia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="rounded-xl border border-black/10 bg-white/70 backdrop-blur p-6 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}>
                {/* Honeypot field */}
                <input
                  type="text"
                  {...register("company")}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-slate-900">
                    Imię i nazwisko *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    {...register("name")}
                    className="border-neutral-200 rounded-lg px-4 h-12 focus:ring-2 focus:ring-primary/20"
                    placeholder="Twoje imię i nazwisko"
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-red-600 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-slate-900">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="border-neutral-200 rounded-lg px-4 h-12 focus:ring-2 focus:ring-primary/20"
                    placeholder="twoj@email.com"
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-red-600 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-slate-900">
                    Wiadomość *
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    className="min-h-[120px] border-neutral-200 rounded-lg px-4 focus:ring-2 focus:ring-primary/20"
                    placeholder="Opisz swój projekt lub zadaj pytanie..."
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-red-600 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* RODO Checkbox */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="rodo"
                    {...register("rodo")}
                    className="mt-1"
                  />
                  <div className="space-y-1">
                    <Label htmlFor="rodo" className="text-sm text-slate-600 leading-relaxed">
                      Zgadzam się na kontakt w sprawie zapytania.
                    </Label>
                    {errors.rodo && (
                      <p className="text-sm text-red-600">
                        {errors.rodo.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white hover:opacity-90 active:opacity-80 rounded-2xl px-6 py-3 font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Wyślij wiadomość
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Alternative contact methods */}
          <div className="space-y-6">
            <div className="rounded-xl border border-black/10 bg-white/70 backdrop-blur p-6 md:p-8">
              <h3 className="font-semibold text-slate-900 mb-6">Inne sposoby kontaktu</h3>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-500" />
                  <a
                    href="mailto:hello@online-lab.com"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    E-mail
                  </a>
                </div>

                {/* Calendar */}
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <a
                    href="mailto:hello@online-lab.com?subject=Konsultacja%2015%20min"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Umów konsultację
                  </a>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-black/10">
                <p className="text-sm text-slate-500">
                  Zwykle odpowiadamy w 24 godziny.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}