import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        
        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          Płatność zakończona pomyślnie!
        </h1>
        
        <p className="text-slate-600 mb-6">
          Dziękuję za zaufanie! Otrzymasz wkrótce e-mail z formularzem projektu i dalszymi instrukcjami.
        </p>
        
        <div className="space-y-3">
          <Link
            href="/"
            className="w-full bg-black text-white py-3 px-6 rounded-xl font-medium hover:opacity-90 transition-opacity inline-block"
          >
            Wróć do strony głównej
          </Link>
          
          <p className="text-sm text-slate-500">
            Masz pytania? Napisz na{" "}
            <a href="mailto:hello@online-lab.com" className="text-black hover:underline">
              hello@online-lab.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
