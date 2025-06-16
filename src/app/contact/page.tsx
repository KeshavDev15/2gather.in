import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import TicketForm from "@/components/ticket-form";

export const metadata: Metadata = {
  title: "Contact Us - 2gather",
  description: "Get in touch with the 2gather team. Submit a support ticket or reach out through our contact channels.",
};

export default function ContactUs() {
  return (
    <div className="min-h-screen legal-page-bg">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 legal-title">
              Contact Us
            </h1>
            <p className="text-xl legal-text max-w-3xl mx-auto">
              Have a question, suggestion, or need help? We&apos;re here to assist you. 
              Reach out to us through any of the channels below or submit a support ticket.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="legal-card p-6">
                <h2 className="text-2xl font-semibold mb-6 text-foreground flex items-center">
                  <MessageCircle className="mr-2 h-6 w-6 text-primary" />
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <p className="legal-text">support@2gather.in</p>
                      <p className="text-sm text-muted-foreground">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium text-foreground">Phone</h3>
                      <p className="legal-text">+91 95644 84426</p>
                      <p className="text-sm text-muted-foreground">
                        Mon-Fri, 9AM-6PM IST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium text-foreground">Address</h3>
                      <p className="legal-text">
                        Prabhat Residency 3rd floor<br />
                        Mangal Pandey Road<br />
                        Siliguri, West Bengal 734001<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium text-foreground">Business Hours</h3>
                      <p className="legal-text">
                        Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                        Saturday: 10:00 AM - 4:00 PM IST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="legal-card p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Quick Help
                </h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium text-foreground">
                      Common Questions
                    </p>
                    <p className="legal-text">
                      Check our FAQ section for quick answers to frequently asked questions.
                    </p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">
                      Technical Issues
                    </p>
                    <p className="legal-text">
                      For technical problems, please include your browser version and steps to reproduce the issue.
                    </p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">
                      Feature Requests
                    </p>
                    <p className="legal-text">
                      We love hearing your ideas! Submit feature requests through the form.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Ticket Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2 text-foreground">
                  Submit a Support Ticket
                </h2>
                <p className="legal-text">
                  Fill out the form below and we&apos;ll get back to you as soon as possible. 
                  Please provide as much detail as possible to help us assist you better.
                </p>
              </div>
              
              <TicketForm />
            </div>
          </div>

          {/* Additional Information */}
          <div className="text-center legal-card p-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Other Ways to Connect
            </h3>
            <p className="legal-text mb-6">
              Join our community and stay updated with the latest news and features.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="legal-link font-medium"
              >
                Follow us on Twitter
              </a>
              <a
                href="#"
                className="legal-link font-medium"
              >
                Join our Discord
              </a>
              <a
                href="#"
                className="legal-link font-medium"
              >
                Community Forum
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
