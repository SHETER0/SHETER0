import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star, Send, CheckCircle2, X } from "lucide-react";
import { toast } from "sonner";

// 1. Define Translation Dictionary
const translations = {
  en: {
    thanks: "Thanks",
    closing: "Closing automatically...",
    rateTitle: "Rate your experience",
    loggedAs: "Logged as",
    nextStep: "Next Step",
    anythingElse: "Anything else?",
    placeholder: "Your thoughts...",
    back: "Back",
    sending: "Saving...",
    send: "Send Feedback",
    success: "Feedback sent to Google Sheets!",
    failed: "Submission failed.",
    anonymous: "Anonymous",
    notProvided: "Not Provided"
  },
  ar: {
    thanks: "شكراً لك",
    closing: "سيتم الإغلاق تلقائياً...",
    rateTitle: "قيم تجربتك",
    loggedAs: "مسجل كـ",
    nextStep: "الخطوة التالية",
    anythingElse: "هل هناك شيء آخر؟",
    placeholder: "أخبرنا برأيك...",
    back: "رجوع",
    sending: "جاري الحفظ...",
    send: "إرسال الملاحظات",
    success: "تم إرسال الملاحظات بنجاح!",
    failed: "فشل الإرسال.",
    anonymous: "مجهول",
    notProvided: "غير متوفر"
  }
};

interface FeedbackFormProps {
  userName?: string;
  userEmail?: string;
  userPhone?: string;
  sheetUrl: string;
  lang?: 'en' | 'ar'; // 2. Add language prop
}

export const FeedbackForm = ({ 
  userName, 
  userEmail, 
  userPhone, 
  sheetUrl, 
  lang = 'en' // Default to English
}: FeedbackFormProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Get current translation strings
  const t = translations[lang];
  // Determine text direction
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

 
// 1. Check if user has submitted before on component load
  useEffect(() => {
    const hasSubmitted = localStorage.getItem('has_submitted_feedback');
    if(hasSubmitted == null || hasSubmitted == undefined) {
        localStorage.setItem('has_submitted_feedback', 'false');
    }
    if (!hasSubmitted) {
      setIsVisible(true);
    }
  }, []);
 if (!isVisible) return null;






  const handleSubmit = async () => {
    setIsSubmitting(true);
    const data = {
      first_name: userName || t.anonymous,
      email: userEmail || t.notProvided,
      phone_number: userPhone || t.notProvided,
      rating,
      feedback,
      language: lang // Pass language to Google Sheets too
    };

    try {
      await fetch(sheetUrl, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(data),
      });
      localStorage.setItem('has_submitted_feedback', 'true');
      setIsFinished(true);
      toast.success(t.success);
      setTimeout(() => setIsVisible(false), 3000);
      
    } catch (error) {
      toast.error(t.failed);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // 3. Apply 'dir' for RTL support
    <div dir={dir} className={`relative w-full max-w-md mx-auto transition-all animate-in fade-in ${lang === 'ar' ? 'font-sans-arabic' : ''}`}>
      
      {/* Close Button (Positions correctly based on dir) */}
      <Button 
        variant="ghost" 
        size="icon" 
        className={`absolute -top-2 ${dir === 'rtl' ? '-left-2' : '-right-2'} rounded-full bg-background border shadow-sm z-10`}
        onClick={() => setIsVisible(false)}
      >
        <X className="h-4 w-4" />
      </Button>

      <Card className="overflow-hidden border-2 shadow-xl">
        <CardContent className="p-6">
          {isFinished ? (
            <div className="py-6 text-center space-y-4 animate-in zoom-in">
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
              <h2 className="text-xl font-bold">{t.thanks}, {userName || t.anonymous}!</h2>
              <p className="text-sm text-muted-foreground">{t.closing}</p>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div className="space-y-6 animate-in slide-in-from-right">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">{t.rateTitle}</h2>
                  </div>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        onClick={() => setRating(num)}
                        className={`p-1 transition-all hover:scale-125 ${rating >= num ? 'text-yellow-400' : 'text-gray-200'}`}
                      >
                        <Star className="w-8 h-8 fill-current" />
                      </button>
                    ))}
                  </div>
                  <Button 
                    disabled={rating === 0} 
                    className="w-full" 
                    onClick={() => setStep(2)}
                  >
                    {t.nextStep}
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in slide-in-from-right">
                  <h2 className="text-xl font-semibold">{t.anythingElse}</h2>
                  <Textarea 
                    placeholder={t.placeholder}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="min-h-[100px] resize-none"
                  />
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setStep(1)}>{t.back}</Button>
                    <Button 
                      className="flex-1" 
                      onClick={handleSubmit} 
                      disabled={isSubmitting || !feedback}
                    >
                      {isSubmitting ? t.sending : t.send}
                      <Send className={`${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'} w-4 h-4`} />
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};