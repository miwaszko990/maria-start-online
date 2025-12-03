"use client";

import { useState } from "react";
import { Check } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  siteUrl: string;
  description: string;
  assetsUrl: string;
  budget: string;
  urgency: string;
  consent: boolean;
}

export default function FeatureRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    siteUrl: "",
    description: "",
    assetsUrl: "",
    budget: "",
    urgency: "",
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const validateForm = (): string[] => {
    const validationErrors: string[] = [];
    
    if (!formData.name.trim()) validationErrors.push("Imię i nazwisko jest wymagane");
    if (!formData.email.trim()) {
      validationErrors.push("E-mail jest wymagany");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.push("Nieprawidłowy format e-mail");
    }
    if (!formData.description.trim()) {
      validationErrors.push("Opis jest wymagany");
    } else if (formData.description.trim().length < 20) {
      validationErrors.push("Opis musi mieć co najmniej 20 znaków");
    }
    if (!formData.budget) validationErrors.push("Proszę wybrać budżet");
    if (!formData.urgency) validationErrors.push("Proszę wybrać pilność");
    if (!formData.consent) validationErrors.push("Musisz wyrazić zgodę na kontakt");
    
    return validationErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/feature-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      setErrors(["Wystąpił błąd. Spróbuj ponownie lub napisz bezpośrednio na hello@online-lab.pl"]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-6">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <Check className="w-6 h-6 text-green-600" />
        </div>
        <h4 className="text-base font-medium text-gray-900 mb-2">Dziękuję!</h4>
        <p className="text-sm text-gray-600">Wrócę z wyceną w 24 h.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
          <ul className="text-sm text-red-700 space-y-1">
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
          Imię i nazwisko *
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className="w-full h-10 px-3 text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-colors"
          placeholder="Jan Kowalski"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
          E-mail *
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className="w-full h-10 px-3 text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-colors"
          placeholder="jan@firma.pl"
          required
        />
      </div>

      {/* Site URL */}
      <div>
        <label htmlFor="siteUrl" className="block text-sm font-medium text-gray-900 mb-1">
          Link do strony
        </label>
        <input
          id="siteUrl"
          type="url"
          value={formData.siteUrl}
          onChange={(e) => handleInputChange('siteUrl', e.target.value)}
          className="w-full h-10 px-3 text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-colors"
          placeholder="https://mojsklep.pl"
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-900 mb-1">
          Opis *
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-colors resize-none"
          placeholder="Napisz, co chcesz dodać lub poprawić…"
          rows={4}
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Minimum 20 znaków ({formData.description.length}/20)
        </p>
      </div>

      {/* Assets URL */}
      <div>
        <label htmlFor="assetsUrl" className="block text-sm font-medium text-gray-900 mb-1">
          Link do screenów
        </label>
        <input
          id="assetsUrl"
          type="url"
          value={formData.assetsUrl}
          onChange={(e) => handleInputChange('assetsUrl', e.target.value)}
          className="w-full h-10 px-3 text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-colors"
          placeholder="https://drive.google.com/..."
        />
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-gray-900 mb-1">
          Budżet *
        </label>
        <select
          id="budget"
          value={formData.budget}
          onChange={(e) => handleInputChange('budget', e.target.value)}
          className="w-full h-10 px-3 text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-colors"
          required
        >
          <option value="">Wybierz budżet</option>
          <option value="500–700">500–700 zł</option>
          <option value="700–1000">700–1000 zł</option>
          <option value="1000+">1000+ zł</option>
        </select>
      </div>

      {/* Urgency */}
      <div>
        <label htmlFor="urgency" className="block text-sm font-medium text-gray-900 mb-1">
          Pilność *
        </label>
        <select
          id="urgency"
          value={formData.urgency}
          onChange={(e) => handleInputChange('urgency', e.target.value)}
          className="w-full h-10 px-3 text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-colors"
          required
        >
          <option value="">Wybierz pilność</option>
          <option value="na już">na już</option>
          <option value="w tym tygodniu">w tym tygodniu</option>
          <option value="w tym miesiącu">w tym miesiącu</option>
        </select>
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          checked={formData.consent}
          onChange={(e) => handleInputChange('consent', e.target.checked)}
          className="mt-1 w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-2 focus:ring-gray-900/10"
          required
        />
        <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
          Zgadzam się na kontakt w sprawie zapytania. *
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white font-medium rounded-xl px-4 py-2.5 text-sm transition-colors"
      >
        {isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie"}
      </button>

      {/* Helper text */}
      <p className="text-xs text-gray-500 text-center">
        Zwykle odpowiadamy w 24 h. Typowy zakres 500–1000 zł. Po akceptacji wyceny – zaliczka 50% przez Stripe (Payment Link).
      </p>
    </form>
  );
}
