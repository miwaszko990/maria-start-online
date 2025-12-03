import Link from "next/link";
import { XCircle } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <XCircle className="w-16 h-16 text-red-500" />
        </div>
        
        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          Płatność została anulowana
        </h1>
        
        <p className="text-slate-600 mb-6">
          Nie martw się! Możesz spróbować ponownie w każdej chwili lub skontaktować się z nami bezpośrednio.
        </p>
        
        <div className="space-y-3">
          <Link
            href="/"
            className="w-full bg-black text-white py-3 px-6 rounded-xl font-medium hover:opacity-90 transition-opacity inline-block"
          >
            Wróć do strony głównej
          </Link>
          
          <Link
            href="/#contact"
            className="w-full border border-slate-200 text-slate-700 py-3 px-6 rounded-xl font-medium hover:bg-slate-50 transition-colors inline-block"
          >
            Skontaktuj się z nami
          </Link>
          
          <p className="text-sm text-slate-500">
            Masz pytania? Napisz na{" "}
            <a href="mailto:hello@online-lab.pl" className="text-black hover:underline">
              hello@online-lab.pl
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
