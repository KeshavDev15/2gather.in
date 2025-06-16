"use client";

import { useState } from "react";

interface TicketFormData {
  name: string;
  email: string;
  subject: string;
  priority: "low" | "medium" | "high";
  category: "general" | "technical" | "billing" | "feature-request";
  description: string;
}

export default function TicketForm() {
  const [formData, setFormData] = useState<TicketFormData>({
    name: "",
    email: "",
    subject: "",
    priority: "medium",
    category: "general",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Here you would typically send the data to your backend
    console.log("Ticket submitted:", formData);

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after successful submission
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        priority: "medium",
        category: "general",
        description: "",
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="contact-form-bg p-8 text-center rounded-lg">
        <div className="text-primary text-6xl mb-4">✓</div>
        <h3 className="text-2xl font-semibold mb-2 text-foreground">
          Ticket Submitted Successfully!
        </h3>
        <p className="legal-text">
          We&apos;ve received your support ticket and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="contact-form-bg p-8 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 form-input rounded-lg"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 form-input rounded-lg"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-3 py-2 form-input rounded-lg"
            placeholder="Brief description of your issue"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 form-input rounded-lg"
            >
              <option value="general">General Inquiry</option>
              <option value="technical">Technical Support</option>
              <option value="billing">Billing & Account</option>
              <option value="feature-request">Feature Request</option>
            </select>
          </div>

          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-foreground mb-2">
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
              className="w-full px-3 py-2 form-input rounded-lg"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={6}
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 form-input rounded-lg resize-vertical"
            placeholder="Please provide detailed information about your issue or request..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary font-medium py-2 px-4 rounded-lg"
        >
          {isSubmitting ? "Submitting..." : "Submit Ticket"}
        </button>
      </form>
    </div>
  );
}
