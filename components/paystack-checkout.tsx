'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { CheckCircle2, Shield, CreditCard, Landmark, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

declare global {
  interface Window {
    PaystackPop: any;
  }
}

interface PaystackCheckoutProps {
  productName: string;
  price: string;
  paystackAmount: number; // in kobo
  whatsappText: string;
}

export function PaystackCheckout({ productName, price, paystackAmount, whatsappText }: PaystackCheckoutProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateName, setStateName] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paystackLoaded, setPaystackLoaded] = useState(false);

  // Dynamically load Paystack inline script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    script.onload = () => setPaystackLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!firstName.trim()) newErrors.firstName = 'Required';
    if (!lastName.trim()) newErrors.lastName = 'Required';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email required';
    if (!phone.trim()) newErrors.phone = 'Required';
    if (!address.trim()) newErrors.address = 'Required';
    if (!city.trim()) newErrors.city = 'Required';
    if (!stateName.trim()) newErrors.stateName = 'Required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePaystackPayment = () => {
    if (!validateForm()) return;
    
    setIsProcessing(true);

    const paystackKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY || 'pk_test_41adad973d09a473cf2b08a68bc1d6199de241ad'; // default test key if undefined

    try {
      const handler = window.PaystackPop.setup({
        key: paystackKey,
        email: email,
        amount: paystackAmount,
        currency: 'NGN',
        ref: 'phyto_' + Math.floor(Math.random() * 1000000000 + 1),
        metadata: {
          custom_fields: [
            {
              display_name: "Product",
              variable_name: "product",
              value: productName
            },
            {
              display_name: "Phone Number",
              variable_name: "phone_number",
              value: phone
            },
            {
              display_name: "Shipping Address",
              variable_name: "shipping_address",
              value: `${address}, ${city}, ${stateName}`
            }
          ]
        },
        callback: function (response: any) {
          setIsProcessing(false);
          setIsSuccess(true);
        },
        onClose: function () {
          setIsProcessing(false);
        }
      });
      handler.openIframe();
    } catch (err) {
      console.error('Paystack setup error', err);
      setIsProcessing(false);
      alert('Could not initialize Paystack. Please try again or use checkout via WhatsApp.');
    }
  };

  const handleWhatsAppCheckout = () => {
    const formattedMsg = `Hello PhytoGenix, I would like to order ${productName} (${price}).\n\nName: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}, ${city}, ${stateName}\n\nPayment Method: Pay on Delivery / Direct Transfer`;
    const encoded = encodeURIComponent(formattedMsg);
    window.open(`https://wa.me/2347016897605?text=${encoded}`, '_blank');
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
      {/* Absolute Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

      <h3 className="text-2xl font-bold mb-2">Shipping & Order Form</h3>
      <p className="text-white/60 text-sm mb-8">Choose Paystack for secure instant checkout or checkout instantly on WhatsApp.</p>
      
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-white/50">First Name</label>
            <Input 
              placeholder="John" 
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <p className="text-red-400 text-xs">{errors.firstName}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-white/50">Last Name</label>
            <Input 
              placeholder="Doe" 
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <p className="text-red-400 text-xs">{errors.lastName}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-white/50">Email Address</label>
            <Input 
              type="email"
              placeholder="john@example.com" 
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-white/50">Phone Number (WhatsApp preferred)</label>
            <Input 
              placeholder="080 1234 5678" 
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-white/50">Delivery Address</label>
          <Input 
            placeholder="No. 12 Wellness Street, Victoria Island" 
            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <p className="text-red-400 text-xs">{errors.address}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-white/50">City</label>
            <Input 
              placeholder="Ikeja" 
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {errors.city && <p className="text-red-400 text-xs">{errors.city}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-white/50">State</label>
            <Input 
              placeholder="Lagos State" 
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-12"
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
            />
            {errors.stateName && <p className="text-red-400 text-xs">{errors.stateName}</p>}
          </div>
        </div>

        <div className="h-[1px] bg-slate-800 my-6" />

        {/* Action Buttons Stack */}
        <div className="flex flex-col gap-4">
          <Button 
            onClick={handlePaystackPayment}
            disabled={isProcessing}
            className="w-full h-14 text-base font-bold rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            {isProcessing ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Contacting Secure Gateway...
              </span>
            ) : (
              <>
                <CreditCard className="w-5 h-5" />
                Pay Instantly via Paystack ({price})
              </>
            )}
          </Button>

          <Button 
            onClick={handleWhatsAppCheckout}
            type="button"
            className="w-full h-14 text-base font-bold rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 transition-all shadow-lg shadow-yellow-400/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-5 h-5" />
            Checkout via WhatsApp
          </Button>
        </div>

        {/* Security badges */}
        <div className="flex items-center justify-center gap-6 mt-6 text-white/40 text-xs">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Paystack Secured</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Landmark className="w-4 h-4 text-emerald-400" />
            <span>Bank Grade Security</span>
          </div>
        </div>
      </div>

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-slate-950/95 flex flex-col items-center justify-center p-6 text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="max-w-xs space-y-6"
            >
              <div className="w-20 h-20 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold">Order Paid Successfully!</h4>
              <p className="text-white/60 text-sm">
                Your payment for {productName} was processed securely. Our team will contact you on WhatsApp or Phone shortly to confirm shipping details.
              </p>
              <Button 
                variant="outline" 
                className="w-full rounded-xl border-white/20 text-white hover:bg-white/10 cursor-pointer" 
                onClick={() => setIsSuccess(false)}
              >
                Close Window
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
