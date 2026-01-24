
"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Contact = () => {
  return (
   <section>

        <Navbar/>
       <header className="bg-[#0A1532] pt-[112px] pb-16">
           <div className="container mx-auto px-4 text-center">
               <h1 className="text-4xl md:text-5xl font-heading text-primary-foreground mb-4 text-balance">
                   Get in Touch
               </h1>
               <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto font-subhead">
                   Have questions about our data or enterprise solutions? Our team is ready to help.
               </p>
           </div>
       </header>

       <section className="flex-1 bg-secondary py-16">
           <div className="container mx-auto px-4">
               <div className="rounded-lg bg-card text-card-foreground max-w-xl mx-auto shadow-lg">
                   <div className="p-6">
                       <form className="space-y-6">

                           {/* Full Name */}
                           <div className="space-y-2">
                               <label
                                   htmlFor="fullName"
                                   className="text-sm font-medium text-foreground"
                               >
                                   Full Name
                               </label>
                               <input
                                   id="fullName"
                                   name="fullName"
                                   placeholder="John Doe"
                                   className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                               />
                           </div>

                           {/* Email */}
                           <div className="space-y-2">
                               <label
                                   htmlFor="email"
                                   className="text-sm font-medium text-foreground"
                               >
                                   Email Address
                               </label>
                               <input
                                   type="email"
                                   id="email"
                                   name="email"
                                   placeholder="john@company.com"
                                   className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                               />
                           </div>

                           {/* Inquiry Type */}
                           <div className="space-y-2">
                               <label
                                   htmlFor="inquiry"
                                   className="text-sm font-medium text-foreground"
                               >
                                   What is this regarding?
                               </label>
                               <select
                                   id="inquiry"
                                   name="inquiry"
                                   className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                               >
                                   <option value="">Select inquiry type</option>
                                   <option value="sales">Sales / Enterprise Plan</option>
                                   <option value="partnership">Data Partnership</option>
                                   <option value="general">General Inquiry</option>
                                   <option value="media">Media / Press</option>
                               </select>
                           </div>

                           {/* Message */}
                           <div className="space-y-2">
                               <label
                                   htmlFor="message"
                                   className="text-sm font-medium text-foreground"
                               >
                                   Message
                               </label>
                               <textarea
                                   id="message"
                                   name="message"
                                   placeholder="Tell us how we can help..."
                                   className="min-h-[140px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                               />
                           </div>

                           {/* Human Check */}
                           <div className="bg-muted/50 border border-border rounded-lg p-4 flex items-center gap-3">
                               <input
                                   type="checkbox"
                                   id="human"
                                   className="h-4 w-4 rounded border border-muted-foreground"
                               />
                               <label
                                   htmlFor="human"
                                   className="text-sm text-foreground cursor-pointer"
                               >
                                   I am human
                               </label>
                           </div>

                           {/* Submit */}
                           <button
                               type="submit"
                               className="w-full h-12 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
                           >
                               Send Message
                           </button>

                       </form>
                   </div>
               </div>
           </div>
       </section>


       <Footer/>
   </section>
  );
};

export default Contact;
